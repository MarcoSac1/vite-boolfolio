<script>
import axios, { Axios } from 'axios';

export default{
    data(){
        return{
            posts:[],
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
    <h1>body</h1>
    <ul>
        <li v-for="post in posts">
            {{ post.title }}
        </li>
    </ul>
</template>


<style>

</style>