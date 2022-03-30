<template>
    
<section id="carreGris" class="container -fullWidth">
    <div class="carreGris1">
      <div class="row -noGutter">
        <div class="col-md-4">
          <div class="c-carreGris__container">
            <div class="c-carreGris__innerContainer">
              <h2 class="c-carreGris__title || title -colorWhite"><span>#</span>1 <br />{{data.acf.tuto.etape[0].title}}</h2>
              <p>{{data.acf.tuto.etape[0].text}}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="c-carreGris__container -darker">
            <div class="c-carreGris__innerContainer">
              <h2 class="c-carreGris__title || title -colorWhite"><span>#</span>2 <br />{{data.acf.tuto.etape[1].title}}</h2>
              <p>{{data.acf.tuto.etape[1].text}}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="c-carreGris__container">
            <div class="c-carreGris__innerContainer">
              <h2 class="c-carreGris__title || title -colorWhite"><span>#</span>3 <br />{{data.acf.tuto.etape[2].title}}</h2>
              <p>{{data.acf.tuto.etape[2].text}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import axios from "axios";
export default {

  data() {
    return {
      data: {
        acf:{
          tuto:{
            etape:{
              title:'',
              text:''
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
    .c-carreGris__container{
        text-align: center;
        background-color: rgba($white, 0.25);
        padding: pxToRem(16);
        height: 450px;
        display: flex;
        align-items: center;
        span{
            color: $primaryColor;
        }
        &.-darker{
            background-color: rgba($white, 0.1);
        }
    }
</style>