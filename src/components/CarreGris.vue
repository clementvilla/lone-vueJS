<template>
    
<section id="carreGris" class="container -fullWidth">
    <div class="carreGris1">
      <div class="row -noGutter">
        <div class="col-4">
          <div class="c-carreGris__container">
            <div class="c-carreGris__innerContainer">
              <h2 class="c-carreGris__title || title -colorWhite"><span>#</span>1 <br />Imagine </h2>
              <p>Choisis les éléments, modifie la couleur et la matière. Ajoute un motif et compose une paire qui te
                correspond.</p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="c-carreGris__container -darker">
            <div class="c-carreGris__innerContainer">
              <h2 class="c-carreGris__title || title -colorWhite"><span>#</span>2 <br />Imagine </h2>
              <p>Choisis les éléments, modifie la couleur et la matière. Ajoute un motif et compose une paire qui te
                correspond.</p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="c-carreGris__container">
            <div class="c-carreGris__innerContainer">
              <h2 class="c-carreGris__title || title -colorWhite"><span>#</span>3 <br />Imagine </h2>
              <p>Choisis les éléments, modifie la couleur et la matière. Ajoute un motif et compose une paire qui te
                correspond.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>

</script>

<style lang="scss">
    .c-carreGris__container{
        text-align: center;
        background-color: rgba($white, 0.25);
        padding: pxToRem(16);
        height: 450px;
        display: flex;
        align-items: center;
        span{
            color: $primaryColor;
        }
        &.-darker{
            background-color: rgba($white, 0.1);
        }
    }
</style>

return {
      donnees: [],
    }
  },
  created() {
    axios.get('https://veevid.khadijaboudjemline.fr/wp-json/wp/v2/pages/7%27)
        .then(function (response) {
          console.log(response.data);
          this.donnees = response.data;
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        })
  }