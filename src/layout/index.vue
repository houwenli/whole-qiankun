<template>
  <div class="app-wrapper">
    <!-- 左侧菜单 -->
    <SideBar class="sidebar-container"></SideBar>
    <!-- 中间部分 -->
    <div class="main-container">
      <!-- 头部navbar -->
      <NavBar></NavBar>
      <!-- 主要内容区域 -->
      <div>
        <AppMain></AppMain>
      </div>
    </div>
  </div>
</template>

<script setup>
import { AppMain, SideBar, NavBar } from './components/index'
</script>

<style lang="scss" scoped></style>
