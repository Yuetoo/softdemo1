<template>
<div>
  <div style="margin-top: 20px;">
    <el-autocomplete
      style="width: 800px;margin-top: 20px"
      class="inline-input"
      v-model="search"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      :trigger-on-focus="false"
      @select="handleSelect"
    ></el-autocomplete>
      <el-button slot="append" icon="el-icon-search"></el-button>
  </div>
  <el-menu style="margin-top:20px;margin-left:300px;width: 1300px" class="el-menu-demo" mode="horizontal"
           background-color="#E6A23C"
           active-text-color="#E6A23C"
           text-color="#fff"
           @select="handleSelect">
    <el-submenu   index="1">
      <template slot="title">商品分类</template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
      <el-menu-item index="1-3">选项3</el-menu-item>
      <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
        <el-menu-item index="1-4-2">选项2</el-menu-item>
        <el-menu-item index="1-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">商品分类</el-menu-item>
    <el-menu-item index="3" >消息中心</el-menu-item>
    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
  </el-menu>
  <div class="line"></div>
  <div class="block">

    <el-carousel  height="600px"  style="margin-top: 20px; margin-left:300px;width: 1300px; " >
      <el-carousel-item v-for="item in img" :key="item.id">
        <img :src="item.src"  style="width:1400px; height: auto;" class="image">
      </el-carousel-item>
    </el-carousel>
  </div>
  <el-form  style=" margin-bottom:50px;margin-top:20px;margin-left: 200px;width: 1600px">
    <el-row >
      <el-col :span="4.5" v-for="(item,o, index) in imglist" :key="index" >
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
  <div  style="margin-bottom: 100px;margin-top: 100px">
    <el-link href="https://element.eleme.io" target="_blank">更多商品</el-link>
  </div>

</div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'index',
        data() {
            return {

                circleUrl:'http://www.summerstudy.top/2019/11/22/5847f13730753.jpg',
                restaurants: [],
                search: '',
                count: 0,
                chartColumn: null,
                chartBar: null,
                imglist:[],
                img: [
                    {
                        id: 1,
                        des: '这是第一个描述',
                        src: "http://www.summerstudy.top/2019/11/22/5847f13730753.jpg",
                        price: 198

                    }, {
                        id: 2,
                        des: '这是第一个描述',
                        src: 'http://www.summerstudy.top/2019/11/22/0d70a771edc74.jpg',
                        price: 198
                    },
                    {
                        id: 3,
                        des: '这是第一个描述',
                        src: 'http://www.summerstudy.top/2019/11/22/b3e6e60133aa8.jpg',
                        price: 198

                    },
                    {
                        id: 4,
                        src: "http://www.summerstudy.top/2019/11/22/5847f13730753.jpg",
                        des: '这是第一个描述',
                        price: 198

                    }, {
                        id: 5,
                        src: 'http://www.summerstudy.top/2019/11/22/0d70a771edc74.jpg',
                        des: '这是第二个描述',
                        price: 198
                    },
                    {
                        id: 6,
                        src: 'http://www.summerstudy.top/2019/11/22/b3e6e60133aa8.jpg',
                        des: '这是第三个描述',
                        price: 211
                    },
                    {
                        id: 7,
                        src: "http://www.summerstudy.top/2019/11/22/5847f13730753.jpg",
                        des: '这是第一个描述',
                        price: 198

                    },
                    {
                        id: 8,
                        src: "http://www.summerstudy.top/2019/11/22/5847f13730753.jpg",
                        des: '这是第一个描述',
                        price: 198

                    },
                    {
                        id: 9,
                        src: "http://www.summerstudy.top/2019/11/22/5847f13730753.jpg",
                        des: '这是第一个描述',
                        price: 198

                    },
                    {
                        id: 10,
                        src: "http://www.summerstudy.top/2019/11/22/5847f13730753.jpg",
                        des: '这是第一个描述',
                        price: 198

                    },
                    {
                        id: 11,
                        src: "http://www.summerstudy.top/2019/11/22/5847f13730753.jpg",
                        des: '这是第一个描述',
                        price: 198

                    },
                    {
                        id: 12,
                        src: "http://www.summerstudy.top/2019/11/22/5847f13730753.jpg",
                        des: '这是第一个描述',
                        price: 198

                    },
                    {
                        id: 13,
                        src: "http://www.summerstudy.top/2019/11/22/5847f13730753.jpg",
                        des: '这是第一个描述',
                        price: 198

                    },
                    {
                        id: 14,
                        src: "http://www.summerstudy.top/2019/11/22/5847f13730753.jpg",
                        des: '这是第一个描述',
                        price: 198

                    },
                    {
                        id: 15,
                        src: "http://www.summerstudy.top/2019/11/22/5847f13730753.jpg",
                        des: '这是第一个描述',
                        price: 198

                    },
                    {
                        id: 16,
                        src: "http://www.summerstudy.top/2019/11/22/5847f13730753.jpg",
                        des: '这是第一个描述',
                        price: 198

                    },
                    {
                        id: 17,
                        src: "http://www.summerstudy.top/2019/11/22/5847f13730753.jpg",
                        des: '这是第一个描述',
                        price: 198

                    },
                    {
                        id: 18,
                        src: "http://www.summerstudy.top/2019/11/22/5847f13730753.jpg",
                        des: '这是第一个描述',
                        price: 198

                    },
                    {
                        id: 19,
                        src: "http://www.summerstudy.top/2019/11/22/5847f13730753.jpg",
                        des: '这是第一个描述',
                        price: 198

                    },
                ],

            };
        },
        created(){
            this.getDatas();
        },
        methods: {
            getDatas() {
                let _this = this;
                this.$axios.get('http://x238742m66.wicp.vip/index').then((res) => {
                    _this.imglist = res.data;
                    console.log(_this.imglist)
                }).catch((err) => {
                    console.log(err)
                })
            },
            Buyclick(id){
                console.log('当前被点击的id=' + id);
            },
            load() {
                this.count += 2
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleNodeClick(data) {
                console.log(data);
            },
            querySearch(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter(queryString) {
                return (restaurant) => {
                    return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            loadAll() {
                return [
                    {"value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号"},
                    {"value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号"},
                    {"value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113"},
                    {"value": "泷千家(天山西路店)", "address": "天山西路438号"},
                    {"value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"},
                    {"value": "贡茶", "address": "上海市长宁区金钟路633号"},
                    {"value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号"},
                    {"value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号"},
                    {"value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107"},
                    {"value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号"},
                    {"value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号"},
                    {"value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号"},
                    {"value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"},
                    {"value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层"},
                    {"value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号"},
                    {"value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路"},
                    {"value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺"},
                    {"value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819"},
                    {"value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306"},
                    {"value": "枪会山", "address": "上海市普陀区棕榈路"},
                    {"value": "纵食", "address": "元丰天山花园(东门) 双流路267号"},
                    {"value": "钱记", "address": "上海市长宁区天山西路"},
                    {"value": "壹杯加", "address": "上海市长宁区通协路"},
                    {"value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"},
                    {"value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室"},
                    {"value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"},
                    {"value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6"},
                    {"value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号"},
                    {"value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号"},
                    {"value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号"},
                    {"value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号"},
                    {"value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号"},
                    {"value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室"},
                    {"value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1"},
                    {"value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号"},
                    {"value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室"},
                    {"value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部"},
                    {"value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B"},
                    {"value": "浏阳蒸菜", "address": "天山西路430号"},
                    {"value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路"},
                    {"value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室"},
                    {"value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号"},
                    {"value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号"},
                    {"value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位"},
                    {"value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号"},
                    {"value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼"},
                    {"value": "阳阳麻辣烫", "address": "天山西路389号"},
                    {"value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13"}
                ];
            },
            handleSelect(item) {
                console.log(item);
            }
        },
        mounted() {
            this.restaurants = this.loadAll();
        },

    }

</script>
<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
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
