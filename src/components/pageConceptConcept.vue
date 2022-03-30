<template>
  <div class="container wrapper-container">
    <div class="row -vcenter -reverse">
      <div class="col-l-6">
        <div class="c-image__container">
          <img :src="data.acf.sectionimgtext_1.img.url" alt="Chaussure M-22 de la marque Lone" />
        </div>
      </div>
      <div class="col-l-6">
        <div class="c-text__container">
          <h2 class="title lineTitle -alignLeft">{{data.acf.sectionimgtext_1.titlemidgreen}}</h2>
          <div class="c-text__innerContainer">
            <p>
              {{data.acf.sectionimgtext_1.paragraph}}
            </p>
            <p>
              {{data.acf.sectionimgtext_1.paragraph_2}}
            </p>
            <p>
              {{data.acf.sectionimgtext_1.paragraph_3}}
            </p>
          </div>
          <div class="cont">
            <a href="concept.html" class="button">Découvrir</a>
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
            img:''
          }
        }
      },
    };
  },
  created() {
    axios
      .get("https://lone.ambregeiss.fr/wp-json/wp/v2/pages/28945")
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
.c-image__container {
  height: auto !important;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
}

.c-text__container {
  height: 100%;
  .c-text__innerContainer {
    margin: 100px 0;
  }
}

  .row.-vcenter.-reverse {
    flex-wrap: wrap-reverse;
  }
</style>