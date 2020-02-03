<template>
<div id="swiper">
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.url">
          <img :src="item.src" />
        </a>
      </swiper-item>
    </swiper>
    </div>
</template>

<script>
import { Swiper,SwiperItem } from "./swiper/index";

export default {
  data() {
    return {
      banners: [
        { src: require("../assets/img/swiper1.jpg"), url: "https://nvzhuang.tmall.com/?spm=875.7931836/B.category2016010.1.129d42650tNxSr&acm=lb-zebra-148799-667863.1003.4.708026&scm=1003.4.lb-zebra-148799-667863.OTHER_14561681423980_708026" },
        { src: require("../assets/img/swiper2.jpg"), url: "https://nanxie.tmall.com/?spm=875.7931836/B.category2016012.2.129d42650tNxSr&acm=lb-zebra-148799-667863.1003.4.708026&scm=1003.4.lb-zebra-148799-667863.OTHER_14561689118972_708026" },
        { src: require("../assets/img/swiper3.jpg"), url: "https://sports.tmall.com/?spm=875.7931836/B.category2016011.2.129d42650tNxSr&acm=lb-zebra-148799-667863.1003.4.708026&scm=1003.4.lb-zebra-148799-667863.OTHER_14561677576501_708026" },
        { src: require("../assets/img/swiper4.jpg"), url: "https://detail.tmall.com/item.htm?spm=a220m.1000858.1000725.15.5bef6219adtTKk&id=601198205840&skuId=4243596240048&user_id=2066876953&cat_id=53636001&is_b=1&rn=714e4346828b65167f3e38b224f3d92c" },
        { src: require("../assets/img/swiper5.jpg"), url: "https://detail.tmall.com/item.htm?spm=a220m.1000858.1000725.1.55f72eb4az3aLZ&id=599146925572&skuId=4182224517630&user_id=3001593287&cat_id=2&is_b=1&rn=ff786ac5adc6becacd24f69574af9714" },
        { src: require("../assets/img/swiper6.jpg"), url: "https://detail.tmall.com/item.htm?spm=a220m.1000858.1000725.1.43da5410rYIQwb&id=527774229372&skuId=3141090064232&standard=1&user_id=2786278078&cat_id=2&is_b=1&rn=317c1eda7a0674681dd0d25fdbdb2344" }
      ]
    };
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style lang='scss' scoped>
#swiper{
  //  margin-left:540px;
  position: relative;
  // margin-left:0px;
  width: 100%;
}
img{
    width: 150%;
    height: 100%;
}
</style>