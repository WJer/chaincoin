<template>
  <div class="scroll-list-wrapper" ref="wrapper">
    <div class="scroll-content">
        <div class="scroll-wrapper" ref="scrollWrapper">
          <slot></slot>
        </div>
        <slot name="pullup" :pullUpLoad="pullUpLoad" :isPullUpLoad="isPullUpLoad">
          <div class="pullup-wrapper" v-if="pullUpLoad">
            <div class="before-trigger" v-if="!isPullUpLoad">
              <span>{{pullUpTxt}}</span>
            </div>
            <div class="after-trigger" v-else>
              <loading></loading>
            </div>
          </div>
        </slot>
    </div>
    <slot name="pulldown"
          :pullDownRefresh="pullDownRefresh"
          :pullDownStyle="pullDownStyle"
          :beforePullDown="beforePullDown"
          :isPullingDown="isPullingDown"
          :bubbleY="bubbleY"
          :refreshTxt="refreshTxt">
    </slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import Loading from '@/components/loading'
  import BScroll from 'better-scroll'
  import {EVENT_PULLING_DOWN, EVENT_PULLING_UP, DIRECTION_H,
    DIRECTION_V, EVENT_BEFORE_SCROLL_START, EVENT_SCROLL,
  EVENT_SCROLL_START, EVENT_SCROLL_END, EVENT_TOUCH_END,
    EVENT_FLICK, EVENT_REFRESH, EVENT_DESTROY} from './config'

  const COMPONENT_NAME = 'scroll-list'

  const DEFAULT_LOAD_TXT_MORE = '加载更多'
  const DEFAULT_LOAD_TXT_NO_MORE = '没有更多了'
  const DEFAULT_REFRESH_TXT = '刷新成功'
  const DEFAULT_REFRESH_FAIL_TXT = '刷新失败'

  const DEFAULT_OPTIONS = {
    observeDOM: true,
    click: true,
    probeType: 0,
    scrollbar: false,
    pullDownRefresh: false,
    pullUpLoad: false
  }

  export default {
    name: COMPONENT_NAME,
    props: {
      data: {
        type: Array,
        default() {
          return []
        }
      },
      options: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        beforePullDown: true,
        isPullingDown: false,
        isErrorPullingDown: false,
        isRebounding: false,
        isPullUpLoad: false,
        pullUpDirty: true, // 加载完后还有数据则为true，没有数据了则为false
        bubbleY: 0,
        pullDownStyle: ''
      }
    },
    computed: {
      pullDownRefresh() {
        return this.options.pullDownRefresh
      },
      pullUpLoad() {
        return this.options.pullUpLoad
      },
      pullUpTxt() {
        const pullUpLoad = this.pullUpLoad
        const txt = pullUpLoad && pullUpLoad.txt
        const moreTxt = (txt && txt.more) || DEFAULT_LOAD_TXT_MORE
        const noMoreTxt = (txt && txt.noMore) || DEFAULT_LOAD_TXT_NO_MORE
        return this.pullUpDirty ? moreTxt : noMoreTxt
      },
      refreshTxt() {
        const pullDownRefresh = this.pullDownRefresh
        if (!this.isErrorPullingDown) {
          return (pullDownRefresh && pullDownRefresh.txt) || DEFAULT_REFRESH_TXT
        }
        return (pullDownRefresh && pullDownRefresh.errorTxt) || DEFAULT_REFRESH_FAIL_TXT
      }
    },
    created() {
      this.pullDownInitTop = -50
    },
    mounted() {
      setTimeout(this.initScroll, this.options.refreshDelay)
    },
    methods: {
      initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        this.setScrollViewMinHeight()
        let options = Object.assign({}, DEFAULT_OPTIONS, {
          scrollY: this.options.direction === DIRECTION_V,
          scrollX: this.options.direction === DIRECTION_H
        }, this.options)
        this.scroll = new BScroll(this.$refs.wrapper, options)
        if (this.options.listenBeforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit(EVENT_BEFORE_SCROLL_START)
          })
        }
        if (this.options.listenScrollStart) {
          this.scroll.on('scrollStart', (pos) => {
            this.$emit(EVENT_SCROLL_START, pos)
          })
        }
        if (this.options.listenScroll && !this.pullDownRefresh && this.options.probeType !== 0) {
          this.scroll.on('scroll', (pos) => {
            this.$emit(EVENT_SCROLL, pos)
          })
        }
        if (this.options.listenScrollEnd) {
          this.scroll.on('scrollEnd', (pos) => {
            this.$emit(EVENT_SCROLL_END, pos)
          })
        }
        if (this.options.listenTouchEnd) {
          this.scroll.on('touchEnd', (pos) => {
            this.$emit(EVENT_TOUCH_END, pos)
          })
        }
        if (this.options.listenFlick) {
          this.scroll.on('flick', () => {
            this.$emit(EVENT_FLICK)
          })
        }
        if (this.options.listenRefresh) {
          this.scroll.on('refresh', () => {
            this.$emit(EVENT_REFRESH)
          })
        }
        if (this.options.listenDestroy) {
          this.scroll.on('refresh', () => {
            this.$emit(EVENT_DESTROY)
          })
        }
        if (this.pullDownRefresh && this.options.direction !== DIRECTION_H) {
          this._initPullDownRefresh()
        }
        if (this.pullUpLoad && this.options.direction !== DIRECTION_H) {
          this._initPullUpLoad()
        }
      },
      forceUpdate(dirty) {
        if (this.pullDownRefresh && this.isPullingDown) {
          this.isPullingDown = false
          this._reboundPullDown().then(() => {
            this._afterPullDown()
          })
        } else if (this.pullUpLoad && this.isPullUpLoad) {
          this.isPullUpLoad = false
          this.scroll.finishPullUp()
          this.pullUpDirty = dirty
          this.refresh()
        } else {
          this.refresh()
        }
      },
      errorUpdate() {
        if (this.pullDownRefresh && this.isPullingDown) {
          this.isPullingDown = false
          this.isErrorPullingDown = true
          this._reboundPullDown().then(() => {
            this._afterPullDown()
          })
        } else {
          this.refresh()
        }
      },
      setScrollViewMinHeight() {
        if (this.$refs.scrollWrapper && ((this.pullDownRefresh || this.pullUpLoad) || this.options.initMinHeight)) {
          let wrapperHeight = this.util.getRect(this.$refs.wrapper).height
          let contentHeight = this.util.getRect(this.$refs.scrollWrapper).height - 1
          if (contentHeight <= wrapperHeight) {
            this.$refs.scrollWrapper.style.minHeight = (wrapperHeight + 1) + 'px'
          } else {
            this.$refs.scrollWrapper.style.minHeight = 'unset'
          }
        }
      },
      getScrollViewHeight() {
        return this.$refs.scrollWrapper.offsetHeight
      },
      _initPullDownRefresh() {
        this.scroll.on('scroll', (pos) => {
          if (this.options.listenScroll && this.options.probeType !== 0) {
            this.$emit(EVENT_SCROLL, pos)
          }
          if (this.beforePullDown) {
            this.bubbleY = Math.max(0, pos.y + this.pullDownInitTop)
            this.pullDownStyle = `top:${Math.min(pos.y + this.pullDownInitTop, 10)}px`
          } else {
            this.bubbleY = 0
          }
          if (this.isRebounding) {
            this.pullDownStyle = `top:${Math.min(pos.y - 30, 10)}px`
          }
        })
        this.scroll.on('pullingDown', () => {
          this.$emit(EVENT_PULLING_DOWN)
          this.beforePullDown = false
          this.isPullingDown = true
        })
      },
      _reboundPullDown() {
        const {stopTime = 600} = this.pullDownRefresh
        return new Promise((resolve) => {
          setTimeout(() => {
            this.isRebounding = true
            this.scroll.finishPullDown()
            this.isPullingDown = false
            resolve()
          }, stopTime)
        })
      },
      _afterPullDown() {
        setTimeout(() => {
          this.pullDownStyle = `top:${this.pullDownInitTop}px`
          this.beforePullDown = true
          this.isRebounding = false
          this.isErrorPullingDown = false
          this.refresh()
        }, this.scroll.options.bounceTime)
      },
      _initPullUpLoad() {
        this.scroll.on('pullingUp', () => {
          this.$emit(EVENT_PULLING_UP)
          this.isPullUpLoad = true
        })
      },
      disable() {
        this.scroll && this.scroll.disable()
      },
      enable() {
        this.scroll && this.scroll.enable()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      destroy() {
        this.scroll.destroy()
      },
      scrollTo() {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      },
      rebuild() {
        this.destroy()
        this.initScroll()
      }
    },
    watch: {
      data() {
        setTimeout(() => {
          this.forceUpdate(true)
        }, this.options.refreshDelay)
      }
    },
    components: {
      Loading
    }
  }
</script>

<style lang="less">
  .scroll-list-wrapper{
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    // background-color: #fff;
    .scroll-content {
      position: relative;
      z-index: 1;
      // background-color: #fff;
    }
    .pullup-wrapper{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px 0;
    }
  }
</style>
