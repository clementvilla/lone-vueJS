<template>
<div>
    <h1 class="title -big -textCenter" v-html="data.title.rendered"></h1>
    <Login />
</div>
</template>

<script>
import Login from "@/components/Login";
import axios from 'axios';

export default {
  components: {
    Login
  },
  created() {
    axios.get("https://lone.ambregeiss.fr/wp-json/wp/v2/pages/29006")
      .then(
        function (response) {
          this.data = response.data;
          console.log(response.data);
          console.log(response.data.title);
        }.bind(this)
      )
      .catch(function (error) {
        console.log(error);
      });
  },
  data () {
    return {
      data: {
        title: {
          rendered: "",
        },
      },
    }
  }
};
</script>
