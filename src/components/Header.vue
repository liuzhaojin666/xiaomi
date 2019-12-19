<template>

  <div class="tou">
    <van-nav-bar :title='num'
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.push("/home")
    },
    onClickRight() {
      Toast("按钮");
    }
  },
  props: ["num"]
};
</script>
<style type="text/css" scoped>
  .tou{
    width: 100%;
    height: 0.8rem;
    background: #fff;
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
  }
  .van-nav-bar__title{
    font-size: 0.3rem;
    margin-top: 0.2rem;
  }
  .van-nav-bar__left{
    font-size: 0.28rem;
    margin-top: 0.2rem;
  }
  .van-nav-bar__right{
    font-size: 0.28rem;
    margin-top: 0.2rem;
  }
</style>