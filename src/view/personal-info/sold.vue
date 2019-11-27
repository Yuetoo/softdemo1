<template>

<div style="width:80%;margin:0px auto;">
    <el-card class="box-card" v-for="(item,index) in orderList" v-bind:key="index" style="margin-bottom:50px;">
  <div slot="header" class="clearfix">
    <span style="float:left;">订单编号{{item.orderId}}</span>
    <span style="float:right">成交时间：{{item.date}}</span>
  </div>
  <div class="panel-body" >
   
   <img :src="item.goodImg"/>  
   <div style="margin-left:10px;">
     <p>{{item.goodName}}</p>
     <span style="color:gray;">￥<span style="color:red;">{{item.price}}</span>（含运费{{item.freight}}元）</span>
   </div>
 
   <div class="box2">
     <p>{{item.seller}}</p>
     <p style="color:gray;">{{item.area}}</p>
     <p style="color:gray;">联系方式：{{item.phoNumber}}</p>
   </div>
   <div  class="text">{{item.status}}</div>
   </div>
</el-card>
</div>

</template>
<script>
export default {
    data(){
      return {
        orderList:[{
          goodImg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574790820963&di=81965bd2dd4dda1ae26be4920b06671f&imgtype=0&src=http%3A%2F%2Fpic05.997788.com%2Fpic_search%2F00%2F15%2F03%2F30%2Fse15033094.jpg",
          orderId:"1235666",
          goodName:"挪威的森林",
          date:"2019-11-12",
          price:200,
          freight:50,
          seller:"李丹丹",
          area:"桂林电子花江校区",
          phoNumber:"1234567892",
          status:"交易完成"
        },
        {
          goodImg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574790820963&di=81965bd2dd4dda1ae26be4920b06671f&imgtype=0&src=http%3A%2F%2Fpic05.997788.com%2Fpic_search%2F00%2F15%2F03%2F30%2Fse15033094.jpg",
          orderId:"1235666",
          goodName:"挪威的森林",
          date:"2019-11-12",
          price:200,
          freight:50,
          seller:"李丹丹",
          area:"桂林电子花江校区",
          phoNumber:"1234567892",
          status:"交易完成"
        },
        {
          goodImg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574790820963&di=81965bd2dd4dda1ae26be4920b06671f&imgtype=0&src=http%3A%2F%2Fpic05.997788.com%2Fpic_search%2F00%2F15%2F03%2F30%2Fse15033094.jpg",
          orderId:"1235666",
          goodName:"挪威的森林",
          date:"2019-11-12",
          price:200,
          freight:50,
          seller:"李丹丹",
          area:"桂林电子花江校区",
          phoNumber:"1234567892",
          status:"交易完成"
        }]
      }
    }
}
</script>

<style scoped>

.panel-body img{
   width: 60px;
   height: 80px;
}

.panel-body{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.box2{
  border-left: 1px solid #f0f0f0;
  border-right: 1px solid #f0f0f0;
  margin-left: 30%;
  padding-left:10px;
  padding-right: 10px;
  font-size: 14px;
  line-height: 26px;
}

.text{
  font-size: 16px;
  font-weight: 700;
  font-family:'Times New Roman', Times, serif;
  margin: 0px auto;
}

</style>