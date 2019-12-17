<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div class="my">
      <div class="top">
        <van-image round width="1rem" height="1rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <p>1314520</p>
      </div>
      <div class="order">
        <h1>我的订单</h1>
        <h2>全部订单</h2>
        <van-icon name="arrow" size="0.45rem" />
      </div>
      <div class="nav">
        <van-grid :column-num="3" :border="false">
          <van-grid-item icon="shopping-cart-o" text="待付款" />
          <van-grid-item icon="coupon-o" text="优惠券" />
          <van-grid-item icon="star" text="收藏" />
        </van-grid>
      </div>
      <div class="member">
        <van-cell title="会员中心" is-link icon="like-o" > </van-cell>
        <van-cell title="收货地址" is-link icon="location-o" > </van-cell>
      </div>
    </div>
  </van-pull-refresh>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    }
  }
};
</script>



<style scoped>
.my {
  background: #f2f2f2;
}
.van-pull-refresh {
  width: 100%;
  height: 100vh;
}
.top {
  width: 100%;
  height: 1.37rem;
  background: #f37d0f;
}
.van-image {
  margin-left: 0.27rem;
  margin-top: 0.25rem;
  float: left;
}
.top p {
  font-size: 0.3rem;
  margin-left: 0.2rem;
  margin-top: 0.5rem;
  color: #fff;
  float: left;
}
.order {
  width: 100%;
  height: 0.8rem;
  background: #fff;
  overflow: hidden;
}
.order h1 {
  font-size: 0.32rem;
  color: #000;
  margin-left: 0.26rem;
  margin-top: 0.25rem;
  float: left;
}
.order h2 {
  font-size: 0.28rem;
  color: #000;
  margin-left: 3.45rem;
  margin-top: 0.25rem;
  float: left;
}
.order .van-icon {
  margin-right: 0.24rem;
  margin-top: 0.21rem;
  float: right;
}
.nav {
  width: 100%;
  height: 1.69rem;
  margin-top: 0.15rem;
  background: #fff;
}
.member {
  width: 100%;
  height: 1.78rem;
  background: #fff;
  margin-top: 0.18rem;
}
.van-cell i:first-of-type{
     color:#FF6600;
     font-size:0.45rem ;
}
.van-cell i:last-of-type{
    
     font-size:0.45rem ;
}
</style>