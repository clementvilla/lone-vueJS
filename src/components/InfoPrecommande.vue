<template>
  <div class="col-l-12 col-s-12">
    <div class="c-precommande__innerContainer">
      <div class="c-precommande__innerContainer -colone1">
        <p>Prénom : John</p>
        <p>Taille : 45</p>
        <p>Livraison prévue le 08 Juin</p>
      </div>
      <div class="c-precommande__innerContainer -colone2">
        <p>Adresse de livraison</p>
        <p>
          John Doe<br />34 Rue de Capucins<br />25200 Montbéliard<br />Bourgogne
          Franche-Comté<br />06 12 34 56 78
        </p>
        <p>Numéro de colis : 48 5481354 25</p>
      </div>
      <div class="c-precommande__innerContainer -colone3">
        <div class="cont">
          <a href="#" class="button">Suivre mon colis</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style lang="scss">
    .c-precommande__innerContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    &.-colone1, &.-colone2, &.-colone3 {
        display: flex;
        flex-direction: column;
        padding: 0 70px;
    }
    }
</style>

