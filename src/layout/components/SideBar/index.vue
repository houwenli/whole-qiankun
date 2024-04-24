<template>
  <div>
    <Logo />
    <el-scrollbar wrap-class="scrollbar-wrapper" class="main-box" style="height: calc(100% - 282px)">
      <el-menu :default-active="activeMenu" :collapse="isCollapse" background-color="#202F52" text-color="#909399" active-text-color="#fff" :collapse-transition="false" mode="vertical">
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><location /></el-icon>
            <span>顶顶顶顶</span>
          </template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
        </el-sub-menu>
        <!-- <sidebar-item v-if="route.resourcesName !== '我要投诉'"
                    v-for="(route, index) in menuList" :key="`${route.resourcesUrl}${index}`" :item="route"
                    :base-path="route.resourcesUrl" /> -->
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import Logo from './logo.vue'
</script>

<style></style>
