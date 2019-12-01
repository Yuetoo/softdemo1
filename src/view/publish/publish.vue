<template>
  <div class="outline">
     <h2>发布闲置</h2>
    <div class="form-box">
      <el-form ref="form" :model="form"  :rules="rules" label-width="80px">
        <div>
          <h4 style="float: left;margin-left: 400px"> 商品标题：</h4>
          <el-form-item  prop="title"  style="width:50%;margin-left: 400px">
            <el-input v-model="form.title"   placeholder="请输入商品标题" type="text"  maxlength="10" show-word-limit style=" height:50px;"></el-input>
          </el-form-item>
        </div>

        <el-form-item  style="margin-top: 30px">
          商品发布校区：<el-select v-model="spschoolv" placeholder="请选择" @change="getspSchool">
          <el-option
            v-for="item in spschool"
            :key="item"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
          商品所属类型：<el-select v-model="sptypev" placeholder="请选择"  @change="getspType">
          <el-option
            v-for="item in sptype"
            :key="item"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        </el-form-item>
        <el-form-item  prop="des" style="margin-top: 50px">
          商品描述： <el-input  type="textarea" v-model="form.des" maxlength="50"  show-word-limit resize="none"  style="width:50%;"></el-input>
        </el-form-item>
        <el-form-item style="margin-top: 50px">
          商品图片选择：<el-upload
          list-type="picture-card"
          :http-request='submitUpload'
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :before-upload="beforeAvatarUpload"
          ref="upload"
          limit="5"
          :disabled="upVisible"
        >
          <i slot="trigger" class="el-icon-plus"></i>
        </el-upload>
          <el-dialog :visible.sync="dialogVisible" >
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item   style="margin-top: 50px" >
          <div   style="margin-left: 400px">
            <el-col :span="5">
              原价： <el-input type="number"  step="0.01" v-model="form.original" style="width:70%;">
              <template slot="append">元</template>
            </el-input>
            </el-col>
            <el-col :span="5">
              现价： <el-input type="number"  step="0.01" v-model="form.sell" style="width:70%">
              <template slot="append">元</template>
            </el-input>
            </el-col>
            <el-col :span="5">
              运费： <el-input type="number"   step="0.01" v-model="form.freight" style="width:70%">
              <template slot="append">元</template>
            </el-input>

            </el-col>
          </div>
        </el-form-item>
        <el-form-item style="margin-top: 30px">
          <el-button type="warning" @click="onSubmit(form)">发布闲置</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>


</template>
<script>

    export default {
        name:'publish',
        data() {
            let validatetitle = (rules, value, callback) => {
                let errors = [];
                if (value==''){
                    callback('不能为空');
                }
            };
            let validatedes = (rules, value, callback) => {
                let errors = [];
                if (value==''){
                    callback('不能为空');
                    this.validateun();
                }
            };
            return {
                imgurllist:[],
                form: {
                    title: '',
                     des: '',
                    freight:0.01,
                    sell:0.01,
                    original:0.01,
                },
                spschool: [{
                    value: '选项1',
                    label: '桂林电子科技大学'
                }, {
                    value: '选项2',
                    label: '广西师范大学'
                }, {
                    value: '选项3',
                    label: '桂林理工大学'
                }, {
                    value: '选项4',
                    label: '桂林医学院'
                }, {
                    value: '选项5',
                    label: '桂林电子科技大学信息科技学院'

                },{
                    value: '选项6',
                    label: '广西大学'

                },
                    ],
                spschoolv: '',
                sptype: [{
                    value: '选项1',
                    label: '数码产品'
                }, {
                    value: '选项2',
                    label: '服饰'
                }, {
                    value: '选项3',
                    label: '美妆'
                }, {
                    value: '选项4',
                    label: '生活百货'
                }, {
                    value: '选项5',
                    label: '家用电器'

                },{
                    value: '选项6',
                    label: '儿童玩具'
                }, {
                        value: '选项7',
                        label: '宠物用品'
                    },
                    {
                        value: '选项8',
                        label: '游戏装备'
                    },
                    {
                        value: '选项9',
                        label: '运动户外'
                    },
                ],
                sptypev: '',
                label:'',
                label1:'',
                dialogImageUrl: '',
                dialogVisible: false,
                upVisible:false,
                rules: {
                    title: [
                        { required: true, validator: validatetitle, trigger: 'change' }
                    ],
                    des:[
                        {required: true,validator:validatedes,trigger:'change'}
                    ],
                },
            }
        },
        methods: {
            handleRemove(file, fileList) {

            },

            submitUpload(content) {
                let _this = this;
                let formData = new FormData;
                formData.append('image', content.file);
                let config = {
                    'Content-Type': 'multipart/form-data'
                }
                this.$axios.post('http://www.summerstudy.top/api/upload', formData, config)
                    .then(function (response) {
                        _this.imgurllist.push(response.data.data.url+';');
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            },
            submitAssess(){
                this.$refs.upload.submitUpload();
            },
            beforeAvatarUpload(file) {
                const isLt2M = file.size /1024/ 1024 < 2;
                if (!isLt2M) {
                    this.$message.error('上传图片大小不能超过 2MB!');
                }
                return  isLt2M  ;
            },
            onSubmit(data) {
                if(this.form.title==''){
                    this.$message.error("请填写标题!!!∑(ﾟДﾟノ)ノ")
                }else{
                    if(this.form.des==''){
                        this.$message.error("请给商品加点描述吧(ಥ_ಥ) ")
                    }
                    else{
                        if(this.label==''){
                            this.$message.error("请选择商品发布的校区(ಥ_ಥ) ")
                        }
                        else{
                            if(this.label1==''){
                                this.$message.error("请选择商品类型(ಥ_ಥ) ")
                            }else{
                                if(this.imgurllist.length==0){
                                    this.$message.error("请选择两张商品的美照吧(ಥ_ಥ) ")
                                }else{
                                    let form =new FormData();
                                    form.append('title' +
                                        'v',data.title)
                                    form.append('url',this.imgurllist)
                                    let config = {
                                        'Content-Type': 'multipart/form-data'
                                    }
                                    axios.post('http://x238742m66.wicp.vip/test',form,config).then((result) => {
                                        console.log(formljd.myusername,imgurllist, result);
                                    })
                                }
                            }
                        }
                    }
                }
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            getspSchool(list){
                this.label=list.label;
                this.value=list.value;
                console.log("选择的name为：" + this.label, "选择的code为:" + this.value);

            },
            getspType(S){
                this.label1=S.label;
                this.value1=S.value;
                console.log("选择的name为：" + this.label1, "选择的code为:" + this.value1);

            }
        }
    }
</script>
<style>
  .form-box{
    width: 80%;
    background-color: white;
    border:1px solid blanchedalmond;
    margin:0 auto;
    padding:10px;
    padding-top:50px;
  }
  .outline{
    width: 100%;
    padding-top: 50px;
    background-size: 100% 100%;
    padding-bottom: 50px;
    margin-top: 0px;
  }
  .publishtitle{
    font-size: 13px;
    float: left;

  }


</style>
