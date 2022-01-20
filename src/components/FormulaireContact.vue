<template>
    <form action="" method="get" class="contact">

        <div class="row">
          <div class="container_input">
            <label class="fontLink" for="name">NOM</label>
            <input type="text" name="name" id="name" placeholder="Saisis ton nom" required>
          </div>

          <div class="container_input">
            <label class="fontLink" for="premon">PRÉNOM </label>
            <input type="text" name="prenom" id="prenom" placeholder="Saisis ton prénom" required>
          </div>
        </div>

        <div class="row">
          <div class="container_input">
            <label class="fontLink" for="email">EMAIL</label>
            <input type="email" name="email" id="email" placeholder="Saisis ton email" required>
          </div>

          <div class="container_input">
            <label class="fontLink" for="object">OBJET</label>
            <input type="object" name="object" id="object" placeholder="Saisis l'objet du message" required>
          </div>
        </div>

        <div class="container_textarea">
          <label class="fontLink" for="message">MESSAGE</label>
          <textarea id="message" name="message" placeholder="Saisis ton message"></textarea>
        </div>

        <div class="cont">
          <a href="#" value="submit" class="button">Envoyer</a>
        </div>
      </form>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
// FORMULAIRE EN COLONNE
input{
    background: none;
    border-bottom: solid 1px $greyBorder;
    box-shadow: none;
    border-right: none;
    color: $white;
    outline: 0;
    &::placeholder{
        font-family: $fontText;   
       }
    
}

.container_input{
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 50%;
}

.container_textarea{
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;
    label{
        display:block ;
        width: 80%;
        text-align: left;
    }
}

textarea{
    width: 80%;
    min-height: 100px;
    background: none;
    border: solid 1px $greyBorder;
    color: $white;
    outline: 0;
    resize: none;
    &::placeholder{
        font-family: $fontText;   
       }
    
}

form{
    width: 700px;
    background-color: $grey;
    border-radius: 22px;
    padding: 40px;
    .contact{
        display: block;
        margin: 40px auto ;
    }
}

// FORMULAIRE EN COLONNE

.container_input_col{
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
}


</style>