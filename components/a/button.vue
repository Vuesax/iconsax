<template>
  <button
    class="a-button text-button px-3"
    :class="classesState"
    @click.stop="click($event)"
    @mouseleave="blur()"
    @mouseover="hover()"
  >
    <slot />
  </button>
</template>
<script setup>
const darkMode = useState('darkMode')
const props = defineProps({
  color: {
    type: String,
    default: 'purple',
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
    default: '2',
  },
  active: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
    default: '',
  },
})
</script>
<script>
export default {
  data() {
    return {
      isFocused: false,
      isHovered: false,
    }
  },

  computed: {
    classes() {
      return {
        flat: {
          default: [
            `text--${this.color}-${this.darkMode ? 'lighten-4' : 'darken-2'}`,
            `border-none`,
          ],
          hovered: [
            `text--${this.color}-${this.darkMode ? 'lighten-4' : 'darken-3'}`,
            `border-none`,
            `bloom-5-${this.color}-glassy-7`,
          ],
          focused: [
            `text--${this.color}-${this.darkMode ? 'lighten-4' : 'darken-3'}`,
            `border-${this.color}-lighten-2`,
            `${this.color}-${
              this.darkMode ? 'glassy-9' : 'glassy-6'
            }-gradient-bottom-right`,
            `bloom-2-${this.color}-glassy-7`,
          ],
        },
        default: {
          default: [
            `text--${this.color}-${this.darkMode ? 'lighten-4' : 'lighten-5'}`,

            `border-${this.color}-lighten-2`,

            `${this.color}-${
              this.darkMode ? 'glassy-9' : 'glassy-6'
            }-gradient-bottom-right`,
            `bloom-3-${this.color}-glassy-8`,
          ],
          hovered: [
            `text--${this.color}-${this.darkMode ? 'lighten-4' : 'lighten-5'}`,

            `border-${this.color} `,
            `${this.color}-${
              this.darkMode ? 'glassy-8' : 'glassy-1'
            }-gradient-bottom-right`,
            `bloom-5-${this.color}-glassy-8`,
          ],
          focused: [
            `text--${this.color}-${this.darkMode ? 'lighten-4' : 'lighten-5'}`,

            `border-${this.color}${this.darkMode ? '' : '-glassy-5'}`,
            `${this.color}-${
              this.darkMode ? 'glassy-5' : 'glassy-1'
            }-gradient-bottom-right`,
            `bloom-3-${this.color}-glassy-8`,
          ],
        },
        filled: {
          default: [
            `text--${this.color}-${this.darkMode ? 'lighten-4' : 'lighten-5'}`,

            `border-${this.color}-lighten-2`,
            `${this.color}-${
              this.darkMode ? 'darken' : 'lighten'
            }-2-gradient-bottom-right`,
            `bloom-1-${this.color}-glassy-9`,
          ],
          hovered: [
            `text--${this.color}-${this.darkMode ? 'lighten-4' : 'lighten-5'}`,

            `border-${this.color}-lighten-3 `,
            `${this.color}-${
              this.darkMode ? 'darken' : 'lighten'
            }-2-gradient-bottom-right`,
            `bloom-5-${this.color}-glassy-8`,
          ],
          focused: [
            `text--${this.color}-${this.darkMode ? 'lighten-4' : 'lighten-5'}`,

            `border-${this.color}`,
            `${this.color}-glassy-5-gradient-bottom-right`,
            `bloom-3-${this.color}-glassy-8`,
          ],
        },
      }
    },

    classesState() {
      return [
        ...[`rounded-${this.rounded}`],
        ...this.classes[this.mode][
          this.isHovered || this.active
            ? this.isFocused || this.active
              ? 'focused'
              : 'hovered'
            : 'default'
        ],
      ]
    },
  },
  methods: {
    click(e) {
      if (this.to) {
        this.$router.push(this.to)
      }
      this.isFocused = true
      this.ripple(e)
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
      const ripple = button.getElementsByClassName('a-ripple')[0]

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
  &:hover {
    transform: translateY(-2px);
  }
}
</style>
