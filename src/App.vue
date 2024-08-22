<script>
  import MainHeader from './components/MainHeader.vue';
  import MainFooter from './components/MainFooter.vue';
  // import AppMain from './components/AppMain.vue';


    export default{
      name:"",
      components:{
        MainHeader,
        // AppMain,
        MainFooter
      }

    }
</script>

<template>
  <MainHeader/>
  <!-- <AppMain/> -->
  <RouterView>

  </RouterView>
  <MainFooter/>
</template>

<style lang="scss">
@use "./styles/partials/general.scss"
</style>
