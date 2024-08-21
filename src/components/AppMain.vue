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
    methods:{
        getPosts(){
            axios.get('http://127.0.0.1:8000/api/posts', {
            params: {
            
            }
        })
        .then((response)=> {
            console.log(response.data.results.data);
            this.posts = response.data.results.data;
        })
        .catch(function (error) {
            console.log(error);
        });  
        }
    },
    created(){
        this.getPosts();
    }
}
</script>

<template>
    <ProjectCard/>
</template>


<style>

</style>