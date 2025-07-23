<script setup>
import { getPokemonById } from "@/services/pokemon";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Card from "@/components/card/Card.vue";

const route = useRoute();
const pokemon = ref(null);

// Obtenemos el pokemon por su ID
onMounted(async () => {
  const id = route.params.id;
  pokemon.value = await getPokemonById(id);
});

// Función para volver atrás en el historial
const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<template>
  <div>
    <div v-if="pokemon">
      <h1>{{ pokemon.name }}</h1>
      <div class="container-cards">
        <Card :card="pokemon" :showButton="false" :showTypes="true" />
      </div>
    </div>
    <div v-else>Cargando...</div>
    <button class="boton-back" @click="goBack">← Volver atrás</button>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  color: var(--text-main);
}

body.dark h1 {
  color: var(--text-dark);
}
.container-cards {
  width: 33vw;
  margin: auto;
}
.boton-back {
  display: block;
  margin: 40px auto 0 auto;
  padding: 10px 20px;
  background-color: orangered;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.boton-back:hover {
  background-color: orange;
  color: #222;
}
body.dark .boton-back {
  background-color: orangered;
  color: #fff;
}
body.dark .boton-back:hover {
  background-color: orange;
  color: #222;
}
</style>