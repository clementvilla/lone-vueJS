<template>
  <transition name="modal-fade">
  <div class="modal-backdrop">
    <div class="modal">

      <section class="modal-body">
        <slot name="body">
         <p class="fontText">Etes-vous sur de vouloir réinitialiser votre chaussure ?</p> 
        </slot>
       </section>

      <footer class="modal-footer">
        <slot name="footer">
            <div class="choix-modal">
                <div class="icon-modal">
                    <svg @click="close" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div class="icon-modal">
                    <svg @click="close(); reset();" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            </div>
        </slot>
      </footer>
    </div>
  </div>
  </transition>
</template>
<script>
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
      closeLike() {
        this.$emit('closeLike');
      },
      closeConnexion() {
        this.$emit('closeConnexion');
      },
      closeEnd() {
        this.$emit('closeEnd');
      },
      reset() {
          this.$emit('reset')
      },
    },
  };
</script>
<style lang="scss">
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: $grey;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
    color: white;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
  .choix-modal{
      display: flex;
      justify-content:space-evenly;
      align-items: center;
      svg{
          height: 48px;
          color: $primaryColor;
      }
  }
</style>