<template>
  <div class="address">
    <van-nav-bar title="收货地址" left-arrow  @click-left="addFu">
      <van-icon name="search" slot="right"/>
    </van-nav-bar>
    <div class="footer">新增地址</div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosenAddressId: "1",
      list:[],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号"
        }
      ]
    };
  },
  methods: {
    addFu() {
      this.$router.push("/my");
    },
    onAdd() {
      this.$router.push('/newly')
    },
    onEdit(index) {
     this.$router.push('/revamp')
     localStorage.setItem('dd',index)
    },
   
  },
  mounted(){
    // console.log(this)
    this.list=JSON.parse(localStorage.getItem("dz"))
  }
};
</script>

<style  scoped>
.address{
    width: 100%;
    height: 100vh;
    background: #f2f2f2 !important;
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
.van-address-list{
    height: 0;
}
</style>