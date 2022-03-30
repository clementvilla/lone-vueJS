<template>
  <div class="container wrapper-container">
    <div class="row -vcenter">
        <div class="col-l-12">
            <div class="c-image__container -intro">
            <img :src="data.acf.intro_img.url" alt="Chaussure M-22 de la marque Lone" />
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
          intro_img:''
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

.c-image__container.-intro img {
  max-width: 800px;
}
</style>