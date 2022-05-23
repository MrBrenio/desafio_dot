<template>
  <div class="main">
    <api />
    <header>
      <cabecalho />
    </header>

    <main>
      <Capa />
      <Capa />
      <Capa />
      <Capa />
    </main>

    <footer></footer>

    <div v-for="(filme, i) in filmes" :key="i">
      <p>{{ filme.id }}</p>
    </div>
  </div>
</template>

<script>
// API
import api from "./services/api";

// Components
import Cabecalho from "./components/Cabecalho.vue";
import Capa from "./components/Capa.vue";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

export default {
  name: "App",
  components: {
    Cabecalho,
    Capa,
  },
  setup() {
    const filmes = ref([]);

    const fetchFilmes = async () =>
      api.get("/movie/550").then((response) => {
        filmes.value = response.data.results;
      });
    onMounted(fetchFilmes);

    return { filmes };
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: auto;
} */

/* .main {
  display: inline-block; 
  padding: 20px;
  margin: 20px;
  border: 20px;
} */
</style>
