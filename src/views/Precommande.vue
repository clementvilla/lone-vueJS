<template>
  <div class="page">
    <TitrePage />
    <div class="col-l-12 col-s-12">
      <div class="c-precommande__container">
        <div class="c-precommande__innerContainer">
          <img
            class="c-precommande__img"
            src="img\chaussure-creations.png"
            alt="chaussure M-22 enregistrée dans les créations"
          />
        </div>
      </div>
    </div>
    <InfoPrecommande />
  </div>
</template>

<script>
    import InfoPrecommande from '../components/InfoPrecommande.vue';
    import TitrePage from "../components/TitrePage.vue";
    export default {
    components: { TitrePage, InfoPrecommande },
    };
</script>

<style lang="scss">

</style>