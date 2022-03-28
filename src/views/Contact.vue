<template>
  <div class="page">
    <h1 class="title -big -textCenter" v-html="data.title.rendered"></h1>
    <div class="row -center">
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
import FormulaireContact from "@/components/FormulaireContact.vue";
import axios from "axios";

export default {
  components: { FormulaireContact },
  created() {
    axios.get("https://lone.ambregeiss.fr/wp-json/wp/v2/pages/28913")
      .then(
        function (response) {
          this.data = response.data;
          console.log(response.data);
          console.log(response.data.title);
        }.bind(this)
      )
      .catch(function (error) {
        console.log(error);
      });
  },
  data () {
    return {
      data: {
        title: {
          rendered: "",
        },
      },
    }
  }
};
</script>

<style lang="scss">

</style>