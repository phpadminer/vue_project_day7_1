<template>
    <div class="footer">
      <router-link to="/home">
        <i class="iconfont icon-shouye
"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/collect">
        <i class="iconfont icon-shoucang
"></i>
        <span>收藏</span>
      </router-link>
      <router-link to="/list">
        <i class="iconfont icon-liebiao
"></i>
        <span>列表</span>
      </router-link>
      <router-link to="/detail">
        <i class="iconfont icon-detail
"></i>
        <span>详情</span>
      </router-link>
      <router-link to="/add">
        <i class="iconfont icon-add
"></i>
        <span>添加</span>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "tab"
    }
</script>

  <style scoped lang="less">
    .footer{
      position:fixed;
      display: flex;
      left:0;
      bottom:0;
      width:100%;
      height:50px;
      border-top: 1px solid #ccc;
      a{
        display: flex;
        flex-direction: column;
        flex:1;
        align-items: center;
        justify-content: center;
        color:#63a35c;

      }
      a.router-link-active{
        color:#df5000;
      }
    }

  </style>
