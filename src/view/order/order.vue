<template>
    <div class="outbox">
        <section>
            <p>确认收货地址</p>
            <ul>
                <li v-for="item in addrList" :key="item.id">
                   <el-radio v-model="addrId" :label="item.id" >{{item.addr}}    {{item.name}}    {{item.phone}}</el-radio>
                </li>
            </ul>
            
            <el-button  @click="dialogTableVisible = true" style="margin-top:30px;">添加收货地址</el-button>
             <el-dialog
      title="添加收货地址"
      @close="addDialogClose"
      :visible.sync="dialogTableVisible"
      :close-on-click-modal="false"
    > 
    <!-- 添加用户的表单 -->
      <el-form ref="addFormRef" label-width="100px">
        <el-form-item prop="name" label="收货人姓名">
          <el-input type="text" v-model="addUser.name"></el-input>
        </el-form-item>
        <el-form-item prop="phone" label="收货人电话">
          <el-input type="text" v-model="addUser.phone"></el-input>
        </el-form-item>
        <el-form-item prop="address" label="收货人地址">
          <el-input type="text" v-model="addUser.addr"></el-input>
        </el-form-item>
        
        <el-form-item>
          <el-button @click="dialogTableVisible = false">取消</el-button>
          <el-button type="primary" @click="onAddUser">确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog> 
        </section>
        <section>
            <p>确认订单信息</p>
             <el-table
      :data="tableData"
     
      style="width: 100%;">
      <el-table-column
        prop="goodName"
        label="商品名称"
        >
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格"
        >
      </el-table-column>
      <el-table-column
        prop="freight"
        label="运费">
      </el-table-column>
       <el-table-column
        prop="discount"
        label="优惠">
      </el-table-column>
       <el-table-column
        prop="addup"
        label="小计">
      </el-table-column>
    </el-table>
        </section>
        <section>
            <figure>
                <div class="order">
                    <p>实付款：￥<span style="color:orangered;font-weight:900;font-size:24px">200</span></p>
                    <p>寄送至：{{selected.addr}}</p>
                    <p>收货人：{{selected.name}}    {{selected.phone}}</p>
                </div>
                <div class="btn">提交订单</div>
            </figure>
           
        </section>
    </div>
</template>
<script>

export default {
     data() {
        return {
            dialogTableVisible: false, // 添加用户弹框
             // 添加收货地址
            addUser: {
                 id:'',
                  addr: '',
                 name: '',
                    phone: '',
            },
            
            addrId:0,
            selected:{},
            addrList:[{
                id:1,
                addr:"广西壮族自治区桂林灵川县桂林电子科技大学花江校区",
                name:"隔壁老王",
                phone:"123567899"
            },
            {
                addr:"广西省苍梧县梧州市万秀区文化路",
                id:2,
                name:"路飞",
                phone:"456688748484"
            }],
           
           tableData: [{
            goodName: '裙子',
            price: 20,
            freight:10,
            discount:"-15",
            addup:200 
          }],
         
          
    
   
    }
},

    methods:{
        addDialogClose() {
      this.$refs.addFormRef.resetFields() // 清空表单
    },
        onAddUser:function(){
         
            this.addUser.id= Math.round(Math.random()*1000);
            console.log(this.addUser.id);
    
            this.addrList.push(this.addUser);
            this.addUser ={};
           
         this.$message.success('添加成功')
        this.dialogTableVisible = false  // 关闭弹框
        this.$refs.addFormRef.resetFields() // 清空表单
         console.log(this.addrList);
        }
    },
 

        updated:function(){
            for(let i=0;i<this.addrList.length;i++){
               if(this.addrList[i].id==this.addrId){
                     this.selected = this.addrList[i];
                   break;
                 }
               }
            }
        }    

</script>
<style scoped>
    .outbox{
        padding-top: 50px;
    }
    section{width:70%;margin:0px auto;margin-bottom: 50px;}
    section:first-of-type ul{
        width: 65%;
        margin:0px auto;
    }
    section>p{
        text-align: start;
        border-bottom: 2px solid lightgrey;
        width: 100%;
        margin:0px auto;
        font-size: 14px;
        font-family: 'Courier New', Courier, monospace;
        font-weight: 700;
        padding-bottom: 10px;
    }
    section:first-of-type li{
        width: 100%;
        text-align: start;
    }
    .el-radio{
        line-height: 30px;
    }
    section:nth-of-type(3){
        width: 70%;
        
    }
    figure{
        width:50%;
        float:right;
        text-align: end;
    }
    .order{
        border: 2px solid orangered;
        font-size: 16px;
        padding: 10px;
        line-height: 30px;
    }
  
    .btn{
        font-weight: 700;
        font-size: 16px;
        text-align: center;
        background-color: orangered;
        color:white;
        width: 30%;
        float:right;
        height: 28px;
        margin-bottom: 10px;
    }
    

</style>