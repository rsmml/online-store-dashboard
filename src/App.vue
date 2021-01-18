<template>
  <div id="app">
    <SideBar></SideBar>
    <router-view/>
  </div>
</template>

<script>
import SideBar from './components/SideBar';

export default {
  name: 'App',
  components: {
    SideBar,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
