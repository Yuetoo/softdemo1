<template>
  <div>
      <div  class="header-content"  id="bg"></div>
    <el-form ref="AccountForm" :model="account" :rules="rules" label-position="left" label-width="0px"
             class="demo-ruleForm login-container">
      <h2 class="ltitle">校园二手交易平台</h2>
      <h3 class="ltitle">欢迎登录</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="account.username" auto-complete="off" maxlength="6" show-word-limit placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input type="password" v-model="account.pwd" :autofocus="pwdFocus" auto-complete="off" placeholder="请输入登录密码"></el-input>
      </el-form-item>
      <!--<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>-->
      <el-form-item class="extra-text">
        <a href="javascript:;" class="forget-pwd" title="找回密码">忘记密码</a>
        <router-link :to="{path: '/register'}" class="reg-text" title="立即注册">立即注册</router-link>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click.native.prevent="handleLogin" :disabled="allowLogin" :loading="loading">登录</el-button>
      </el-form-item>
    </el-form>
    <div class="footer">
      <footer-copyright></footer-copyright>
    </div>
  </div>
</template>
<script>
    import API from '../../api/api_user'
    export default {
        data() {
            let validateAccount = (rules, value, callback) => {
                if (value == '') {
                    callback(new Error('请输入账号(✪ω✪)') )
                    this.validateCorrect();
                } else {
                    if (!/^[a-z0-9_]+$/.test(value)) {
                        callback(new Error('请输入字母数字或下划线'));
                        this.validateCorrect();
                    }
                    this.validateCorrect();
                }
            };
            let validatePwd = (rules, value, callback) => {
                if (value == '') {
                    callback(new Error('密码不能为空嗷o(´^｀)o'));
                    this.validateCorrect();
                }else
                {
                    this.validateCorrect();
                }
            };
            return {
                loading: false,
                account: {
                    username: '',
                    pwd: ''
                },
                rules: {
                    username: [
                        { required: true, validator: validateAccount, trigger: 'change' }

                    ],
                    pwd: [
                        {required: true, validator: validatePwd, trigger: 'change'}
                    ]
                },
                pwdFocus: false,
                allowLogin: true,
                checked: true
            };
        },
        created() {
            let reg_user = JSON.parse(window.localStorage.getItem('register-user'));
            if (reg_user) {
                this.account.username = reg_user.username;
                this.account.pwd = '';
                this.pwdFocus = true;
            }
        },
        methods: {
            handleLogin(){
                let that = this;
                let result = new FormData();
                result.append("userName",this.account.username);
                result.append("password",this.account.pwd);
                this.loading = true;
                this.$axios.post('http://x238742m66.wicp.vip/login',result).then(function (res) {
                    if(res.data.msg==="ok"){
                        localStorage.setItem('access-user', JSON.stringify(result));
                        localStorage.setItem('Authorization',res.data.token);
                        window.localStorage.removeItem('register-user');
                        that.$router.push({path: '/'});
                    }else {
                        that.loading = false;
                        that.$message.error("登录失败，账号或密码错误");
                    }

                }).catch(function (erro) {
                     that.$message.error(erro)
                })
            },
            validateCorrect(){
                if(this.account.pwd !='' ){
                   if(this.account.username!='') {
                       this.allowLogin = false;
                    }else
                   {
                       this.allowLogin = true;
                   }
                } else {
                    this.allowLogin = true;
                }
            }
        }
    }
</script>
<style scoped>
  #bg{
    background:url("../../assets/images/bg.jpg");
    width:100%;
    height:100%;
    position:fixed;
    background-size:100% 100%;
  }
  body {
    background: #dddddd;
  }
  .header-content {
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    padding: 6px 0;
    border-bottom: 1px solid #ddd;
    box-shadow: 0 0 2px #ddd;
  }
  .header-content .logo-part {
    margin-left: 10px;
    font-size: 18px;
    color: #999;
  }
  .header-content .logo-part img {
    vertical-align: middle;
  }
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 160px auto;
    width: 350px;
    position: relative;
    padding: 35px 35px 15px 35px;
    background: #dddddd;
    border: 1px solid #fafafa;
    box-shadow: 0 0 25px #cac6c6;

    background: -ms-linear-gradient(top, #ace, #00C1DE); /* IE 10 */
    background: -moz-linear-gradient(top, #ace, #00C1DE); /*火狐*/
    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#ace), to(#00C1DE)); /*谷歌*/
    background: -webkit-linear-gradient(top, #ace, #00C1DE); /*Safari5.1 Chrome 10+*/
    background: -o-linear-gradient(top,#ace, #00C1DE); /*Opera 11.10+*/

  }
  .login-container .ltitle {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .login-container .remember {
    margin: 0px 0px 35px 0px;
  }
  .extra-text {
    position: relative;
    margin-bottom: 0;
    padding-left: 2px;
  }
  .extra-text a {
    font-size: 12px;
    color: #aaa;
  }
  .extra-text a:hover {
    color: #29e;
  }
  .extra-text .reg-text {
    position: absolute;
    top: 4px;
    right: 2px;
  }
</style>
