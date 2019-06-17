<template>
	<div id="box">
		<div class="top">
			<h4>新建信息</h4>
		</div>
		<div class="center">
			<p>新建信息</p>
			<ul>
				<li>消息标题：<el-input  placeholder="请输入内容" v-model="input" clearable style="width:200px;"> </el-input></li>
				<li>接收者：<el-input  placeholder="请输入内容" v-model="input" clearable style="width:500px;"> </el-input>
					<el-dropdown size="mini" split-button type="primary">
					  ==请选择==
					  <el-dropdown-menu slot="dropdown">
					    <el-dropdown-item>低级</el-dropdown-item>
					    <el-dropdown-item>中级</el-dropdown-item>
					    <el-dropdown-item>高级</el-dropdown-item>
					  </el-dropdown-menu>
					</el-dropdown>
				</li>
				<li><span>信息内容：</span>
					<el-input
					  type="textarea"
					  :rows="5"
					  placeholder="请输入内容"
					  v-model="textarea"
					  style="width: 500px;margin-left: 60px;">
					</el-input>
				</li>
				<div class="button">
				  	<el-button type="primary" @click="onSubmit">保存</el-button>
				   <el-button @click="images">返回</el-button>
				  </div>
			</ul>
		</div>
	</div>
</template>

<script>
	 export default {
	    name: 'box',
	    data(){return{
	        	textarea: '',	
	        }},
	    methods:{
	    	images(){
	    		this.$router.go(-1);
	    	}
	    },
	    props:{
	           
	        },
	    components:{
	    }
	    }
</script>

<style scoped lang="scss">
	#box{
		width: 1200px;
		margin: auto;

		padding-bottom: 20px;

		.top{
			padding:5px 0px;
			background: #6795B4;
			h4{
				color: #FFFFFF;
				margin-left: 15px;
			}
		}
		.center{
			width: 80%;
			border: 1px solid black;
			margin: auto;
			margin-top: 20px;
			padding-bottom: 20px;
			background: #FFFFFF;
			font-size: 12px;
			p{
				padding:1px;
				width:50px;
				font-size: 12px;
				text-align: center;
				font-weight:900;
				position: relative;
				top: -10px;
				left: 20px;
				background: #FFFFFF;
			}
			ul{
				li{
					margin-top: 10px;
					margin-left: 20px;
				}
				li:nth-child(2){
					padding-left: 12px;	
				}
				li:nth-child(3){
					position: relative;
					span{
						position:absolute;
						left: 0px;
					}
				}	
				.button{
					width:150px;
					margin: auto;
					margin-top: 20px;
				}		
			}
		}
	}
</style>