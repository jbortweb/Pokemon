<script setup>
import { ref, computed } from "vue";
import { getPokemons } from "@/services/pokemon";
import CombatCards from "@/components/combat/CombatCards.vue";
import CombatResult from "@/components/combat/CombatResult.vue";
import { rand } from "@vueuse/core";

const pokemons = ref([]);
const selected = ref([]);

//Cargamos los pokemons de manera aleatoria
getPokemons().then((res) => {
  pokemons.value = randomPokemon(res);
});

function randomPokemon(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
// Seleccionamos una carta
function selectCard(card) {
  if (selected.value.length < 2 && !selected.value.includes(card)) {
    selected.value.push(card);
  }
}

// Reiniciamos el juego
function resetSelection() {
  getPokemons().then((res) => {
    pokemons.value = randomPokemon(res);
    selected.value = [];
  });
}
// Comparamos valor de las cartas y seleccionamos el ganador
const winner = computed(() => {
  if (selected.value.length < 2) return null;
  const [a, b] = selected.value;
  const aScore = a.attack + a.defense;
  const bScore = b.attack + b.defense;
  if (aScore > bScore) return a;
  if (bScore > aScore) return b;
  // Si hay empate, devolvemos un objeto especial
  if (aScore === bScore) {
    return { empate: true, cartas: [a, b] };
  }
  return null;
});
</script>

<template>
  <div class="combat-view">
    <CombatCards
      :pokemons="pokemons"
      :selected="selected"
      @select="selectCard"
    />
    <CombatResult
      :selected="selected"
      :winner="winner"
      @reset="resetSelection"
    />
  </div>
</template>

<style scoped>
.combat-view {
  display: flex;
  flex-direction: column;
  height: 85vh;
}
</style>
