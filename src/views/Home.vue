<template>
  <div class="home">
  
    <Shoes />
    <CarreGris />
    <Concept />
    <BandeauFAQ />
    <Boite />
    <Card />
    <LookBook />

  </div>
</template>

<script>

  import Shoes from "@/components/Shoes";
  import CarreGris from "@/components/CarreGris";
  import Concept from "@/components/Concept";
  import BandeauFAQ from "@/components/BandeauFAQ";
  import Boite from "@/components/Boite";
  import Card from "@/components/Card";
  import LookBook from "@/components/LookBook";


  export default {
    components: {
      Shoes,
      CarreGris,
      Concept,
      BandeauFAQ,
      Boite,
      Card,
      LookBook
    }
  }

</script>
