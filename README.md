# Pokémon Vue Combat

Este proyecto es una aplicación web desarrollada con Vue 3 y Vite que permite explorar una lista de Pokémon y jugar a un minijuego de combate entre cartas.

## Características principales

- **Lista de Pokémon**: Visualiza todos los Pokémon disponibles, filtra por nombre en tiempo real y accede a la ficha de cada uno.
- **Vista de detalle**: Consulta la información de cada Pokémon (imagen, ataque, defensa) y vuelve fácilmente a la lista.
- **Modo claro/oscuro**: Cambia el tema de la aplicación con un interruptor, adaptando todos los colores y bordes.
- **Minijuego de combate**:
  - Accede a la vista "Combat" desde la navegación principal.
  - Se muestran cartas de Pokémon boca abajo y en orden aleatorio cada vez que entras o reinicias.
  - Selecciona dos cartas para girarlas y revelar los Pokémon.
  - Se comparan los valores de ataque y defensa para decidir el ganador.
  - Puedes reiniciar el combate y se barajan de nuevo las cartas.

## Cómo jugar al combate

1. Ve a la sección "Combat" desde el menú superior.
2. Haz clic en dos cartas para seleccionarlas y ver qué Pokémon hay.
3. El sistema compara ataque y defensa y muestra el ganador.
4. Pulsa "Reiniciar" para volver a barajar y jugar otra vez.

## Instalación y uso

```sh
npm install
```

### Compilar y recargar en desarrollo

```sh
npm run dev
```

### Compilar y minificar para producción

```sh
npm run build
```

## Requisitos recomendados

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (desactiva Vetur)

## Personalización

Puedes modificar los estilos, añadir más reglas de combate o ampliar la información de los Pokémon según tus necesidades.

---

¡Diviértete explorando y combatiendo con tus Pokémon favoritos!
