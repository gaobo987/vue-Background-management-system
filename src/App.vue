<template>
  <div id="app">
  	<el-header class="h-div1">
  			<img src="../static/img/logo.gif"/>
  	</el-header>
  	<el-container class="cont">
  			<el-aside class="aside">
  					<div class="a-div1">
  						<img src="../static/img/ico02.gif"/>
  							<div class="div1-1">
  								<p>你好，{{msg}}</p>
  								<el-button type="text">[&nbsp;&nbsp;退出&nbsp;&nbsp;]</el-button>
  							</div>
						</div>
						<el-collapse v-model="activeNames" accordion class="a-div2">
						 <el-collapse-item title="任务管理" name="1">
						   <div class="e-item"><i class="el-icon-s-order"></i><router-link to="./createTask">创建任务</router-link></div>
						    <div class="e-item"><i class="el-icon-s-order"></i><router-link to="./taskView">任务信息查看</router-link></div>
						  </el-collapse-item>
						  <el-collapse-item title="消息管理" >
						    <div class="e-item"><i class="el-icon-chat-round"></i><router-link to="./send" class="ro-font">发送消息</router-link></div>
						    <div class="e-item"><i class="el-icon-chat-round"></i><router-link to="./Receiving">收件信息查看</router-link></div>
						    <div class="e-item"><i class="el-icon-chat-round"></i><router-link to="./Shipping">发件信息查看</router-link></div>
						    <div class="e-item"><i class="el-icon-chat-round"></i><router-link to="./Message">消息信息列表</router-link></div>
						  </el-collapse-item>
						  <el-collapse-item title="项目系统">
						    <div class="e-item"><i class="el-icon-folder-opened"></i><router-link to="./Basic">项目基本信息查看</router-link></div>
						    <div class="e-item"><i class="el-icon-folder-opened"></i><router-link to="./plan">项目计划信息查看</router-link></div>
						    <div class="e-item"><i class="el-icon-folder-opened"></i><router-link to="./demand">项目需求信息查看</router-link></div>
						    <div class="e-item"><i class="el-icon-folder-opened"></i><router-link to="./Module">项目模块信息查看</router-link></div>
						    <div class="e-item"><i class="el-icon-folder-opened"></i><router-link to="./Features">项目功能信息查看</router-link></div>
						    <div class="e-item"><i class="el-icon-folder-opened"></i><router-link to="./Demanddetails">项目上传信息查看</router-link></div>
						    <div class="e-item"><i class="el-icon-folder-opened"></i><router-link to="./cost">项目成本信息查看</router-link></div>
						  </el-collapse-item>
						  <el-collapse-item title="客户系统">
						    <div class="e-item"><i class="el-icon-s-custom"><router-link to="./client">客户信息查看</router-link></i></div>
						  </el-collapse-item>
						  <el-collapse-item title="人员系统">
						    <div class="e-item"><i class="el-icon-user-solid"></i><router-link to="./information">人员信息查看</router-link></div>
						    <div class="e-item"><i class="el-icon-user-solid"></i><router-link to="./Position">职务信息查看</router-link></div>
						    <div class="e-item"><i class="el-icon-user-solid"></i><router-link to="./jobs">员工工作情况查看</router-link></div>
						  </el-collapse-item>
						  <el-collapse-item title="考勤系统">
						    <div class="e-item"><i class="el-icon-edit-outline"></i><router-link to="./Attendance">考勤类型查看</router-link></div>
						   	<div class="e-item"><i class="el-icon-edit-outline"></i><router-link to="./jobss">员工考勤信息查看</router-link></div>
						
						  </el-collapse-item>
						  <el-collapse-item title="系统管理">
						    <div class="e-item"><i class="el-icon-setting"></i><router-link to="./registered">添加用户</router-link></div>
						    <div class="e-item"><i class="el-icon-setting"></i><router-link to="./manual">添加角色</router-link></div>
						  </el-collapse-item>
						  <el-collapse-item title="系统帮助">
						    <div class="e-item"><i class="el-icon-help"></i><router-link to="./manual">用户手册</router-link></div>
						     <div class="e-item"><i class="el-icon-help"></i><router-link to="./manual">规章制度</router-link></div>
						  </el-collapse-item>
  						<el-collapse-item title="个人管理">
    						<div class="e-item"><i class="el-icon-user"></i><router-link to="./manual">个人信息查看</router-link></div>
    						<div class="e-item"><i class="el-icon-user"></i><router-link to="./taskView">任务信息查看</router-link></div>
  						</el-collapse-item>
						</el-collapse>
 					</el-aside>
  	<el-main class="main">
  		<router-view></router-view>
  	</el-main>
  	</el-container>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style long="scss">

</style>
