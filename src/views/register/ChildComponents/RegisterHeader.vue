<template>
  <div id="RegisterHeader">
    <span class="content">
      <span class="active item">
        <span class="icon">
          <span>1</span>
        </span>
        <span class="text">
          <span>设置用户名</span>
        </span>
      </span>
      <span class="item">
        <span class="icon">
          <span>2</span>
        </span>
        <span class="text">
          <span>填写账号信息</span>
        </span>
      </span>
      <span class="item">
        <span class="icon">
          <span>3</span>
        </span>
        <span class="text">
          <span>设置支付方式</span>
        </span>
      </span>
      <span class="item">
        <span class="icon">
          <span>4</span>
        </span>
        <span class="text">
          <span>注册成功</span>
        </span>
      </span>
    </span>
    <div class="img">
      <img src="../../../assets/img/register.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    itemClick() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="scss" scoped>
#RegisterHeader {
  width: 100%;
  height: 60px;
  background-color: #fff;
  text-align: center;
  margin: 10px 0;
  padding: 5px 0;
  border-bottom: #eee solid 3px;
  .active {
    .icon {
      background-color: red;
    }
    .text {
      color: #000;
    }
    border-bottom: red solid 3px;
  }
  .item {
    margin: 10px 0;
    width: 250px;
    padding-bottom: 22px;
    padding-left: 30px;
    padding-right: 30px;
  }
  .icon {
    background: #f1f3f4;
    color: #fff;
    width: 45px;
    height: 45px;
    border-radius: 25px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    span {
      margin: auto;
      font-size: 24px;
      font-weight: 800;
    }
  }
  .text {
    font-size: 24px;
    font-weight: 800;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    padding-left: 10px;
    color: #f1f3f4;
  }
  .img{
    margin: 180px auto;
  }
}
</style>