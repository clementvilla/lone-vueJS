<template>
  <div class="page">
    <h1 class="title -big -textCenter" v-html="data.title.rendered"></h1>
    
    <div class="faq">
      
        <VueFaqAccordion :items="myItems" />
    </div>
  </div>
</template>

<script>
import VueFaqAccordion from "vue-faq-accordion";
import axios from "axios";

export default {
  components: {
    VueFaqAccordion,
  },
  created() {
    axios
      .get("https://lone.ambregeiss.fr/wp-json/wp/v2/pages/28915")
      .then(
        function (response) {
          this.data = response.data;
          console.log(response.data);
          //console.log(response.data.title);
          console.log(response.data.acf.qa.blocqa);
        }.bind(this)
      )
      .catch(function (error) {
        console.log(error);
      });
  },
  data() {
    return {
      data: {
        title: {
          rendered: "",
          ask:""
        },
      },
      myItems: [
          {
            title: 'How many time zones are there in all?',
            value: 'Given a 24-hour day and 360 degrees of longitude around the Earth'
          },
          {
            title: 'How many time zones are there in all?',
            value: 'Given a 24-hour day and 360 degrees of longitude around the Earth'
          },
          {
            title: 'How many time zones are there in all?',
            value: 'Given a 24-hour day and 360 degrees of longitude around the Earth'
          },
          {
            title: 'How many time zones are there in all?',
            value: 'Given a 24-hour day and 360 degrees of longitude around the Earth'
          },
          {
            title: 'How long is a day and year on Venus?',
            value: 'Venus takes 224.7 Earth days to complete one orbit around the Sun.'
          }
        ]
    }
  }
}

</script>

<style lang="scss">
.faq {
  margin-bottom: 40px;
}
.faq-wrapper[data-v-5d9392b3] {
  max-width: 825px;
  margin: auto;
}

.faq__nav-item,
.faq__nav-item_active[data-v-5d9392b3] {
  color: $primaryColor !important;
  font-family: $fontText;
}

.accordion__toggle-button[data-v-5d9392b3]::before,
.accordion__toggle-button[data-v-5d9392b3]::after {
  background: $primaryColor !important;
}

.accordion__value {
  color: $white !important;
}

.accordion[data-v-5d9392b3] {
  border: 2px solid $primaryColor !important;
  border-radius: 0px !important;
}

.accordion__item[data-v-5d9392b3] {
  border-bottom: 2px solid $primaryColor !important;
}

.accordion__item[data-v-5d9392b3]:last-child {
  border-bottom: none !important;
}
</style>