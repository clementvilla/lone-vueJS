<template>
     <div class="container wrapper-container">
    <div class="row">
      <div class="col-l-3">
        <div class="c-card__container">
          <div class="c-card__innerContainer">
            <h3 class="title -small -colorWhite lineTitle -smallLine">éco-responsables</h3>
            <div class="c-card_svgContainer -delay1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p>Une boîte en carton recyclé</p>
          </div>
        </div>
      </div>
      <div class="col-l-3">
        <div class="c-card__container">
          <div class="c-card__innerContainer">
            <h3 class="title -small -colorWhite lineTitle -smallLine">Limitées</h3>
            <div class="c-card_svgContainer -delay2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <p>Des combinaisons illimitées</p>
          </div>
        </div>
      </div>
      <div class="col-l-3">
        <div class="c-card__container">
          <div class="c-card__innerContainer">
            <h3 class="title -small -colorWhite lineTitle -smallLine">Qualité</h3>
            <div class="c-card_svgContainer -delay3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p>Des sneakers conçues pour durer</p>
          </div>
        </div>
      </div>
      <div class="col-l-3">
        <div class="c-card__container">
          <div class="c-card__innerContainer">
            <h3 class="title -small -colorWhite lineTitle -smallLine">Suivez-nous</h3>
            <div class="c-card_svgContainer -delay4">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram"
                class="svg-inline--fa fa-instagram fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                </path>
              </svg>
            </div>
            <p>Retrouvez nous sur les réseaux</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
.c-card__container{
    background-color: $grey;
    border-radius: 22px;
    height: 300px;
    max-width: 360px;
    padding: 0px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    .c-card__innerContainer {
        text-align: center;
    }
    svg{
        width: 25px;
        color: white;
        animation: none;
        z-index: 2;
    }
    h3{
        margin-bottom: 25px;
        display: inline-block;
    }
    p{
        margin-top: 25px;
    }
    .c-card_svgContainer{
        width: 75px;
        height: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        position: relative;
        &::after{
            border: solid 3px transparent;
            content: "";
            display: block;
            height: 100%;
            width: 100%;
            position: absolute;
            border-radius: 100%;
            background: linear-gradient($grey, $grey) padding-box, conic-gradient(from 45deg, $primaryColor, $grey) border-box;
            animation: rotate linear 2000ms infinite;
        }  
        &.-delay1::after{
            animation-delay: 1000ms;
        }   
        &.-delay2::after{
            animation-delay: 2000ms;
        }
        &.-delay3::after{
            animation-delay: 3000ms;
        }
        &.-delay4::after{
            animation-delay: 4000ms;
        }   
    }
    @keyframes rotate {
        from {transform: rotate(0deg);}
      
        to {transform: rotate(360deg);}
      }
}

</style>