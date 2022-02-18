<template>
  <div class="products">
    <ul>
      <li>
        <img alt="tree" src="../assets/tree.png" />
        <h3>Ultranet Platform</h3>
      </li>

      <li>
        <img alt="mote" src="../assets/mote.png" />
        <h3>MoteOS for the edge</h3>
      </li>

      <li>
        <img alt="fbots" src="../assets/fbots.png" />
        <h3>Flowbot Automation</h3>
      </li>
    </ul>

    <ul>
      <li>
        <img alt="tree" src="../assets/logo.png" />
        <h3>Jujue SaaS</h3>
      </li>

      <li>
        <img alt="mote" src="../assets/smartscreen.png" />
        <h3>smartscreen</h3>
      </li>

      <li>
        <img alt="fbots" src="../assets/ultrabuilder.png" />
        <h3>ultrabuilder</h3>
      </li>
    </ul>

    <ul>

    <iframe  width="100%" height="350px" 
     src="https://jboard.ypcloud.com/">
     </iframe>

    </ul>
  </div>
</template>

<script>
export default {
  name: "products",
};
</script>

<style scoped>
/* .products {
   background: #003999;
  color: white;
  height: 100px;
  line-height: 100px; 
  padding: 20px;
  width: 50%;
  white-space: wrap;
} */
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  text-align: center;
  margin: 0 10px;
}
li h3:hover { /* when the mouse moves */
    background-color: wheat; 
}
h3 {
  margin: 40px 0 0;
}
img {
  height: 100px;
}
</style>
