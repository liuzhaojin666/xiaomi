<template>
  <div class="revamp">
    <van-nav-bar title="修改收货地址" left-arrow @click-left="addFu">
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <van-cell-group>
      <van-field  label="姓名" placeholder="请输入用户名"/>
      <van-field  label="手机" placeholder="请输入手机号" />
      <van-field  label="地址" placeholder="请输入地址" />
    </van-cell-group>
    <div class="footer" @click="bao">保存地址</div>
  </div>
</template>


<script>
export default {
    data(){
        return{
            list:[],
            arr:''
        }
        // JSON.parse(localStorage.getItem("dz"))|| 
    },
    mounted(){
        // localStorage.setItem("da",JSON.stringify(this.list))
        // this.arr=localStorage.getItem("dd")
        // console.log(this.list)
        // console.log(this.arr)
    },
  methods: {
    addFu() {
      this.$router.push("/address");
    },
    bao() {
      this.$router.push("/address");
    },
  }
};
</script>


<style scoped>
.revamp{
    width: 100%;
    height: 100vh;
    background: #f2f2f2;
}
.revamp .van-cell{
    width: 100%;
    height: 1rem;
}
.van-nav-bar {
  background: #f2f2f2;
}
.van-nav-bar i {
  font-size: 0.45rem;
}
.van-nav-bar__title {
  font-size: 0.35rem;
}
.footer {
  width: 100%;
  height: 0.83rem;
  background: #ff6700;
  position: fixed;
  left: 0;
  bottom: 0;
  font-size: 0.3rem;
  text-align: center;
  line-height: 0.83rem;
  color: #fff;
}
</style>