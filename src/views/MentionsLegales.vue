<template>
  <div class="page">
    <h1 class="title -big -textCenter" v-html="data.title.rendered"></h1>
    <Mentions />
  </div>
</template>

<script>
import Mentions from "@/components/Mentions.vue";
import axios from "axios";

export default {
    data(){
        return {
            data: {
                title:{
                    rendered:''
                }
            }
        }
    },
  created() {
    axios.get("https://lone.ambregeiss.fr/wp-json/wp/v2/pages/29024")
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
  components: { Mentions },
};
</script>

<style lang="scss">
</style>