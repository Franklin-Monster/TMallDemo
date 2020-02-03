<template>
  <div id="LoginBody">
    <div class="login-middle">
      <div class="login-box">
        <div class="login-title">手机扫码，安全登录</div>
        <div class="computer-img">
          <img src="../../../assets/img/computer.png" alt />
        </div>
        <div class="code-img">
          <img src="../../../assets/img/code.png" alt />
        </div>
        <div class="login-footer">
          <div class="qrCode-img">
            <img src="../../../assets/img/QR-code.png" alt />
          </div>
          <div class="login-text">
            <span class="normal-text">打开</span>
            <a href="https://www.tmall.com/wow/portal/act/app-download?spm=a2107.1.25847036.1.4b0aJDatJDatS1&mmstat=pc_login" class="red-text">手机天猫</a>
            <span>|</span>
            <a href="https://mpage.taobao.com/hd/download.html?spm=a2107.1.25847036.2.4b0aJDatJDatS1" class="red-text">手机淘宝</a>
            <div class="normal-text">扫一扫登录</div>
          </div>
          <div class="last-text">
            <span>密码登录 </span>
            <span @click="ClickRegister"> 免费注册</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    ClickRegister() {
      this.$router.push("/register");
    }
  }
};
</script>

<style lang="scss" scoped>
#LoginBody {
  padding: 0;
  margin: 0;
  .login-middle {
    width: 1190px;
    height: 600px;
    background: url("../../../assets/img/login-middle.jpg") no-repeat;
    position: relative;
    .login-box {
      width: 350px;
      height: 420px;
      background-color: #fff;
      position: absolute;
      right: 100px;
      top: 100px;
      .login-title {
        font-weight: 800;
        margin: 20px 30px;
      }
      .computer-img {
        position: absolute;
        right: 0;
        top: 0;
        img {
          width: 50px;
          height: 50px;
        }
      }
      .code-img {
        width: 100%;
        text-align: center;
      }
      .login-footer {
        width: 350px;
       margin-top: 20px;
        text-align: center;
        .qrCode-img {
          display: inline-block;
          margin-right: 5px;
          img {
            width: 30px;
            height: 30px;
          }
        }
        .login-text {
          display: inline-block;

          .red-text {
            color: red;
            padding: 0 5px;
            text-decoration: none;
          }
          .normal-text {
            text-align: left;
            color: #9c9c9c;
            padding: 0 5px;
          }
        }
        .last-text {
          position: absolute;
          right: 30px;
          bottom: 100px;
          font-size: 14px;
          color: #6c6c6c;
        }
        .last-text span:hover {
          color: red;
          cursor: pointer;
        }
      }
    }
  }
}
</style>