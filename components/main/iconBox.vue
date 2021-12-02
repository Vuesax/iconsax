<template>
  <div
    @mouseover="hover = true"
    @mouseout="hover = false"
    class="icon-box-wrapper"
    :class="
      elevated
        ? `rounded-${rounded} gradient-border ${
            darkMode ? 'bloom-9-grey-darken-8' : ' bloom-9-grey-glassy-6'
          }`
        : `rounded-${rounded}`
    "
  >
    <div class="icon-box" :class="classesState">
      <div class="d-flex flex-column h-100 align-center justify-center">
        <div class="col-4 pa-3">
          <div
            :class="`a-icon-${iconStyle}-${iconName} primary-${
              darkMode ? 'lighten-9' : active ? 'darken-1' : 'pale-9'
            }`"
          ></div>
        </div>

        <span
          :class="`text--${color}${
            darkMode ? '-lighten-4' : ''
          } fs-1 text-truncate`"
        >
          <small>
            {{ iconName }}
          </small>
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
const darkMode = useState('darkMode')

const props = defineProps({
  color: {
    type: String,
    default: 'grey',
  },
  rounded: {
    type: String,
    default: '7',
  },
  elevated: {
    type: Boolean,
    default: false,
  },
  iconStyle: {
    type: String,
    default: 'outline',
  },
  iconName: {
    type: String,
    default: 'book',
  },
  active: {
    type: [Boolean, String],
    default: false,
  },
})
</script>
<script>
export default {
  data() {
    return {
      hover: false,
    }
  },
  computed: {
    classesState() {
      return this.active
        ? `${
            this.darkMode
              ? `grey-darken-9 border-grey-lighten-2`
              : `border-primary-glassy-5  primary-lighten-8`
          }`
        : `${
            this.darkMode
              ? `grey-darken-7 `
              : `border-grey-glassy-5 grey-lighten-10`
          }`
    },
  },
}
</script>
<style lang="scss">
.icon-box {
  transition: 0.3s;
  user-select: none;
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  border-radius: inherit;
  &::before {
    content: ' ';
    z-index: 10;
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &:hover::before {
    background-color: #aaaaaa33;
  }
}
.icon-box-wrapper {
  border-width: 1px !important;
  border-color: transparent;
  border-style: solid;
  background-color: transparent;
  background-clip: border-box; /* !importanté */
  box-sizing: border-box;
  background-origin: border-box;

  transition: 0.3s;
  *:hover {
    border-style: hidden !important;
  }

  &:hover {
    transform: translateY(-2px);

    background-image: radial-gradient(
        100% 100% at 100% 0%,
        #e9eff888,
        transparent
      ),
      radial-gradient(100% 100% at 0% 0%, #44444466, transparent),
      radial-gradient(100% 100% at 0% 100%, #e9eff888, transparent),
      radial-gradient(100% 100% at 100% 100%, #44444466, transparent) !important;
  }
}
</style>
