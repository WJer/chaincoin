<template>
  <div class="loading">
    <span class="loading-spinners" :style="style">
      <i class="loading-spinner" v-for="(item,index) in balde" :key="index"></i>
    </span>
  </div>
</template>
<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'loading'
  export default {
    name: COMPONENT_NAME,
    data() {
      return {
        balde: 12
      }
    },
    props: {
      size: {
        type: Number,
        default: 24
      }
    },
    computed: {
      style() {
        const value = `${this.size}px`
        return {
          width: value,
          height: value
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  .loading{
    font-size: 0;
  }
  .loading-spinners {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
  }
  .loading-spinner {
    position: absolute;
    left: 44.5%;
    top: 37%;
    width: 10%;
    height: 25%;
    border-radius: 50%/20%;
    opacity: .25;
    background-color: currentColor;
    animation: spinner-fade 1s linear infinite;
  }
  .loading-spinner:nth-child(12) {
  animation-delay: 0.9166666666666666 s;
  transform: rotate(180deg) translateY(-150%);
}
.loading-spinner:nth-child(11) {
  animation-delay: 0.8333333333333334 s;
  transform: rotate(150deg) translateY(-150%);
}
.loading-spinner:nth-child(10) {
  animation-delay: 0.75 s;
  transform: rotate(120deg) translateY(-150%);
}
.loading-spinner:nth-child(9) {
  animation-delay: 0.6666666666666666 s;
  transform: rotate(90deg) translateY(-150%);
}
.loading-spinner:nth-child(8) {
  animation-delay: 0.5833333333333334 s;
  transform: rotate(60deg) translateY(-150%);
}
.loading-spinner:nth-child(7) {
  animation-delay: 0.5 s;
  transform: rotate(30deg) translateY(-150%);
}
.loading-spinner:nth-child(6) {
  animation-delay: 0.4166666666666667 s;
  transform: rotate(0deg) translateY(-150%);
}
.loading-spinner:nth-child(5) {
  animation-delay: 0.3333333333333333 s;
  transform: rotate(-30deg) translateY(-150%);
}
.loading-spinner:nth-child(4) {
  animation-delay: 0.25 s;
  transform: rotate(-60deg) translateY(-150%);
}
.loading-spinner:nth-child(3) {
  animation-delay: 0.16666666666666666 s;
  transform: rotate(-90deg) translateY(-150%);
}
.loading-spinner:nth-child(2) {
  animation-delay: 0.08333333333333333 s;
  transform: rotate(-120deg) translateY(-150%);
}
.loading-spinner:nth-child(1) {
  animation-delay: 0 s;
  transform: rotate(-150deg) translateY(-150%);
}
  @keyframes spinner-fade {
    0% {
        opacity: .85;
    }
    50% {
        opacity: .25;
    }
    100% {
        opacity: .25;
    }
  }
</style>