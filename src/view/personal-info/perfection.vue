<template>
    <div class="can">
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
        <header>基本资料</header>
        <section>
            <p>亲爱的{{user.userName}}，填写真实的资料，有助于好友找到你哦。</p>
            <ul>
                <li>当前头像：<el-button type="text" @click="dialogTableVisible = true"><img :src="user.url"/></el-button></li>
                <li>昵称：<el-input v-model="user.userName" :placeholder="user.userName"></el-input></li>
                <li>性别：<el-radio style="margin-left:45px;" v-model="user.sex" label="男">男</el-radio><el-radio v-model="user.sex" label="女">女</el-radio></li>
                <li>电话：<el-input v-model="user.tel" :placeholder="user.tel"></el-input></li>
                <li>校区：<el-input v-model="user.school" :placeholder="user.school"></el-input></li>
            </ul>
            <div class="divider"></div>
            <el-button>保存</el-button>
        </section>
        <section>
            <div class="title">收货地址</div>
            <p>新增收货地址</p>
            <el-form label-position="right" label-width="80px" :model="formLabelAlign">
                <el-form-item label="收货人">
                    <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="详细地址">
                    <el-input v-model="formLabelAlign.region"></el-input>
                </el-form-item>
                <el-form-item label="电话">
                    <el-input v-model="formLabelAlign.type"></el-input>
                </el-form-item>
            </el-form>
            <div class="setting">
                <el-checkbox style="margin-left:30px;">设置为默认收货地址</el-checkbox>
                <el-button class="save">保存</el-button>
            </div>
            <div class="title">已添加的收货地址</div>
            <el-table
                :data="tableData"
                border
                stripe
                style="width: 80%;">
                <el-table-column
                width="100"
                prop="userName"
                label="收货人"
               >
                </el-table-column>
                <el-table-column
                prop="school"
                label="所在校区"
               
                >
                </el-table-column>
                <el-table-column
                prop="address"
                label="详细地址"
               
               >
                </el-table-column>
            
                <el-table-column
                prop="tel"
                label="电话"
                width="120"
               >
                </el-table-column>
                <el-table-column
                width="100"
                label="操作"
               >
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
                </el-table-column>
                
                <el-table-column
               
                label=""
                width="100"
               >
                <template>
                    <el-button type="text" size="small">设为默认</el-button>
                </template>
                </el-table-column>
            </el-table>
        </section>
    </div>
</template>
<script>
    import qs from "qs"
    import axios from "axios"
    let imgurl;
    export default {
     
     data() {
      return {
          user:{
              userName:"小红",
              sex:"女",
              tel:"12345678910",
              school:"桂林电子科技大学花江校区",
              url:"http://b-ssl.duitang.com/uploads/item/201806/16/20180616134529_ktsdi.thumb.1000_0.jpeg"
          },
           dialogTableVisible: false,
                
                dialogImageUrl: '',
                dialogVisible: false,
                disabled: false,
         

        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
         tableData: [{
          userName: '王小虎',
          school: '上海交通大学花江校区',
          tel:"12345678910",
          address: '上海市普陀区金沙江路 1518 弄文化路东一巷',
        }, {
          userName: '王小虎',
          school: '上海交通大学',
          tel:"12345788",
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          userName: '王小虎',
          school: '上海交通大学',
          tel:"12345788",
          address: '上海市普陀区金沙江路 1518 弄',
        },]
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

    header{
        border:1px solid lightgray;
        color:gray;
        font-size: 14px;
        font-weight: 700;
        font-family:Arial, Helvetica, sans-serif;
        text-align: start;
        height: 35px;
        width: 80%;
        margin-top: 60px;
        padding-left: 30px;
        display: flex;
        align-items:center;
        
    }
    section:first-of-type{
        border: 1px solid lightgray;
        border-top: none;
        margin-top: 0px;
        padding-left: 60px;
        padding-top: 30px;
        width: 80%;
        font-size: 15px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        text-align: start;
    }
    li{
        display: flex;
        flex-direction: row;
        margin-top: 30px;
    }
    

    .el-input{
        width: 50%;
        margin-left: 45px;
        height: 30px;
    }
    .can{
        width: 80%;
        margin-left: 40px;
    }
    .divider{
        width: 90%;
        border-bottom:1px solid lightgray;
        height: 0px;
        margin-top: 30px;
    }

    ul li .el-button img{
        width: 70px;
        height: 70px;
        border: 2px solid lightgray;
        margin-left: 15px;
    }
    section:first-of-type .el-button{
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 100px;
    }
    .title{
        color: rgb(28, 111, 219);
        background-color: rgb(215, 233, 245);
        height: 30px;
        font-size: 16px;
        padding-left: 30px;
        text-align: start;
        display: flex;
        align-items: center;
        width: 80%;
        margin-top: 30px;
    }

    section:nth-of-type(2){
        text-align: start;
    }

    section:nth-of-type(2)>p{
        color: orangered;
        font-size: 15px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        margin-top: 30px;
        margin-left: 30px;
        margin-bottom: 30px;
    }
    .el-form{
        padding-left: 30px;
    }
    .setting{
         display: flex;
        flex-direction: column;
        padding-left: 130px;
        width: 100%;
    }
    .save{
        margin-left: 30px;
        margin-top: 20px;
        margin-bottom: 10px;
        width: 70px;
    }

    section:nth-of-type(2) .el-input{
        width: 40%;
    }

    .el-table{
        margin-top: 20px;
        margin-bottom: 50px;
    }
    

</style>