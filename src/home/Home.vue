<template>
  <div class="big">
    <header>
      <div class="input">
        <div class="radius"></div>
        <input type="text">
        <!-- <img src="../assets/img/5.png" alt=""> -->
      </div>
    </header>
    <div class="swiper">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in imgdata" :key="index"><img :src="item.img" alt=""></van-swipe-item>
        <!-- <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item> -->
      </van-swipe>
    </div>
    <div class="icon">
      <div class="icon-one">
        <van-icon name="gold-coin" />
        <p>icon1</p>
      </div>
      <div class="icon-one">
        <van-icon name="chat" />
        <p>icon2</p>
      </div>
      <div class="icon-one">
        <van-icon name="shop-collect-o" />
        <p>icon3</p>
      </div>
      <div class="icon-one">
        <van-icon name="gift-card-o" />
        <p>icon4</p>
      </div>
    </div>
    <div class="phone">
      <div class="phone-one" v-for="(item,index) in icondata" @click="det(index,item.imgList,item.info,item.name,item.price,item.info_img,item.edition,item)" :key="index">
        <img :src="item.img" alt="">
        <p class="p">{{item.name}}</p>
        <p class="p-one">{{item.content}}</p>
        <p class="p-two">￥{{item.price}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        icondata: [],
        imgdata: []
      }
    },
    mounted() {
      this.$axios.get('https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1').then(res => {
        this.icondata = res.data
        console.log(res)
      })
      this.$axios.get('https://shiyaming1994.github.io/mi/static/rotationChart.json').then(res => {
        this.imgdata = res.data
      })
    },
    methods:{
      det(index,imgList,info,name,price,info_img,edition,item) {
        this.$router.push({
          path: "/det",
          query: {
            index:index,
            imgList: imgList,
            info:info,
            name:name,
            price:price,
            info_img:info_img,
            edition:edition,
            item:item
          }
        })
      }
    }
  }
</script>
<style scoped>
  header {
    width: 100%;
    height: 1.1rem;
    background: #F2F2F2;
    position: fixed;
    top: 0;
    left: 0;
  }

  .input {
    width: 5.65rem;
    height: 0.7rem;
    margin-left: 0.32rem;
    margin-top: 0.2rem;
    position: relative;
  }

  .radius {
    width: 0.7rem;
    height: 0.7rem;
    background: #87CEEB;
    border-radius: 50%;
    float: left;
  }

  .input input {
    width: 3.8rem;
    height: 0.5rem;
    border: 1px solid #E5E5E5;
    border-radius: 0.5rem;
    float: left;
    margin-left: 1.09rem;
    margin-top: 0.1rem;
  }

  .input img {
    width: 0.3rem;
    height: 0.27rem;
    position: absolute;
    left: 2.1rem;
    top: 0.25rem;
  }

  .swiper {
    width: 100%;
    margin-top: 1.1rem;
  }

  .swiper img {
    width: 100%;
    height: 3.2rem;
  }

  .icon {
    width: 100%;
    height: 1.28rem;
    background: #fff;
    display: flex;
    justify-content: space-around;
    margin-bottom: 0.17rem;
  }

  .icon-one {
    margin-top: 0.3rem;
  }

  .icon-one p {
    font-size: 0.25rem;
    color: #000000;
    margin-top: 0.14rem;
  }

  .icon-one .van-icon {
    margin-left: 0.1rem;
    font-size: 0.45rem;
  }

  .phone {
    width: 100%;
    margin-bottom: 15.6rem;
  }

  .phone-one {
    float: left;
    margin-left: 0.15rem;
    margin-top: 0.2rem;
  }

  .phone-one img {
    width: 3.15rem;
    height: 3.15rem;
  }

  .p {
    font-size: 0.29rem;
    color: #212121;
    margin-left: 0.17rem;
    margin-top: 0.22rem;
  }

  .p-one {
    font-size: 0.21rem;
    color: #757575;
    margin-left: 0.17rem;
    margin-top: 0.15rem;
  }

  .p-two {
    font-size: 0.2rem;
    color: #EA625B;
    margin-left: 0.18rem;
    margin-top: 0.14rem;
  }
  
</style>
