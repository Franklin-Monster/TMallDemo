<template>
  <div id="MainNavBar">
    <div class="content">
      <div class="left">
        <span>喵，欢迎来天猫</span>
        <span class="hover" @click="ClickLogin">请登录</span>
        <span class="hover" @click="ClickRegister">免费注册</span>
      </div>
      <div class="right">
        <span @click="ClickLogin">
          我的淘宝
          <img src="../assets/img/arrow-down.png" alt class="arrow-down" />
        </span>
        <a href="../views/shopcar/shopcar.html">
          <i class="iconfont icon-cart-full"></i>购物车
        </a>
        <span @click="ClickLogin">
          收藏夹
          <img src="../assets/img/arrow-down.png" alt class="arrow-down" />
        </span>
        <span>|</span>
        <span class="mobile-terminal">
          <i class="iconfont icon-mobile-phone"></i>手机版
        </span>
        <div class="image">
          <img src="../assets/img/Mobile terminal.png" alt />
        </div>
        <a href="https://www.taobao.com/?spm=875.7931836/B.a2226mz.12.129d42650tNxSr">
          <span>淘宝网</span>
        </a>
        <span>
          商家支持
          <img src="../assets/img/arrow-down.png" alt class="arrow-down" />
        </span>
        <span>
          <i class="iconfont icon-category"></i>网站导航
          <img src="../assets/img/arrow-down.png" alt class="arrow-down" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    ClickRegister() {
      this.$router.push("/register");
    },
    ClickLogin() {
      this.$router.push("/login");
    },
  }
};
</script>

<style lang='scss' scoped>
.right span:hover {
  color: red;
  cursor: pointer;
}
.hover:hover {
  color: red;
  cursor: pointer;
}
.iconfont {
  color: red;
}
.mobile-terminal:hover + .image {
  display: block;
}
.content {
  width: 100%;
  height: 35px;
  font-family: "微软雅黑";
  background-color: #f2f2f2;
  display: flex;
  position: absolute;
  color: #999999;
  .left {
    position: relative;
    top: 10%;
    left: 300px;
    width: 500px;
  }
  .right {
    position: relative;
    top: 10%;
    right: 0;
    left: 500px;
    width: 800px;
    a {
      text-decoration: none;
      color: #999999;
    }
    .arrow-down {
      width: 10px;
      height: 10px;
    }
  }
  span {
    display: inline-block;
    padding: 0 8px;
  }
  .image {
    position: fixed;
    top: 42px;
    left: 1256px;
    z-index: 999;
    display: none;
  }
}
</style>