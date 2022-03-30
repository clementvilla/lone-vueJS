<template>
  <div class="page_profil">
    <h1 class="title -big -textCenter">Mon compte</h1>
    <div class="container wrapper-container">
    <div class="row -vcenter imageTexte">
      <div class="col-l-12">
          <h2 class="title -small -colorWhite lineTitle -smallLine -alignLeft">Mes informations</h2>
        <div class="c-text__informations">
          <div class="container-informations">
            <p>Nom d'utilisateur : {{user.displayName}}</p>
            <p>Email : {{user.email}}</p>
          </div>
          <div class="cont">
            <router-link to="/" class="fontLink"><a @click="$store.commit('removeUser')" class="button">Déconnexion</a>
            </router-link>
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
  computed:{
    user(){
      return this.$store.state.user
    },
  },
  created() {
    axios
      .get(`https://lone.ambregeiss.fr/wp-json/wp/v2/chaussure?author=${this.$store.state.user.id}`)
      .then(
        function (response) {
          this.data = response.data;
        }.bind(this)
      )
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style lang="scss">
.c-text__informations{
  display: flex;
  justify-content: space-between;
}
</style>