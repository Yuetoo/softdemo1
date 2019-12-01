<template>
  <div >
    <div  class="el-header">
      <el-steps :active="active" finish-status="success"   align-center>
        <el-step title="忘记密码"></el-step>
        <el-step title="验证用户名"></el-step>
        <el-step title="验证密保问题"></el-step>
        <el-step title="填入新密码"></el-step>
        <el-step  title="修改成功"></el-step>
      </el-steps>
    </div>
    <div class="forget-container">
      <el-form ref="Form"   :model="user"  :rules="rules" label-position="left" label-width="0px"
               class="demo-ruleForm forget-container">
        <div class="info" v-show="active==1">
          <h3 class="title">修改密码</h3>
          <el-form-item  prop="name">
            <h4  class="forget-title">用户名：</h4>
            <el-input
              type="text"
              v-model="user.name"
              maxlength="6"
              auto-complete="off"
              placeholder="用户名"
              show-word-limit
            >
            </el-input>
            <el-button style="margin-top: 50px;" @click="validateusername(user.name)" :disabled="allow">下一步</el-button>
          </el-form-item>
        </div>
          <div class="info" v-if="active==2">
            <h4  class="forget-title">密保问题：</h4>
            {{this.question}}
            <h4  class="-title" >答案：</h4>
            <el-form-item prop="as">
              <el-input  type="text" v-model="user.answer"  auto-complete="off" placeholder="答案"></el-input>
            </el-form-item>
            <el-button style="margin-top: 12px;"  @click="cAsn" :disabled="allow2">下一步</el-button>
          </div>

        <div class="info" v-show="active==3">
          <h3 class="title">忘记密码</h3>
          <el-form-item prop="psd">
            <h4  class="-title" >新密码：</h4>
            <el-input  type="password" v-model="user.password"
                       auto-complete="off"
                       laceholder="密码"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="spsd">
            <h4  class="-title">请再次输入密码：</h4>
            <el-input
              type="password"
              v-model="user.spassword"
              auto-complete="off"
              :disabled="can"
              placeholder="确认密码"
            >
            </el-input>
          </el-form-item>
          <el-button style="margin-top: 12px;"  @click="next" :disabled="allow1">下一步</el-button>
        </div>

        <div class="info" v-show="active==4" >
          <router-link :to="{path: '/login'}">  <el-button style="margin-top: 12px;"  @click="register(user)" >完成修改</el-button></router-link>
        </div>
      </el-form>
    </div>
    <div class="footer">
      <footer-copyright></footer-copyright>
    </div>
  </div>
</template>

<script>
    import qs  from "qs"
    import axios from  "axios"
    export default {
        name:"forget",
        data() {
            let validateAccount = (rules, value, callback) => {
                let errors = [];
                if (value==''){
                    callback('不能为空');
                    this.validateun();
                }
                else {
                    if (!/^[a-z0-9_]+$/.test(value)) {
                        callback('请输入字母数字或下划线');
                        this.validateun();
                    } else {
                        this.validateun();
                    }
                }

            };
            let validatePsd = (rules, value, callback) =>{
                let errors = [];
                if (this.user.password==''){
                    callback('密码不能为空');
                    this.validatepsd();
                }
                else {

                    if(!this.user.password.match(/[0-9]/)){
                        callback('密码应该包含数字(￣o￣) . z Z')

                    }
                    else
                    {
                        if (!this.user.password.match(/[a-z]/)) {
                            callback('密码应该包含字母(￣o￣) . z Z');
                            this.validatepsd();
                        }
                        else{
                            if(!this.user.password.match(/[A-Z]/)){
                                callback('密码应该包含大写英文(￣o￣) . z Z');

                            }else{
                                if(!this.user.password.match(/[`～*~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/)){
                                    callback('密码应该包含特殊符号(￣o￣) . z Z');
                                }
                            }
                        }
                    }
                }
            };
            let validatesPsd = (rules, value, callback) => {
                let errors = [];
                if (this.user.spassword==''){
                    callback('请再次输入密码(＾Ｕ＾)ノ~');

                }
                else {
                    this.validatepsd();
                    if(this.user.password!=this.user.spassword){
                        callback('两次密码输入不同');
                        this.validatepsd();
                    }else{
                        this.validatepsd();
                    }
                }
            };
            let validatesAs = (rules, value, callback) => {
                let errors = [];
                if (this.user.answer==''){
                    callback('请输入密保答案(＾Ｕ＾)ノ~');
                    this.validateas();
                }else{
                    this.validateas();
                }
                this.validateas();

            };
            return {
                ex:false,
                bj:true,
                bj1:true,
                can:true,
                allow:true,
                allow1:true,
                allow2:true,
                lable:'',
                label1:'',
                question:'',
                user:{
                    name:'',
                    password:'',
                    spassword:'',
                    answer:'',
                },
                rules: {
                    name: [
                        { required: true, validator: validateAccount, trigger: 'change' }
                    ],
                    psd:[
                        {required: true,validator:validatePsd,trigger:'change'}
                    ],
                    spsd:[
                        {required: true,validator:validatesPsd,trigger:'change'}
                    ],
                    as:[
                        { required: true, validator: validatesAs, trigger: 'change' }
                    ],

                },
                active: 1,
            }

        },

        methods: {
            cAsn(){
                let that = this
                let form1=new FormData();
                console.log(6666)
                form1.append("answer",this.user.answer)
                console.log(7777)
                axios.post('http://x238742m66.wicp.vip/checkAnswer',form1).then(function (res){
                    console.log(res.data.msg)
                    if (res.data.msg.match(/ok/g)){
                        that.next();
                    }else
                    {
                        that.$message.error('密保问题验证失败');
                    }
                }).catch(function (erro){
                    console.log(erro)

                })

            },
            next() {
                if (this.active++ >5 )
                {

                }
            },
            validateun(){
                if (!/^[a-z0-9_]+$/.test(this.user.name)){
                    this.allow = true;
                }
                else {
                    if (this.user.name.trim().length > 0) {
                        this.allow = false;
                    } else {
                        this.allow = true;
                    }
                }
            },
            validatepsd(){
                if(this.user.password!=''){
                    this.can=false;
                    if (this.user.password!='' && this.user.spassword!=''){
                        if(this.user.password==this.user.spassword){
                            this.allow1=false;
                        }
                        else {
                            this.allow1=true;
                        }
                    }
                }
                else {
                    this.can=true;
                }
            },
            validateas(){
                if(!this.user.answer==''){
                        this.allow2=false;
                }
            },
            validateusername(v){
                let that = this
                let form1=new FormData();
                form1.append("userName",v)
                this.$axios.post('http://x238742m66.wicp.vip/Admin/getUser',form1).then(function (res){
                    console.log(res.data.msg)
                    if (res.data.msg.match(/erro/g)){
                        that.$message.error('很抱歉，该用户名已存在∑(っ°Д°;)っ');
                    }else
                    {
                        that.next();
                    }
                }).catch(function (erro){
                    console.log(erro)

                })

            },
            register(formdata){
                let that=this;
                let form =new FormData();
                form.append("userName",formdata.name);
                form.append("answer",formdata.answer);
                form.append("question",this.label1)
                form.append("school",this.label);
                form.append("password",formdata.password);
                this.$axios.post('http://x238742m66.wicp.vip/register',form).then(function (res) {
                    if(res.data.msg.match(/注册成功/g)){
                        that.next();
                    }else{
                        that.$message.error("注册失败 ∑(っ°Д°;)っ")
                    }
                }).catch(function (erro) {

                })
            },
            currentop(list){
                this.label=list.label;
                this.value=list.value;
                if(!this.label=='') {
                    if (this.user.password != '' && this.user.spassword != '') {
                        if (this.user.password == this.user.spassword) {
                            this.allow1 = false;
                        }

                    }
                    this.bj = false;
                }
                console.log("选择的name为：" + this.label, "选择的code为:" + this.value);

            },
            currentop1(S){
                this.label1=S.label;
                this.value1=S.value;
                if(!this.label1=='') {
                    if(this.user.answer!=''){
                        this.allow2=false
                    }
                    this.bj1= false;
                }

                console.log("选择的name为：" + this.label1, "选择的code为:" + this.value1);

            }
        }
    }
</script>
<style scoped>
  body {
    background: #DFE9FB;
  }
  .el-header{
    margin:  50px auto;
    width: 800px;
  }
  .forget-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    position: relative;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 0px auto;
    width: 400px;
    padding: 35px 35px 15px 35px;
    background: -ms-linear-gradient(top, #ace, #00C1DE); /* IE 10 */
    background: -moz-linear-gradient(top, #ace, #00C1DE); /*火狐*/
    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#ace), to(#00C1DE)); /*谷歌*/
    background: -webkit-linear-gradient(top, #ace, #00C1DE); /*Safari5.1 Chrome 10+*/
    background: -o-linear-gradient(top,#ace, #00C1DE); /*Opera 11.10+*/

  }
  .forget-container .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .forget-title {
    text-align: left;
    color: #505458;
  }
  .forget-container .remember {
    margin: 0px 0px 35px 0px;
  }
  .info{
    margin:  0px auto;
    height: 600px;
  }
  .-title {
    margin-top: 30px;
    text-align: left;
    color: #505458;
  }
  .select{
    width: 300px;
  }
</style>
