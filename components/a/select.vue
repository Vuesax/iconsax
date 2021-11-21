<template>
  <div class="a-select-box" :class="classesState">
    <input
      type="text"
      @focus="focus()"
      @mouseover="hover()"
      @mouseout="out()"
      @blur="blur()"
      :class="`text--${color}-lighten-3`"
      v-model="val"
    />
    <transition name="xablau">
      <div v-show="isFocused" class="a-select-items">
        <a-button
          v-if="items.length"
          @click="input(item, i)"
          v-for="(item, i) in items"
          mode="filled"
        >
          <slot name="item">
            {{ (item.text || item.value) }}
          </slot>
        </a-button>
      </div>
    </transition>
  </div>
</template>
<script setup>
let val = ref('')
const props = defineProps({
  color: {
    type: String,
    default: 'purple',
  },
  mode: {
    type: String,
    default: 'default',
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
      isHovered: false,
      itemsCmp: this.items,
    }
  },
  methods: {
    hover() {
      this.isHovered = true
    },
    out() {
      this.isHovered = false
    },
    focus() {
      this.isFocused = true
      this.isHovered = true
    },
    blur() {
      this.isHovered = false
      this.isFocused = false
    },
    input(item, i) {},
  },
  computed: {
    classes() {
      return {
        flat: {
          default: [`border-none`, `text--${this.color}-lighten-3`],
          hovered: [
            `border-none`,
            `bloom-5-${this.color}-glassy-7`,
            `text--${this.color}-lighten-3`,
          ],
          focused: [
            `border-none`,
            `bloom-2-${this.color}-glassy-7`,
            `text--${this.color}-lighten-3`,
          ],
        },
        default: {
          default: [
            `border-${this.color} `,
            `${this.color}-glassy-9-gradient-bottom-right`,
            `bloom-3-${this.color}-glassy-8`,
            `text--${this.color}-lighten-3`,
          ],
          hovered: [
            `border-${this.color} `,
            `${this.color}-glassy-8-gradient-bottom-right`,
            `bloom-5-${this.color}-glassy-8`,
            `text--${this.color}-lighten-3`,
          ],
          focused: [
            `border-${this.color}`,
            `${this.color}-glassy-5-gradient-bottom-right`,
            `bloom-3-${this.color}-glassy-8`,
            `text--${this.color}-lighten-3`,
          ],
        },
      }
    },

    classesState() {
      return [
        ...[`rounded-${this.rounded}`],
        ...this.classes[this.mode][
          this.isHovered || this.isFocused
            ? this.isFocused
              ? 'focused'
              : 'hovered'
            : 'default'
        ],
      ]
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
    z-index: 10;
    transform: translate(0, 100%);
    bottom: -10px;
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
