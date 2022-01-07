<template>
  <div class="home">
  
    <Shoes />
    <CarreGris />
    <Concept />

  </div>
</template>

<script>

  import Shoes from "@/components/Shoes";
  import CarreGris from "@/components/CarreGris";
  import Concept from "@/components/Concept";

  export default {
    components: {
      Shoes,
      CarreGris,
      Concept
    }
  }

</script>
