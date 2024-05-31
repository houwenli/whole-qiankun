<template>
  <div class="app-main-box">
    <!--- 没有菜单列表时隐藏页面展示区域，防止用户给自己把所有权限取消刷新页面之后还可以操作 --->
    <section v-if="menuList.length > 0" class="main-section">
      <!-- 添加keepAlive -->
      <keep-alive>
        <router-view v-if="route.meta.keepAlive && route.meta.isMain" class="height-abs app-main" :key="key" />
      </keep-alive>
      <router-view class="height-abs app-main" v-if="!route.meta.keepAlive && route.meta.isMain" :key="key" />
      <div class="subapp-wrap" v-show="!route.meta.isMain" id="subapp-viewport"></div>
    </section>

    <section v-else class="default-page">
      <div class="default-box">
        <img class="default-img" :src="defaultImg" alt="" />
        <p class="default-txt">当前系统没有访问的权限，请联系管理员处理</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const menuList = [11]

const defaultImg = require('../../../assets/images/img_no_permission.png')
</script>

<style lang="scss">
.app-main-box {
  width: 100%;
  height: calc(100vh - 56px);
  overflow-y: auto;
}

.default-page {
  width: 100%;
  padding: 16px;

  .default-box {
    width: 100%;
    height: 100%;
    padding-top: 170px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

    .default-img {
      width: 320px;
      height: 200px;
    }

    .default-txt {
      font-size: 18px;
      color: #606266;
      line-height: 25px;
    }
  }
}

.main-section {
  height: 100%;

  .subapp-wrap {
    height: 100%;
  }

  .fixed_header_warp {
    top: 0 !important;
  }

  .app-main {
    height: 100%;
    background: #fff;
    border-radius: 8px;
    overflow: auto;
    margin: 24px;
  }

  .height-abs {
    padding: 16px 24px 24px 24px !important;
    margin: 0 !important;
    background: none;
  }

  .fixed-header + .app-main {
    padding-top: 50px;
  }

  .hasTagsView {
    .app-main {
      height: calc(100vh - 84px);
      background: #f0f2f5;
    }

    .fixed-header + .app-main {
      padding-top: 84px;
    }
  }
}
</style>
<style lang="scss">
#subapp-viewport {
  height: 100%;

  // overflow: hidden;
  .web-order {
    .set_btn.fixed-footer {
      z-index: 162;
    }
  }

  .container .logo {
    display: none;
  }
}

#subapp-viewport > div {
  height: 100%;
}

.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}

#subapp-viewport {
  .fixed_header_warp {
    top: 0 !important;
  }
}

.subapp-wrap > div {
  height: 100%;
}
</style>
