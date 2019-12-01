<template>

<div>
  <div style="margin-top: 15px;">
    <el-input   style="margin-top:10px;margin-left: 100px;width: 600px;height: 40px" placeholder="请输入内容" v-model="search" class="input-with-select">
      <el-button slot="append" icon="el-icon-search">搜索</el-button>
    </el-input>
  </div>
  <div class="nav">
    <el-select v-model="value" placeholder="请选择校区">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <div class="input">
      <input v-model="input" placeholder="最低价格" />
      <span>-</span>
      <input v-model="input" placeholder="最高价格" />
    </div>
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="价格升序"></el-checkbox>
      <el-checkbox label="价格降序"></el-checkbox>
      <el-checkbox label="新品"></el-checkbox>
    </el-checkbox-group>
  </div>

</div>
</template>

<script>
    export default {
        name: "search",
        data() {
            return {
                checkList: ['选中且禁用', '复选框 A']
            };
        }
    }
</script>

<style scoped>
  *{
    box-sizing: content-box;
  }
  .nav{
    margin:0px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 40px;
    line-height: 40px;
    width: 50%;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .input{
    height: 40px;
    width: 170px;
    background-color: #f8f8f8;
    justify-items: center;
  }
  .input input{
    width: 70px;
    height: 75%;
    line-height: 75%;
    border:none;
    text-align: center;
    border:1px solid #cccccc;
    border-radius: 3px;
  }


  .nav .el-select{
    width:120px;
    height: 50%;
  }
</style>
