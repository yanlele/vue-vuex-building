<template>
  <div id="app">
    <yanle></yanle>
    <hr>
    <router-link to="/home">主页</router-link>
    <router-link to="/news">新闻页</router-link>
    <hr>
    <router-view></router-view>
    <hr>

  </div>
</template>

<script>
  import yanle from './components/yanle.vue';

  export default {
    components: {
      yanle,
    }
  }
</script>

<style>
  .router-link-active {
    color: #ff5f3e;
    font-size: larger;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
