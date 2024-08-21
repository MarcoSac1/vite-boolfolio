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
    <div class="tweet" v-for="post in posts">
    <div class="tweet-header">
        <img class="avatar" src="https://via.placeholder.com/50" alt="User Avatar">
        <div class="tweet-info">
            <span class="name">{{ post.title }}</span>
            <span class="username">@johndoe</span>
            <span class="time">· 2h</span>
        </div>
    </div>
    <div class="tweet-content">
        <p>{{ post.title }}</p>
    </div>
    <div class="tweet-interactions">
        <span class="icon">💬 12</span>
        <span class="icon">🔁 8</span>
        <span class="icon">❤️ 34</span>
        <span class="icon">📤</span>
    </div>
</div>
    <!-- <ul>
        <li v-for="post in posts">
            {{ post.title }}
        </li>
    </ul> -->
</template>


<style lang="scss">
.tweet {
    background-color: white;
    border: 1px solid #e1e8ed;
    border-radius: 10px;
    padding: 15px;
    margin: 20px auto;
    max-width: 600px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.tweet-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
}

.tweet-info {
    display: flex;
    flex-direction: column;
}

.name {
    font-weight: bold;
    font-size: 16px;
}

.username, .time {
    color: #657786;
    font-size: 14px;
}

.tweet-content {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 10px;
}

.tweet-interactions {
    display: flex;
    justify-content: space-between;
    color: #657786;
}

.icon {
    cursor: pointer;
}

.icon:hover {
    color: #1da1f2;
}
</style>