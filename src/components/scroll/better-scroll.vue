<template>
  <div class="vue-scroll">
    <slot name="top"></slot>
    <scroll-list ref="scroll" :data="data"
               :options="scrollOptions" @pulling-down="onPullingDown"
                 @before-scroll-start="onBeforeScrollStart"
                 @pulling-up="onPullingUp" @scroll="onScroll"
                 @scroll-start="onScrollStart" @scroll-end="onScrollEnd"
                 @touch-end="onTouchEnd" @flick="onFlick" @refresh="onRefresh"
                 @destroy="onDestroy">
      <template slot="pulldown" slot-scope="props">
        <slot name="pulldown" :pullDownRefresh="props.pullDownRefresh"
              :pullDownStyle="props.pullDownStyle"
              :beforePullDown="props.beforePullDown"
              :isPullingDown="props.isPullingDown"
              :bubbleY="props.bubbleY"
              :refreshTxt="props.refreshTxt">
          <div class="pulldown-wrapper" :style="props.pullDownStyle" v-if="props.pullDownRefresh">
            <div class="before-trigger" v-if="props.beforePullDown">
              <bubble :y="props.bubbleY"></bubble>
            </div>
            <div class="after-trigger" v-else>
              <div class="loading" v-if="props.isPullingDown">
                <loading></loading>
              </div>
              <div v-else>
                <span>{{props.refreshTxt}}</span>
              </div>
            </div>
          </div>
        </slot>
      </template>
      <slot></slot>
    </scroll-list>
    <slot name="bottom"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import Bubble from '@/components/bubble'
  import Loading from '@/components/loading'
  import ScrollList from './scroll-list'
  import {
    EVENT_PULLING_DOWN, EVENT_PULLING_UP,
    DIRECTION_V, EVENT_BEFORE_SCROLL_START, EVENT_SCROLL,
    EVENT_SCROLL_START, EVENT_SCROLL_END, EVENT_TOUCH_END,
    EVENT_FLICK, EVENT_REFRESH, EVENT_DESTROY
  } from './config'
  const COMPONENT_NAME = 'cc-scroll'
  export default {
    name: COMPONENT_NAME,
    props: {
      data: {
        type: Array,
        default() {
          return []
        }
      },
      scrollbar: {
        type: Boolean,
        default: false
      },
      scrollbarFade: {
        type: Boolean,
        default: true
      },
      pullDownRefresh: {
        type: Boolean,
        default: true
      },
      pullDownRefreshThreshold: {
        type: Number,
        default: 90
      },
      pullDownRefreshStop: {
        type: Number,
        default: 40
      },
      pullDownRefreshTxt: {
        type: String,
        default: '刷新成功'
      },
      pullDownRefreshFailTxt: {
        type: String,
        default: '刷新失败'
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      },
      pullUpLoadThreshold: {
        type: Number,
        default: 0
      },
      pullUpLoadMoreTxt: {
        type: String,
        default: '加载更多'
      },
      pullUpLoadNoMoreTxt: {
        type: String,
        default: '没有更多了'
      },
      direction: {
        type: String,
        default: DIRECTION_V
      },
      click: {
        type: Boolean,
        default: true
      },
      probeType: {
        type: Number,
        default: 0
      },
      tap: {
        type: Boolean,
        default: false
      },
      refreshDelay: {
        type: Number,
        default: 20
      },
      initMinHeight: {
        type: Boolean,
        default: true
      },
      listenScroll: {
        type: Boolean,
        default: false
      },
      listenBeforeScroll: {
        type: Boolean,
        default: false
      },
      listenScrollStart: {
        type: Boolean,
        default: false
      },
      listenScrollEnd: {
        type: Boolean,
        default: false
      },
      listenTouchEnd: {
        type: Boolean,
        default: false
      },
      listenFlick: {
        type: Boolean,
        default: false
      },
      listenRefresh: {
        type: Boolean,
        default: false
      },
      listenDestroy: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        beforePullDown: true,
        isPullingDown: false,
        isErrorPullingDown: false,
        bubbleY: 0,
        pullDownStyle: ''
      }
    },
    computed: {
      scrollOptions() {
        return {
          pullDownRefresh: this.pullDownRefreshObj,
          pullUpLoad: this.pullUpLoadObj,
          scrollbar: this.scrollbarObj,
          direction: this.direction,
          click: this.click,
          probeType: this.probeType,
          tap: this.tap,
          refreshDelay: this.refreshDelay,
          initMinHeight: this.initMinHeight,
          listenScroll: this.listenScroll,
          listenBeforeScroll: this.listenBeforeScroll,
          listenScrollStart: this.listenScrollStart,
          listenScrollEnd: this.listenScrollEnd,
          listenTouchEnd: this.listenTouchEnd,
          listenFlick: this.listenFlick,
          listenRefresh: this.listenRefresh,
          listenDestroy: this.listenDestroy
        }
      },
      scrollbarObj() {
        return this.scrollbar ? {fade: this.scrollbarFade} : false
      },
      pullDownRefreshObj() {
        return this.pullDownRefresh ? {
          threshold: parseInt(this.pullDownRefreshThreshold),
          stop: parseInt(this.pullDownRefreshStop),
          txt: this.pullDownRefreshTxt,
          errorTxt: this.pullDownRefreshFailTxt
        } : false
      },
      pullUpLoadObj() {
        return this.pullUpLoad ? {
          threshold: parseInt(this.pullUpLoadThreshold),
          txt: {
            more: this.pullUpLoadMoreTxt,
            noMore: this.pullUpLoadNoMoreTxt
          }
        } : false
      }
    },
    methods: {
      onScroll(pos) {
        this.$emit(EVENT_SCROLL, pos)
      },
      onBeforeScrollStart() {
        this.$emit(EVENT_BEFORE_SCROLL_START)
      },
      onScrollStart(pos) {
        console.log(233);
        this.$emit(EVENT_SCROLL_START, pos)
      },
      onScrollEnd(pos) {
        this.$emit(EVENT_SCROLL_END, pos)
      },
      onTouchEnd(pos) {
        this.$emit(EVENT_TOUCH_END, pos)
      },
      onFlick() {
        this.$emit(EVENT_FLICK)
      },
      onRefresh() {
        this.$emit(EVENT_REFRESH)
      },
      onDestroy() {
        this.$emit(EVENT_DESTROY)
      },
      onPullingDown() {
        this.$emit(EVENT_PULLING_DOWN)
      },
      onPullingUp() {
        this.$emit(EVENT_PULLING_UP)
      },
      disable() {
        this.$refs.scroll && this.$refs.scroll.disable()
      },
      enable() {
        this.$refs.scroll && this.$refs.scroll.enable()
      },
      refresh() {
        this.$refs.scroll && this.$refs.scroll.refresh()
      },
      destroy() {
        this.$refs.scroll && this.$refs.scroll.destroy()
      },
      scrollTo() {
        this.$refs.scroll && this.$refs.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        this.$refs.scroll && this.$refs.scroll.scrollToElement.apply(this.scroll, arguments)
      },
      rebuild() {
        this.$refs.scroll && this.$refs.scroll.rebuild()
      },
      forceUpdate() {
        this.$refs.scroll && this.$refs.scroll.forceUpdate()
      },
      errorUpdate() {
        this.$refs.scroll && this.$refs.scroll.errorUpdate()
      }
    },
    components: {
      Bubble,
      Loading,
      ScrollList
    }
  }
</script>

<style lang="less">
  .vue-scroll {
    height: 100%;
    .pulldown-wrapper {
      position: absolute;
      width: 100%;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all;
      .after-trigger {
        margin-top: 5px;
      }
    }
  }
</style>