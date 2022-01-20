<template>
  <div class="page">
    <TitrePage />
    <div class="row-center">
      <div class="col-12">
        <p>
          Une question ? La réponse se trouve peut-être déjà dans la FAQ, vas y
          jeter un oeil ! Sinon nous restons disponible. Remplis le formulaire
          de contact ci-dessous et pose nous ta question. Nous te répondrons le
          plus rapidement possible.
        </p>
      </div>
      <FormulaireContact />
    </div>
  </div>
</template>

<script>
import FormulaireContact from '../components/FormulaireContact.vue';
import TitrePage from "../components/TitrePage.vue";
export default {
  components: { TitrePage, FormulaireContact },
};
</script>

<style lang="scss">
</style>