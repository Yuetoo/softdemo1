<template>
    <div>
      <el-upload
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
      <el-form  v-model="formljd">
        <el-form-item>
          <el-input  type="text" v-model="formljd.myusername" class="el-card" ></el-input>
        </el-form-item>
      </el-form>
      <el-button @click = 'submit(formljd)'>提交到服务器</el-button>
    </div>
</template>

<script>
    import axios from "axios"
    let imgurllist=[];
    export default {

        data() {
            return {
                formljd:{
                    myusername:'',
                },
                dialogImageUrl: '',
                dialogVisible: false,
                upVisible:false,
            };
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            submitUpload(content) {
                let var_this = this;
                let formData = new FormData;

                formData.append('image', content.file);
                let config = {
                    'Content-Type': 'multipart/form-data'
                }
                this.$axios.post('http://www.summerstudy.top/api/upload', formData, config)
                    .then(function (response) {
                        imgurllist.push(response.data.data.url+';');
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            },
            submitAssess(){
                this.$refs.upload.submitUpload();
            },
            submit(formljd){
                let form =new FormData();
                form.append('userName',formljd.myusername)
                form.append('url',imgurllist)
                let config = {
                    'Content-Type': 'multipart/form-data'
                }
                axios.post('http://x238742m66.wicp.vip/test',form,config).then((result) => {
                    console.log(formljd.myusername,imgurllist, result);
                })
            },
            beforeAvatarUpload(file) {
                const isLt2M = file.size /1024/ 1024 < 2;

                console.log(imgurllist.length)
                if (!isLt2M) {
                    this.$message.error('上传图片大小不能超过 2MB!');
                }
                return  isLt2M  ;
            }

            },
    }
</script>
<style scoped>
  .el-card {
    width: 200px;
  }
</style>
