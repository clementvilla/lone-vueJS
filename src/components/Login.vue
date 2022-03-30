<template>
  <div class="container">
    <div class="row -center">
      <form @submit="submit" class="contact">
        <div class="row">
          <div class="container_input">
            <label class="fontLink" for="name">NOM D'UTILISATEUR</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Saisis ton nom"
              v-model="form.username"
              required
            />
          </div>
          <div class="container_input">
            <label class="fontLink" for="mdp">MOT DE PASSE</label>
            <input
              type="password"
              name="mdp"
              id="mdp"
              placeholder="Saisis ton mot de passe"
              v-model="form.password"
              required
            />
          </div>
        </div>

        <div class="row link-compte">
          <router-link to="/register" class="fontLink">Vous n'avez pas de compte ? Créez un compte</router-link>
        </div>

          <div class="cont">
          <input type="submit" value="Se connecter" class="button">
        </div>
      </form>
    </div>
    <div v-if="success">
      <p style="color: green">Votre connexion est réussi !</p>
    </div>

    <div v-if="error">
      <p style="color: red">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        username: null,
        email: null,
        password: null,
      },
      success: false,
      error: false,
      errorMessage: null,
    };
  },
  methods: {
    submit(event) {
      event.preventDefault();

      axios
        .post("https://lone.ambregeiss.fr/wp-json/jwt-auth/v1/token", {
          username: this.form.username,
          password: this.form.password,
        })
        .then((response) => {
          if (response.status === 200) {
              console.log(response);
            this.success = true;
            this.error = false;

            this.$store.commit('setUser',{
                userid: response.data.data.id,
                username: response.data.data.displayName,
                email: response.data.data.email,
                authToken: response.data.data.token
            })
          }
        })
        .catch((error) => {
          console.log("Error LOG : ", error.response);
          this.errorMessage = error.response.data.message;
          this.error = true;
          this.success = false;
        });
    },
  },
};
</script>

<style lang="scss">
// FORMULAIRE EN COLONNE
.textCenter{
    text-align: center;
}
input {
  background: none;
  border-bottom: solid 1px $greyBorder;
  box-shadow: none;
  border-right: none;
  color: $white;
  outline: 0;
  &::placeholder {
    font-family: $fontText;
  }
}

.container_input {
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 50%;
}

.link-compte{
  justify-content: center;
  font-size: 16px;
  padding-top: 20px;
}

.container_textarea {
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  label {
    display: block;
    width: 80%;
    text-align: left;
  }
}

textarea {
  width: 80%;
  min-height: 100px;
  background: none;
  border: solid 1px $greyBorder;
  color: $white;
  outline: 0;
  resize: none;
  &::placeholder {
    font-family: $fontText;
  }
}

form {
  width: 700px;
  background-color: $grey;
  border-radius: 22px;
  padding: 40px;
  .cont {
    display: block;
    margin: 40px auto;
  }
}
</style>