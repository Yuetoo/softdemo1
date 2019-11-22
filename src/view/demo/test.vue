<template>


<div>
  <div class="block">
    <span class="demonstration">默认 Hover 指示器触发</span>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="block">
    <span class="demonstration">Click 指示器触发</span>
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>


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
