<template>
    <div class="c-bandeauFaq container -fullWidth">
    <div class="c-bandeauFaq__containerTitle">
      <h2 class="title lineTitle -lineBlack -alignLeft">Une équipe à votre écoute</h2>
    </div>
    <div class="c-bandeauFaq__containerTextBtn">
      <p>Nous sommes là pour répondre à toutes vos questions ! Tu n’es sûrement pas le seul à avoir des interrogations
        sur notre marque. Va jeter un oeil à la FAQ, tu trouveras sûrement la réponse à tes questions.</p>
      <div class="cont -backgroundBlack">
        <a href="#" class="button -backgroundBlack">Personnalise</a>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
    .c-bandeauFaq{
    padding: 120px 100px;
    height: 470px;
    background-color: $primaryColor;
    width: 100%;
    h2{
        display: inline-block;
        margin: auto;
        color: $black;
        &::before{
            background-color: $black;
        }
    }
    p{
        color: $black;
        width: 60%;
    }
    .c-bandeauFaq__containerTitle{
        text-align: center;
        margin-bottom: 80px;
    }
    .c-bandeauFaq__containerTextBtn{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}

</style>