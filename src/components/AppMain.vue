<script>
    import axios, { Axios } from 'axios';
    import ProjectCard from '../components/ProjectCard.vue';

export default{
    name:"",
    components:{
        ProjectCard
    },

    data(){
        return{
            posts:[]
        }
    },
}
</script>

<template>
    <ProjectCard/>
</template>


<style>

</style>