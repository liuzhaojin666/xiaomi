<template>
    <div>
    	<hear num='购物车'></hear>
		<div class="deng">
	       	<h3>登录后享受更多优惠<span>去登陆<van-icon name="arrow" /></span></h3>
	       	<div class="nr" v-if="a==2">
	       		<p>购物车还是空的<button>去逛逛</button></p>
	    	</div>
	    	<div class="shuju" v-if="a==1">
	    		<ul>
	    			<li v-for="(item,index) in 1" :key="index">
	    				<img src="../assets/img/2.png">
	    				<div class="zhong">
	    					<p>小米8屏幕指纹版</p>
	    					<h3>￥7999</h3>
	    					<van-stepper v-model="value" />
	    				</div>
	    				<div class="you">
	    					<van-icon name="delete" size="40"/>
	    				</div>
	    			</li>
	    		</ul>
	    	</div>
    	</div>
    	<div class="dw">
    		<div class="cnxh">
    			<div class="bao">
	    			<img src="../assets/img/2.png">
	    			<span>猜你喜欢</span>
	    			<img src="../assets/img/2.png">
	    		</div>
	    		<p>实时推荐你的心心念念</p>
    		</div>
    	</div>
    	<div class="sj">
    		<ul>
    			<li v-for="(item,index) in arr" @click="fn(index)" :key="index">
    				<img :src="item.img">
    				<div class="xia">
    					<h2>{{ item.name }}</h2>
    					<p>{{ item.content }}</p>
    					<span>￥{{ item.price }}</span>
    				</div>
    			</li>
    		</ul>
    	</div>
    	<div class="qjs" v-if="a==1">
    		<div class="left">
    			<h4>共4件 金额：</h4>
    			<p>31996<span>元</span></p>
    		</div>
    		<div class="jxgw">继续购物</div>
    		<button @click="fn1()">去结算</button>
    	</div>
    	<div class="dd"></div>
    </div>
</template>
<script>
import hear from '../components/Header'
export default {
    components:{
      hear
    },
    data(){
    	return{
    		arr:[],
    		a:2,
    		value:1
    	}
    },
    mounted(){
    	this.$axios.get("https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1").then(res=>{
    		this.arr=res.data
    	})
    },
    methods:{
    	/*fn(i){
    		this.$router.push({
    			path:"",
    			query:{
    				id:i
    			}
    		})
    	},*/
    	fn1(){
    		alert("共需要123元")
    	}
    }
}
</script>
<style scoped>
	.dd{
		width: 100%;
		height: 0.8rem;
	}
	.shuju{
		width: 100%;
	}
	.shuju ul{
		width:100%; 
	}
	.shuju ul li{
		width: 100%;
		height: 2.5rem;
		display: flex;
	}
	.shuju ul li img{
		width: 1.8rem;
		height: 2rem;
		margin-left: 0.4rem;
	}
	.shuju ul li .zhong{
		width: 2.5rem;
		height: 2.06rem;
	}
	.shuju ul li .zhong p{
		text-align: center;
	}
	.shuju ul li .zhong h3{
		text-align: center;
	}
	.van-stepper{
		text-align: center;
	}
	.shuju ul li .you{
		height: 2.06rem;
		margin-left: 0.5rem;
	}
	.shuju ul li .you i{
		line-height: 2.06rem;
	}
	.qjs{
		width: 100%;
		height: 0.9rem;
		background: #fff;
		display: flex;
	}
	.qjs .left{
		width: 2.15rem;
		height: 100%;
		margin-left: 0.44rem;
	}
	.qjs .left h4{
		font-size: 0.26rem;
		color: #A0A0A0;
	}
	.qjs .left p{
		font-size: 0.3rem;
		color: #FF5621;
	}
	.qjs .left p span{
		color: #8C8C8C;
		font-size: 0.24rem;
	}
	.jxgw{
		width: 1.40rem;
		height: 100%;
		font-size: 0.26rem;
		color: #262626;
		line-height: 0.9rem;
		text-align: center;
	}
	.qjs button{
		width: 2.26rem;
		height: 100%;
		background: #FF6700;
		font-size: 0.28rem;
		color: #fff;
		line-height: 0.9rem;
		text-align: center;
		margin-left: 0.55rem;
		border: none;
	}
.deng{
	width: 100%;
	margin-top: 1rem;
}
.deng h3{
	font-size: 0.3rem;
	padding: 0.2rem;
}
.deng h3 span{
	display: inline-block;
	float: right;
	margin-right: 0.4rem;
	color: #9C9C9C;
	font-size: 0.24rem;
	overflow: hidden;
}
.nr{
	width: 100%;
	height: 1.3rem;
	background: #EBEBEB; 
	overflow: hidden;
}
.nr p{
	width: 4rem;
	height: 0.5rem;
	margin-top: 0.4rem;
	margin-left: 2rem;
	font-size: 0.28rem;
	color: #A9A9A9;
}
.nr p button{
	width: 1.3rem;
	height: 0.45rem;
	border: none;
	border: 1px solid #000;
	color: #000;
	background: #EBEBEB;
	margin-left: 0.2rem;
}
.dw{
	width: 100%;
	height: 1rem;
	position: relative;
}
.cnxh{
	border-bottom:1px solid #E3E3E3;
	text-align:center; 
}
.cnxh .bao img{
	width: 0.41rem;
	height: 0.27rem;
	margin-bottom: 0.1rem;
}
.bao{
	margin-bottom: 0.3rem;
	margin-top: 0.3rem;
}
.cnxh p{
	width: 2.65rem;
	position: absolute;
	left: 50%;
	bottom: 0.2rem;
	margin-left: -1.325rem;
	background: #fff;
	font-size: 0.2rem;
	color: #878787;
}
.sj{
	width: 100%;
	margin-bottom: 0.5rem;
}
.sj ul{
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
}
.sj ul li{
	width: 3.35rem;
	height: 4.80rem;
}
.sj ul li img{
	width: 3.35rem;
	height: 3.35rem;
}
.xia h2{
	font-size: 0.3rem;
	color: #000;
	text-indent: 0.2rem;
	margin-top: 0.2rem;
}
.xia p{
	font-size: 0.22rem;
	color: #757575;
	text-indent: 0.2rem;
	margin-top: 0.1rem;
}
.xia span{
	font-size: 0.2rem;
	color: #E64338;
	display: inline-block;
	text-indent: 0.2rem;
	margin-top: 0.1rem;
}
.zhong p{
	font-size: 0.26rem;
}
.bao span{
	font-size: 0.26rem;
	color: #FF6402;
}
</style>