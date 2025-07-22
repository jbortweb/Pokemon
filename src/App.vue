<script setup>
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark({
  selector: "body",
  attribute: "class",
  valueDark: "dark",
  valueLight: "",
});
const toggleDark = useToggle(isDark);
</script>

<template>
  <div>
    <header>
      <nav>
        <RouterLink :class="{ moving: isDark }" to="/">Inicio</RouterLink>
        <RouterLink :class="{ moving: isDark }" to="/combat"
          >Combate</RouterLink
        >
      </nav>
      <div class="dark-toggle">
        <button
          class="switch"
          :class="{ moving: isDark }"
          @click="toggleDark()"
          aria-label="Cambiar modo oscuro/claro"
        >
          <span v-if="isDark">🌙</span>
          <span v-else>☀️</span>
        </button>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  width: 90vw;
  max-height: 100vh;
  margin: auto;
}

nav {
  font-size: 24px;
  text-align: left;
}

nav a {
  color: var(--text-light);
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 30px;
}
nav a:hover {
  text-decoration: underline;
}

.dark-toggle {
  margin-left: auto;
}

.moving {
  transform: translateX(50px);
  transition: transform 0.3s;
}

.switch {
  width: 48px;
  height: 32px;
  border-radius: 12px;
  border: 2px solid #ccc;
  background: #f3f3f3;
  position: relative;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.switch.moving,
a.moving {
  background: #222;
  border-color: #666;
  color: #fff;
  transform: translateX(10px);
}
.switch span {
  font-size: 1.2rem;
}
</style>


