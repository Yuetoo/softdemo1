<template>
 <div class="outline">
    
      <!-- swiper -->
      <swiper :options="swiperOption" class="swiper">
        <swiper-slide v-for="(item,index) in banner" :key="index">
            <a :href="item.image_url" target="_blank">
            <img :src="item.image_url" class="image"/>
        </a>
        </swiper-slide>
        
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <figure>
          <p class="title">2019新款十字貂长款貂皮大衣女天鹅绒整貂长过膝进口水貂皮草外套</p>
            <el-tag type="danger" style="margin-top:10px;"><i class="el-icon-goods"></i>服饰</el-tag>
            <a>卖家信息</a>
            <section style="display:flex;flex-direction:row;">
          <el-card class="detail">
              <div>入手价：<span style="text-decoration: line-through;">1000</span>元</div>
              <div>二手价：<span class="active">200</span>元</div>
          </el-card>
           <el-table
           :data="tableData" style="margin-top:20px;background-color:rgba(255,255,255,0)">
      <el-table-column
        prop="freight"
        label="运费"
        width="100">
      </el-table-column>
      <el-table-column
        prop="area"
        label="校区"
        width="220">
      </el-table-column>
    </el-table>
    </section>
           <el-card class="box-card discribe">淘宝为第三方交易平台及互联网信息服务提供者，其真实性、准确性和合法性均由店铺经营者负责。淘宝提醒用户购买商品/服务前注意谨慎核实。如用户对商品/服务的标题、价格、详情等任何信息有任何疑问的，请在购买前通过阿里旺旺与店铺经营者沟通确认；淘宝存在海量店铺，如用户发现店铺内有任何违法/侵权信息，请立即向淘宝举报并提供有效线索</el-card>
            
            <section class="bottom"><el-button style="margin-right:30px;" type="warning"><i class="el-icon-star-off"></i>收藏</el-button><el-button type="danger" style="margin-right:30px;"><i class="el-icon-plus"></i>想要</el-button></section>
      </figure>
     
   </div>
</template>

<script>
  export default {
    data() {
      return {
          banner:[{
              image_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574418179631&di=a9f07ec453f9331acca812820b541ffd&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170812%2F2f427f9a59f14adda499ffb51afc21ba_th.png",
          },{
              image_url:"http://imgsa.baidu.com/exp/w=500/sign=372774a3b7fd5266a72b3c149b199799/1f178a82b9014a9040ef3ef5a8773912b21beea1.jpg"
          },{
              image_url:"http://img.11665.com/img3_p3/i2/2209834167/TB2QHk5bKQkyKJjy0FoXXcxwpXa_%21%212209834167.jpg"
          }],
           tableData: [{
            freight:20,
            area: '桂林电子科技大学花江校区',
          } ],
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>
<style scoped>
.outline{
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-right: 10%;
    padding-top: 5%;
    padding-left: 4%;
    background-image: url("../../assets/images/detail.jpg");
    background-size: 100% 100%;
}
.active{
    color: red;
    font-weight: 900;
    font-size: 40px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.title{
    font-family: 'Courier New', Courier, monospace;
    font-size: 30px;
}

figure{
    text-align: start;
    width: 600px;
}
.detail{
    margin-top: 10px;
    background-color: rgb(243, 201, 164);
    border-radius: 5px;
    width: 36%;
    text-align: start;
    font-size: 18px;
    margin-right: 30px;
    margin-bottom: 20px;
}

.image{
    width: 80%;
    height: 90%;
}
.swiper{
    width: 500px;
    height: 500px;
}

.discribe{
    font-size: 16px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-indent: 2em;
    height: 200px;
    width: 100%;
    overflow:scroll;
    margin-bottom: 20px;
}
.bottom{
    text-align: end;
}


</style>