<template>
  <div class="newly">
    <van-nav-bar title="新增收货地址" left-arrow @click-left="addFu">
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <van-address-edit
      :area-list="addData"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import addData from "@/assets/js/address.js";
export default {
  data() {
    return {
      addData: addData,
      searchResult: []
    };
  },
  methods: {
    addFu() {
      this.$router.push("/address");
    },
     onSave() {
    
    },
    onDelete() {
     
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    },
     onSave() {
     
    },
    onDelete() {
      
    },
    tiaozhuan() {
      this.$router.push("/address");
    }
  }
};
</script>

<style  scoped>
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