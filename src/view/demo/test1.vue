<template>
  <div>
    <el-form ref="AccountForm" :model="account" :rules="rules" label-position="left" label-width="0px"
             class="demo-ruleForm login-container">
      <el-form-item prop="username">
        <el-input type="text" v-model="account.username" auto-complete="off" placeholder="手机号或公司企业码"></el-input>
      </el-form-item>
       <el-button style="margin-top: 50px;"  >下一步</el-button>
    </el-form>
    <div class="footer">
      <footer-copyright></footer-copyright>
    </div>
  </div>
</template>
<script>
    export default {
        data() {
            var validateAccount = (rules, value, callback) => {
                if (!value) {
                    return callback();
                }
                if (value) {
                    setTimeout(() => {
                        var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                        if (!reg.test(value)) {
                            callback(new Error('请输入字母数字或下划线'));
                        } else {
                            callback();
                        }
                    }, 500);
                }
            };
            var validatePwd = (rules, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.account.pwd !== '') {
                        this.account.pwd = value;
                        this.validateCorrect();
                    }
                    callback();
                }
            };
            return {
                allow:true,
                account: {
                    username: '',
                    pwd: ''
                },
                rules: {
                    username: [
                        { required: true, message: '年龄不能为空'},

                    ],
                },
            };
        },

        methods: {

            validateuser(){
                if(this.user.name.trim().length > 0){
                    this.allow= false;
                } else {
                    this.allow = true;
                }
            }
        }
    }
</script>
<style scoped>

</style>
