<template>
  <div class="roll-turntable-wrapper">
    <div class="roll-turntable" :ref="!options.isBtn ? 'roll' : ''">
      <img :src="bg" alt="转盘背景图">
    </div>
    <button class="roll-start-btn" :ref="options.isBtn ? 'roll' : ''" @click="clickLottery">
      <img :src="btnBg" alt="转盘开始按钮">
    </button>
  </div>
</template>

<script>

const DEFAULT_OPTIONS = {
  deg: 720,
  partNum: 8,
  duration: 2700,
  startDeg: 0,
  isBtn: false
}

export default {
  name: "Roll",
  props: {
    canStart: {
      type: Boolean,
      required: true
    },
    lotteryId: {
      type: [Number, String],
      required: true
    },
    bg: {
      type: String,
      required: true
    },
    btnBg: {
      type: String,
      required: true
    },
    rollOptions: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      canRoll: true,
      rollDeg: 0,
      options: {},
      degNum: 720
    }
  },
  watch: {
    canStart(val) {
      if (val) {
        this.draw(this.lotteryId);
      }
    }
  },
  created() {
    this.options = Object.assign({}, DEFAULT_OPTIONS, this.rollOptions);
    this.degNum = this.options.deg;
  },
  methods: {
    clickLottery() {
      console.log(1111);
      this.$emit('clickLottery');
    },
    draw(lotteryId) {
      if (lotteryId > this.options.partNum || lotteryId < 0) {
        throw new Error('中奖id配置错误')
      }
      if (this.canRoll) {
        const ele = this.$refs.roll;
        ele.style.transition = ele.style.WebkitTransition = `all ${this.options.duration / 1000}s`;
        const ave_deg = 360 / this.options.partNum;
        const random = (Math.random() + 0.5) * (ave_deg / 2);
        if (this.options.isBtn) {
          ele.style.transform = ele.style.WebkitTransform = `rotateZ(${this.options.deg + (ave_deg * lotteryId + random) - this.options.startDeg}deg)`;
        } else {
          ele.style.transform = ele.style.WebkitTransform = `rotateZ(${this.options.deg - (ave_deg * lotteryId + random) + this.options.startDeg}deg)`;
        }

        this.canRoll = false;
        setTimeout(() => {
          this.canRoll = true;
          this.$emit('success');
          this.$emit('update:canStart', false);
          this.options.deg += this.degNum;
        }, this.options.duration + 200)
      }
    }
  }
}
</script>

<style scoped>

  .roll-turntable-wrapper {
    margin: 20px auto;
    position: relative;
    width: 570px;
    height: 570px;
    overflow: hidden;
  }

  .roll-turntable {
    width: 570px;
    height: 570px;
    transition: all 2.5s;
    transition-timing-function: cubic-bezier(.25, .84, .54, .95);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .roll-turntable img {
    width: 100%;
    font-size: 0;
  }

  .roll-start-btn {
    position: absolute;
    left: 0;
    top: 160px;
    right: 0;
    margin: 0 auto;
    outline:none;
    border: none;
    background: none;
    appearance: none;
    display: block;
    width: 218px;
    height: 227px;
    background-size: 100% 100%;
  }

  .roll-start-btn img {
    width: 100%;
    font-size: 0;
  }

  .start-btn {
    font-size: 40px;
    text-align: center;
    color: #fff;
  }
</style>
