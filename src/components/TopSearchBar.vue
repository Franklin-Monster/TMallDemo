<template>
  <div id="TopSearchBar">
    <transition name="top-fade">
      <div class="box_fixed" :class="{'is_fixed1' : isFixed}" v-if="isFixed">
        <span class="text">TMALL 天猫</span>
        <span class="input">
          <el-input placeholder="搜索 天猫 商品/品牌/店铺"></el-input>
        </span>
        <el-button type="danger" size="medium" class="button">搜索</el-button>
      </div>
    </transition>
    <transition name="slide-fade">
      <div id="SliderSearchBar" :class="{'is_fixed2' : isFixed}" v-if="isFixed">
        <div class="nav">导航</div>
        <div class="item">
          <div>天猫超市</div>
          <div>天猫国际</div>
          <div>美丽人生</div>
          <div>潮店酷玩</div>
          <div>居家生活</div>
          <div>打造爱巢</div>
          <div>户外出行</div>
          <div>猜你喜欢</div>
        </div>
        <div class="go-top" @click="backTop(5000)">
          <div>
            <img src="../assets/img/arrow on.png" />
          </div>顶部
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFixed: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
  },
  methods: {
    initHeight() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollTop > 680 ? true : false;
    },
    backTop(i) {
      document.documentElement.scrollTop -= i;
      if (document.documentElement.scrollTop > 0) {
        var c = setTimeout(() => this.toTop(i), 16);
      } else {
        clearTimeout(c);
      }
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
#SliderSearchBar {
  width: 36px;
  height: 400px;
  background-color: #fff;
  z-index: 999;
  color: #fff;
  font-size: 14px;
  .item div {
    width: 36px;
    height: 36px;
    background-color: #626262;
    cursor: pointer;
    text-align: center;
    margin: 2px 0;
  }
  .item div:hover {
    background-color: #f770cf;
  }
  .nav {
    width: 36px;
    height: 36px;
    background-color: #ff0c40;
    cursor: pointer;
    text-align: center;
    align-items: center;
  }
  .go-top {
    img {
      width: 13px;
      height: 13px;
    }
    width: 36px;
    height: 40px;
    background-color: #ababab;
    cursor: pointer;
    text-align: center;
  }
}
.box_fixed {
  width: 100%;
  height: 50px;
  line-height: 40px;
  background-color: #ff0c40;
  .text {
    font-size: 28px;
    font-family: "微软雅黑";
    color: #fff;
    display: inline-block;
    margin-left: 320px;
    margin-right: 380px;
  }
  .input {
    display: inline-block;
    width: 648px;
    height: 30px;
  }
  .button {
    width: 90px;
    border: 0;
    font-size: 16px;
    letter-spacing: 4px;
    cursor: pointer;
    color: #fff;
    background-color: #ff0036;
    height: 30px;
    overflow: hidden;
    font-family: "\5FAE\8F6F\96C5\9ED1", arial, "\5b8b\4f53";
  }
}
.is_fixed1 {
  position: fixed;
  top: 0;
  z-index: 999;
}
.is_fixed2 {
  position: fixed;
  top: 300px;
  left: 14px;
  z-index: 999;
}
.top-fade-enter {
  transform: translate(0, -50px);
}
.top-fade-leave-to {
  transform: translate(0, -50px);
}
.top-fade-enter-active,
.top-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter {
  // opacity: 0;
  transform: scale(0);
  transform-origin: left bottom;
}
.slide-fade-leave-to {
  //  opacity: 0;
  transform: scale(0);
  transform-origin: left bottom;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
</style>