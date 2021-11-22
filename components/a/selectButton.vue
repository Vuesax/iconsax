<template>
  <div class="a-select-box">
    <a-button
      class="w-100 h-100 justify-space-between"
      @click="focus()"
      :mode="mode"
      :color="color"
    >
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
        :color="color + '-lighten-4'"
      ></a-icon>
    </a-button>
    <transition name="xablau">
      <div v-if="isFocused" class="a-select-items">
        <a-button
          class="my-1"
          v-if="items.length"
          v-for="(item, i) in items"
          @click="input(item, i)"
          :color="color"
          :mode="item.value === selected.value ? 'filled' : 'default'"
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
    default: 2,
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
    z-index: 10;
    transform: translate(0, 100%);
    bottom: -5px;
  }
}
.xablau-enter-active {
  animation: bounce-in 0.25s ease-out;
}
.xablau-leave-active {
  animation: bounce-in 0.25s ease-out reverse;
}
.xablau-enter-to {
  transform: translate(0, 100%);
}
.xablau-enter-from,
.xablau-leave-to {
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
