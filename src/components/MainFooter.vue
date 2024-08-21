<script>
import axios, { Axios } from 'axios';
    export default{
        data(){
            return{

            }
        }
    }
</script>

<template>
<footer class="twitter-footer">
    <div class="footer-links">
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Accessibility</a>
        <a href="#">Ads info</a>
        <a href="#">More...</a>
    </div>
    <p>&copy; 2024 Twitter, Inc.</p>
</footer>
</template>


<style lang="scss">
.twitter-footer {
    background-color: #1da1f2;
    color: white;
    text-align: center;
    padding: 20px 0;
    margin-top: 40px;
    position: sticky;
    bottom: 0;
    width: 100%;
}

.footer-links {
    margin-bottom: 10px;
}

.footer-links a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
    font-size: 14px;
}

.footer-links a:hover {
    text-decoration: underline;
}

.twitter-footer p {
    font-size: 14px;
    margin-top: 10px;
}
</style>