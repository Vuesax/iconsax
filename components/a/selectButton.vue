<template>
  <div class="a-select-box">
    <a-button
      class="w-100 h-100 z-10"
      @click="focus()"
      mode="select"
      padding="24px"
      :rounded="rounded"
      :color="color"
    >
      <div class="d-flex justify-space-between w-100 align-center">
        <slot v-if="selected.text || selected.value" :selected="selected">
          {{ selected.text || selected.value }}
        </slot>
        <slot v-else name="notFound">
          Select
        </slot>
        <a-icon
          size="24px"
          icon-style="linear"
          icon-name="arrow-down"
          class="mr-2"
          :color="color + '-lighten-9'"
        ></a-icon>
      </div>
    </a-button>
    <transition name="select-scroll">
      <div
        v-if="isFocused"
        class="a-select-items rounded-6"
        :class="`${darkMode ? `${color}-darken-6` : `${color}-lighten-9`}`"
      >
        <a-button
          class="ma-1"
          rounded="6"
          v-if="items.length"
          v-for="(item, i) in items"
          @click="input(item, i)"
          :color="color"
          :active="item.value === selected.value"
          mode="radio"
        >
          <slot name="item" :item="item">
            {{ (item.text || item.value) }}
          </slot>
        </a-button>
      </div>
    </transition>
  </div>
</template>
<script setup>
const darkMode = useState('darkMode')
const props = defineProps({
  modelValue: {
    type: [String, Object],
    default: '',
  },
  color: {
    type: String,
    default: 'purple',
  },
  mode: {
    type: String,
    default: 'filled',
  },
  rounded: {
    type: String,
    default: '2',
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
      selected: {
        text: '',
        value: '',
      },
      itemsCmp: this.items,
    }
  },
  methods: {
    focus() {
      this.isFocused = !this.isFocused
    },
    input(item, i) {
      this.selected = item
      this.isFocused = false
      this.$emit('update:modelValue', item.value ?? item)
    },
  },
  mounted() {
    this.selected =
      this.items.find((item) => item.value === this.modelValue) ??
      this.modelValue
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
    z-index: 1;
    transform: translate(0, 100%);
    bottom: 24px;
    padding-top: 24px;
    padding-bottom: 24px;
    right: 2px;
  }
}
.select-scroll-enter-active {
  animation: bounce-in 0.25s ease-out;
}
.xablauselect-scroll-leave-active {
  animation: bounce-in 0.25s ease-out reverse;
}
.select-scroll-enter-to {
  transform: translate(0, 100%);
}
.select-scroll-enter-from,
.select-scroll-leave-to {
  transform: translate(0, 80%);
  opacity: 0;
  z-index: -1;
}

@keyframes bounce-in {
  0% {
    transform: translate(0, 80%);
    opacity: 0;
  }

  100% {
    transform: translate(0, 100%);
    opacity: 1;
  }
}
</style>
