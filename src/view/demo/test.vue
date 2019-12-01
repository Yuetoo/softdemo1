<template>
<div>
  <el-form  style="margin-left: 200px;width: 1600px">
      <el-row >
        <el-col :span="4.5" v-for="(item,o, index) in pageLists" :key="index" >
          <el-card :body-style="{ padding: '10px' }" style="width: 300px"  shadow="hover">
            <img  v-bind:src="item.src" class="image"  style="width: 300px;height: 200px">
            <div style="padding: 14px;">
              <span v-text="item.des"></span>
              <div class="bottom clearfix">
                <h4 class="time">{{ item.price }}</h4>
                <el-button type="text" class="button">购买</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-form>
  <el-pagination
    layout="prev, pager, next, sizes, total, jumper"
    :page-sizes="[3, 5, 15, 20]"
  :page-size="pagesize"
  :total="imglist.length"
  @current-change="handleCurrentChange"
  @size-change="handleSizeChange"
  >
  </el-pagination>
</div>

</template>
<script>
  import qs from "qs"
  import VueHoverMask from 'vue-hover-mask'
    export default {
        name: "test",
        data() {
            return {
                pagesize: 3,
                currpage: 1,

                imglist: [],
                pageLists:[],
            }

        },
        created(){
            this.getDatas();
        },
        mounted(){


        },
        methods: {

            handleClick() {
                console.log('click')
            },
            getDatas() {
                let _this = this;
                this.$axios.get('api/getNewsList').then((res) => {
                    _this.imglist = res.data;
                    console.log(_this.imglist)
                }).catch((err) => {
                       console.log(err)
                })
            },
            handleCurrentChange(val) {
                this.pageLists = this.imglist.slice((val-1)*6,val*6)
            },
            initPageLists(){
                this.pageLists = this.imglist.slice((this.currpage - 1) * this.pagesize, this.currpage * this.pagesize)
            }
        }
    }
</script>

<style scoped>
  #box ul{
    display: flex;
    flex-wrap: wrap;

  }
  #box li{
    padding: 3px;
    list-style: none;
    margin-right: 15px;
    border: 1px solid #fafafa;
    box-shadow: 0 0 25px #cac6c6;

  }
  #box img{
    width: 200px;
    height: 150px;

  }

  .item{
    width: 600px;
    height: 60px;
  }
  .item li{
    width: 80px;
    height: 60px;
    line-height: 60px;
    margin-left: 20px;
    float: left;
    text-align: center;
    cursor: pointer;
  }
  .hoverBg{
    background-color: red;
    color: #fff;
  }
  .clickBg{
    background: #E6A23C;
    color: #fff;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,

  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
