<template>
  <div class="det">
    <div class="back" @click="back">
      <van-icon name="arrow-left" size="0.45rem" />
    </div>
    <div class="carousel">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in n" :key="index"><img :src="item.img" alt=""></van-swipe-item>
      </van-swipe>
    </div>
    <p class="detname">{{n2}}</p>
    <p class="detname-one">{{n1}}</p>
    <p class="detname-two">￥{{n3}}</p>
    <div class="address">
      <div class="address-one">
        <p>已选</p>
        <p>小米8 屏幕指纹版6G+128Gx1</p>
        <van-icon name="arrow" />
      </div>
      <div class="address-two">
        <p>送至</p>
        <p>北京</p>
      </div>
    </div>
    <div class="bigimg">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in n4" :key="index"><img :src="item.img" alt=""></van-swipe-item>
      </van-swipe>
    </div>
    <div class="car">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="首页" @click="onClickIcon" />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
        <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        n: this.$route.query.imgList,
        n1: this.$route.query.info,
        n2: this.$route.query.name,
        n3: this.$route.query.price,
        n4: this.$route.query.info_img,
        icondata: []
      }
    },
    methods: {
      back() {
        history.back()
      },
      onClickIcon() {
        this.$router.push('/home')
      },
      onClickButton() {
        Toast('点击按钮');
      }
    }
  }
</script>
<style scoped>
  .det {
    width: 100%;
    height: 100vh;
  }

  .back {
    width: 0.52rem;
    height: 0.52rem;
    background: rgba(0, 0, 0, 0.35);
    border-radius: 50%;
    text-align: center;
    line-height: 0.52rem;
    position: fixed;
    left: 0.11rem;
    margin-top: 0.11rem;
    z-index: 1;
  }

  .carousel {
    width: 100%;
    height: 7.04rem;
  }

  .carousel img {
    width: 100%;
    height: 7.04rem;
  }

  .detname {
    font-size: 0.4rem;
    color: #000000;
    margin-top: 0.38rem;
    margin-left: 0.3rem;
  }

  .detname-one {
    color: #757575;
    font-size: 0.25rem;
    margin-left: 0.3rem;
    margin-top: 0.17rem;
  }

  .detname-two {
    margin-left: 0.36rem;
    margin-top: 0.22rem;
    color: #FF6700;
    font-size: 0.31rem;
  }

  .address {
    width: 100%;
    height: 2.72rem;
  }

  .address-one {
    width: 5.85rem;
    height: 0.58rem;
    margin-left: 0.28rem;
    margin-top: 0.47rem;
    border-bottom: 1px solid #CCCCCC;
  }

  .address-one p {
    float: left;
  }

  .address-one p:first-of-type {
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    color: #9E7373;
    font-size: 0.2rem;
  }

  .address-one p:last-of-type {
    margin-right: 1.35rem;
    font-size: 0.21rem;
  }

  .address-two {
    margin-top: 0.26rem;
  }

  .address-two p:first-of-type {
    margin-left: 0.6rem;
    margin-right: 0.3rem;
    color: #9E7373;
    font-size: 0.2rem;
    float: left;
  }

  .address-two p:last-of-type {
    margin-right: 1.35rem;
    font-size: 0.21rem;
    float: left;
  }

  .bigimg {
    width: 100%;
    height: 15.64rem;
  }

  .bigimg img {
    width: 100%;
    height: 15.64rem;
  }

  .car {
    width:5.98rem;
    height: 0.83rem;
    position: fixed;
    bottom: 0.27rem;
    left: 0.23rem;
  }
</style>
