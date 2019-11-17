<template>
  <!--<div id="login">

      <h1> {{msg}}</h1>
  </div>-->

  <el-form ref='AccountFrom' :model='account' :rules='rules' lable-position='center'  lable-width='200px' class='demo-ruleForm login-container'
           >
    <h3 class="title">登录系统首页</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="account.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="pwd">
      <el-input type="password" v-model="account.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary"
                 style="width:100%;" @click.native.prevent='handleLogin'
                 @click="openFullScreen"
                 v-loading.fullscreen.lock="fullscreenLoading">登录</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
    //引入api.js  好调用里面的接口
    import {requestLogin} from '../../api/api';
    export default {
        name: 'login',
        data() {
            return {
                fullscreenLoading: false,
                logining: false,
                account: {
                    username: '',
                    password: '',
                },
                rules: {
                    username: [{
                        required: true,
                        message: '请输入账号',
                        trigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }]
                },
                checked: true
            }
        },
        methods:{
            openFullScreen() {
                this.fullscreenLoading = true;
                setTimeout(() => {
                    this.fullscreenLoading = false;
                }, 2000);
            },
            openFullScreen() {
                const loading = this.$loading({
                    lock: true,
                    text: '蔡卓平爬坡中。。。。。',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                setTimeout(() => {
                    loading.close();
                }, 500);
            },
            handleLogin(){
                this.$refs.AccountFrom.validate((valid)=>{

                    if(valid){
                        //验证通过 可以提交
                        this.logining = true;
                        //将提交的数据进行封装
                        var loginParams = {username : this.account.username,password:this.account.password};

                        //调用函数  传递参数 获取结果
                        requestLogin(loginParams).then(data=>{
                            this.logining = false;
                            console.log(data)
                            if(data.code == '200'){
                                //登录成功
                                sessionStorage.setItem('access-token',data.token);
                                //用vue路由跳转到后台主界面
                                this.$router.push({path:'/Home'});
                            }
                            else if(data.code == '201')
                                      {
                                          console.log(7777);
                                    sessionStorage.setItem('access-token',data.token);
                                     this.$router.push({path:'/nom'});
                                      }
                                else {
                                this.$message({
                                    message:data.msg,
                                    type:'error'
                                });
                            }
                        })

                    }else{
                        console.log('error submit');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style>
  body {
    background: #DFE9FB;
  }

  .login-container {
    width: 350px;
    margin-left: 35%;
  }
</style>
