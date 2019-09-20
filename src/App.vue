<template>
  <div id="app">
    <roll :bg="bg" :btn-bg="btnBg" :can-start.sync="start" :lottery-id="lotteryId" :roll-options="optionsRoll" @success="success" @clickLottery="clickLottery" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      start: false,
      lotteryId: 1,
      bg: "//cbshowhot.cdn.changbaimg.com/-/a166091e88fe4fcc/awards.png",
      btnBg: "//cbshowhot.cdn.changbaimg.com/-/2cfcc345f72db72d/draw-btn.png",
      optionsRoll: {
        deg: 720,
        partNum: 8,
        duration: 2700,
        startDeg: 0,
        isBtn: false
      }
    }
  },
  methods: {
    clickLottery() {
      console.log('点击了转盘抽奖按钮，开始抽奖...');
      this.lotteryId = 5;
      console.log('接口调用完毕，拿到lotteryId...');
      this.start = true;
      console.log('设置lotteryid完毕，开始动画效果...');
    },
    success() {
      console.log(1111)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
