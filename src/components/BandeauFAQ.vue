<template v-if="data[]">
  <div class="c-bandeauFaq container -fullWidth">
    <div class="c-bandeauFaq__containerTitle">
      <h2 class="title lineTitle -lineBlack -alignLeft">
        {{data.acf.bandeauFAQ.titremidwhite}}
      </h2>
    </div>
    <div class="c-bandeauFaq__containerTextBtn">
      <p>
        {{data.acf.bandeauFAQ.paragraph}}
      </p>
      <div class="cont -backgroundBlack">
        <router-link to="/personnalisation" class="button -backgroundBlack">Personnalise</router-link> 
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
.c-bandeauFaq {
  padding: 120px 100px;
  height: 470px;
  background-color: $primaryColor;
  width: 100%;
  h2 {
    display: inline-block;
    margin: auto;
    color: $black;
    &::before {
      background-color: $black;
    }
  }
  p {
    color: $black;
    width: 60%;
  }
  .c-bandeauFaq__containerTitle {
    text-align: center;
    margin-bottom: 80px;
  }
  .c-bandeauFaq__containerTextBtn {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>