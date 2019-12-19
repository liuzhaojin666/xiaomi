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
      <div class="address-one" @click="addres">
        <p>已选</p>
        <p>{{detailObj.name}}{{detailObj.edition[seen].Memory}}x1</p>
        <van-icon name="arrow" />
      </div>
      <div class="address-two">
        <p>送至</p>
        <p>北京</p>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="bigimg" >
      <img :src="item.img" alt="" v-for="item in n4"  :key="item.id">
    </div>
    <div class="car">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="首页" @click="onClickIcon" />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
        <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton"/>
      </van-goods-action>
    </div>
    <div class="shop" v-show="show1">
      <div class="shop-one">
        <img :src="detailObj.edition[seen].color[seen1].img" alt="">
        <div class="shopin">
          <p>￥{{detailObj.edition[seen].edition_price}}</p>
          <p>{{detailObj.name}} {{detailObj.edition[seen].Memory}}{{detailObj.edition[seen].color[seen1].color_list}}</p>
        </div>
      </div>
      <div class="ban">版本</div>
      <div class="money">
          <div class='yuan' v-for="(item,i) in detailObj.edition" :key="i" @click="selectEdition(i)" :class="{active:seen == i}">
            <h1>{{item.Memory}}</h1>
            <h2>{{item.edition_price}}</h2>
          </div>
          <!-- <div class='yuan'>
            <h1>6G+128G</h1>
            <h2>7999元</h2>
          </div> -->
      </div>
      <div class="banOne">颜色</div>
      <ul>
        <!-- <li>红色</li>
        <li>黑色</li> -->
        <li @click="selectColor(i)" v-for="(item,i) in editionObj.color" :key="i" :class="{active1:seen1 == i}">{{item.color_list}}</li>
      </ul>
      <div class="numb">
      	<p>购买数量</p>
      	<van-stepper v-model="value" />
      </div>
      <button  @click="addshop">加入购物车</button>
      <van-icon name="cross" @click="vanish"/>
    </div>
    <div class="shade" v-show="show"></div>
  </div>
</template>

<script>
  import skuData from '../assets/js/data'
  export default {
    data() {
      return {
        n: this.$route.query.imgList,
        n1: this.$route.query.info,
        n2: this.$route.query.name,
        n3: this.$route.query.price,
        n4: this.$route.query.info_img,
        item:this.$route.query.item,
        icondata: [],
        show: false,
        show1:false,
        value:1,
        editionObj:{},
        detailObj:{},
        seen: 0,
        seen1: 0
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
        // Toast('点击按钮');
      },
      addres() {
        this.show =true
        this.show1=true
      },
      addshop(){
        this.show =false
        this.show1=false
      },
      vanish(){
        this.show =false
        this.show1=false
      },
      getData() {
      	this.detailObj = this.$route.query.item;
      },
      selectEdition(i) {
      	this.editionObj = this.detailObj.edition[i]
      	this.seen = i
      },
      selectColor(i) {
      	this.seen1 = i
      }
    },
    mounted() {
    	this.getData();
    	this.editionObj = this.detailObj.edition[0]
    },
  }
</script>
<style scoped>
  .active {
  	border: 0.02rem solid #F56600 !important;
  	color: #F56600 !important;
  }

  .active1 {
  	border: 0.02rem solid #F56600 !important;
  	color: #F56600 !important;
  }
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
    height: 1.5rem;
  }

  .address-one {
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
    margin-right: 3.87rem;
    font-size: 0.21rem;
    float: left;
  }

  .bigimg {
    width: 100%;
    height: 15.64rem;
    margin-bottom: 0.83rem;
  }

  .bigimg img {
    width: 100%;
    height: 15.64rem;
  }

  .car {
    width: 100%;
    height: 0.83rem;
    position: fixed;
    bottom: 0.27rem;
    left: 0.23rem;
  }

  .shade {
    width: 100%;
    height: 12.4rem;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    left: 0;
    top: 0;
  }

  .shop {
    width: 100%;
    height: 9rem;
    background:#fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    border-radius: 0.2rem 0.2rem 0 0;
  }

  .shop-one {
    width: 6.72rem;
    height: 1.68rem;
    margin-left: 0.26rem;
    margin-top: 0.9rem;
    margin-bottom: .45rem;
  }

  .shop-one img {
    width: 1.74rem;
    height: 1.68rem;
    border: 1px solid #ccc;
    float: left;
  }

  .shopin {
    float: left;
    margin-left: 0.1rem;
    margin-top: 0.44rem;
  }

  .shopin p:first-of-type {
    font-size: 0.31rem;
    margin-bottom: 0.23rem;
  }

  .shopin p:last-of-type {
    color: #212121;
    font-size: 0.25rem;
  }
  .ban{
    width: 100%;
    height: .38rem;
    font-size: .19rem;
    margin-left: .27rem;
    color: #757575;
  }
  .money{
    width: 100%;
    height: 1.65rem;
    overflow: hidden;
  }
  .yuan{
    width: 5.84rem;
    height: .61rem;
    border: 1px solid #ccc;
    margin-left:.27rem;
    margin-top: .17rem;

  }
  .yuan h1:first-of-type{
    font-size: .21rem;
    margin-left:.3rem;
    margin-top: 0.18rem;
    color:#8F8F94;
    float: left;
  }
  .yuan h2{
    font-size: .21rem;
    float:right;
    margin-right:0.27rem;
    margin-top: 0.18rem;
    color:#8F8F94;
  }
  .banOne{
    width: 100%;
    height: .38rem;
    font-size: .19rem;
    margin-top: 0.28rem;
    margin-left: 0.27rem;
    color: #757575;
  }
  .shop ul{
    width:3.6rem;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-left: 0.58rem;
    margin-top: 0.38rem;
  }
  .shop ul li{
    width: 1.1rem;
    height: 0.6rem;
    border: 1px solid #CCCCCC;
    text-align: center;
    line-height: 0.6rem;
    color: #909095;
  }
  .numb {
  	width:5.86rem;
  	height: 0.7rem;
  	display: flex;
  	justify-content: space-between;
    margin-left: 0.28rem;
    margin-top: 0.64rem;
    margin-bottom: 0.2rem;
  }
  .numb p {
  	line-height: 0.7rem;
  	font-size: 0.22rem;
  	color: #000;
  }

  .numb.van-stepper {
  	line-height: 0.7rem;
  }
  button{
    width: 6.8rem;
    height: 0.55rem;
    background: #FF6700;
    color: #fff;
    font-size: 0.25rem;
    border:none;
    border-radius: 0.5rem;
    
  }
  .shop .van-icon{
    position:fixed;
    top: 3.5rem;
    right: 0.25rem;
  }
  
</style>
