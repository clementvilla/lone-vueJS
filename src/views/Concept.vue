<template>
    <div class="concept">
        <pageConceptIntro />
        <pageConceptConcept />
        <pageConceptMateriaux />
        <pageConceptBoite />
    </div>
</template>
<script>
import axios from "axios";
import pageConceptConcept from "@/components/pageConceptConcept";
import pageConceptBoite from "@/components/pageConceptBoite";
import pageConceptMateriaux from "@/components/pageConceptMateriaux";
import pageConceptIntro from "@/components/pageConceptIntro";
export default {
    data() {
    return {
      data: {
        acf:{
          
        }
      },
    };
  },
    components: {
      pageConceptConcept,
      pageConceptMateriaux,
      pageConceptBoite,
      pageConceptIntro
    },
    created() {
    axios
      .get("https://lone.ambregeiss.fr/wp-json/wp/v2/pages/28945")
      .then(
        function (response) {
          this.data = response.data;
          console.log(response.data)
        }.bind(this)
      )
      .catch(function (error) {
        console.log(error);
      });
  },
  }
</script>
<style lang="scss">

</style>

