<template>
<div class="page">
    <TitrePage />
    <div class="faq">
        <VueFaqAccordion :items="myItems" />
    </div>
</div>

</template>

<script>
import VueFaqAccordion from 'vue-faq-accordion';
import TitrePage from '@/components/TitrePage';

export default {
  components: {
    TitrePage,
    VueFaqAccordion
  },
  data () {
    return {
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

    .faq__nav-item, .faq__nav-item_active[data-v-5d9392b3] {
        color: $primaryColor !important;
        font-family: $fontText;
    }

    .accordion__toggle-button[data-v-5d9392b3]::before, .accordion__toggle-button[data-v-5d9392b3]::after {
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

<!--template>
    <div class="faq">

        <Question v-on:closed="closeAllItems" />
        <Question v-on:closed="closeAllItems"/>
        <Question v-on:closed="closeAllItems"/>
        <Question v-on:closed="closeAllItems"/>
        <Question v-on:closed="closeAllItems"/>
        <Question v-on:closed="closeAllItems"/>

    </div>
</template>

<script>
import Question from '../components/Question.vue';

export default {
    components: {
        Question
    },
    methods: {
        closeAllItems(){
            
        }
    }
}
</script-->