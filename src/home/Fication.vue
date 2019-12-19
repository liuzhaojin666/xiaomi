<template>
  <div>
    <hear num="分类"></hear>
    <div class="left">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="手机" />
        <van-sidebar-item title="电视" />
        <van-sidebar-item title="电脑" />
        <van-sidebar-item title="家电" />
        <van-sidebar-item title="路由" />
        <van-sidebar-item title="出行" />
        <van-sidebar-item title="智能" />
        <van-sidebar-item title="灯具" />
        <van-sidebar-item title="瞎整" />
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
      <div class="shouji">
        <div class="right_top">
          <img src="../assets/1.jpg" alt />
        </div>
        <h3>瞎整</h3>
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
    var num = 0;
    $(".van-sidebar-item").click(function() {
      var bodyHeight = $(".right").scrollTop(); //获取浏览器高度
      var index = $(this).index(); //下标
      var width = index * $(".shouji").height(); //盒子距离浏览器顶部的距离
      num = 1;
      console.log(width);
      if (bodyHeight > width) {
        var timer = setInterval(function() {
          bodyHeight -= 50;
          if (bodyHeight < width) {
            bodyHeight = width;
            clearInterval(timer);
            num = 0;
          }
          $(".right").scrollTop(bodyHeight);
        }, 50);
      }
      if (bodyHeight < width) {
        timer = setInterval(function() {
          bodyHeight += 50;
          if (bodyHeight > width) {
            bodyHeight = width;
            clearInterval(timer);
            num = 0;
          }
          $(".right").scrollTop(bodyHeight);
        }, 50);
      }
    }),
      $(".right").scroll(function() {
        var height = $(".right").scrollTop();
        if (num == 0) {
          $(".shouji").each(function() {
            var index = $(this).index();
            var width = index * $(".shouji").height();
            if (height > width) {
              $(".van-sidebar-item")
                .eq(index)
                .addClass("van-sidebar-item--select")
                .siblings()
                .removeClass("van-sidebar-item--select");
            }
          });
        }
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
  height: 90vh;
  overflow-y: scroll;
  float: right;
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
</style>