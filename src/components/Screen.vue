<template>
  <div class="Screen">
      <ul>
          <li>
    <iframe 
     src="https://shoppu.tv/?q=shihji.shop"
    >
    </iframe>
          </li>
  
       <li>
    <iframe 
     src="https://jboard.ypcloud.com/"
    >
    </iframe >
       </li>
    </ul>

    <ul>
    <li>
     <iframe 
     src="https://ultraview.ypcloud.com/">
     </iframe>
    </li>
    <li>
      <img src="https://i.imgur.com/5FHOHGB.jpg" />
    </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Screen",
};
</script>

<style scoped>
iframe{
    width: 600px;
    height: 400px;

}
img{
  width: 600px;
  height: 400px;
}
ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
}
li {
  display: inline-block;
   font-size: 100px;
  margin: 0 10px;
}

</style>
