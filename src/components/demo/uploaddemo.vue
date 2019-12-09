<template>
<div>
  <el-dialog
    title="修改头像"
    @close="addDialogClose"
    :visible.sync="dialogTableVisible"
    :close-on-click-modal="false"
  >
  <el-upload
    class="el-upload"
    :http-request='submitUpload'
    :action="submitAssess"
    list-type="picture-card"
    ref="upload"

  >
    <i slot="default" class="el-icon-plus"></i>
    <div slot="file" type="primary" slot-scope="{file}"  >
      <img
        class="el-upload-list__item-thumbnail"
        :src="file.url" alt=""
      >
      <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
    </div>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </el-upload>
    <p>
      <el-button @click = 'submit(formljd)'>确定</el-button>
      <el-button @click = ''>取消</el-button>
    </p>

  </el-dialog>
  <p>
    <img src="http://www.summerstudy.top/2019/12/01/deb483335dca2.jpg">
  </p>

  <el-button @click="dialogTableVisible = true">修改头像</el-button>
</div>
</template>

    <script>
      import qs from "qs"
      import axios from "axios"
      let imgurl;
    export default {
        name:'uploaddemo',
        data() {
            return {
                dialogTableVisible: false,
                formljd:{
                    myusername:'',
                },
                dialogImageUrl: '',
                dialogVisible: false,
                disabled: false
            };
        },
        methods: {
            handleRemove(file) {
                console.log(file);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleDownload(file) {
                console.log(file);
            },
            submitUpload: function (content) {
                let formData = new FormData;
                formData.append('image', content.file);
                let config = {
                    'Content-Type': 'multipart/form-data'
                }
                let var_this = this;
                this.$axios.post('http://www.summerstudy.top/api/upload', formData, config)
                    .then(function (response) {
                        imgurl=response.data.data.url
                        console.log(imgurl)
                        if (!response.data.success) {
                            var_this.$message({
                                message: response.data.message,
                                type: 'error'
                            });
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            },
            submitAssess: function () {
                this.$refs.upload.submitUpload();
            },
            submit(formljd){
                this.submitAssess();
                console.log(imgurl)
                for(;imgurl!=undefined;){
                    console.log(666)
                    let form =new FormData();
                    form.append('url',imgurl)
                    let config = {
                        'Content-Type': 'multipart/form-data'
                    }
                    axios.post('http://47.103.202.20:8090/User/xxxxx',form,config).then((result) => {
                        console.log(formljd.myusername, result);
                    })
                }
            },
            addDialogClose() {
                this.$refs.addFormRef.resetFields() // 清空表单
            },
        }
    }
</script>

<style scoped>
.el-card {
  width: 200px;
}
</style>
