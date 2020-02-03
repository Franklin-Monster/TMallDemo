<template>
  <div id="SearchBar">
      <div class="logo">
       <img src="../assets/img/logo.png" alt="">
      </div>
      <div class="search-bar">
         <div class="input"><el-input placeholder="搜索 天猫 商品/品牌/店铺"></el-input></div>
         <el-button type="danger" size="medium" class="button">搜索</el-button>
      </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped> 
 #SearchBar{
   background-color: #fff;
   .logo{
     position: relative;
     top:50px;
     left:300px;
     img{
        width: 240px;
        height: 130px;
     }
   }
   .search-bar{
     width: 550px;
     display: inline-flex;
     position:relative;
     top:-30px;
     left:720px;
      .input{
         width: 491px;
         border:#FF0036 solid 3px;
         border-radius: 5px 0 0 5px;
      }
      .button{
        background-color: #FF0036;
        width: 132px;
        height: 46px;
        border:#FF0036 solid 2px;
        border-radius: 0 5px 5px 0;
      }
   }
 }
</style>