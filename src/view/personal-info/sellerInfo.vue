<template>
    <div class="can">
        <section>
            <div class="left-info">
                <el-avatar :size="90" :src="avatar" shape="square"></el-avatar>
                <span style="margin-top:28px;color:#333333;">{{seller.name}}</span>
               
            </div>
            <el-card class="box-card">
                <p>成功转卖<span>630</span>件</p>
                <div class="right-info">
                   
                    <ul>
                        <li>用户昵称：{{seller.name}}</li>
                        <li>性别：{{seller.sex}}</li>
                    </ul>
                    <ul>
                        <li>所在校区：{{seller.school}}</li>
                        <li>联系方式：{{seller.tel}}</li>
                    </ul>
               </div>
            </el-card>
        </section>
        <section>
            <figure>
                <el-tabs type="border-card">
                    <el-tab-pane label="转卖评价">
                        <ul style="height:300px;">
                            <li v-for="(item,index) in remark" :key="index">
                                 <el-avatar shape="square" :size="50" :src="item.avatar" style="float:left;margin-right:20px;"></el-avatar>
                                <div style="text-align:start;">
                                    <p style="font-size:14px;color:gray;margin-bottom:8px;">{{item.name}}</p>
                                    <p style="font-size:14px;">{{item.content}}<span style="float:right;color:grey;">{{item.date}}</span></p>
                                </div>
                                <el-divider></el-divider> 
                            </li>
                          </ul>
                    </el-tab-pane>
                   
                </el-tabs>
            </figure>
        </section>
    </div>
</template>
<script>
export default {
    data(){
        return{
            avatar:"http://tupian.qqjay.com/tou2/2019/0912/119e24c50ce3e1b3000d6fcd13bff484.jpg",
            seller:{
                name:"超级大佬",
                sex:"男",
                school:"清华大学",
                tel:"147852369", 
            },
            remark:[{
            avatar:"http://51ttjia.com/uploads/allimg/180703/001H11442-2.jpg",
            name:"小宏",
            content:"这个卖家超级棒！！！！",
            date:"2019-12-10"
          },
          {
            avatar:"http://51ttjia.com/uploads/allimg/180703/001H11442-2.jpg",
            name:"小宏",
            content:"这个卖家超级棒！！！！",
            date:"2019-12-10"
          },
          {
            avatar:"http://51ttjia.com/uploads/allimg/180703/001H11442-2.jpg",
            name:"小宏",
            content:"这个卖家超级棒！！！！",
            date:"2019-12-10"
          }],
        }
    }
}
</script>
<style scoped>

.can{
    width: 100%;
    padding-top: 40px;
    background-color:#f2f1ed;
}
section{
    width: 70%;
    margin:0px auto;
}
   section:first-of-type{
       display: flex;
       flex-direction: row;
   }

   .left-info{
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-right: 50px;
   }
   section:first-of-type .el-avatar{
       border:5px solid white;
       box-shadow: 1px 1px 6px lightgray;
       
   }

   .el-card{
       width: 80%;
       text-align: start;
   }
   .el-card p{
       color: #ffda44;
       font-size: 18px;
       line-height: 30px;
       font-weight: 700;
       letter-spacing: 2px;
       margin-bottom: 30px;
   }
   .el-card span{
       color:#ff6600;
       font-size: 22px;
       font-weight: 900;
       margin:2px;
   }

   .right-info{
       display: flex;
       flex-direction: row;
       color: #666666;
       width: 100%;
       height: 70px;
       line-height: 28px;
   }

   .right-info ul:first-of-type{
       background-color: #fff6e0;
       width:48%;
       margin-right: 2%;
       height: 100%;
       border-radius: 6px;
       padding-top:8px;
       padding-left: 14px;
   }
    .right-info ul:nth-of-type(2){
        background-color: #f6faf1;
        width: 48%;
        height: 100%;
        border-radius: 6px;
         padding-top:8px;
         padding-left: 14px;
    }
    .el-tabs{
        margin-top: 30px;
        height: 500px;
        overflow:scroll;
    }
    .divider{
        width: 1px;
        border: 1px dotted #e7e7e7;
        height: 100%;
    }

   
</style>