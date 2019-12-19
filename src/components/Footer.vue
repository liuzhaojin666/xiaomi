<template>
  <div class="bom">
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000">
      <router-link to="/home">
        <van-tabbar-item icon="home-o">
          首页
        </van-tabbar-item>
      </router-link>
      <router-link to="/Fication">
        <van-tabbar-item icon="search">
          分类
        </van-tabbar-item>
      </router-link>
      <router-link to="/shopping">
        <van-tabbar-item icon="friends-o">
          购物车
        </van-tabbar-item>
      </router-link>
      <router-link to="/my">
        <van-tabbar-item icon="setting-o">
          个人
        </van-tabbar-item>
      </router-link>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
      }
    };
  }
};
</script>

<style scoped>
  .bom{
    position: fixed;
    bottom: 0;
    left: 0;
  }
  .van-tabbar--fixed{
    width: 100%;
    height:0.9rem;
    display: flex;
    justify-content: space-around;
  }
  .van-tabbar-item{
    margin-top: .1rem;
    font-size: 0.2rem;
  }
  .van-tabbar--fixed a {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  .van-icon{
    font-size: 0.4rem;
  }
  .van-tabbar-item{
    margin-top: 0.1rem;
  }
  .van-tabbar-item__icon .van-icon van-icon-home-o{
    font-size: 0.30rem;
  }
</style>
