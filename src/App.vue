<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
     
  </div> -->
  <div>
  <Navbar />
  <Home />
  
  <!-- <Image />
  <About />  -->
  <router-view />

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
// import Image from './components/Header.vue'
// import About from './views/About.vue'
// import Home from './views/Home.vue'
export default {
  name:'App',
  components:{Navbar,Home
   
  //  Image,
  //  About
   }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
