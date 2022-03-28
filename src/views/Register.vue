<template>
  <div>
    <h1 class="title -big -textCenter" v-html="data.title.rendered"></h1>
    <Register />
  </div>
</template>

<script>
import Register from "@/components/Register";
import axios from "axios";

export default {
  data() {
    return {
      data: {
        title: {
          rendered: "",
        },
      },
    };
  },
  components: { Register },
  created() {
    axios
      .get("https://lone.ambregeiss.fr/wp-json/wp/v2/pages/28997")
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
};
</script>
