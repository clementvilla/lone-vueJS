<template>
  <div class="container__personnalisation">
    <div @click="$router.go(-1)" class="buttonBack">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
    </div>
    <div class="c-chaussure__container">
      <div id="image-slider" class="splide">
        <div class="splide__track" id="splide__track">
          <Splide :options="options" >
            <splide-slide>
              <!-- image basket blanche côté -->
              <img src="@/assets/cote.png" alt="Modèle de chaussure vue de côté" />   
              <!-- Image avant chaussure vue 1 -->
              <img class="layer bleu avant vue1" src="@/assets/cuir-bleu.png" alt="vue1 avant bleu">
              <img class="layer vert avant vue1" src="@/assets/cuir-vert.png" alt="vue1 avant  vert">       
              <img class="layer violet avant vue1" src="@/assets/cuir-violet.png" alt="vue1 avant violet">
              <img class="layer bleu bande vue1" src="@/assets/bandes-cote-bleue.png" alt="vue1 bande bleu">   
              <img class="layer vert bande vue1" src="@/assets/bandes-cote-vertes.png" alt="vue1 bande vert">   
              <img class="layer violet bande vue1" src="@/assets/bande-cote-violette.png" alt="vue1 bande violet">
              <img class="layer bleu mousse vue1" src="@/assets/mousse-cote-bleu.png" alt="vue1 mousse bleu">   
              <img class="layer vert mousse vue1" src="@/assets/mousse-cote-verte.png" alt="vue1 mousse vert">  
              <img class="layer violet mousse vue1" src="@/assets/mousse-cote-violette.png" alt="vue1 mousse violet">               
            </splide-slide>
            <splide-slide>
              <!-- image basket blanche dessus -->
              <img src="@/assets/dessus.png" alt="Modèle de chaussure vue de dessus" />
              <!-- Image avant chaussure vue 2 -->
              <img class="layer bleu avant vue2" src="@/assets/cuir-av-bleu.png" alt="vue2 avant bleu">
              <img class="layer vert avant vue2" src="@/assets/cuir-av-vert.png" alt="vue2 avant vert">    
              <img class="layer violet avant vue2" src="@/assets/cuir-av-violet.png" alt="vue2 avant violet">
              <img class="layer bleu bande vue2" src="@/assets/bandes-dessus-bleues.png" alt="vue2 bande bleu">    
              <img class="layer vert bande vue2" src="@/assets/bandes-dessus-vertes.png" alt="vue2 bande vert">    
              <img class="layer violet bande vue2" src="@/assets/bandes-dessus-violettes.png" alt="vue2 bande violet"> 
              <img class="layer bleu mousse vue2" src="@/assets/mousse-dessus-bleu.png" alt="vue2 mousse bleu">
              <img class="layer vert mousse vue2" src="@/assets/mousse-dessus-verte.png" alt="vue2 mousse vert"> 
              <img class="layer violet mousse vue2" src="@/assets/mousse-dessus-violette.png" alt="vue2 mousse violet">                
            </splide-slide>
            <splide-slide>
              <!-- image basket blanche deriere -->
              <img src="@/assets/deriere.png" alt="" />
              <!-- Image avant chaussure vue 3 -->
              <img class="layer bleu avant vue3" alt="">
              <img class="layer vert avant vue3" alt="">    
              <img class="layer violet avant vue3" alt="">
              <img class="layer bleu bande vue3" alt="">    
              <img class="layer vert bande vue3" alt="">    
              <img class="layer violet bande vue3" alt=""> 
              <img class="layer bleu mousse vue3" src="@/assets/mousse-arriere-bleu.png" alt="">
              <img class="layer vert mousse vue3" src="@/assets/mousse-arriere-verte.png" alt=""> 
              <img class="layer violet mousse vue3" src="@/assets/mousse-arriere-violette.png" alt="">                
            </splide-slide>
          </Splide>
        </div>
      </div>
      <div class="c-chaussure__buttonContainer">
        <div class="container_end">
          <div @click="showEnding()" class="cont">
          <a class="button">Terminé</a>
        </div>
        </div>
          <svg v-if="user.displayName != null" @click="saveShoeHandler(); alertLike();" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
          <svg @click="showModal()" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
        </div>   
    </div>
    <Modal
      v-show="isEndingVisible"
      @closeEnd="closeEnd"
    >
      <template v-slot:header>
      </template>

      <template v-slot:body>
        <p class="fontText">Votre précommande est enregistré!</p>
      </template>

      <template v-slot:footer>
        <div @click="closeEnd" class="modalLink">
          Retour à la personnalisation
        </div>
      </template>
    </Modal>
    <Modal
      v-show="isModalVisible"
      @close="closeModal"
      @reset="reset"
    />
    <Modal
      v-show="isLikeVisible"
      @closeLike="closeLike"
    >
      <template v-slot:header>
        <div @click="close"></div>
      </template>

      <template v-slot:body>
        <p class="fontText">Votre paire a bien été enregistré !</p>
      </template>

      <template v-slot:footer>
        <div class="modalLink">
          <router-link to="/mesCreations" class="fontLink">Voir mes créations</router-link>
        </div>
        <div @click="closeLike" class="modalLink">
          Retour à la personnalisation
        </div>
      </template>
    </Modal>
    <Modal
      v-if="user.displayName == null"
      v-show="isConnexionVisible"
      @closeConnexion="closeConnexion"
      >

      <template v-slot:body>
        <p class="fontText">Pour pouvoir enregistrer et précommander <br>votre paire vous devez vous connecter</p>
      </template>

      <template v-slot:footer>
        <div class="modalLink">
          <router-link to="/login" class="fontLink">Se connecter</router-link>
        </div>
        <div @click="closeConnexion" class="modalLink">
          Continuer la personnalisation
        </div>
      </template>
    </Modal>
    <div class="c-indicatifTitre title -small">Semelles</div>
    <div class="c-listPersonnalisation">
      <div class="c-listPersonnalisation__menu">

<div class="liste-couleurs">
    <div
      v-for="(label, index) in colors"
      :key="index"
      @click="colorPicked($event, label)"
    >
    <div :class="`color${index + 1} color`">
      <div :class="`cercle${index + 1}`"></div>
    </div>
      <p>{{ label }}</p>
    </div>
</div>

<div class="liste-parties">
    <div
      v-for="(label, index) in parts"
      :key="index"
      @click="partsPicked(label); partsChecked();"
    >
    <div class="partsContainer">
      <div :class="`parts${index + 1}`"></div>
    </div>
      <p id="nom_etape">{{ label }}</p>
      
    </div>
</div>
      </div>
    </div>
    <div class="c-validation">
      <div id="tick" @click="unchecked()">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </div>
      <div id="check" @click="checked()">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import domtoimage from "dom-to-image-more";
import Modal from "@/components/Modal"

export default {
  computed:{
    user(){
      return this.$store.state.user
    },
  },
  components: {
    Modal,
  },
  data() {
    return {
        isLikeVisible: false,
        isModalVisible: false,
        isEndingVisible: false,
        isConnexionVisible: false,
        shoeName: '',
        shoeCreated: false,
      options: {
        perPage: 1,
        type: 'loop',
      },
      configuration: {
        parts: null,
        color: null,
        view: "vue1",
        index: 0,
        indexView: 0,
        test: 0,
      },
      views:[
        "vue1",
        "vue2",
      ],
      choix:{
        avant: "blanc",
        bande: "blanc",
      },
      parts:[
        "Avant",
        "Bande",
        "Mousse",
      ],
      colors: [
        "Vert",
        "Violet",
        "Bleu",
      ],
    };
  },
  mounted() {
    this.showConnexion()
    this.canvas = document.querySelector('#splide01-slide01')
    this.canvas2 = document.querySelector('#splide01-slide02')
    this.canvas3 = document.querySelector('#splide01-slide03')
    this.clone = document.querySelector('.splide__slide--clone')
  },
  methods: {
    alertLike(){
      this.isLikeVisible = true;
    },
    showModal() {
      this.isModalVisible = true;
    },
    showEnding(){
      this.isEndingVisible = true;
    },
    showConnexion() {
      this.isConnexionVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    closeLike(){
      this.isLikeVisible = false;
    },
    closeEnd(){
      this.isEndingVisible = false;
    },
    closeConnexion(){
      this.isConnexionVisible = false;
    },
       saveShoeHandler() {
            // First, we need to get an image of the finalized shoe
            // When getScreenShot() has finished his job, sendImageToWPMediaLibrary() will be executed
            this.getScreenShot(this.sendImageToWPMediaLibrary)
        },
        /**
         * Take a screen of a node in DOM
         * Thanks to dom-to-image-more, return an image as a Blob format (log it if curious)
         * @param callback
         */
        getScreenShot(callback) {
            let dom = document.getElementById("image-slider")
            dom.querySelector(".splide__pagination").classList.add('hidden-slider');
            dom.querySelector(".splide__arrows").classList.add('hidden-slider');
            domtoimage
                .toBlob(document.querySelector('#image-slider'))
                .then( (image) => {
                    callback(image);
                    dom.querySelector(".splide__arrows").classList.remove('hidden-slider');
                    dom.querySelector(".splide__pagination").classList.remove('hidden-slider');
                })
        },
    sendImageToWPMediaLibrary(image) {
        console.log(this.$store.state.user.authToken);
            axios.post('https://lone.ambregeiss.fr/wp-json/wp/v2/media', image,
                {
                    headers: {
                        'Content-Disposition': `attachment; filename="${this.$store.state.user.displayName}.jpg"`,
                        'Authorization': `Bearer ${this.$store.state.user.authToken}`
                    }
                })
                .then(response => {

                    // If we get an id in the response data,
                    // it means that an actual image has been saved
                    // into the WP media library
                    if (response.data.id) {
                        // Now that the image has been saved,
                        // we can create the post shoe
 
                        // IMPORTANT !
                        // since the URL of the image freshly registered in the
                        // WP Media library can be found in the response (check the response log)
                        // We can simply use it and save it into a URL or Text ACF field
                        // HOWEVER that's not really the good way to do it, but hey, it works balec
                        this.createShoe(response.data.source_url)
                    }
                })
        },
        /**
         * Create/Save the shoe as a Post type Shoe
         * @param imageURL - URL of the image freshly generated
         */
        createShoe(imageURL) {
          console.log('testcreate')
 
            axios.post('https://lone.ambregeiss.fr/wp-json/wp/v2/chaussure',
                {
                    "status": "publish",
                    "title": this.$store.state.user.displayName,
                    'fields': {
                        'img_url': imageURL,
                        'choix': this.choix['avant'],
                    },
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.$store.state.user.authToken}`
                    }
                })
                .then(response => {
                    console.log('SHOE IS CREATED', response)
                    this.shoeCreated = true
                })
        },
        //Vérification état du bouton
        partsChecked(){
          document.querySelector('.c-validation').classList.add('c-validation-show')
          document.querySelector('.c-listPersonnalisation').classList.add('c-listPersonnalisation-show')
          document.querySelector('.liste-couleurs').classList.add('liste-couleurs-show')
          document.querySelector('.liste-parties').classList.add('hideParts')
        },
        checked(){
          document.querySelector('.liste-couleurs').classList.remove('liste-couleurs-show')
          document.querySelector('.c-listPersonnalisation').classList.remove('c-listPersonnalisation-show')
          document.querySelector('.c-validation').classList.remove('c-validation-show')
          document.querySelector('.liste-parties').classList.remove('hideParts')
        },
        unchecked(){
          document.querySelector('.liste-couleurs').classList.remove('liste-couleurs-show')
          document.querySelector('.c-listPersonnalisation').classList.remove('c-listPersonnalisation-show')
          document.querySelector('.c-validation').classList.remove('c-validation-show')
          document.querySelector('.liste-parties').classList.remove('hideParts')

          //Pour la slide 1
          this.canvas.querySelectorAll(`.${this.configuration.parts}`)
            .forEach((item) => {
              item.classList.remove("show");
            });

            //Pour la slide 2
            this.canvas2.querySelectorAll(`.${this.configuration.parts}`)
            .forEach((item) => {
              item.classList.remove("show");
            });

            //Pour la slide 3
            this.canvas3.querySelectorAll(`.${this.configuration.parts}`)
            .forEach((item) => {
              item.classList.remove("show");
            });
        },
        //Choix de la partie de la chaussure
        partsPicked(label){
          let titrePart = document.querySelector('.c-indicatifTitre')
          this.configuration.parts = label
          titrePart.innerHTML = this.configuration.parts

          //Défini l'élément sélectionné
          this.configuration.parts = label.toLowerCase()
          console.log("la partie est sélectionné" + this.configuration.parts)

        },
        //Application du choix de la couleur
        colorPicked(event, label) {
          this.configuration.color = label.toLowerCase();

          //Pour la slide 1
          this.canvas.querySelectorAll(`.${this.configuration.parts}`)
            .forEach((item) => {
              item.classList.remove("show");
            });

            //Pour la slide 2
            this.canvas2.querySelectorAll(`.${this.configuration.parts}`)
            .forEach((item) => {
              item.classList.remove("show");
            });

            //Pour la slide 3
            this.canvas3.querySelectorAll(`.${this.configuration.parts}`)
            .forEach((item) => {
              item.classList.remove("show");
            });

          //Pour la slide 1
          this.canvas.querySelector(
              `.${this.configuration.color}.${this.configuration.parts}.vue1`
            )
            .classList.add("show");

          //Pour la slide 2
            this.canvas2.querySelector(
              `.${this.configuration.color}.${this.configuration.parts}.vue2`
            )
            .classList.add("show");

          //Pour la slide 3
            this.canvas3.querySelector(
              `.${this.configuration.color}.${this.configuration.parts}.vue3`
            )
            .classList.add("show");

            this.choix[this.configuration.parts] = this.configuration.color;
            console.log(this.choix);
        },
        //Reset de la config chaussure
        reset() {
          console.log('resetperso')
          this.canvas.querySelectorAll("img").forEach((item) => {
              item.classList.remove("show");
          });

          this.canvas2.querySelectorAll("img").forEach((item) => {
              item.classList.remove("show");
          });

          this.canvas3.querySelectorAll("img").forEach((item) => {
              item.classList.remove("show");
          });
        },
  },
};
</script>






<style lang="scss">
.liste-parties{
  @include large-down {
      display: flex;
    }
}
.hideParts{
  display: none;
}
.container__personnalisation {
  height: 100vh;
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: $black;
  @include large-down {
    height: 100%;
  }
  svg{
    cursor: pointer;
  }
}
.c-chaussure__container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 75%;
  img {
    width: 75%;
    display: block;
    margin: auto;
  }
  @include large-down {
    width: 100%;
    height: 50%;
    img{
      width: 55%;
    }
  }
  @media (max-width:800px){
    img{
      width: 65%;
    }
  }
  .vue1, .vue2, .vue3{
    display:none;
  }
  .show{
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.splide__slide {
  padding: 50px 0px;
  position: relative;
  z-index: 1;
}
.c-chaussure__buttonContainer {
  display: flex;
  justify-content: center;
  @include large-down {
    flex-wrap: wrap;
    position: absolute;
    bottom: 0;
    height: 140px;
    background-color: $black;
    width: 100%;
  }
  svg {
    width: 32px;
    color: $white;
    margin: 0 25px;
    transition: 0.25s ease-in-out;
    &:hover {
      color: $primaryColor;
    }
  }
  a {
    display: flex;
  }
}
.c-listPersonnalisation {
  background-color: $grey;
  position: absolute;
  right: 0;
  width: 25%;
  overflow-y: scroll;
  top: 80px;
  bottom: 0px;
  @include large-down {
    left: 0;
    width: 100%;
    height: 25%;
    bottom: 140px;
    top: initial;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  &__menu {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @include large-down {
      flex-direction: row;
      width: fit-content;
      height: 100%;
    }
    p {
      margin-bottom: 0px;
    }
  }
  &__menu > .liste-couleurs, .liste-parties {
    text-align: center;
    width: 100%;
    & > div{
      height: 100%;
      width: 100%;
      padding: 30px;
      cursor: pointer;
      @include large-down {
      width: 250px;
    }
    }
  }
}
.c-listPersonnalisation-show{
  bottom: 80px;
}
.liste-couleurs{
  display: none;
}
.liste-couleurs-show{
  display: block;
  @include large-down {
    display: flex;
  }
}
.c-validation {
  height: 80px;
  width: 25%;
  background-color: $grey;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: solid 1px $primaryColor;
  @include large-down {
    width: 100%;
    height: 80px;
  }
  a {
    width: 100%;
    height: 100%;
  }
  svg {
    height: 32px;
    width: 32px;
    color: $primaryColor;
  }
}
.c-validation-show{
  position: absolute;
  bottom: 0;
  right: 0;
}
.c-indicatifTitre {
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
  @include large-down {
    display: none;
  }
}
.cercle {
  width: 68px;
  height: 68px;
  border: solid 2px red;
  border-radius: 100%;
  position: absolute;
  @include large-down {
    width: 48px;
    height: 48px;
  }
}
.color {
  width: 58px;
  height: 58px;
  border-radius: 100%;
  display: block;
  margin: auto;
  @include large-down {
    width: 38px;
    height: 38px;
  }
}
.color1{
  background-color: green;
}
.color2{
  background-color: purple;
}
.color3{
  background-color: blue;
}

.parts1{
  background: url("../assets/cote-cote.png");
  background-repeat: no-repeat;
  background-size: contain;
  height: 100px;
  width: 100%;
  background-position: center;
}
.parts2{
  background: url("../assets/bande-cote.png");
  background-repeat: no-repeat;
  background-size: contain;
  height: 100px;
  width: 100%;
  background-position: center;
}
.parts3{
  background: url("../assets/mousse-cote.png");
  background-repeat: no-repeat;
  background-size: contain;
  height: 100px;
  width: 100%;
  background-position: center;
}

.c-listPersonnalisation::-webkit-scrollbar {
  width: 4px;
  @include large-down {
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
.hidden-slider{
    display:none!important;
}
.splide {
  width: 100%;
}

.splide__arrow {
  background-color: transparent;
  svg {
    fill: $primaryColor;
  }
  @include large-down {
    display: none;
  }
}

.buttonBack {
  color: $white;
  position: absolute;
  margin: 25px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  z-index: 9999999;
}
.modalLink, .modalLink a{
  font-size: 14px;
  color: white;
  font-family: $fontText;
  cursor: pointer;
  &:hover{
    text-decoration: underline $primaryColor;
  }
}
.container_end{
  width: 100%;
  order: 1;
  .cont{
    display: block;
    margin: auto;
  }
}
</style>