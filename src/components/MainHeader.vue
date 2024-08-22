<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>

<template>
<body>
    <header class="twitter-header">
        <div class="logo">
            <img src="https://abs.twimg.com/responsive-web/client-web/icon-ios.b1fc7275.png" alt="Twitter Logo">
        </div>
        <nav class="nav-menu">
            <a href="#">Home</a>
            <a href="#">Blog</a>
            <a href="#">About</a>
            <a href="#">Notifications</a>
            <a href="#">Messages</a>
            <a href="#">Bookmarks</a>
            <a href="#">Profile</a>
        </nav>
        <div class="search-bar">
            <input type="text" placeholder="Search Twitter">
        </div>
        <div class="profile-icon">
            <img src="https://via.placeholder.com/40" alt="Profile Icon">
        </div>
    </header>
</body>
</template>


<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background-color: #e6ecf0;
}

.twitter-header {
    background-color: #1da1f2;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.logo img {
    height: 40px;
}

.nav-menu {
    display: flex;
    align-items: center;
}

.nav-menu a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    font-size: 16px;
    font-weight: bold;
}

.nav-menu a:hover {
    text-decoration: underline;
}

.search-bar {
    position: relative;
}

.search-bar input {
    padding: 8px;
    border-radius: 50px;
    border: none;
    outline: none;
    width: 250px;
}

.profile-icon img {
    margin-right: 0.5rem ;
    margin-left: 0.5rem ;
    height: 40px;
    border-radius: 50%;
}
</style>