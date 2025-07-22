<script setup>
import { defineProps } from "vue";

const props = defineProps({
  pokemons: Array,
  selected: Array,
});

// Emitimos un evento al elemento padre cuando se selecciona una carta
const emit = defineEmits(["select"]);

function handleClick(card) {
  if (!props.selected.includes(card) && props.selected.length < 2) {
    emit("select", card);
  }
}
</script>

<template>
  <div class="cards-row">
    <div
      v-for="card in props.pokemons"
      :key="card.id"
      class="card-back"
      :class="{ selected: props.selected.includes(card) }"
      @click="handleClick(card)"
    >
      <span class="diagonal-text">pokémon</span>
    </div>
  </div>
</template>
<style scoped>
.cards-row {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 33vh;
  gap: 16px;
}
.card-back {
  width: 100px;
  height: 140px;
  background: var(--bg-main);
  border: 2px solid var(--border-main);
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
body.dark .card-back {
  background: var(--bg-dark);
  border: 2px solid var(--text-dark);
}
.card-back.selected {
  border: 2px solid #2196f3;
}
body.dark .card-back.selected {
  border: 2px solid #2196f3;
}
.diagonal-text {
  position: absolute;
  left: -10px;
  top: 50px;
  font-size: 1.2rem;
  color: var(--text-main);
  transform: rotate(-50deg);
  letter-spacing: 2px;
  font-weight: bold;
  pointer-events: none;
}
body.dark .diagonal-text {
  color: var(--text-dark);
}
</style>
