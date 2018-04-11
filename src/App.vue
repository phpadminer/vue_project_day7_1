<template>
  <div id="app">
    <router-view/>
    <Tab></Tab>
  </div>
</template>

<script>

  import Tab from './base/tab.vue';
  export default {
    name: 'App',
    components:{
      Tab
    }
  }
</script>

<style>
  *{margin:0;padding: 0;}
  ul,li{
    text-decoration: none;
  }
  a{
    text-decoration: none;

  }
</style>
