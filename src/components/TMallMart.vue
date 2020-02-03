<template>
  <div id="TMallMart">
    <div class="tmall-logo">
      <img src="../assets/img/tmallmart.png" alt />
    </div>
    <div class="tmall-middle">
      <div class="tmall-tall">
        <img src="../assets/img/tall.jpg" alt />
      </div>
      <div class="tmall-tab">
        <div class="tab-title">
          <span class="tab1"  @mouseenter="tab1Enter" :class="[tab?'active':'']">今日疯抢</span>
          <span class="tab2"  @mouseenter="tab2Enter" :class="[tab?'':'active']">量贩装</span>
        </div>
        <transition-group name="tab">
        <div class="tab-img1" v-if="tab" key="tab1">
          <span class="tab-img-text">
            <img src="../assets/img/tabicon.png" alt />爆款直降
            <span class="text2">精致生活</span>
          </span>
          <img src="../assets/img/tab1.jpg" alt class="tab-img-img" />
        </div>
        <div class="tab-img2" v-else key="tab2">
          <span class="tab-img-text">
            <img src="../assets/img/tabicon.png" alt />粮油调味
            <span class="text2">爆款直降</span>
          </span>
          <img src="../assets/img/tab2.jpg" alt class="tab-img-img" />
        </div>
        </transition-group>
      </div>
      <div class="tmall-card">
          <img src="../assets/img/m1.jpg" alt="" class="img1">
          <div>
          <img src="../assets/img/m2.jpg" alt="" class="img2"> 
          <img src="../assets/img/m3.jpg" alt="" class="img3">
          <img src="../assets/img/m4.jpg" alt="" class="img4">
          <!-- <img src="../assets/img/m5.jpg" alt="">
          <img src="../assets/img/m6.jpg" alt=""> -->
          </div> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            tab:true
        }
    },
    methods:{
        tab1Enter(){
            this.tab=true
        },
        tab2Enter(){
            this.tab=false
        }
    }
};
</script>

<style lang="scss" scoped>
#TMallMart {
  position: relative;
  top: 150px;
  // margin: 20px 50px;
  margin-left:50px;
  background-color: #fff;
  .tmall-logo {
    margin: 10px;
    width: 430px;
    height: 50px;
  }
  .tmall-middle {
    width: 1800px;
    display: flex;
    background-color: #fff;
    .tmall-tall{
      img{
        width: 468px;
        height: 960px;
      }
    }
    .tmall-tab {
      flex: 1;
      margin-left :30px;
      width: 300px;
      height: 500px;
      // background-color: red;
    }
    .tmall-tab {
      .tab-title {
        .tab1,
        .tab2 {
          width: 240px;
          height: 60px;
          font-size: 28px;
          background-color: #eee;
          display: inline-block;
          padding: 20px 30px;
          text-align: center;
        }
      }
      .tab-img1,.tab-img2 {
        margin-left: 120px;
        position: absolute;
        .tab-img-text {
          display: inline-block;
          position: absolute;
          width: 220px;
          height: 100px;
          background-color: #eee;
          top: 160px;
          left: -120px;
          font-size: 36px;
          font-family: "微软雅黑";
          color: #00B262;
          font-weight: 700;
          text-align: center;
          border-radius: 20px 20px 20px 20px;
          padding: 10px 30px;
          .text2{
              color: #000;
              font-weight: 500;
              font-size: 28px;
          }
          img {
            padding: 0 10px;
          }
        }
        .tab-img-img {
          padding-left: 100px;
        }
      }
    }
  }
  .tmall-card{
     .img1{
          width: 420px;
          height: 420px;
          position:absolute;
          left: 1200px;
          margin: 20px;
     }
     .img2{
          width: 420px;
          height: 420px;
          position: absolute;
          top: 580px;
          left: 500px;
     }
     .img3{
          width: 420px;
          height: 420px;
          position: absolute;
          top: 580px;
          left: 940px;
     }
     .img4{
          width: 420px;
          height: 420px;
          position: absolute;
          top: 580px;
          left: 1380px;
     }
  }
}
.tab-enter, .tab-leave-to{
  opacity: 0;
}
.tab-enter-active, .tab-leave-active {
  transition: opacity .8s;
}
.active{
background-color: #00B262!important;
color: #fff;
}
</style>