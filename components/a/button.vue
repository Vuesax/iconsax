<template>
  <button
    class="a-button text-decoration-none"
    :class="classesState.button"
    @click.stop="click($event)"
    @mouseleave="blur()"
    @mouseover="hover()"
  >
    <div :class="classesState.content" class="a-button-content">
      <slot />
      <div
        v-if="nav && active"
        class="nav-line"
        :class="`${color}-lighten-1`"
      ></div>
    </div>
  </button>
</template>
<script setup>
const darkMode = useState('darkMode')
const props = defineProps({
  color: {
    type: String,
    default: 'grey',
  },
  mode: {
    type: String,
    default: 'default',
  },
  width: {
    type: String,
    default: '0px',
  },
  nav: {
    type: Boolean,
    default: false,
  },
  aspectRatio: {
    type: String,
    default: 'unset',
  },
  rounded: {
    type: String,
    default: '2',
  },
  padding: {
    type: String,
    default: '8px',
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
      state: 'default',
    }
  },

  computed: {
    classes() {
      return {
        select: {
          default: {
            button: `gradient-border rounded-${this.rounded}`,
            content: `fw-2  fs-2 text--${this.color}-lighten-10 ${this.color}-${
              this.darkMode ? 'darken-4' : 'darken-6'
            }`,
          },
          hovered: {
            button: `gradient-border bloom-9-${this.color}-glassy-9 rounded-${this.rounded}`,

            content: `fw-2 fs-2 text--${this.color}-lighten-10  ${this.color}-${
              this.darkMode ? 'darken-6' : 'lighten-4'
            }`,
          },
          focused: {
            button: `gradient-border bloom-9-${this.color}-glassy-9 rounded-${this.rounded}`,
            content: `fw-2  fs-2 text--${this.color}-${
              this.darkMode ? 'lighten-9' : 'darken-5'
            }`,
          },
        },
        radio: {
          default: {
            button: `rounded-${this.rounded}`,
            content: `${
              this.darkMode ? `grey-darken-6` : ` ${this.color}-lighten-9`
            }    text--${this.color}-${this.darkMode ? 'lighten-9' : 'pale-9'}`,
          },
          hovered: {
            button: ` bloom-9-${this.color}-glassy-9 rounded-${this.rounded}`,

            content: ` text--${this.color}-${
              this.darkMode ? 'lighten-9' : 'pale-6'
            }  ${this.color}-${this.darkMode ? 'darken-6' : 'lighten-8'}`,
          },
          focused: {
            button: `border-${this.color} bloom-9-${this.color}-glassy-9 rounded-${this.rounded}`,
            content: `    text--${this.color}-${
              this.darkMode ? 'lighten-9' : 'darken-5 '
            } ${
              this.darkMode
                ? `${this.color}-darken-1`
                : `${this.color}-lighten-7`
            }`,
          },
        },
        nav: {
          default: {
            button: `rounded-${this.rounded}`,
            content: `fw-2  fs-2 text--grey`,
          },
          hovered: {
            button: `gradient-border bloom-9-${this.color}-glassy-9 rounded-${this.rounded}`,

            content: `fw-2  fs-2
              text--${this.color}-${this.darkMode ? 'lighten-8' : 'darken-3'}
              ${this.color}-${this.darkMode ? 'darken-9' : 'lighten-10'}`,
          },
          focused: {
            button: `rounded-${this.rounded}`,
            content: `fw-medium  fs-2  text--${this.color}-${
              this.darkMode ? 'lighten-9' : 'darken-9'
            }`,
          },
        },
        flat: {
          default: {
            button: `rounded-${this.rounded}`,
            content: `fw-1 text--${this.color}-${
              this.darkMode ? 'lighten-8' : 'darken-2'
            } ${
              this.darkMode
                ? `${this.color}-glassy-10`
                : `${this.color}-glassy-9`
            }`,
          },
          hovered: {
            button: `gradient-border bloom-9-${this.color}-glassy-9 rounded-${this.rounded}`,

            content: `text--${this.color}-${
              this.darkMode ? 'lighten-8' : 'darken-3'
            } ${this.color}-${this.darkMode ? 'darken-4' : 'lighten-10'}`,
          },
          focused: {
            button: `rounded-${this.rounded}`,
            content: `text--${this.color}-${
              this.darkMode ? 'lighten-9' : 'darken-5'
            }`,
          },
        },

        default: {
          default: {
            button: `gradient-border rounded-${this.rounded}`,
            content: `text--${this.color}-lighten-8 ${this.color}-${
              this.darkMode ? 'darken-7' : 'darken-5'
            }`,
          },
          hovered: {
            button: ` bloom-9-${this.color}-glassy-9 rounded-${this.rounded}`,

            content: `gradient-border text--${this.color}-${
              this.darkMode ? 'lighten-4' : 'lighten-5'
            } ${this.color}-${
              this.darkMode ? 'glassy-8' : 'glassy-1'
            }-gradient-bottom-right`,
          },
          focused: {
            button: `gradient-border rounded-${this.rounded}`,
            content: `text--${this.color}-${
              this.darkMode ? 'lighten-4' : 'lighten-5'
            } ${this.color}-${
              this.darkMode ? 'glassy-5' : 'glassy-1'
            }-gradient-bottom-right`,
          },
        },
        filled: {
          default: {
            button: `gradient-border bloom-9-${this.color}-glassy-9 rounded-${this.rounded}`,

            content: `text--${this.color}-${
              this.darkMode ? 'lighten-8' : 'lighten-9'
            } ${this.color}`,
          },
          hovered: {
            button: `gradient-border bloom-9-${this.color}-glassy-6 rounded-${this.rounded}`,

            content: `text--${this.color}-${
              this.darkMode ? 'lighten-8' : 'lighten-5'
            } ${this.color}-${this.darkMode ? 'lighten' : 'darken'}-1`,
          },
          focused: {
            button: `rounded-${this.rounded}`,
            content: `text--${this.color}-${
              this.darkMode ? 'lighten-10' : 'lighten-5'
            } ${this.color}-${this.darkMode ? 'darken' : 'lighten'}-2`,
          },
        },
      }
    },

    classesState() {
      return this.classes[this.mode][this.active ? 'focused' : this.state]
    },
  },
  methods: {
    click(e) {
      if (this.to) {
        this.$router.push(this.to)
      }
      this.state = 'focused'
      this.ripple(e)
    },
    hover() {
      this.state = 'hovered'
    },
    blur() {
      this.state = 'default'
    },
    ripple(event) {
      console.log(event)
      const button = event.currentTarget
      const circle = document.createElement('span')
      const diameter = Math.max(button.clientWidth, button.clientHeight)
      const radius = diameter / 2
      circle.style.width = circle.style.height = `${diameter}px`
      circle.style.left = `${event.layerX - radius}px`
      circle.style.top = `${event.layerY - radius}px`
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
<style lang="scss" scoped>
.a-button {
  padding: 0px !important;
  position: relative;
  user-select: none;
  outline: none;
  transition: all 0.25s ease;
  background-color: transparent;
  overflow: hidden;
  border-width: 1px; /* !importanté */
  border-style: solid; /* !importanté */
  border-color: transparent; /* !importanté */
  height: auto;
  margin: -1px;
  min-width: v-bind(width);
  aspect-ratio: v-bind(aspectRatio);

  .a-button-content {
    padding: v-bind(padding);
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: v-bind(aspectRatio);
  }

  font-size: 0.8rem;
  line-height: 2.25rem;
  letter-spacing: 0.09em;
  font-family: 'Poppins';
  font-weight: 400;
  text-transform: capitalize;
  transform: translateY(1px);

  &:hover {
    transform: translateY(-2px);
  }
}

.nav-line {
  width: 20%;
  position: absolute;
  bottom: 4px;
  left: 8px;
  height: 3px;
  border-radius: 9999px;
  transform-origin: 0 50% 0;
  animation: expand-x 0.2s ease-out;
}
</style>
