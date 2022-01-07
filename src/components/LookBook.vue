<template>
  <div class="container wrapper-container">
    <div class="row -flex-end">
      <h2 class="title lineTitle">lookbook</h2>
    </div>
    <div class="row -center -nowrap c-container__lookbook slider">
      <div class="img-1"></div>
      <div class="img-2"></div>
      <div class="img-3"></div>
      <div class="img-4"></div>
      <div class="img-5"></div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
.c-container__lookbook{
    div{
        width: 200px;
        height: 600px;
        margin: 20px;
        background-image: url('/src/img/m22_home_concept.png');
        background-size: cover;
        transition: 0.5s ease-in-out;
    }
    div:hover{
        width: 500px;
    }
}
.splide__slide img {
    width: 100%;
    height: auto;
}
</style>