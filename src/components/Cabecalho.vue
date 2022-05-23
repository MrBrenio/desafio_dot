<template>
  <div class="background-header">
    <span class="logo"> logo </span>
    <span class="pesquisar"> pesquisar </span>
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