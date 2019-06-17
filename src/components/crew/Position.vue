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
			      type="selection"
			      width="55">
			    </el-table-column>
			    <el-table-column
			      label="真实姓名"
			      width="400">
			      <template slot-scope="scope">{{ scope.row.fa }}</template>
			    </el-table-column>
			    <el-table-column
			      prop=""
			      label="备注"
			      width="120">
			    </el-table-column>
			    <el-table-column
			      fixed="right"
			      label="操作"
			      width="200">
			      <template slot-scope="scope" >
			        <router-link to="./Taskaddition"><el-button type="text" size="small">编辑</el-button></router-link>
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
          date: '	1985-04-06',
          companyname: '1235',
          Typesof:'实习',
          fa:'正式员工',
          position:'程序员',
        }, {
          date: '	1985-04-06',
          companyname: '1235',
          Typesof:'实习',
          fa:'gezhaofeng',
          sex:'男',
          position:'程序员',
          number:'1111111111',
          age:'18',
          phone:'123456'
        }, {
          date: '	1985-04-06',
          companyname: '1235',
          Typesof:'',
          fa:'gezhaofeng',
          sex:'男',
          position:'程序员',
          number:'1111111111',
          age:'18',
          phone:'123456'
        }, {
          date: '	1985-04-06',
          companyname: '1235',
          Typesof:'',
          fa:'gezhaofeng',
          sex:'男',
          position:'程序员',
          number:'1111111111',
          age:'18',
          phone:'123456'
        }, {
          date: '	1985-04-06',
          companyname: '1235',
          Typesof:'',
          fa:'gezhaofeng',
          sex:'男',
          position:'程序员',
          number:'1111111111',
          age:'18',
          phone:'123456'
        }, {
          date: '	1985-04-06',
          companyname: '1235',
          Typesof:'',
          fa:'gezhaofeng',
          sex:'男',
          position:'程序员',
          number:'1111111111',
          age:'18',
          phone:'123456'
        }, {
          date: '	1985-04-06',
          companyname: '1235',
          Typesof:'',
          fa:'gezhaofeng',
          sex:'男',
          position:'程序员',
          number:'1111111111',
          age:'18',
          phone:'123456'
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
			width:80%;
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