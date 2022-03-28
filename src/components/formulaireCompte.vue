<template>
  <div class="row -center">
    <form action="" method="get" class="colForm">
      <div class="container_input_col">
        <label class="fontLink" for="name">NOM</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Saisis ton nom"
          required
        />
      </div>

      <div class="container_input_col">
        <label class="fontLink" for="premon">PRÉNOM </label>
        <input
          type="text"
          name="prenom"
          id="prenom"
          placeholder="Saisis ton prénom"
          required
        />
      </div>

      <div class="container_input_col">
        <label class="fontLink" for="email">EMAIL</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Saisis ton email"
          required
        />
      </div>

      <div class="container_input_col">
        <label class="fontLink" for="date">DATE D'ANNIVERSAIRE</label>
        <input
          type="date"
          name="date"
          id="date"
          placeholder="Saisis l'objet du message"
          required
        />
      </div>

      <div class="container_input_col">
        <label class="fontLink" for="mdp"> MODIFIER LE MOT DE PASSE</label>
        <input
          type="mdp"
          name="mdp"
          id="mdp"
          placeholder="Nouveau mot de passe"
          required
        />
      </div>

      <div class="cont">
        <a href="#" value="submit" class="button">Enregistrer</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">

</style>