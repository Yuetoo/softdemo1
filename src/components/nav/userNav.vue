<template>
  <div  style="width: 200px">
    <div>
      <el-image
        style="width: 200px; height: 200px"
        :src="src"
      ></el-image>
    </div>
        <el-menu
          :router="true"
          :default-active="defaultActiveIndex"
          class="el-menu-vertical-demo"
          @select="handleSelect"
          background-color="#fff"
          text-color="green"
          active-text-color="red">
          <el-menu-item index="1">
            <span slot="title">完善信息</span>
          </el-menu-item>
          <el-menu-item index="/user/bought">
            <span slot="title">我的宝贝</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">我卖出的</span>
          </el-menu-item>
          <el-menu-item index="4" >
            <span slot="title">我收藏的</span>
          </el-menu-item>
          <el-menu-item index="5">
            <span slot="title">我买到的</span>
          </el-menu-item>
          <el-menu-item index="/user/message">
            <span slot="title">我的消息</span>
          </el-menu-item>
        </el-menu>


  </div>
</template>

<script>
    export default {
        name: "userNav",
        data(){
            return{
                defaultActiveIndex: '/',
                src:'http://www.summerstudy.top/2019/11/22/5847f13730753.jpg',
            }
        },methods: {
            handleSelect(index){
                this.defaultActiveIndex = index;
            },
        }
    }
</script>

<style scoped>

</style>
