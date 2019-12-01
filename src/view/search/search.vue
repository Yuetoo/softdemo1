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
  <el-form  style="margin-left: 200px;width: 1600px">
    <el-row >
      <el-col :span="4.5" v-for="(item,o, index) in pageLists" :key="index" >
        <el-card :body-style="{ padding: '10px' }" style="width: 300px"  shadow="hover">
          <img  v-bind:src="item.picture" class="image"  style="width: 300px;height: 200px">
          <div style="padding: 14px;">
            <span  style="color: black" v-text="item.title"></span>
            <div> <h1  style="color: red;margin-right:300px;" >￥{{ item.sellingPrice }}</h1></div>
            <div class="bottom clearfix">
              <div class="block" style="float: left "><el-avatar :size="40" :src="item.headPortrait"></el-avatar></div>
              <div style="float: right">
                <el-button type="text" class="button"  @click="Buyclick(item.id)">查看详情</el-button>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-form>
  <el-pagination
    style="margin-bottom: 50px"
    layout="prev, pager, next, sizes, total, jumper"
    :page-sizes="pagesize"
    :page-size="pagesize"
    :total="imglist.length"
    @current-change="handleCurrentChange"
  >
  </el-pagination>
</div>
</template>

<script>
    import router from "../../router";

    export default {
        name: "search",
        data() {
            return {
                pagesize: 3,
                currpage: 1,
                imglist: [],
                pageLists:[],
                checkList: ['选中且禁用', '复选框 A']
            };
        },
        mounted(){
            this.getDatas();

        },
        methods: {
            handleClick() {
                console.log('click')
            },
            getDatas() {
                let _this = this;
                this.$axios.get('http://x238742m66.wicp.vip/index').then((res) => {
                    _this.imglist = res.data;
                    console.log(_this.imglist)
                }).catch((err) => {
                    console.log(err)
                })
                _this.initPageLists()
            },
            handleCurrentChange(val) {
                this.pageLists = this.imglist.slice((val-1)*6,val*6)
            },
            initPageLists(){
                this.pageLists = this.imglist.slice((val-1)*6,val*6)
            },
            Buyclick(id){
                router.replace({path:'/detail'})
            },
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
