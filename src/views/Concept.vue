<template>
    <div class="concept">
        <Concept 
            v-bind:title=data.acf.sectionimgtext_1.titlemidgreen 
            v-bind:paragraphe=data.acf.sectionimgtext_1.paragraph
        />
        <ConceptReverse />
        <Concept 
            v-bind:title=data.acf.sectionimgtext_3.titlemidgreen 
            v-bind:paragraphe=data.acf.sectionimgtext_3.paragraph
        />
    </div>
</template>
<script>
import axios from "axios";
import Concept from "@/components/Concept";
import ConceptReverse from "@/components/ConceptReverse";
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
      Concept,
      ConceptReverse,
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