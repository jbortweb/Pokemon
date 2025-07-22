<script setup>
import { ref, onMounted, computed } from "vue";
import Card from "@/components/card/Card.vue";
import { getPokemons } from "@/services/pokemon";

const cards = ref([]);
const filter = ref("");

onMounted(async () => {
  cards.value = await getPokemons();
});

// Filtramos las cartas por nombre
const filteredCards = computed(() => {
  if (!filter.value) return cards.value;
  return cards.value.filter((card) =>
    card.name.toLowerCase().includes(filter.value.toLowerCase())
  );
});
</script>

<template>
  <div>
    <h1>Lista pokemon</h1>
    <input
      v-model="filter"
      type="text"
      placeholder="Filtra por nombre..."
      class="pokemon-filter"
    />
    <div v-if="filteredCards.length" class="container-cards">
      <Card
        v-for="card in filteredCards"
        :key="card.id"
        :card="card"
        :showButton="true"
      />
    </div>
    <div v-else class="no-results">
      No hay pokemons con esas letras, sigue buscando.
    </div>
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
}
.pokemon-filter {
  display: block;
  margin: 0 auto 20px auto;
  padding: 8px 12px;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid var(--border-light);
  background: var(--bg-main);
  color: var(--text-main);
  width: 300px;
  box-sizing: border-box;
}
body.dark .pokemon-filter {
  border: 1px solid var(--border-dark);
  background: var(--bg-dark);
  color: var(--text-dark);
}
.no-results {
  text-align: center;
  margin-top: 20px;
}
</style>