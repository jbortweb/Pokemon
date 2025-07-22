<script setup>
import { defineProps } from "vue";
import Card from "@/components/card/Card.vue";

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
      <Card
        v-for="card in props.selected"
        :key="card.id"
        :card="card"
        :showButton="false"
      />
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
::v-deep .container {
  width: 240px !important;
  height: 320px !important;
  padding: 20px 0 !important;
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
