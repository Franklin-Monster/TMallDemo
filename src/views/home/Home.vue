<template>
  <div id="Home">
     <MainNavBar></MainNavBar>
    <SearchBar></SearchBar>
    <SwiperTopBar></SwiperTopBar>
    <Swiper></Swiper>
    <SliderBar></SliderBar>
    <MiddleCard></MiddleCard>
    <MiddleBrand></MiddleBrand>
    <TMallMart></TMallMart>
    <TopSearchBar></TopSearchBar>
    <Footer></Footer>
  </div>
</template>

<script>
import MainNavBar from '../../components/MainNavBar'
import SearchBar from '../../components/SearchBar'
import Swiper from '../../components/Swiper'
import SwiperTopBar from '../../components/SwiperTopBar'
import SliderBar from '../../components/SilderBar'
import MiddleCard from '../../components/MiddleCard'
import MiddleBrand from '../../components/MiddleBrand'
import TMallMart from '../../components/TMallMart'
import TopSearchBar from '../../components/TopSearchBar'
import Footer from '../../components/Footer'
export default {
     components:{
    MainNavBar,
    SearchBar,
    Swiper,
    SwiperTopBar,
    SliderBar,
    MiddleCard,
    MiddleBrand,
    TMallMart,
    TopSearchBar,
    Footer
  }

}
</script>

<style lang="scss" scoped>
*{
  padding: 0;
  margin: 0;
}
#Home{
  width: 100%;
  background-color: #F1F3F4;
  position: relative;
}

</style>