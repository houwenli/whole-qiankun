<template>
  <div>
    <Logo />
    <el-scrollbar wrap-class="scrollbar-wrapper" class="main-box" style="height: calc(100% - 282px)">
      <el-menu :default-active="activeMenu" :collapse="false" background-color="#202F52" text-color="#909399" active-text-color="#fff" :collapse-transition="false" mode="vertical">
        <Link v-for="item in menuList" :key="item.name" :to="item.path">
          <el-menu-item :index="item.name">
            <template #title>
              <el-icon><location /></el-icon>
              <span>{{ item.meta.title }}</span>
            </template>
          </el-menu-item>
        </Link>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import Logo from './logo.vue'
import Link from './link.vue'

import { useMenu } from './hook/useMenu'

const { menuList, activeMenu } = useMenu()
</script>

<style></style>
