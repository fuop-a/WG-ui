<!--
 * @Author: “fuop-a” 3214847461@qq.com
 * @Date: 2023-04-12 19:45:30
 * @LastEditors: “fuop-a” 3214847461@qq.com
 * @LastEditTime: 2023-04-14 21:25:18
 * @FilePath: \ui\src\views\LoginView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="login-container">
    <div class="login-form">            <!-- 边框 --> 
    <div class="login-title">WG管理系统</div>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="captcha" class="captcha">
        <el-input v-model="form.captcha" class="code" style="width:100px;float:left"></el-input>
        <img :src="captchaImg" @click="getCaptcha" class="captcha-img">
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="registry">注册</el-button>
        <el-button class="login-btn" type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
    </div>            <!-- 边框 --> 
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import { setToken } from '@/http/auth.js'
export default {
data() {
    return {
      form: {
        username: '',
        password: '',
        captcha: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        captcha: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      },
      captchaImg: '',
      key:''
    }
  },
  
  methods: {
    getCaptcha() {
      // 从后端获取验证码图片并更新img标签的src属性
      this.axios.get('http://localhost:8081/captcha').then(resp => {
        console.log(resp.data);
        this.key=resp.data.data.key;
        this.captchaImg=resp.data.data.image;
      })
    },
    ...mapActions('user', ['updateName']),
    login() {
      this.$refs.form.validate(valid => { // 调用element-ui的表单验证方法
        // if (valid) { // 表单验证通过
        //   this.axios.post('http://localhost:8081/login', this.form).then(resp => {
        //     console.log(resp.data)
        //     if (resp.data.code === 200) { // 登录成功
        //       this.$router.push('/home')
        //     } else { // 登录失败
        //       this.$message.error(resp.data.msg)
        //     }
        //   })
        // }
        // 之后完成登录逻辑
        this.$http.login.getToken().then(response => {
        this.$message({
            message: "登录成功",
            type: 'success'
        })
        // 保存 token
        setToken(response.data.token)
        this.updateName(this.form.username)
        console.log(response)
        alert("登录逻辑未完成");
        this.$router.push({
            name: 'Home'
        })
    })
    })
    
  },
  mounted() {
    this.getCaptcha()
  }
}
}
</script>

<style>
body{
    background-color: #f5f5f5;
}
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff;
  background-image: linear-gradient(to right,#8e24aa,#ff4081);
  background-repeat: no-repeat;
  background-size: cover;
}

.login-form {
  width: 400px;
  padding: 40px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}
.login-btn{
    background-color: #8e24aa;
    border-color: #8e24aa;
}
.login-btn:hover {
    background-color: #ff4081;
    border-color: #ff4081;
}
</style>