<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <vheader />
      </el-header>
      <el-container>
        <el-aside width="200px" height=100%;>
          <navmenu></navmenu>
        </el-aside>
        <el-main height="100%">
           <router-view></router-view>
        </el-main>
      </el-container>
      <el-footer>
        <div>
          @ Authored by ZephyrMay &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="http://www.miitbeian.gov.cn" target="_blank" font-size=12px >沪ICP备19005682号-1</a>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu'
import Header from '@/components/Header'

export default {
  name: 'app',
  components: {
    'navmenu': NavMenu,
    'vheader': Header
  }
}

</script>

<style>
.header {
  background-color: #409EFF;
  color: #fff;
  line-height: 60px;
  text-align: center
}
.el-aside {
  height:100%
}
.el-main {
  height:100%
}
.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
  position: fixed;
  bottom:0;
  width:100%
}
.wrapper{
  min-height:100%;
  margin-bottom:-70px;
  text-align: center
}

</style>