<template>
  <div
    class="``"
    :class="
      `a-button-box rounded-2 ` +
      (isFocused
        ? `border-${color}  bloom-3-${color}-glassy-5`
        : `border-grey  bloom-3-grey-glassy-9`)
    "
  >
    <button placeholder="teste" :class="`text--${color}-lighten-3`">
      <slot />
    </button>
  </div>
</template>
<script setup>
let val = ref('')
const props = defineProps({
  color: {
    type: String,
    default: 'primary',
  },
  items: {
    type: Array,
    default: () => [],
  },
  iconStyle: {
    type: String,
    default: 'bold',
  },
  iconName: {
    type: String,
    default: 'book',
  },
})
</script>
<script>
export default {
  data() {
    return {
      isFocused: false,
      itemsCmp: this.items,
    }
  },
  methods: {
    focus() {
      this.isFocused = true
    },
    blur() {
      this.isFocused = false
    },
  },
  watch: {
    items: {
      handler: function () {
        this.itemsCmp = this.items
      },
      deep: true,
    },
  },
}
</script>
<style lang="scss">
.a-button-box {
  button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.xablau-enter-active {
  animation: bounce-in 0.5s;
}
.xablau-leave-active {
  animation: bounce-in 0.5s reverse;
}
.xablau-enter-to {
  transform: translate(0, 100%);
}
.xablau-enter-from,
.xablau-leave-to {
  transform: translate(0, 0);
  opacity: 0;
  z-index: -1;
}

@keyframes bounce-in {
  0% {
    transform: translate(0, 0);
  }
  30% {
    transform: translate(0, 100%);
  }
  70% {
    transform: translate(0, 120%);
  }
  100% {
    transform: translate(0, 100%);
  }
}
</style>
