<template>
  <div id="MiddleBrand">
     <div class="row">
       <span @mouseenter="handleMouseenter" @mouseleave="handleMouseleave"><img src="../assets/img/p27.png" alt="" ><div class="text"  v-if="mouseenter">点击进入</div></span>
       <span><img src="../assets/img/p2.png" alt=""></span>
       <span><img src="../assets/img/p3.png" alt=""></span>
       <span><img src="../assets/img/p4.png" alt=""></span>
       <span><img src="../assets/img/p5.png" alt=""></span>
       <span><img src="../assets/img/p13.png" alt=""></span>
       <span><img src="../assets/img/p7.png" alt=""></span>
       <span><img src="../assets/img/p3.png" alt=""></span>
       <span><img src="../assets/img/p19.png" alt=""></span>
       <span><img src="../assets/img/p10.png" alt=""></span>
       <span><img src="../assets/img/p11.png" alt=""></span>
       <span><img src="../assets/img/p12.png" alt=""></span>
       <span><img src="../assets/img/p13.png" alt=""></span>
       <span><img src="../assets/img/p2.png" alt=""></span>
       <span><img src="../assets/img/p3.png" alt=""></span>
       <span><img src="../assets/img/p4.png" alt=""></span>
       <span><img src="../assets/img/p5.png" alt=""></span>
       <span><img src="../assets/img/p25.png" alt=""></span>
       <span><img src="../assets/img/p27.png" alt=""></span>
       <span><img src="../assets/img/p7.png" alt=""></span>
       <span><img src="../assets/img/p21.png" alt=""></span>
       <span><img src="../assets/img/p22.png" alt=""></span>
       <span><img src="../assets/img/p10.png" alt=""></span>
       <span><img src="../assets/img/p24.png" alt=""></span>
       <span><img src="../assets/img/p25.png" alt=""></span>
       <span><img src="../assets/img/p26.png" alt=""></span>
       <span><img src="../assets/img/p27.png" alt=""></span>
       <span><img src="../assets/img/p12.png" alt=""></span>
       <span><img src="../assets/img/p21.png" alt=""></span>
       <span><img src="../assets/img/p30.png" alt="" class="refresh"></span>
     </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
       mouseenter:false
    }
  },
  methods:{
      handleMouseenter(){
         this.mouseenter=true;
      },
      handleMouseleave(){
        this.mouseenter=false;
      }
  }

}
</script>

<style lang="scss" scoped>
#MiddleBrand{
    width: 100%;
    display: flex;
    position: relative;
    margin: 20px 50px;
    top: 150px;
    .row{
      span{
        position: relative;
      }
    }
    .text{
      width: 80px;
      height: 30px;
      display: inline-block;
      background-color:red;   
      border-radius:20px 20px 20px 20px;
      color: #fff;
      text-align: center;
      align-items: center;
      position: absolute;
      left: 52px;
      bottom:20px;
      z-index: 9;
    }
   img{
        width: 185px;
        height: 130px;
        margin: 1px 1px;
        background-color: #fff;
   }
   img:hover{
       background-color: rgba(0,0,0,0.8);
       cursor: pointer;
       transition: all 0.5s ease-in-out;
       
   }
   .refresh:hover{
       background-color: red;
       cursor: pointer;
       transition: all 0.5s ease-in-out;
   }
}
</style>