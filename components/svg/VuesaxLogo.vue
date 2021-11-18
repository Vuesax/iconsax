<template>
  <svg
    version="1.1"
    id="Layer_1"
    class="vuesax-logo"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 842.05 897.79"
    style="enable-background: new 0 0 842.05 897.79;"
    xml:space="preserve"
  >
    <polygon
      id="vuesax-poligon-1"
      class="vuesax-logo-poligon"
      points="641.78,12.5 420.98,348.26 200.27,12.5 362.68,53.56 362.68,0 479.37,0 
	479.37,53.56 "
    />
    <polygon
      id="vuesax-poligon-2"
      class="vuesax-logo-poligon"
      points="841.68,73.45 686.57,73.45 420.98,484.66 155.47,73.45 0.36,73.45 
	421.07,724.89 "
    />
    <polygon
      id="vuesax-poligon-3"
      class="vuesax-logo-poligon"
      points="421.07,797.34 64.87,245.8 0,245.8 420.98,897.79 842.05,245.8 777.17,245.8 "
    />
  </svg>
</template>

<style scoped>
.vuesax-logo {
  width: 100%;
}
.vuesax-logo-poligon {
  fill: white;
}
#vuesax-poligon-1 {
  transform-origin: center;
  transform: translateY(-20%);
  opacity: 0;

  animation-name: slideSax;
  animation-delay: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-duration: 1s;
  animation-timing-function: ease-out;
}
#vuesax-poligon-2 {
  transform-origin: center;
  transform: translateY(-60%);
  opacity: 0;

  animation-name: slideSax;
  animation-delay: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-duration: 1s;
  animation-timing-function: ease-out;
}
#vuesax-poligon-3 {
  transform-origin: center;
  transform: translateY(-100%);
  opacity: 0;

  animation-name: slideSax;
  animation-delay: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-duration: 1s;
  animation-timing-function: ease-out;
}
@keyframes slideSax {
  50% {
    opacity: 0.2;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}
</style>
