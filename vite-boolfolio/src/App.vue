<script>
  import MainHeader from './components/MainHeader.vue';
  import MainFooter from './components/MainFooter.vue';
  import AppMain from './components/AppMain.vue';


    export default{
      name:"",
      components:{
        MainHeader,
        AppMain,
        MainFooter
      }

    }
</script>

<template>
  <MainHeader/>
  <AppMain/>
  <MainFooter/>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
