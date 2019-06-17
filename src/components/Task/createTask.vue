<template>
	<div id="box">
		<div class="top">
			<h4>任务添加页面</h4>
		</div>
		<div class="center">
			<p>添加任务</p>
			<el-form ref="form" :model="form" label-width="100px" style=" width: 80%;margin: auto;padding-left: 220px;">
			  <el-form-item label="任务标题">
			    <el-input v-model="form.name" style="width:60%;"></el-input>
			  </el-form-item>
			   <el-form-item label="工期">
			    <el-input v-model="form.name1" style="width:60%;"></el-input>
			  </el-form-item>
			  </el-form-item>
			  <el-form-item label="计划开始时间" style="width:52%;">
			    <el-col :span="11">
			      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 150px;"></el-date-picker>
			    </el-col>
			    <el-col class="line" :span="2" >-</el-col>
			    <el-col :span="11">
			      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width:150px;"></el-time-picker>
			    </el-col>
			  </el-form-item>
			  <el-form-item label="计划结束时间" style="width:52%;">
			    <el-col :span="11">
			      <el-date-picker type="date" placeholder="选择日期" v-model="form.date4" style="width: 150px;"></el-date-picker>
			    </el-col>
			    <el-col class="line" :span="2" >-</el-col>
			    <el-col :span="11">
			      <el-time-picker placeholder="选择时间" v-model="form.date3" style="width:150px;"></el-time-picker>
			    </el-col>
			  </el-form-item>
			  <div class="center1">
			  	<el-form-item label="任务执行人">
			    	<el-select v-model="form.region" placeholder="==请选择==" style="width: 100px;">
				      	<el-option label="程序员" value="shanghai"></el-option>
				      	<el-option label="项目经理" value="beijing"></el-option>
				      	<el-option label="经理" value="beijing"></el-option>
			    	</el-select>
			  </el-form-item>
			  <el-form-item label="优先级" >
			  <el-select v-model="form.region1" placeholder="==请选择==" style="width: 100px;">
				      	<el-option label="暂不" value="shanghai1"></el-option>
				      	<el-option label="一般" value="beijing1"></el-option>
				      	<el-option label="急" value="beijing1"></el-option>
				      	<el-option label="需要" value="beijing1"></el-option>
				      	<el-option label="很急" value="beijing1"></el-option>
			    	</el-select>
			    </el-form-item>
			  </div>
			  <div class="center1">
			  	<el-form-item label="任务类型">
			    	<el-select v-model="form.region" placeholder="==请选择==" style="width: 100px;">
				      	<el-option label="程序员" value="shanghai"></el-option>
				      	<el-option label="项目经理" value="beijing"></el-option>
				      	<el-option label="经理" value="beijing"></el-option>
			    	</el-select>
			  </el-form-item>
			  <el-form-item label="状态" >
			  <el-select v-model="form.region1" placeholder="==请选择==" style="width: 100px;">
				      	<el-option label="程序员" value="shanghai"></el-option>
				      	<el-option label="项目经理" value="beijing"></el-option>
				      	<el-option label="经理" value="beijing"></el-option>
			    	</el-select>
			    </el-form-item>
			  </div>
			  <div class="center1">
			  	<el-form-item label="项目模块">
			    	<el-select v-model="form.region" placeholder="==请选择==" style="width: 100px;">
				      	<el-option label="AAAAA" value="shanghai"></el-option>
				      	<el-option label="BBBBB" value="beijing"></el-option>
				      	<el-option label="CCCCC" value="beijing"></el-option>
			    	</el-select>
			  </el-form-item>
			  <el-form-item label="项目功能" >
			  <el-select v-model="form.region1" placeholder="==请选择==" style="width: 100px;">
				      	<el-option label="AAAAA" value="shanghai"></el-option>
				      	<el-option label="BBBBB" value="beijing"></el-option>
				      	<el-option label="CCCCC" value="beijing"></el-option>
			    	</el-select>
			    </el-form-item>
			  </div>
			   <div class="center1">
			  	<el-form-item label="是否超期">
			    	<el-select v-model="form.region" placeholder="==请选择==" style="width: 100px;">
				      	<el-option label="程序员" value="shanghai"></el-option>
				      	<el-option label="项目经理" value="beijing"></el-option>
				      	<el-option label="经理" value="beijing"></el-option>
			    	</el-select>
			  </el-form-item>
			  </div>
			  <el-form-item label="计划备注">
			    <el-input type="textarea" v-model="form.desc" style="width:60%;"></el-input>
			  </el-form-item>
			  <div class="button">
			  	<el-button type="primary" @click="onSubmit">保存</el-button>
			   <el-button @click="images">返回</el-button>
			  </div>
		</el-form>
		</div>
	</div>
</template>

<script>
	 export default {
	    name: 'box',
	    data(){return{
	        formInline: {
		          user: '',
		          region: ''
		       },
		       form: {
		          name: '',
		          region: '',
		          date1: '',
		          date2: '',
		          delivery: false,
		          type: [],
		          resource: '',
		          desc: ''
		        }
			        
	        }},
	    methods:{
	    	onSubmit() {
		        console.log('submit!');
		    },
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
	/*	border: 1px solid #6795B4;*/
		padding-bottom: 20px;
	/*	background: #767676;*/
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
			.center1{
				display: flex;
				flex-wrap: wrap;
			}
			.button{
				width:400px;
				margin: auto;
			}
		}
	}
</style>