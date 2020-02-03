<template>
  <div id="SwiperTopBar">
    <div class="slider-bar">
      <i class="iconfont icon-category"></i> 商品分类
    </div>
    <div class="img-bar">
      <a href=""><img src="../assets/img/supermarket.png" alt /></a>
      <a href=""><img src="../assets/img/international.png" alt /></a>
    </div>
    <div class="a-bar">
      <a href>天猫会员</a>
      <a href>电器城</a>
      <a href>喵鲜生</a>
      <a href>医药馆</a>
      <a href>营业厅</a>
      <a href>魅力惠</a>
      <a href>飞猪旅行</a>
      <a href>苏宁易购</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
#SwiperTopBar {
  width: 100%;
  height: 44px;
  background-color: #fff;
  position: relative;
  left: 320px;
  margin-bottom: 6px;
  .slider-bar {
    width: 240px;
    height: 44px;
    background-color: red;
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    display: inline-block;
    i{
      padding: 0px 10px;
    }
  }
  .img-bar {
    display: inline;
    padding-left:16px;
    img {
      width: 100px;
      height: 32px;
      padding-left:16px;
      
    }
  }
  .a-bar {
    display: inline-block;
    padding-left:16px;
    a {
      text-decoration: none;
      padding-left:16px;
      color: #000;
    }
    a:hover{
        color:red;
        cursor: pointer;
    }
  }
}
</style>