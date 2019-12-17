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
    return {
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
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
</style>