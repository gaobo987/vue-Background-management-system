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
			    style="width: 100%; text-align: center;"
			    @selection-change="handleSelectionChange">
			    <el-table-column
			      prop="companyname"
			      label="序列"
			      width="120">
			    </el-table-column>
			    <el-table-column
			      label="员工姓名"
			      width="90">
			       <template slot-scope="scope">{{ scope.row.fa }}</template>
			    </el-table-column>
			    <el-table-column
			      prop="date"
			      label="年份"
			      width="90">
			    </el-table-column>
			    <el-table-column
			      prop="yue"
			      label="月份"
			      width="100">
			    </el-table-column>
			    <el-table-column
			      label="总工资"
			      width="120">
			      <template slot-scope="scope">{{ scope.row.zong}}</template>
			    </el-table-column>
			    <el-table-column
			      label="扣除工资"
			      width="80">
			      <template slot-scope="scope">{{ scope.row.kou }}</template>
			    </el-table-column>
			    <el-table-column
			      label="实发工资"
			      width="80">
			      <template slot-scope="scope">{{ scope.row.age }}</template>
			    </el-table-column>
			    <el-table-column
			      label="状态"
			      width="120">
			      <template slot-scope="scope">{{ scope.row.zhuang }}</template>
			    </el-table-column>
			    <el-table-column
			      label="发款人"
			      width="120">
			      <template slot-scope="scope">{{ scope.row.name }}</template>
			    </el-table-column>
			    <el-table-column
			      fixed="right"
			      label="操作"
			      width="200">
			      <template slot-scope="scope" >
			        <router-link to="./schedule"><el-button type="text" size="small">查看</el-button></router-link>
			     	<el-button @click="handleClick(scope.row)" type="text" size="small">已发</el-button>
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
	    	value1:'',
	    	currentPage5: 5,
	    tableData: [{
          date: '2008年',
          companyname: '1',
          zong:'500万',
          fa:'张三',
          name:'伟华',
          kou:'499万',
          number:'1111111111',
          age:'10000',
          zhuang:'已发放',
          yue:'8月'
        }, {
          date: '2008年',
          companyname: '1',
          zong:'500万',
          fa:'张三',
          kou:'499万',
          name:'伟华',
          number:'1111111111',
          age:'10000',
          zhuang:'已发放',
          yue:'8月'
        }, {
          date: '2008年',
          companyname: '1',
          zong:'500万',
          fa:'张三',
          kou:'499万',
          name:'伟华',
          number:'1111111111',
          age:'10000',
          zhuang:'已发放',
          yue:'8月'
        }, {
          date: '2008年',
          companyname: '1',
          zong:'500万',
          fa:'张三',
          kou:'499万',
          name:'伟华',
          number:'1111111111',
          age:'10000',
          zhuang:'已发放',
          yue:'8月'
        }, {
          date: '2008年',
          companyname: '1',
          zong:'500万',
          fa:'张三',
          kou:'499万',
          name:'伟华',
          number:'1111111111',
          age:'10000',
          zhuang:'已发放',
          yue:'8月'
        }, {
          date: '2008年',
          companyname: '1',
          zong:'500万',
          fa:'张三',
          kou:'499万',
          name:'伟华',
          number:'1111111111',
          age:'10000',
          zhuang:'已发放',
          yue:'8月'
        }, {
          date: '2008年',
          companyname: '1',
          zong:'500万',
          fa:'张三',
          kou:'499万',
          name:'伟华',
          number:'1111111111',
          age:'10000',
          zhuang:'已发放',
          yue:'8月'
        }],
	        }},
	    methods:{
			    deleteRow(index, rows) {
		        rows.splice(index, 1);
		      },
		       handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
		      },
		      handleSelectionChange(val) {
		        this.multipleSelection = val;
		      },
		       handleSizeChange(val) {
		        console.log(`每页 ${val} 条`);
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
		    	    background-image: url(../../../static/img/button10.gif);
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
			width:100%;
			margin: auto;
		}
		.button{
			display: flex;
			justify-content: space-between;
			margin-top: 20px;
			border-top: 1px solid black;
			padding-top: 10px;
			
			.ye{
				width: 300px;
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