vue-cb-turntable
======================

Build Setup
----------------------

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8081
npm run dev

# build for production with minification
npm run build
```

How To Use
----------------------
## 入口文件或相应vue文件引入
```bash
import Vue from 'vue'
import Roll from 'vue-cb-roll'

Vue.use(Roll)
````
## template写法

```script
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
        deg: 720, // 转动的角度，决定能转几圈
        partNum: 8, // 抽奖转盘分为几部分
        duration: 2700, // 转盘转动时间
        startDeg: 0, // 开始的角度，主要是按钮转动的时候可能不指向12点方向
        isBtn: false  // 是按钮转动还是转盘转动，默认是转盘
      }
    }
  },
  methods: {
    clickLottery() {
      console.log('点击了转盘抽奖按钮，开始抽奖...');
      this.lotteryId = 5;
      console.log('接口调用完毕，拿到lotteryId...');
      this.start = true; // 接口拿到一定设置一下才能开始转
      console.log('设置lotteryid完毕，开始动画效果...');
    },
    success() {
      console.log(1111)
    }
  }
}
</script>
```

##参数解释

|参数名   |    默认值    |     用途     |
|------     | -----------   | ---------   |
|roll-options  |  {}             | 转盘初始化的几个参数
|can-start |  false          | 转盘开始转的参数值
|lotteryId  | 无             | 必填，中奖id
|clickLottery | 无        |必填，点击抽奖按钮的事件，一般是去调用接口然后将start置为true
|success | 无             |抽奖成功回调,自行定义,可选参数
|bg | 无        |必填，转盘抽奖背景图
|btnBg | 无        |必填，转盘按钮背景图

样式修改请直接覆盖class

具体🌰请自行下载  欢迎对小渣渣的code进行review～



