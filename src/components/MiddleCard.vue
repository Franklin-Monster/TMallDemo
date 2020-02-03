<template>
  <div id="MiddleCard">
        <div class="item left">
            <div class="text"><a href="#">品牌闪购 BRAND SALE 
                <img src="../assets/img/arrow-right.png" alt="" class="arrow"></a>
            </div>
            <div><img src="../assets/img/card1.jpg" alt="" class="main-img"></div>
        </div>
        <div class="item middle">
          <div class="text"><a href="#">聚名品 LUXURY CHANNEL
              <img src="../assets/img/arrow-right.png" alt="" class="arrow"></a></div>
            <div><img src="../assets/img/card2.jpg" alt="" class="main-img">
            </div>
        </div>
        <div class="item right">
           <div class="text"><a href="#">品牌活动 BRAND ACTIVITY
               <img src="../assets/img/arrow-right.png" alt="" class="arrow"></a>
               </div>
            <div><img src="../assets/img/card3.jpg" alt="" class="main-img"></div>
        </div>
      
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
#MiddleCard{
    display: flex;
    width: 100%;
    height: 370px;
    position: relative;

    .left{
          .text{
                 background-color:#fff;
                 width: 140%;
                 height: 36px;
                 padding: 10px 10px;
        }
    }
    .middle{
          .text{
                 background-color:#fff;
                 width: 146%;
                 height: 36px;
                 padding: 10px 10px;
                 margin-left:20px;
        }
        img{
            margin-left:20px;
        }
    }
    .right{
          .text{
                 background-color:#fff;
                 width: 146%;
                 height: 36px;
                 padding: 10px 10px;
                 margin-left:130px;
        }
        img{
            margin-left:130px;
        }
    }
    .item{
        padding: 10px 70px;
        a{
            font-family: '微软雅黑';
            font-size: 20px;
            text-decoration: none;
            color: black;
            font-weight: 900;
        }
        .main-img{
            width: 150%;
            height: 450px;
        }
        .arrow{
           width: 24px;
           height: 24px;
           float: right;
        }
    }
}

</style>