<template>
<div class="container__personnalisation">
        <div class="buttonBack">
            <a @click="$router.go(-1)"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg></a>
        </div>
        <div class="c-chaussure__container">
            <div id="image-slider" class="splide">
                <div class="splide__track" id="splide__track">
                    <Splide :options="options">
                        <splide-slide>
                            <img id="test" src="../assets/chaussure_detoure.png" alt="">
                        </splide-slide>
                        <splide-slide>
                            <img src="../assets/chaussure_detoure.png" alt="">
                        </splide-slide>
                        <splide-slide>
                            <img src="../assets/chaussure_detoure.png" alt="">
                        </splide-slide>
                        <!-- <ul class="splide__list">
                          <li class="splide__slide">
                            
                          </li>
                          <li class="splide__slide">
                            <img src="../assets/logo.png" alt="">
                          </li>
                          <li class="splide__slide">
                            <img src="../assets/logo.png" alt="">
                          </li>
                      </ul> -->
                    </Splide>
                </div>
              </div>
            <div class="c-chaussure__buttonContainer">
                <div class="cont">
                    <button @click="screenshot()" class="button">Terminé</button>
                  </div>
                  <a href=""><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg></a>
                  <a href=""><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg></a>
            </div>
        </div>
        <div class="c-indicatifTitre title -small">
            Semelles
        </div>
        <div class="c-listPersonnalisation">
            <div class="c-listPersonnalisation__menu">
                <div>
                    <div class="color">
                        <div class="cercle"></div>
                    </div>
                    <p>couleur</p>
                </div>
                <div>
                    <div class="color"></div>
                    <p>Couleur</p>
                </div>
                <div>
                    <div class="color"></div>
                    <p>Couleur</p>
                </div>
                <div>
                    <div class="color"></div>
                    <p>Couleur</p>
                </div>
                <div>
                    <div class="color"></div>
                    <p>couleur</p>
                </div>
                <div>
                    <div class="color"></div>
                    <p>Couleur</p>
                </div>
                <div>
                    <div class="color"></div>
                    <p>Couleur</p>
                </div>
            </div>
        </div>
        <div class="c-validation">
            <div>
                <a href=""><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg></a>
            </div>
            <div>
                <a href=""><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg></a>
            </div>
        </div>
    </div>


</template>
<script>
import axios from 'axios'
import domtoimage from "dom-to-image-more"

export default {
    data() {
      return {
        options: {
            type: 'loop',
            perPage: 1,
        },
      };
    },
  
  methods: {
      mounted() {
      axios
        .get("https://lone.ambregeiss.fr/wp-json/wp/v2/")
        .then((response) => {
          if (response.status === 200) {
              console.log(response);
          }
        })
      },
    screenshot() {
      domtoimage
        .toJpeg(document.getElementById("test"), { quality: 0.80 })
        .then(function (dataUrl) {
          var link = document.createElement("a");
          link.download = "my-image-name.jpeg";
          link.href = dataUrl;
          link.click();
        });
    },
    /* sumbitShoes(screen){
        axios.post('https://lone.ambregeiss.fr/wp-json/wp/v2/chaussure',
        {
            "status": "publish",
            "title": this.$store.state.user.displayName,
        },
        {
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ${this.$store.state.user.authToken}',
            }
        }).then(response => {
            if (response.status === 200){
                console.log('Bien envoyé vers l\'api')
            }
        })
    } */
  },
};
</script>
<style lang="scss">
.container__personnalisation{
    height: 100vh;
    width:100%;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: $black;
}
.c-chaussure__container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    width: 75%;
    @include large-down{
        width: 100%;
        height: 70%;
    }
    img{
        width: 75%;
        display: block;
        margin: auto;
    }
}
.c-chaussure__buttonContainer{
    display: flex;
    justify-content: center;
    @include large-down{
        position: absolute;
        bottom: 0;
        height: 80px;
        background-color: $black;
        width: 100%;
        align-items: center;
    }
    svg{
        width: 32px;
        color: $white;
        margin: 0 25px;
        transition: 0.25s ease-in-out;
        &:hover{
            color: $primaryColor;
        }
    }
    a{
        display: flex;
    }
}
.c-listPersonnalisation{
    background-color: $grey;
    position: absolute;
    right: 0;
    width: 25%;
    overflow-y: scroll; 
    top: 80px;   
    bottom: 80px;
    @include large-down{
        left: 0;
        width: 100%;
        height: 20%;
        bottom: 60px;
        top: inherit;
        overflow-y: inherit;
        overflow-x: scroll;
    }
    &__menu{
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @include large-down{
            flex-direction: row;
            width: fit-content;
            height: 100%;
        }
        p{
            margin-bottom: 0px;
        }
    }
    &__menu > div{
        height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @include large-down{
            width: 150px;
            height: 100%;
        }
    }
}
.c-validation{
    height: 80px;
    width: 25%;
    background-color: $grey;
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top: solid 1px $primaryColor;
    @include large-down{
        width: 100%;
        height: 60px;
    }
    a{
        width: 100%;
        height: 100%;
    }
    svg{
        height: 32px;
        width: 32px;
        color: $primaryColor;
    }
}
.c-indicatifTitre{
    background-color: $grey;
    position: absolute;
    top: 0;
    right: 0;
    height: 80px;
    z-index: 55;
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    @include large-down{
        display: none;
    }
}
.cercle{
    width: 68px;
    height: 68px;
    border: solid 2px red;
    border-radius: 100%;
    position: absolute;
    @include large-down{
        width: 48px;
        height: 48px;
    }
}
.color{
    width: 58px;
    height: 58px;
    background-color: red;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @include large-down{
        width: 38px;
        height: 38px;
    }
}

.c-listPersonnalisation::-webkit-scrollbar {
    width: 4px;
    @include large-down{
        height: 4px;
    }
}

.c-listPersonnalisation::-webkit-scrollbar-track {
    box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.3);
}

.c-listPersonnalisation::-webkit-scrollbar-thumb {
    background-color: $primaryColor;
    outline: 1px solid #0c0d0c;
}
.splide{
    width: 100%;
}

.splide__arrow{
    background-color: transparent;
    svg{
        fill: $primaryColor;
    }
    @include large-down{
        display: none;
    }
}
.splide__slide{
    padding: 50px 0px;
}

.buttonBack{
    a{
        color: $white;
    }
    position: absolute;
    top: 25px;
    left: 25px;
    width: 32px;
    height: 32px;
}
</style>