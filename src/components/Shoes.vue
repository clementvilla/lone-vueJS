<template>
    
    <div class="container homeEntete">
        <div class="row -vcenter">
        <div class="col-l-6">
            <img :src="data.acf.firstview.image.url" alt="sneaker personnalisable, modèle M-22">
        </div>
        <div class="col-l-6">
            <p class="title -alignLeft">
                {{data.acf.firstview.shoesname}}
            </p>
            <h1 class="title -colorWhite -alignLeft">{{data.acf.firstview.titlemidwhite}}</h1>
            <p>{{data.acf.firstview.paragraph}}</p>
            <div class="cont">
            <a href="#" class="button">Personnaliser</a>
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
          firstview:{
            shoesname:'',
            titlemidwhite:'',
            paragraph:'',
            image:''
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

</style>