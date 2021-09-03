<template>
  <div class="home">
    <router-link to="/about">about</router-link>
    <HelloWorld msg="List page" />
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
