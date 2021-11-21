<template>
  <div class="waves purple-darken-1"></div>
</template>
<script>
export default {
  data() {
    return {}
  },
  computed: {
    styles() {
      return {}
    },
  },
}
</script>

<style scoped>
.waves {
  height: 100%;
  width: 100%;
  mask-image: url('~/static/triangles2.svg');
  -webkit-mask-image: url('~/static/triangles2.svg');
  background-repeat: repeat;
  mask-size: 180px;
  animation-name: infiniteSlide;
  animation-delay: 1s;
  animation-iteration-count: infinite;

  animation-duration: 200s;
  animation-timing-function: linear;
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

@keyframes infiniteSlide {
  0% {
    mask-position: 0% 0%;
  }
  100% {
    mask-position: 100% 200%;
  }
}
</style>
