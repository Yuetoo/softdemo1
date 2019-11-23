<template>
  <div>
    <el-upload class="upload-demo" action="http://localhost:80" :limit='5' :auto-upload="false" :on-exceed='uploadOverrun' ref="upload" :http-request='submitUpload' :on-change='changeUpload'>
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-button @click = 'submitAssess'>提交到服务器</el-button>
  </div>
</template>


<script>

    export default {
        data() {
            return {

                dialogImageUrl: '',
                dialogVisible: false
            };
        },
        methods: {
            submitUpload: function(content) {
                //1. 创建formData 利用AXIOS传递
                let formData = new FormData;
                formData.append('image', content.file);
                let config = {
                    'Content-Type': 'multipart/form-data'
                }
                let var_this = this;
                this.$axios.post('http://www.summerstudy.top/api/upload', formData, config)
                    .then(function(response) {
                        if (!response.data.success) {
                            var_this.$message({
                                message: response.data.message,
                                type: 'error'
                            });
                        }
                    })
                    .catch(function(error) {
                        console.log(error);
                    })
            },
            submitAssess: function() {
                this.$refs.upload.submit(); //调用submit方法
                //其他业务代码。
            },
            handleRemove(file, fileList) {
                let fd = new FormData()
                fd.append('file', file)
                this.$axios.post('/upload', fd).then( res => {
                    console.log(res)
                }).catch( res => {
                    console.log(res)
                })
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            uploadFile(file) {
                let formData = new FormData()
                this.form.file=file.file;
                formData.append('file',file.file)
                this.$axios({
                    method: 'post',
                    url: '/upload',
                    data: formData
                })
                    .then(function(response) {
                        console.log(response)
                    })
            }
        }
    }
</script>


