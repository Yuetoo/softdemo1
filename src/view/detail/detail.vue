<template>
<div class="container">
  <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#ffda44"
  text-color="#222222"
  active-text-color="#222222">
  <img src="../../assets/images/logo.png" style="float:left;margin-left:90px;height:90%;margin-top:5px;margin-right:50px;"/>
  <el-menu-item index="1">首页</el-menu-item>
  <el-menu-item index="2">发布闲置</el-menu-item>
  <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">我的闲置</a></el-menu-item>
</el-menu>

  <div class="seller">
     <el-image
      style="width: 30px; height: 30px;margin:5px;"
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574591774230&di=06feaad44096d0410cac32027a78ef4c&imgtype=0&src=http%3A%2F%2Fpic32.nipic.com%2F20130828%2F10013647_110750429165_2.jpg"
      :fit="fit"></el-image>
      <div class="per-box">
        <span>江小白</span>
        <a href="#">卖家信息</a>
      </div>
      <div class="divider"></div>
      <div class="per-box">
        <span>宝贝浏览次数</span>
        <a style="color:black">2333</a>
      </div>
       <div class="divider"></div>
      <div class="per-box">
        <span>最近编辑</span>
        <a style="color:black">2018-10-13</a>
      </div>
      <div class="divider"></div>
      <div class="per-box">
        <span>来自</span>
        <a style="color:black">闲鱼</a>
      </div>
      <div class="divider"></div>
      <a href="#" class="link">举报该宝贝</a>
      
  </div>

 <section class="outline">
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
          <p class="title">2019新款十字貂膝进口水貂皮草外套</p>
          <div style="margin-top:10px;font-size:16px;letter-spacing:2px">转卖价：<span style="color:gray;font-size:30px;">￥</span><span class="active" >200</span></div>
           <el-divider></el-divider> 
          <div class="text">
             <p>入手价：<span style="text-decoration: line-through;">1000</span>元</p>
              <p>运费：20元</p>
              <p>校区：桂林电子科技大学花江校区</p>
          </div>
    <el-button type="danger" style="width:100px;"><i class="el-icon-shopping-cart-2"></i>想要</el-button>
          
             <el-button style="width:100px;margin-left:20px;" type="warning"><i class="el-icon-star-off"></i>收藏</el-button>
            <img src="../../assets/images/demo.png" style="margin-top:30px;"/>
      </figure>
 </section>
   <section class="part2">
    
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="display-box">
    <el-tab-pane label="宝贝介绍" name="first">
      <el-card class="box-card" style="text-align:start;text-indent:2em;height:300px;">
      Nars蜜粉饼 粉饼是全新未使用过的~结婚买来做伴手礼的，怕送礼的时候不够 所以买出了几个，送自己和送闺蜜肯定都是保真的。日期还很新鲜， 超喜欢的~购入凭证都在的，也支持专柜验货 有需要的小姐姐来私聊我 （不墨迹的小姐姐送粉扑）没用过没损坏，
      </el-card>
    </el-tab-pane>
    <el-tab-pane label="留言" name="second">
      <ul style="height:300px;">
        <li>
           <el-image
      style="float:left;width: 50px; height: 50px;margin-right:20px;"
      src="http://b-ssl.duitang.com/uploads/item/201710/13/20171013221109_j5e8K.thumb.700_0.jpeg"
      :fit="fit"></el-image>
      <div style="text-align:start;">
          <p style="font-size:14px;color:gray;margin-bottom:10px;">王小波</p>
          <p style="font-size:14px;">这个买家好棒超级棒！！！<span style="float:right;color:grey;">2018-03-10</span></p>
      </div>
          <el-divider></el-divider> 
        </li>

        <li>
           <el-image
      style="float:left;width: 50px; height: 50px;margin-right:20px;"
      src="http://b-ssl.duitang.com/uploads/item/201710/13/20171013221109_j5e8K.thumb.700_0.jpeg"
      :fit="fit"></el-image>
      <div style="text-align:start;">
          <p style="font-size:14px;color:gray;margin-bottom:10px;">王小波</p>
          <p style="font-size:14px;">这个买家好棒超级棒！！！<span style="float:right;color:grey;">2018-03-10</span></p>
      </div>
          <el-divider></el-divider> 
        </li>

       
      </ul>
    </el-tab-pane>
    
  </el-tabs>
    </section>

    <footer><img src="../../assets/images/bottom.png" style="width:100%;"/></footer>
      
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
    padding-left: 4%;
   
}
.active{
    color:#ff4400;
    font-weight: 900;
    font-size: 40px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.title{
    font-family: 'Courier New', Courier, monospace;
    font-size: 30px;
}
.divider{
  width: 1px;
  border: 1px dotted #e7e7e7;
  height: 100%;
}
.seller{
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 80%;
  margin:0 auto;
  border: 1px solid #e7e7e7;
  border-top: 2px solid black;
  border-radius: 0px 0px 5px 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding:10px;
  position: relative;
  
}
.per-box{
  display:flex;
  flex-direction:column;
  margin-left: 30px;
  margin-right: 30px;
}
.link{
  position: absolute;
  right:10px;
  color: gray;
}

.part2{
  width:100%;
  
}

.text{
  line-height: 30px;
  font-size: 16px;
  margin-bottom: 20px;
}

.line{
  width:80%;
  height: 5px;
  background-color: gold;
}
.display-box{
  width: 70%;
  
  margin: 0 auto;
  font-size: 16px;
 
}

figure{
    text-align: start;
    width: 500px;
}

.image{
    width: 80%;
    height: 90%;
}
.swiper{
    width: 500px;
    height: 500px;
}

.bottom{
    text-align: end;
}

.seller div span{
  font-size: 14px;
  font-weight: bold;
  color: gray;
}
.seller div a {
  font-size: 10px;
  color:brown;
  margin-top: 5px;
}
.container{
 
  width: 100%;
  padding: 0px;
  background-color: white;
}
footer{
  width: 100%;
  padding: 0px;
  margin:0px;
  margin-top: 50px;
}


</style>