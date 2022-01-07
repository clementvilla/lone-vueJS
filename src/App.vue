<template>
  <div id="app">
    <div id="nav">
     <Header />
    </div>
    <Footer />
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default{
  components: {
    Header,
    Footer,
  }
  
}

</script>


<style lang="scss">

</style>
