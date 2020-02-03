<template>
  <div id="Footer">
   <div class="end-logo">
      <img src="../assets/img/end.png" alt="">
   </div>
   <div class="footer1">
      <img src="../assets/img/footer1.png" alt="">
   </div>
    <div class="footer2">
      <img src="../assets/img/footer2.png" alt="">
   </div>
   <div class="footer3">
    <div class="text1">关于天猫 帮助中心 开放平台 诚聘英才 联系我们 网站合作 法律声明 隐私权政策 知识产权 廉正举报 规则意见征集</div>
     <div class="text1">阿里巴巴集团| 淘宝网 | 天猫 | 聚划算 | 全球速卖通 | 阿里巴巴国际交易市场| 1688 | 阿里妈妈 | 飞猪 | 阿里云计算 | AliOS | 阿里通信 | 万网 | 高德 | UC | 友盟 | 虾米 | 钉钉 | 支付宝</div>
     <div class="text2">增值电信业务经营许可证： 浙B2-20110446 市场名称登记证：工商网市字3301004119号 出版物网络交易平台服务经营备案证： 新出发浙备字第001号</div>
     <div class="text2">互联网违法和不良信息举报电话：0571-81683755 blxxjb@alibaba-inc.com 互联网药品信息服务资质证书编号：浙-（经营性）-2017-0005  浙公网安备 33010002000120号</div>
     <div class="text2">医疗器械网络交易服务第三方平台备案：（浙）网械平台备字[2018]第00002号 互联网药品交易服务资格证书：国A20150001</div>
     <div class="text2">浙江省网络食品销售第三方平台提供者备案：浙网食A33010002 12318举报</div>
     <div class="text2">© 2003-2019 TMALL.COM 版权所有</div>
     <img src="../assets/img/footer3.gif" alt="" class="img1">
     <img src="../assets/img/footer4.jpg" alt="" class="img2">
   </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#Footer{
    width: 100%;
    height: 500px;
    background-color: #fff;
    position: absolute;
    .end-logo{
        width:100%;
        height: 80px;
        background-color: #eee;
        text-align: center;
        // align-items: center;
        img{
            width: 100px;
            height: 60px;
            margin: 0 auto;
            padding: 10px 0;
        }
    }
    .footer1{
        width: 100%;
        text-align: center;
    }
        .footer2{
        width: 100%;
        text-align: center;
    }
    .footer3{
        width: 100%;
        height: 300px;
        background-color: #000;
        color: #fff;
        text-align: center;
        .text1{
            padding: 10px 0;
            display: inline-block;
        }
        .text2{
            color: #777a7e;
            padding: 5px 0;
        }
        .img1{
            width: 30px;
            height: 30px;
        }
        .img2{
            width: 80px;
            height: 30px;
        }
    }
    
}

</style>