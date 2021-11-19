<template>
  <button
    class="a-button text-button px-3"
    :class="classesState"
    @click="click($event)"
    @mouseleave="blur()"
    @mouseover="hover()"
  >
    <slot />
  </button>
</template>
<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'primary',
  },
  mode: {
    type: String,
    default: 'default',
  },
  width: {
    type: String,
    default: '44px',
  },
  aspectRatio: {
    type: String,
    default: 'unset',
  },
  rounded: {
    type: String,
    default: 2,
  },
})
</script>
<script>
export default {
  data() {
    return {
      isFocused: false,
      isHovered: false,
      clickTop: 0,
      clickleft: 0,
      rippleSize: '0px',
    }
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
            `${this.color}-glassy-7-gradient-bottom-right`,
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
          this.isHovered ? (this.isFocused ? 'focused' : 'hovered') : 'default'
        ],
      ]
    },
  },
  methods: {
    click(e) {
      this.isFocused = true
      this.ripple(e)
      this.$emit('click', e)
    },
    hover() {
      this.isHovered = true
    },
    blur() {
      this.isFocused = false
      this.isHovered = false
    },
    ripple(event) {
      const button = event.currentTarget
      const circle = document.createElement('span')
      const diameter = Math.max(button.clientWidth, button.clientHeight)
      const radius = diameter / 2
      circle.style.width = circle.style.height = `${diameter}px`
      circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`
      circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`
      circle.classList.add('a-ripple')
      const ripple = button.getElementsByClassName('ripple')[0]

      if (ripple) {
        ripple.remove()
      }
      button.appendChild(circle)
    },
  },
}
</script>
<style lang="scss">
.a-button {
  position: relative;
  overflow: hidden;
  z-index: 1;
  user-select: none;
  background-color: transparent;
  outline: none;
  transition: all 0.25s ease;

  height: auto;
  min-width: v-bind(width);
  aspect-ratio: v-bind(aspectRatio);

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
