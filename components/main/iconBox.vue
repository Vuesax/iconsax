<template>
  <div class="icon-box rounded-3" :class="classesState">
    <div class="d-flex flex-column h-100 align-center justify-center">
      <div class="col-4 pa-3">
        <div
          :class="`a-icon-${iconStyle}-${iconName} ${color}-${
            darkMode ? 'lighten-2' : active ? 'glassy-5' : 'lighten-3'
          }`"
        ></div>
      </div>

      <span
        :class="`text--${color}${
          darkMode ? '-lighten-4' : ''
        } text-subtitle-2 text-truncate`"
      >
        <small>
          {{ iconName }}
        </small>
      </span>
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
  iconStyle: {
    type: String,
    default: 'outline',
  },
  iconName: {
    type: String,
    default: 'book',
  },
  active: {
    type: Boolean,
    default: false,
  },
})
</script>
<script>
export default {
  computed: {
    classesState() {
      return this.active
        ? ` bloom-5-${this.color}-glassy-7 border-${this.color}-lighten-2 ${
            this.darkMode
              ? `${this.color}-glassy-8-gradient-bottom-right`
              : `${this.color}-glassy-5-gradient-bottom-right`
          }`
        : ` bloom-4-${this.color}-glassy-8 border-${this.color}-glassy-6 ${
            this.darkMode
              ? 'grey-glassy-8-gradient-bottom-right'
              : `${this.color}-glassy-8-gradient-bottom-right`
          }`
    },
  },
}
</script>
<style lang="scss">
.icon-box {
  user-select: none;
  max-width: 100%;
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  &:hover {
    transform: translateY(-4px);
  }
}
</style>
