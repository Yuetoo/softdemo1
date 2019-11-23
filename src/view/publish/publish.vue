<template>
<div class="outline">
<div class="form-box">
    <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="商品名称">
    <el-input v-model="form.name" type="text" style="width:80%;"></el-input>
  </el-form-item>
  <el-form-item label="商品类型">
    <el-select v-model="form.region" placeholder="请选择商品类型">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="商品描述">
    <el-input type="textarea" v-model="form.desc" style="width:80%;"></el-input>
  </el-form-item>
  <el-form-item label="原价">
    <el-col :span="11">
      <el-input type="number" v-model="form.original" style="width:60%;"></el-input>
    </el-col>
    <el-col class="line" :span="2"> 现价</el-col>
    <el-col :span="11">
      <el-input type="number" v-model="form.selling" style="width:60%"></el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="校区">
    <el-input type="text" v-model="form.area" style="width:80%;"></el-input>
  </el-form-item>
  <el-form-item label="运费">
    <el-input type="number" v-model="form.freight" style="width:80%"></el-input>
  </el-form-item>
  <el-form-item label="图片上传">
   <el-upload
  action="#"
  list-type="picture-card"
  :auto-upload="false">
    <i slot="default" class="el-icon-plus"></i>
    <div slot="file" slot-scope="{file}">
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
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
  </el-form-item>
 
  <el-form-item>
    <el-button type="warning" @click="onSubmit">发布闲置</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</div>
</div>


</template>
<script>
   
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          area:'',
          freight:0,
          selling:0,
          original:0
        },
         dialogImageUrl: '',
        dialogVisible: false,
        disabled: false, 
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
       handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      }
    }
  }
</script>
<style>
   .form-box{
      width: 40%;
      background-color: white;
      border:1px solid blanchedalmond;
      margin:0 auto;
      padding:10px;
      padding-top:50px;
   }
   .outline{
       width: 100%;
       padding-top: 50px;
       background-image: url("../../assets/images/publish.jpg");
       background-size: 100% 100%;
       padding-bottom: 50px;
       margin-top: 0px;
   }
   .title{
     font-size: 50px;
   }
  
   
</style>