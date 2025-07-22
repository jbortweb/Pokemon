<script setup>
import { defineProps } from "vue";

const props = defineProps({
  selected: Array,
  winner: Object,
});
// Emitimos un evento al elemento padre cuando se reinicia el juego
const emit = defineEmits(["reset"]);
</script>

<template>
  <div class="container-combat">
    <div v-if="props.selected.length === 2" class="cards-selected">
      <div class="container-card" v-for="card in props.selected" :key="card.id">
        <img :src="card.image" :alt="card.name" class="poke-img" />
        <div class="poke-info">
          <h3>{{ card.name }}</h3>
          <p>Ataque: {{ card.attack }}</p>
          <p>Defensa: {{ card.defense }}</p>
        </div>
      </div>
      <div class="winner-info">
        <span v-if="props.winner && !props.winner.empate"
          >Ganador: {{ props.winner.name }}</span
        >
        <span v-else-if="props.winner && props.winner.empate"
          >¡Empate entre {{ props.winner.cartas[0].name }} y
          {{ props.winner.cartas[1].name }}!</span
        >
        <span v-else>¡Empate!</span>
        <button class="boton-reset" @click="emit('reset')">Reiniciar</button>
      </div>
    </div>
    <div v-else class="cards-selected">
      <span>Selecciona dos cartas para combatir</span>
    </div>
  </div>
</template>

<style scoped>
.container-combat {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--bg-main);
}
.cards-selected {
  display: flex;
  align-items: center;
  gap: 40px;
  justify-content: center;
}
.container-card {
  width: 180px;
  height: 240px;
  background: var(--bg-main);
  border: 2px solid var(--border-main);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
body.dark .container-card {
  background: var(--bg-dark);
  border: 2px solid var(--border-dark);
}
.container-card h3 {
  color: var(--text-main);
}
body.dark .container-card h3 {
  color: var(--text-dark);
}
.poke-img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}
.poke-info {
  text-align: center;
}
.winner-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.boton-reset {
  padding: 6px 16px;
  border-radius: 6px;
  border: none;
  background: orangered;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
}
.boton-reset:hover {
  background: orange;
  color: #222;
}
</style>
