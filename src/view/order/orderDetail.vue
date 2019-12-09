<template>
    <div class="can">
       <section>
        <el-steps :active="1">
                <el-step title="拍下商品" ></el-step>
                <el-step title="付款到支付宝" ></el-step>
                <el-step title="卖家发货" ></el-step>
                <el-step title="确认收货" ></el-step>
                <el-step title="评价" ></el-step>
            </el-steps>
        </section>
        <section>
            <div class="box1">
                <p>订单信息</p>
               <ul>
                   <li>收货地址：{{address}}</li>
                   <li>卖家留言：{{message}}</li>
                   <li>订单编号：{{orderNum}}</li>
                   <li>商家：{{name}}</li>
               </ul>
            </div>
            <div class="box2">
                <p><i class="el-icon-circle-check icon"></i>订单状态：{{status}}</p>
                <p class="text">物流：{{delivery}} &nbsp;&nbsp;&nbsp;&nbsp;运单号：{{deliveryNum}}</p>
                <p class="text">{{date}}</p>
                <p class="text">您可以<el-button style="margin-left:20px;">评价</el-button></p>
            </div>
        </section>
        <section>
             <el-table
                :data="tableData"
                style="width: 100%"
                >
                 <el-table-column
                    width="150"
                    label=""
                   >
                    <template slot-scope="scope">
                        <img :src="scope.row.imgUrl" class="pic"/>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="goodName"
                    label="商品"
                   >
                   
                </el-table-column>
                <el-table-column
                    prop="price"
                    label="单价"
                    width="120"
                    >
                </el-table-column>
                <el-table-column
                    prop="coupon"
                    label="优惠"
                    width="100">
                </el-table-column>
                 <el-table-column
                    prop="status"
                    label="状态"
                    width="100">
                </el-table-column>
            </el-table>
        </section>
    <section>
    <figure>
        <ul>
            <li>商品总价：￥{{good_price}}</li>
            <li>优惠券：￥{{coupon}}</li>
            <li>运费：￥{{freight}}</li>
            <li class="active">订单总价：￥{{total}}</li>
            <li class="active">实付款：<span style="color:red;font-weight:900;font-size:20px;">￥{{real_pay}}</span></li>
        </ul>
    </figure>
        </section>
    </div>
</template>
<script>
export default {
    data(){
        return{
            address:"广西壮族自治区 桂林市 灵川县 灵田镇 桂林电子科技大学花江校区 ,541200",
            message:"",
            orderNum:"123456789",
            name:"心秀嘉派专卖",
            status:"交易成功",
            delivery:"中通快递",
            deliveryNum:"147852369",
            date:"2019-12-09",
             tableData: [{
            imgUrl: "http://b-ssl.duitang.com/uploads/item/201509/21/20150921173512_PehaH.jpeg",
            goodName: '韩版纯色针织毛线围巾女秋冬季加厚保暖学生软妹围脖男百搭披肩潮颜色分类：深灰色（220*60）',
            price:100,
            coupon:50,
            status:"交易成功"
          }],
            good_price:100,
            coupon:50,
            freight:20,
            total:400,
            real_pay:200
        }
    }
}
</script>
<style scoped>

    .can{
        width: 100%;
        padding-top: 70px;
    }
    section{
        width: 70%;
        margin:0px auto;
        margin-bottom: 40px;
    }
    .box1{
        border: 1px solid #dddddd;
        width:30%;
        background-color: #fbfbfb;
    }
    
    .box1 p{
            text-align: start;
            height: 30px;
            border-bottom: 1px solid #dddddd;
            font-size: 14px;
            display: flex;
            align-items: center;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            padding-left: 30px;
            background-color: #f3f3f3;
            font-weight: 700;
            width: 100%;

    }

    .box1 ul{
        width: 100%;
       
        text-align: start;
        font-size: 14px;
        line-height: 25px;
        padding: 20px;
        
    }

    .box2{
        border:1px solid #dddddd;
        border-left: none;
        width: 70%;
        padding: 30px;
        text-align: start;
    }

   

    .icon{ 
       font-size: 30px;
       color: green;
       font-weight: 700;
       margin-right: 30px;
    }

    section:nth-of-type(2){
        display: flex;
        flex-direction: row;
    }

   .text{
        margin-top: 30px;
        margin-left: 60px;
        
    }

     .box2 p:first-of-type{
        font-size:14px;
        font-weight: 700;
    }

    .el-table{
        border:1px solid #dddddd;
        border-bottom: none;
    }

    .pic{
        width: 70px;
        height: 70px;
        margin-left: 20px;
    }

    figure{
        background-color: #f3f3f3;
        height: 250px;
        text-align: end;
        font-size: 14px;
        color:#666666;
        padding-top: 30px;
        padding-right: 50px;
        line-height: 25px;
    }
    .active{
        color:black;
        font-size: 16px;
        margin-top:10px;
    }

  

    

</style>