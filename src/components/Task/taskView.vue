<template>
	<div class="box">
		<div class="top">
			<p class="el-icon-search"></p>
			<span>查询内容：按时间</span>
			<el-date-picker
		      v-model="value1"
		      type="daterange"
		      range-separator="至"
		      start-placeholder="开始日期"
		      end-placeholder="结束日期">
		    </el-date-picker>
		    <el-button type="primary">查询</el-button>
		</div>
		<div class="center">
			<el-table
			    ref="multipleTable"
			    :data="tableData"
			    tooltip-effect="dark"
			    style="width: 100%"
			    @selection-change="handleSelectionChange">
			    <el-table-column
			      type="selection"
			      width="55">
			    </el-table-column>
			    
			    <el-table-column
			      prop="name"
			      label="任务标题"
			      width="120">
			    </el-table-column>
			    <el-table-column
			      label="日期"
			      width="120">
			      <template slot-scope="scope">{{ scope.row.date }}</template>
			    </el-table-column>
			    <el-table-column
			      label="发送者"
			      width="120">
			      <template slot-scope="scope">{{ scope.row.fa }}</template>
			    </el-table-column>
			    <el-table-column
			      label="执行人"
			      width="120">
			      <template slot-scope="scope">{{ scope.row.fa }}</template>
			    </el-table-column>
			    <el-table-column
			      label="优先级"
			      width="120">
			      <template slot-scope="scope">{{ scope.row.you }}</template>
			    </el-table-column>
			    <el-table-column
			      fixed="right"
			      label="操作"
			      width="200">
			      <template slot-scope="scope" >
			         <router-link to="./detailed"><el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button></router-link>
			        <router-link to="./Taskaddition"><el-button type="text" size="small">编辑</el-button></router-link>
			        <el-button @click.native.prevent="deleteRow(scope.$index, tableData)"type="text"
			          size="small">
			          		移除
			        </el-button>
			      </template>
			    </el-table-column>
			  </el-table>
		</div>
		<div class="button">
			 <div class="ye">
			  	<p>共<span>5</span>页</p>|<p>第<span>1</span>页</p>
			  </div>
			  <div class="center">
			  	<el-button type="success" plain>删除所有任务</el-button>
			  	<el-button type="success" plain>添加任务</el-button>
			  </div>
			<div class="block">
			    <el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page="currentPage5"
			      :page-sizes="[100, 200, 300, 400 ,500]"
			      :page-size="100"
			      layout=" prev, pager, next, jumper"
			      :total="500">
			    </el-pagination>
			  </div>
			 
		</div>
	</div>
</template>
<script>
	const cityOptions = ['1', '2', '3', '4'];
	 export default {
	    name: 'box',
	    data(){return{
	    	currentPage5: 5,
	    		tableData: [{
          date: '2016-05-03',
          name: '任务XXX',
          address: '上海市普陀区金沙江路 1518 弄',
          fa:'xxxx',
          you:'急'
        }, {
          date: '2016-05-02',
          name: '任务XXX',
          address: '上海市普陀区金沙江路 1518 弄',
          fa:'xxxx',
          you:'急'
        }, {
          date: '2017-11-11',
          name: '任务XXX',
          address: '上海市普陀区金沙江路 1518 弄',
          fa:'xxxx',
          you:'急'
        }, {
          date: '2017-11-11',
          name: '任务XXX',
          address: '上海市普陀区金沙江路 1518 弄',
          fa:'xxxx',
          you:'急'
        }, {
          date: '2017-11-11',
          name: '任务XXX',
          address: '上海市普陀区金沙江路 1518 弄',
          fa:'xxxx',
          you:'急'
        }, {
          date: '2017-11-11',
          name: '任务XXX',
          address: '上海市普陀区金沙江路 1518 弄',
          fa:'xxxx',
          you:'急'
          
        }, {
          date: '2017-11-11',
          name: '任务XXX',
          address: '上海市普陀区金沙江路 1518 弄',
          fa:'xxxx',
          you:'急'
        }],
	        }},
	    methods:{
			    deleteRow(index, rows) {
		        rows.splice(index, 1);
		      },
		       handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
		      },
		     },
	    props:{
	           
	        },
	    components:{
	    }
	    }
</script>
<style scoped lang="scss">
	.box{
		width: 1200px;
		margin: auto;
		 .top{
			line-height: 50px;
			padding-left: 20px;
			background-size: 100% 100%;
	
		    height:50px;
			 p{
			position: relative;
			top: 2px;
			font-size: 18px;
		}
		span{
			font-size: 14px;
		}
		}
		.center{
			margin-left: 50px;
			width:75%;
			margin: auto;
		}
		.button{
			display: flex;
			justify-content: space-between;
			margin-top: 20px;
			border-top: 1px solid black;
			padding-top: 10px;
			 .ye{
				width: 200px;
				font-size: 14pxs;
				display: flex;
				flex-wrap: wrap;
				 span{
					color: red;
				}
			}
			.center{
				width: 200px;
			}
		}
	}
</style>