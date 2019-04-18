<template>
  <el-row class="tac">
  <el-col :span="24">
    <el-menu
      class="el-menu-vertical-demo"
      router
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">

      <el-submenu v-for="item in menu" :index="item.id" :key="item.id">
        <template slot="title">
          <span v-text="item.name"></span>
        </template>
        <el-menu-item-group class="over-hide" v-for="sub in item.sub" :key="sub.componentName">
          <el-menu-item :index="sub.componentName" v-text="sub.name">
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
  </el-col>
</el-row>
</template>

<style scoped>
  .over-hide{
    overflow: hidden;
  }
</style>

<script>
  import {menu} from '@/config/menu-config'  //如果export default 则不需要加花括号，花括号内用空格隔开多个数据(因为default时是默认变量名相当于 as后面的名称)
  // console.log(menu)

  export default {
    data () {
      return {
        menu: menu
      }
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }

</script>