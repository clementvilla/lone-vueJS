<template>
  <div class="container wrapper-container">
    <div class="row -vcenter imageTexte">
      <div class="col-l-7">
        <div class="c-image__container">
          <img src="img/m22_home_concept.png" alt="Visuel de la chaussure M-22" />
        </div>
      </div>
      <div class="col-l-5">
        <div class="c-text__container">
          <h2 class="title lineTitle -alignLeft">le concept</h2>
          <div class="c-text__innerContainer">
            <p>
              Notre Concept ? Des sneakers personnalisés pour te démarquer !
            </p>
            <p>
              Lone te propose de composer une paire de sneakers qui
              t’appartient. Laisse parler ton style et imagine une paire qui te
              ressemble. Précommande ta compo et reçoit la le 8 juin 2022.
            </p>
            <p>
              Chaque combinaison est unique, dépêche toi de personnaliser ta
              paire. La M-22 n’attend plus que toi !
            </p>
          </div>
          <div class="cont">
            <a href="concept.html" class="button">Découvrir</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
.c-image__container {
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
}

.imageTexte{
    flex-direction: row-reverse;
}

.c-text__container {
  height: 100%;
  .c-text__innerContainer {
    margin: 50px 0;
  }
}
</style>