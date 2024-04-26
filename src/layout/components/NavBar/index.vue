<template>
  <div class="navbar main-box">
    <div class="tags-box">
      <TagsView />
    </div>
    <div class="right-menu">
      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <img src="../../../assets/images/ic_userpic@2x.png" class="user-avatar" />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <span>修改密码</span>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <span>退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import TagsView from '../TagsView'
</script>

<style lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  height: 56px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: none;
  padding-left: 10px;
}

.tags-box {
  display: flex;
  width: 100%;
  padding-right: 60px;
  overflow: hidden;
}
.right-menu {
  margin-left: 36px;
  float: right;
  height: 100%;
  line-height: 56px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  &:focus {
    outline: none;
  }

  .right-menu-item {
    display: inline-block;
    padding: 0 8px;
    height: 100%;
    font-size: 18px;
    color: #5a5e66;
    vertical-align: text-bottom;

    &.hover-effect {
      cursor: pointer;
      transition: background 0.3s;
    }
  }

  .avatar-container {
    margin-right: 8px;

    .avatar-wrapper {
      position: relative;

      .user-name {
        display: block;
        margin: 0 0 0 7px;
        float: right;
        font-size: 14px;
        font-weight: 500;
        color: #303133;
        div {
          font-size: 16px;
          display: inline-block;
          max-width: 64px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        img {
          margin-left: 2px;
          width: 24px;
          height: 24px;
          position: relative;
          bottom: 16px;
        }
      }

      .user-avatar {
        cursor: pointer;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        position: relative;
        top: 10px;
        color: #909399;
      }

      .el-icon-caret-bottom {
        margin-left: 6px;
        cursor: pointer;
        position: relative;
        bottom: 35px;
        color: #909399;
      }
    }
  }
}
</style>
