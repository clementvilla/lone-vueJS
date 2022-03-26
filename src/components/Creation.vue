<template>
  <div class="row wrapper-container -creation">
    <div
      v-for="chaussure in chaussures"
      :key="chaussure.id"
      class="col-l-6 col-md-12 col-12"
    >
      <div class="row -noGutter -vcenter">
        <div class="col-xl-6 col-l-12 col-md-6 col-12">
          <img :src="chaussure.acf.img_url" alt="" />
        </div>
        <div class="col-xl-6 col-l-12 col-md-6 col-12">
          <div class="c-creation">
            <p class="c-creation__texte">{{ chaussure.title.rendered }}</p>
            <div class="cont">
              <a href="#" class="button">Modifier</a>
            </div>
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
      chaussures: [],
    };
  },
  created() {
    this.getShoe();
  },
  methods: {
    getShoe() {
      axios
        .get(
          `https://lone.ambregeiss.fr/wp-json/wp/v2/chaussure?author=${this.$store.state.user.id}`
        )
        .then(
          function (response) {
            this.chaussures = response.data;
            console.log(this.chaussures);
          }.bind(this)
        )
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
img {
  width: 100%;
}
</style>