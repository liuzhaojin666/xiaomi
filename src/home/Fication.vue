<template>
  <div>
    <hear num="分类"></hear>
    <div class="left">
      <van-sidebar v-model="activeKey" v-for="(item,index) in arr" :key="index">
        <van-sidebar-item :title="item" />
      </van-sidebar>
    </div>
    <div class="right">
      <div class="shouji">
        <div class="right_top">
          <img src="../assets/1.jpg" alt />
        </div>
        <h3>手机</h3>
        <ul>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
        </ul>
      </div>
      <div class="shouji">
        <div class="right_top">
          <img src="../assets/1.jpg" alt />
        </div>
        <h3>电视</h3>
        <ul>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
        </ul>
      </div>
      <div class="shouji">
        <div class="right_top">
          <img src="../assets/1.jpg" alt />
        </div>
        <h3>电脑</h3>
        <ul>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
        </ul>
      </div>
      <div class="shouji">
        <div class="right_top">
          <img src="../assets/1.jpg" alt />
        </div>
        <h3>家电</h3>
        <ul>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
        </ul>
      </div>
      <div class="shouji">
        <div class="right_top">
          <img src="../assets/1.jpg" alt />
        </div>
        <h3>路由</h3>
        <ul>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
        </ul>
      </div>
      <div class="shouji">
        <div class="right_top">
          <img src="../assets/1.jpg" alt />
        </div>
        <h3>出行</h3>
        <ul>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
        </ul>
      </div>
      <div class="shouji">
        <div class="right_top">
          <img src="../assets/1.jpg" alt />
        </div>
        <h3>智能</h3>
        <ul>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
        </ul>
      </div>
      <div class="shouji">
        <div class="right_top">
          <img src="../assets/1.jpg" alt />
        </div>
        <h3>灯具</h3>
        <ul>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
          <li>
            <h1>
              <img src="../assets/0.jpg" alt />
            </h1>
            <p>小米</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import hear from "../components/Header";
import "../assets/jq.js";
export default {
  data() {
    return {
      activeKey: 0,
      arr: ["手机", "电视", "电脑", "家电", "路由", "出行", "智能", "灯具"]
    };
  },
  components: {
    hear
  },
  mounted() {
    $(".van-sidebar").click(function() {
      var bodyHeight = $(window).scrollTop();//获取浏览器高度
      var index = $(this).index();//下标
      var width = $(".shouji")//盒子距离浏览器顶部的距离
        .eq(index)
        .offset().top;
      console.log(width);
      if (bodyHeight > width) {
        var timer =setInterval(function() {
          bodyHeight -= 50;
          if (bodyHeight < width) {
            bodyHeight = width;
            clearInterval(timer);
          }
          $(window).scrollTop(bodyHeight);
        }, 50);
      }
      if(bodyHeight < width){
				timer = setInterval(function(){
					bodyHeight += 50;
					if(bodyHeight > width){
						bodyHeight = width
						clearInterval(timer);
					}
					$(window).scrollTop(bodyHeight)
				},50);
			}
    }),
      this.$axios
        .get("https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1")
        .then(res => {
          console.log(res);
        });
  },
  methods: {
    fun(index) {
      alert(1);
      console.log(index);
    }
  }
};
</script>
<style scoped>
.left {
  float: left;
  width: 1.56rem;
  position: fixed;
  left: 0;
  top: 1rem;
}

.right {
  width: 4.86rem;
  margin-right: 0.5rem;

  float: right;
  padding-top: 1rem;
  }
.right_top {
  width: 100%;
  height: 1.56rem;
  background: red;
}
.right_top img {
  width: 100%;
  height: 100%;
}
.shouji h3 {
  width: 100%;
  height: 0.76rem;
  line-height: 0.76rem;
  text-align: center;
}
.shouji ul {
  width: 100%;
  height: 3.56rem;
}
.shouji ul li {
  width: 1.4rem;
  height: 1rem;
  float: left;
  padding-top: 0.48rem;
  text-align: center;
}
.shouji ul li h1 {
  width: 0.65rem;
  height: 0.82rem;
  margin: 0 auto;
  background: red;
}
.shouji ul li h1 img {
  width: 100%;
  height: 100%;
}
.van-sidebar-item--select {
  border-color: #f2f2f2f2;
  background-color: #f2f2f2f2;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 0.6rem;
}
.van-sidebar {
  border: 0.01rem solid #fff;
  height: 1.35rem;
}
</style>