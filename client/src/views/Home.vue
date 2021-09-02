<template>
  <div class="home">
    <router-link to="/about">about</router-link>
    <HelloWorld msg="基于 OK 构建的 Vue.js 2.x 版本" />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
