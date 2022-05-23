<template>
  <div class="super">
    <div class="capa">7 de janeiro, 2019</div>
    
    <div v-for="(filme, i) in filmes" :key="i"></div>

    <div class="bg-capa">Nome do filme</div>
    <input class="botao-add" type="button" value="Adicionar" />
  </div>
</template>

<script>
// Import
import api from '../services/api'

// Export
export default {
  name: "Capa",
  components: api,
  
};
</script>

<style scoped>

.super {
    display: inline-block;
}

.capa {
  /* align-items: center; */
  /* justify-content: center; */
  background-color: #dfe6ed;
  border: solid 1px gray;
  /* margin: 0px 2px 0px 1px; */
  width: 200px;
  height: 200px;
}

.bg-capa {
  background-color: #fff;
  border: solid 1px #c3cfd9;
  width: 200px;
  height: 100px;
  margin: 0px 2px 0px 1px;
  /* text-align: center; */
  align-items: center;
  justify-content: center;
}

.botao-add {
  display: flex;
  justify-content: center;
  background-color: #6558f5;
  color: #fff;
  padding: 5px;
  width: 202px;
  height: 35px;
  border-radius: 4px;
}
</style>