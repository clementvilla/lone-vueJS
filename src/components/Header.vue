<template>
    <header>
      <nav class="navbar">
        <div class="row rowNav">
            <div class="c-header__container">
              <div class="c-header__innerContainer">
                <div class="e-header__logo">
                  <router-link to="/" class="fontLink">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 178 74.47">
                    <g id="Calque_2" data-name="Calque 2">
                      <g id="Calque_1-2" data-name="Calque 1">
                        <path d="M122.1,36.75a7,7,0,1,1,7,7A7,7,0,0,1,122.1,36.75Z" style="fill: #fbf5f3; fill-rule: evenodd" />
                        <path d="M134.83,68.77a5.72,5.72,0,0,1-10.27,3.44l-.19-.26L111.28,54.26V68.4c0,.12,0,.24,0,.36a5.73,5.73,0,0,1-11.45.07h0V37.33h0c0-.15,0-.3,0-.45a5.72,5.72,0,0,1,10.53-3.08v0l23.4,31.64h0A5.65,5.65,0,0,1,134.83,68.77Z" style="fill: #fbf5f3; fill-rule: evenodd" />
                        <path d="M18.69,4.5h0s0,0,0,.06Z" style="fill: #fbf5f3; fill-rule: evenodd" />
                        <path d="M32.1,8.55,32,8.82a2.29,2.29,0,0,0,.07-.28Z" style="fill: #fbf5f3; fill-rule: evenodd" />
                        <path d="M32.21,7.12a8.33,8.33,0,0,1-.13,1.42c0,.09,0,.18-.07.28s0,0,0,.08l-.23.74L13.6,69.4h0A7,7,0,0,1,7,74.06,7.14,7.14,0,0,1,.57,64.13L18.39,5.49a0,0,0,0,1,0,0l.27-.88v0s0,0,0-.06A7,7,0,0,1,32.21,7.12Z" style="fill: #fbf5f3; fill-rule: evenodd" />
                        <path d="M18.4,5.46a6.87,6.87,0,0,1,.27-.88Z" style="fill: #fbf5f3; fill-rule: evenodd" />
                        <path d="M75.08,62.6h0l-30.6-.06h0a10.19,10.19,0,0,1,0-20.38h0l30.6.06h0a10.19,10.19,0,0,1,0,20.38ZM90.4,37.21a21.64,21.64,0,0,0-15.33-6.33l-30.6-.06a21.59,21.59,0,1,0,0,43.18l30.6.06A21.57,21.57,0,0,0,90.4,37.21Z" style="fill: #fbf5f3; fill-rule: evenodd" />
                        <path d="M122,45.8l0,.05c-.09.21,0,.11,0,0S122.05,45.79,122,45.8Z" style="fill: #fbf5f3; fill-rule: evenodd" />
                        <path d="M149.46,58a5.87,5.87,0,0,1-.5-1.22q-.19-.69-.33-1.44c-.09-.5-.15-1-.19-1.47s-.06-.92-.06-1.31a12.4,12.4,0,0,1,.81-4.6,10.37,10.37,0,0,1,2.22-3.5,9.69,9.69,0,0,1,3.32-2.24,10.55,10.55,0,0,1,4.08-.79,14.26,14.26,0,0,1,1.49.08,6,6,0,0,1,1.45.35ZM178,60.88a5.28,5.28,0,0,0-5.24-5.33,5.19,5.19,0,0,0-4.3,2.3c.06,0,0,.06,0,.17s-.29.46-.07,0l.09-.13a1,1,0,0,0-.21.2,34.64,34.64,0,0,1-3.78,4.05,10.51,10.51,0,0,1-5.66,1.63q-.62,0-1.23-.06a6.06,6.06,0,0,1-1.24-.25l16.92-20.18a5.09,5.09,0,0,0-.5-7.12l0,0a21.57,21.57,0,0,0-4.16-2.81,21.24,21.24,0,0,0-4.7-1.76,20.81,20.81,0,0,0-5.06-.62,21.62,21.62,0,0,0-8.21,1.57,20.78,20.78,0,0,0-6.72,4.4,20.45,20.45,0,0,0-4.54,6.85,23,23,0,0,0-1.66,8.87,22.24,22.24,0,0,0,1.66,8.71,21,21,0,0,0,4.54,6.83,20.64,20.64,0,0,0,6.72,4.47,20.91,20.91,0,0,0,8.21,1.61,21.21,21.21,0,0,0,5.05-.59,20.82,20.82,0,0,0,4.67-1.74,21.68,21.68,0,0,0,4.14-2.8,20.2,20.2,0,0,0,4.22-4.91h0A5.27,5.27,0,0,0,178,60.88Z" style="fill: #fbf5f3; fill-rule: evenodd" />
                        <path d="M122,45.87c0,.09-.12.19,0,0l0-.05S122,45.83,122,45.87Z" style="fill: #fbf5f3; fill-rule: evenodd" />
                      </g>
                    </g>
                  </svg>
                  </router-link>
                </div>
            </div>
          </div>
            <div class="c-header__container">
              <div class="c-header__innerContainer">
                <div class="e-header__link">
                  <router-link to="/concept" class="fontLink">Nous découvrir</router-link>
                  <router-link to="/personnalisation" class="fontLink">Personnaliser</router-link>
                  <router-link to="/contact" class="fontLink">Contact</router-link>
                </div>
            </div>
          </div>
            <div class="c-header__container">
              <div class="c-header__innerContainer">
                <div class="e-header__log">
                  <p v-if="user.displayName != null">Bonjour {{user.displayName}}</p>
                  <router-link v-if="user.displayName != null" to="/Compte" class="fontLink"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg></router-link>
                  <router-link v-if="user.displayName == null" to="/login" class="fontLink"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg></router-link>
                  <router-link v-if="user.displayName != null" to="/Compte" class="fontLink"><svg v-if="user.displayName != null" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg></router-link>
                </div>
              </div>
          </div>
        </div>
      </nav>
      <nav class="nav_mobile">
        <div class="container_mobile">
          <div class="logo_mobile">
            <router-link to="/" class="fontLink">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 178 74.47">
                <g id="Calque_2" data-name="Calque 2">
                  <g id="Calque_1-2" data-name="Calque 1">
                    <path d="M122.1,36.75a7,7,0,1,1,7,7A7,7,0,0,1,122.1,36.75Z" style="fill: #fbf5f3; fill-rule: evenodd" />
                    <path d="M134.83,68.77a5.72,5.72,0,0,1-10.27,3.44l-.19-.26L111.28,54.26V68.4c0,.12,0,.24,0,.36a5.73,5.73,0,0,1-11.45.07h0V37.33h0c0-.15,0-.3,0-.45a5.72,5.72,0,0,1,10.53-3.08v0l23.4,31.64h0A5.65,5.65,0,0,1,134.83,68.77Z" style="fill: #fbf5f3; fill-rule: evenodd" />
                    <path d="M18.69,4.5h0s0,0,0,.06Z" style="fill: #fbf5f3; fill-rule: evenodd" />
                    <path d="M32.1,8.55,32,8.82a2.29,2.29,0,0,0,.07-.28Z" style="fill: #fbf5f3; fill-rule: evenodd" />
                    <path d="M32.21,7.12a8.33,8.33,0,0,1-.13,1.42c0,.09,0,.18-.07.28s0,0,0,.08l-.23.74L13.6,69.4h0A7,7,0,0,1,7,74.06,7.14,7.14,0,0,1,.57,64.13L18.39,5.49a0,0,0,0,1,0,0l.27-.88v0s0,0,0-.06A7,7,0,0,1,32.21,7.12Z" style="fill: #fbf5f3; fill-rule: evenodd" />
                    <path d="M18.4,5.46a6.87,6.87,0,0,1,.27-.88Z" style="fill: #fbf5f3; fill-rule: evenodd" />
                    <path d="M75.08,62.6h0l-30.6-.06h0a10.19,10.19,0,0,1,0-20.38h0l30.6.06h0a10.19,10.19,0,0,1,0,20.38ZM90.4,37.21a21.64,21.64,0,0,0-15.33-6.33l-30.6-.06a21.59,21.59,0,1,0,0,43.18l30.6.06A21.57,21.57,0,0,0,90.4,37.21Z" style="fill: #fbf5f3; fill-rule: evenodd" />
                    <path d="M122,45.8l0,.05c-.09.21,0,.11,0,0S122.05,45.79,122,45.8Z" style="fill: #fbf5f3; fill-rule: evenodd" />
                    <path d="M149.46,58a5.87,5.87,0,0,1-.5-1.22q-.19-.69-.33-1.44c-.09-.5-.15-1-.19-1.47s-.06-.92-.06-1.31a12.4,12.4,0,0,1,.81-4.6,10.37,10.37,0,0,1,2.22-3.5,9.69,9.69,0,0,1,3.32-2.24,10.55,10.55,0,0,1,4.08-.79,14.26,14.26,0,0,1,1.49.08,6,6,0,0,1,1.45.35ZM178,60.88a5.28,5.28,0,0,0-5.24-5.33,5.19,5.19,0,0,0-4.3,2.3c.06,0,0,.06,0,.17s-.29.46-.07,0l.09-.13a1,1,0,0,0-.21.2,34.64,34.64,0,0,1-3.78,4.05,10.51,10.51,0,0,1-5.66,1.63q-.62,0-1.23-.06a6.06,6.06,0,0,1-1.24-.25l16.92-20.18a5.09,5.09,0,0,0-.5-7.12l0,0a21.57,21.57,0,0,0-4.16-2.81,21.24,21.24,0,0,0-4.7-1.76,20.81,20.81,0,0,0-5.06-.62,21.62,21.62,0,0,0-8.21,1.57,20.78,20.78,0,0,0-6.72,4.4,20.45,20.45,0,0,0-4.54,6.85,23,23,0,0,0-1.66,8.87,22.24,22.24,0,0,0,1.66,8.71,21,21,0,0,0,4.54,6.83,20.64,20.64,0,0,0,6.72,4.47,20.91,20.91,0,0,0,8.21,1.61,21.21,21.21,0,0,0,5.05-.59,20.82,20.82,0,0,0,4.67-1.74,21.68,21.68,0,0,0,4.14-2.8,20.2,20.2,0,0,0,4.22-4.91h0A5.27,5.27,0,0,0,178,60.88Z" style="fill: #fbf5f3; fill-rule: evenodd" />
                    <path d="M122,45.87c0,.09-.12.19,0,0l0-.05S122,45.83,122,45.87Z" style="fill: #fbf5f3; fill-rule: evenodd" />
                  </g>
                </g>
              </svg>
            </router-link>
          </div>
          <div @click="displayBurger()" class="burger">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </div>
        </div>
        <div class="container_mobile_menu">
          <div @click="closeMobile()" class="tick_close">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </div>
          <ul class="list_menu_mobile">
            <li><router-link to="/decouvrir" class="fontLink">Nous découvrir</router-link></li>
            <li><router-link to="/personnalisation" class="fontLink">Personnaliser</router-link></li>
            <li><router-link to="/contact" class="fontLink">Contact</router-link></li>
            <li v-if="user.displayName == null"><router-link  to="/login" class="fontLink">Mon compte</router-link></li>
            <li v-if="user.displayName != null"><router-link  to="/Compte" class="fontLink">Mon compte</router-link></li>
            <li v-if="user.displayName != null"><router-link  to="/Compte" class="fontLink">Mes créations </router-link></li>
          </ul>
        </div>
      </nav>
    </header>
</template>


<script>
export default {
  computed:{
    user(){
      return this.$store.state.user
    },
  },
  methods:{
      displayBurger(){
        document.querySelector('.container_mobile_menu').classList.add("displayMenu")
      },
      closeMobile(){
        document.querySelector('.container_mobile_menu').classList.remove("displayMenu")
      },
    },
};
/* Sélection des éléments HTML *
let link = document.getElementById('link')
let burger = document.getElementById('burger')
let ul = document.querySelector('ul')

/* gestionnaire d'événement sur le a#link pour venir changer l'attribution de la classe .open à la ul et au span#burger 
link.addEventListener('click', function(e) {
  e.preventDefault()
  burger.classList.toggle('open')
  ul.classList.toggle('open')
})*/

</script>



<style lang="scss">
.rowNav {
  background: #1f1f1f77;
  align-items: center;
  justify-content: space-between;
}
.navbar{
  padding-top: 20px;
}

.c-header__container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  .c-header__innerContainer {
    .e-header__log {
      display: flex;
      align-items: center;
      padding-right: 20px;
      svg {
        margin: 10px;
        width: 25px;
        color: white;
        animation: none;
        &:hover{
          color: $primaryColor;
        }
      }
    }
    .e-header__logo {
      svg {
        width: auto;
        height: 74px;
      }
    }
    .e-header__link {
      display: flex;
      align-items: center;
      a {
        margin: 20px;
        transition: 0.25s all ease-in-out;
        &:hover{
          text-decoration: underline $primaryColor;
        }
      }
    }
  }
}

.col-l-4 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav_mobile{
  display: none;
}
@media(max-width:968px){
  .navbar{
    display: none;
  }
  .nav_mobile{
    position: relative;
    display: block;
    width: 100%;
    height: 150px;
    position: fixed;
    z-index: 999;
    .container_mobile{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      background-color: $grey;
    }
    .logo_mobile{
      width: 100px;
      cursor: pointer;
    }
    .burger{
    cursor: pointer;
      svg{
      width: 36px;
      color: $primaryColor;
    }
    } 
    .container_mobile_menu{
      position: absolute;
      top: 87px;
      right: -400px;
      height: 100vh;
      width: 40vw;
      background-color: $black;
      transition: all 1s ease-in-out;
    }
    .displayMenu{
      right: 0px;
    }
    .tick_close{
      color: $primaryColor;
      width: 36px;
      margin: 25px;
      cursor: pointer;
    }
    .list_menu_mobile{
      widows: 70%;
      text-align: right;
    }
    li{
      padding: 10px 20px;
      margin-left: 70px;
      border-bottom: solid 1px $primaryColor;
    }
  }
}

</style>