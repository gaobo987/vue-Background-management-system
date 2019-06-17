<template>
	<div class="box">
		<div class="box1">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
		  <el-form-item label="用户名" prop="name">
		    <el-input v-model="ruleForm.name" style="width: 300px;"></el-input>
		  </el-form-item>
		  <el-form-item label="密码" prop="name">
		    <el-input v-model="ruleForm.name" style="width: 300px;"></el-input>
		  </el-form-item>
		  <el-form-item label="确认密码" prop="name">
		    <el-input v-model="ruleForm.name" style="width: 300px;"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
		    <el-button @click="resetForm('ruleForm')">取消</el-button>
		  </el-form-item>
		</el-form>
		</div>
	</div>
</template>

<script>
	export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped lang="scss">
	.box{
		width: 60%;
		margin: auto;
		.box1{
			width: 50%;
			margin: auto;
		}
	}
</style>