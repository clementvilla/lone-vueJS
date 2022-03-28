

<!--template>
  <div class="accordion">
    <ul>
      <li>
        <div @click="openAccordion" class="accordion-item">
          <button ref="button" id="accordion-button-1" aria-expanded="false">
            <span class="accordion-title"
              >Why is the moon sometimes out during the day?</span
            ><span class="icon" aria-hidden="true"></span>
          </button>
          <div class="accordion-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra
              suspendisse potenti.
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    openAccordion() {
      this.$refs.button.setAttribute("aria-expanded", "true");
      this.$emit("closed");
    },
    closeAccordion() {
      this.$refs.button.setAttribute("aria-expanded", "false");
    },
  },
};

// const items = document.querySelectorAll(".accordion button");

// function toggleAccordion() {
// const itemToggle = this.getAttribute('aria-expanded');

// for (i = 0; i < items.length; i++) {
//     items[i].setAttribute('aria-expanded', 'false');
// }

// if (itemToggle == 'false') {
//     this.setAttribute('aria-expanded', 'true');
// }
// }

// items.forEach(item => item.addEventListener('click', toggleAccordion));
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

.dropFAQ {
  border: 1px solid;
  border-color: $primaryColor;
  padding-right: 100px;
  padding-left: 100px;
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
  width: fit-content;
  margin: auto;
  svg {
    vertical-align: middle;
  }
}

.accordion {
  margin: 10px;
  .accordion-item {
    border: 3px solid $primaryColor;
    .accordion-item[aria-extend="true"] {
      border: 1px solid $primaryColor;
      .icon {
        display: inline-block;
        position: absolute;
        border: solid $primaryColor;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 7px;
        transform: rotate(220deg);
        -webkit-transform: rotate(220deg);
      }
    }
  }
  button {
    position: relative;
    display: block;
    text-align: left;
    width: 100%;
    padding: 1em 0;
    color: $white;
    font-size: 1.15rem;
    font-weight: 400;
    border: none;
    background: none;
    outline: none;
    &:hover,
    &:focus {
      cursor: pointer;
      color: $primaryColor;
      &::after {
        cursor: pointer;
        color: $primaryColor;
        border: 1px solid $primaryColor;
      }
    }
    .accordion-title {
      padding: 1em 1.5em 1em 0;
    }
    .icon {
      display: inline-block;
      position: absolute;
      border: solid $primaryColor;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 7px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }
  }
  button[aria-expanded="true"] {
    color: $primaryColor;
    .icon {
      &::after {
        width: 0;
      }
    }
    + .accordion-content {
      opacity: 1;
      max-height: 9em;
      transition: all 200ms linear;
      will-change: opacity, max-height;
    }
  }
  .accordion-content {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: opacity 200ms linear, max-height 200ms linear;
    will-change: opacity, max-height;
    p {
      font-size: 1rem;
      font-weight: 300;
      margin: 2em 0;
    }
  }
}
</style-->


