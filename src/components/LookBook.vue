<template>
  <div class="container wrapper-container">
    <div class="row -flex-end">
      <h2 class="title lineTitle">{{data.acf.lookbook.titlemidgreen}}</h2>
    </div>
    <div class="row -center -nowrap c-container__lookbook slider">
      <div class="img-1"><img :src="data.acf.lookbook.slider_lookbook[0].img_lookbook.url" alt="Image slider 1"></div>
      <div class="img-2"><img :src="data.acf.lookbook.slider_lookbook[0].img_lookbook_2.url" alt="Image slider 2"></div>
      <div class="img-3"><img :src="data.acf.lookbook.slider_lookbook[0].img_lookbook_3.url" alt="Image slider 3"></div>
      <div class="img-4"><img :src="data.acf.lookbook.slider_lookbook[0].img_lookbook_4.url" alt="Image slider 4"></div>
      <div class="img-5"><img :src="data.acf.lookbook.slider_lookbook[0].img_lookbook_5.url" alt="Image slider 5"></div>
    </div>


    <div id="lookbook-slider" class="splide">
      <div class="splide__track" id="splide__track">
        <Splide>
          <splide-slide>
            <!-- image basket blanche côté -->
            <img :src="data.acf.lookbook.slider_lookbook[0].img_lookbook.url" alt="Image slider 1">
          </splide-slide>
          <splide-slide>
            <!-- image basket blanche dessus -->
            <img :src="data.acf.lookbook.slider_lookbook[0].img_lookbook_2.url" alt="Image slider 2">
          </splide-slide>
          <splide-slide>
            <!-- image basket blanche dessus -->
            <img :src="data.acf.lookbook.slider_lookbook[0].img_lookbook_3.url" alt="Image slider 3">
          </splide-slide>
        </Splide>
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
          lookbook:{
            titlemidgreen:'',
            slider_lookbook:{
              img_lookbook:'',
              img_lookbook_2:'',
              img_lookbook_3:'',
              img_lookbook_4:'',
              img_lookbook_5:'',
            }
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
          console.log(response.data)
        }.bind(this)
      )
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style lang="scss">

.c-container__lookbook{
    div{
      width: 200px;
      height: 600px;
      margin: 20px;
      overflow: hidden;
      transition: 0.5s ease-in-out;
    }
    div:hover{
        width: 500px;
    }
    img {
      height: 100%;
      width: auto;
    }
}

@media screen and (min-width: $large) {
  #lookbook-slider {
    display: none;
  }
}

@media screen and (max-width: $large) {
  .c-container__lookbook {
    display: none !important;
  }
}

</style>