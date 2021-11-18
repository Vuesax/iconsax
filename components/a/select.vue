<template>
  <div
    class="``"
    :class="
      `a-select-box rounded-2 ` +
      (isFocused
        ? `border-${color}  bloom-3-${color}-glassy-5`
        : `border-grey  bloom-3-grey-glassy-9`)
    "
  >
    <input
      type="text"
      placeholder="teste"
      @focus="focus()"
      @blur="blur()"
      :class="`text--${color}-lighten-3`"
      v-model="val"
    />
    <transition name="xablau">
      <div v-show="isFocused" class="a-select-items">
        <button class="a-select-button mx-2">asd</button>
      </div>
    </transition>
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
.a-select-box {
  position: relative;
  input {
    z-index: 1;
  }
  .a-select-items {
    position: absolute;
    flex-direction: column;
    display: flex;
    width: 100%;
    z-index: 0;
    transform: translate(0, 100%);

    bottom: 0;
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
