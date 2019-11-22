<template>


<div>
  <el-form ref="Form" :model="formdata" :rules="rules" label-position="left" label-width="0px"
           class="demo-ruleForm login-container">
    <el-form-item prop="username" >
      <el-input
       :validate-event=true
        style="width: 300px"
        type="password"
        maxlength="10"
        auto-complete="off"
        placeholder="用户名"
        show-word-limit
        v-model="formdata.username"
      >
      </el-input>
    </el-form-item>
    <el-button style="margin-top: 50px;" @click="next" :disabled="allow">下一步</el-button>
  </el-form>

</div>
</template>
<script>
  import qs from "qs"
    export default {
        name: "test",
        data(){
            let validateAccount = (rules, value, callback) => {
                let errors = [];
                if (value==''){
                    callback('不能为空');
                    this.validateCorrect();
                }
                else{

                      if (!/^[a-z0-9]+$/.test(value)) {
                        callback('年龄必须为数字值....');
                        this.validateCorrect();
                    }
                    this.validateCorrect();
                }


            };
        return {
             allow:'',
            formdata: {
                username: '',
                pwd: ''
            },
            rules: {
                username: [
                    { required: true, validator: validateAccount, trigger: 'change' }

                ],
            },

        }
        },
        methods:{
            validateCorrect(){
                if( this.formdata.username.trim().length > 0){
                    this.allow = false;
                } else {
                    this.allow = true;
                }
            }

        },
        validateuser(){
            this.$axios.post("http://x238742m66.wicp.vip/Admin/getUser",qs.stringify(this.formdata.username)).then(function (r) {
                if(r.data){

                }
            }).catch(function (error) {
                console.log(error);
            })
        },
    }
</script>

<style scoped>

</style>
