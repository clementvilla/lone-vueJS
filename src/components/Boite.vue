<template>
    <div class="container  wrapper-container">
    <div class="row -vcenter -reverse">
      <div class="col-l-7">
        <div class="c-image__container">
          <img :src="data.acf.sectionimgtext_1.image.url" alt="Boite de la chaussure M-22 de la marque Lone">
        </div>
      </div>
      <div class="col-l-5">
        <div class="c-text__container">
          <h2 class="title lineTitle -alignLeft">{{data.acf.sectionimgtext_1.titlemidgreen}}</h2>
          <div class="c-text__innerContainer">
            <p>{{data.acf.sectionimgtext_1.paragraph}}</p>
            <p>{{data.acf.sectionimgtext_1.paragraph_2}}</p>
            <p>{{data.acf.sectionimgtext_1.paragraph_3}}</p>
          </div>
          <div class="cont">
            <a href="#" class="button">Découvrir</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {

  data() {
    return {
      data: {
        acf:{
          sectionimgtext_1:{
            titlemidgreen:'',
            paragraph:'',
            paragraph_2:'',
            paragraph_3:'',
            image:'',
            buttonwhite:''
          }
        }
      },
    };
  },
  created() {
    axios
      .get("https://lone.ambregeiss.fr/wp-json/wp/v2/pages/28872")
      .then(
        function (response) {
          this.data = response.data;
          console.log("response.data")
        }.bind(this)
      )
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style lang="scss">
  @media screen and (max-width: $large) {
    .row {
      justify-content: center;
    }
  }

  .c-image__container {
    height: auto !important;
  }

  .row.-vcenter.-reverse {
    flex-wrap: wrap-reverse;
  }
</style>