<template>
  <div class="About">
    <p>I work here<br />
      <a href="https://eip.ypcloud.com/zh_TW/"><img src="../assets/YPCloud.png" /></a>
      
    </p>
    <ul>
      <li>
        <img alt="chibi" src="../assets/jboard.png" />
        <a href="https://jboard.ypcloud.com/" target="_blank" rel="noopener"
          >jboard</a
        >

        <img alt="chibi" src="../assets/jbuilder.png" />
        <a href="https://jbuilder.ypcloud.com/" target="_blank" rel="noopener"
          >jbuilder</a
        >

        <img alt="chibi" src="../assets/fbuilder.png" />
        <a href="https://fbuilder.ypcloud.com/" target="_blank" rel="noopener"
          >fbuilder</a
        >
      </li>
    </ul>
    <ul>
      <li>
      <img alt="chibi" src="../assets/ioctouch.png" />
      <a href="https://iocwatch.ypcloud.com/" target="_blank" rel="noopener"
        >iocwatch</a
      >

      <img alt="chibi" src="../assets/gitwork.png" />
      <a href="https://gitwork.ypcloud.com/" target="_blank" rel="noopener"
        >gitwork</a
      >

      <img alt="chibi" src="../assets/tg.png" />
      <a href="https://web.telegram.org/" target="_blank" rel="noopener"
        >telegram</a
      >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  height: 50px;
}
p{
  font-size: 30px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
   font-size: 25px;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
