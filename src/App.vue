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
.rowNav {
  background: #1f1f1f77;
}

.c-header__container {
  display: flex;
  justify-content: center;
  align-items: center;
  .c-header__innerContainer {
    .e-header__log {
      display: flex;
      align-items: center;
      svg {
        margin: 10px;
        width: 25px;
        color: white;
        animation: none;
      }
    }
    .e-header__logo {
      svg {
        width: auto;
        height: 74px;
      }
    }
    .e-header__link {
      display: flex;
      align-items: center;
      a {
        margin: 20px;
      }
    }
  }
}

.col-l-4 {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
