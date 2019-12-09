<template>
<div class="can">
    <section>
        <header class="header">包裹信息</header>
      <el-steps :space="200" :active="1" finish-status="success">
        <el-step title="待揽件"></el-step>
        <el-step title="运输"></el-step>
        <el-step title="派送"></el-step>
        <el-step title="驿站代收"></el-step>
        <el-step title="取件"></el-step>
    </el-steps>
        
        <figure>
            <figcaption class="header" style="background-color:#f3f3f3;">已签收</figcaption>
           <div class="block timeline">
                <el-timeline>
                    <el-timeline-item
                    v-for="(activity, index) in activities"
                    :key="index"
                    :timestamp="activity.timestamp">
                    {{activity.content}}
                    </el-timeline-item>
                </el-timeline>
                </div>
                <div class="divider"></div>
            <ul>
                <li>
                    运单号：{{order.orderNum}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    物流公司：{{order.company}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    客服电话：{{order.tel}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </li>
                <li>
                    卖家昵称：{{order.userName}}
                </li>
                <li>发货地址：{{order.sendAddr}}</li>
                <li>收货地址：{{order.receAddr}}</li>
                <li><img :src="order.goodUrl"/></li>
            </ul>
        </figure>
    </section>

</div>
    
</template>
<script>
export default {
     data() {
      return {
        reverse: true,
        activities: [{
          content: '商家发货',
          timestamp: '2018-04-15'
        }, {
          content: '【金华市】快件已从金华中转部发出，正在发往柳州转运中心',
          timestamp: '2018-04-13'
        }, {
          content: '【桂林市】快件已从桂林发出，正在发往桂林电大东区',
          timestamp: '2018-04-11'
        },
         {
          content: '[桂林市]桂林电大东区的桂电花江校区菜鸟驿站[18174198832]正在派件（95720为中通快递员外呼专属号码，请放心接听）',
          timestamp: '2018-04-11'
        }],
        order:{
            userName:"AMY",
            company:"中通快递",
            orderNum:"1234567899",
            tel:"122458874",
            sendAddr:"桂林电子科技大学",
            receAddr:"桂林理工大学",
            goodUrl:"http://b.hiphotos.baidu.com/image/pic/item/ae51f3deb48f8c541d140f4f31292df5e1fe7f8f.jpg"
        }
      };
    }
}
</script>
<style scoped>

.can{
    width: 100%;
    padding-top: 50px;
   
    margin-bottom: 50px;
}

section{
    width: 70%;
    border:1px solid #e2e2e2;
    margin:0px auto;
}
.header{
    text-align: start;
    height: 40px;
    background-color:#f7f7f7;
    border-bottom: 1px solid #e2e2e2;
    font-size: 16px;
    display: flex;
    align-items: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    padding-left: 30px;
}

img{
    width: 70px;
    height: 70px;
    margin-top: 20px;
    margin-bottom: 30px;
}

figure{
   
    width: 85%;
    margin:0px auto;
    
}

.timeline{
    padding-top: 30px;
    padding-left: 50px;
    background-color: #f3f3f3;
}
.divider{
        width: 90%;
        border-bottom:1px solid lightgray;
        height: 0px;
        margin-top: 30px;
        margin-bottom: 50px;
    }
ul {
    width: 100%;
    text-align: start;
    font-size: 14px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    line-height: 25px;
}

.el-step{
    width: 100%;
    margin:0px auto;
    margin-top: 30px;
    margin-bottom: 30px;
}

</style>