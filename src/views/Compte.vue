<template>
  <div class="page_profil">
      coucou
    <div v-if="chaussure.length" class="shoes-list">
      <h1>Liste des chaussures</h1>
      <div v-for="chaussure in chaussures" :key="chaussure.id" class="chaussure">
        <p>{{chaussure.title.rendered}}</p>
        <img :src="chaussure.acf.img_url" alt="" />
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
    console.log('gfdgdf');
    axios
      .get(`https://lone.ambregeiss.fr/wp-json/wp/v2/chaussure?author=${this.$store.state.user.id}`)
      .then(
        function (response) {
          this.data = response.data;
          console.log('egege', response.data)
        }.bind(this)
      )
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>