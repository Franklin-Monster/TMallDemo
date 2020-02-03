<template>
  <div id="SliderBar">
    <div class="slider-nav">
      <ul><img src="../assets/img/Dress.png" alt=""><span class="text">女装/内衣</span></ul>
      <ul><img src="../assets/img/shirt.png" alt=""><span class="text">男装/运动户外</span></ul>
      <ul><img src="../assets/img/shoes.png" alt=""><span class="text">女鞋/男鞋/箱包</span></ul>
      <ul><img src="../assets/img/icon_Beforethemake.png" alt=""><span class="text">美妆/个人护理</span></ul>
      <ul><img src="../assets/img/diamond.png" alt=""><span class="text">腕表/眼镜/珠宝饰品</span></ul>
      <ul><img src="../assets/img/phone.png" alt=""><span class="text">手机/数码/电脑办公</span></ul>
      <ul><img src="../assets/img/baby-buggy.png" alt=""><span class="text">母婴玩具</span></ul>
      <ul><img src="../assets/img/icon_noodle_line.png" alt=""><span class="text">零食/茶酒/进口食品</span></ul>
      <ul><img src="../assets/img/Fruitspearapple.png" alt=""><span class="text">生鲜水果</span></ul>
      <ul><img src="../assets/img/fridge.png" alt=""><span class="text">大家电/生活电器</span></ul>
      <ul><img src="../assets/img/furniture.png" alt=""><span class="text">家具素材</span></ul>
      <ul><img src="../assets/img/car.png" alt=""><span class="text">汽车/配件/用品</span></ul>
      <ul><img src="../assets/img/flower.png" alt=""><span class="text">家纺/家饰/鲜花</span></ul>
      <ul><img src="../assets/img/medicine-box.png" alt=""><span class="text">医药保健</span></ul>
      <ul><img src="../assets/img/coffee.png" alt=""><span class="text">厨具/收纳/宠物</span></ul>
      <ul><img src="../assets/img/bag.png" alt=""><span class="text">图书音像</span></ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#SliderBar {
  width: 240px;
  height: 842px;
  position: absolute;
  left: 320px;
  top: 230px;
  background-color: rgba(0,0,0,0.5);
  color: #fff;
  z-index: 9;
  overflow: hidden;
  .slider-nav{
    padding-top:6px;
    img{
      width: 24px;
      height: 30px;
      padding-right:12px;
    }
    ul{
      padding-left: 24px;
    }
    .text{
     font-size: 18px;
    }
  }
}
</style>