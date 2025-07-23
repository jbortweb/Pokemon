<script setup>
//Obtenemos los props
const props = defineProps({
  card: {
    type: Object,
  },
  showButton: {
    type: Boolean,
    default: true,
  },
  showTypes: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="container">
    <div class="container-image">
      <img
        :src="card.image"
        :alt="'Imagen de ' + card.name"
        class="card-image"
        width="200"
      />
    </div>
    <div class="p-5">
      <h2 class="">{{ card.name }}</h2>
      <div
        v-if="showTypes && card.types && card.types.length"
        class="types-list"
      >
        <div v-for="type in card.types" :key="type" class="type-badge">
          <span>{{ type }}</span>
        </div>
      </div>
      <p>Ataque: {{ card.attack }} - Defensa: {{ card.defense }}</p>
      <button
        v-if="showButton"
        type="button"
        class="boton-card"
        @click="$router.push({ name: 'pokemon', params: { id: card.id } })"
      >
        Ver más
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid var(--text-main);
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
body.dark .container {
  border: 1px solid var(--text-dark);
}
.card-image:hover {
  transform: scale(1.25) rotate(20deg);
}
.container-image {
  padding: 10px 0;
}
.boton-card {
  width: 100%;
  background-color: orangered;
  color: white;
  padding: 10px;
  margin-bottom: 30px;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
}

.boton-card:hover {
  background-color: orange;
  color: #222;
}

h2 {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--text-main);
}
body.dark h2 {
  color: var(--text-dark);
}
.types-list {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 8px;
}
.type-badge {
  background: #ccc;
  color: #222;
  border-radius: 8px;
  padding: 2px 10px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: capitalize;
  padding: 4px 12px;
}
body.dark .type-badge {
  background: #222;
  color: #ccc;
  border: 1px solid #ccc;
}
</style>
  