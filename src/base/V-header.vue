<template>
    <div class="header">
      <slot></slot>
      <i class="iconfont icon-fanhui" v-if="back" @click="goBack"></i>
    </div>
</template>

<script>
    export default {
      props:{
        back:{
          type:Boolean,
          default:false,
        }
      },
      name: "v-header",
      methods:{
        goBack(){
          this.$router.go(-1)
        }
      }

    }
</script>

<style scoped lang="less">
  .header{
    position: fixed;
    width: 100%;
    text-align: center;
    height: 50px;
    line-height: 50px;
    background-color: #df5000;
    i{
      position: absolute;
      font-size: 20px;
      left: 10px;
    }
  }

</style>
