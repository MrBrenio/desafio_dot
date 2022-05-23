<template>
  <div class="background-header">
    <span class="logo"><img src="//www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="the movie database api" role="presentation"></span>
    <input type="text" placeholder="O que você procura?">
    <span class="fav"> fav </span>
    <span class="checkout"> checkout </span>
  </div>
</template>

<script>
export default {
  name: "Cabecalho",
};
</script>

<style scoped>
.background-header {
  background-color: #8dd7cf;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
}

.logo {
  color: black;
  width: 5rem;
  height: 5rem;
}

.pesquisar {
  color: black;
}

.fav {
  color: black;
}

.checkout {
  color: black;
}
</style>