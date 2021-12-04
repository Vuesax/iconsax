<template>
  <div class="rounded-8">
    <div :class="classesState">
      <div class="row align-stretch">
        <div
          :class="`col-12 d-flex flex-column align-stretch col-md-6 ${
            reverse ? 'order-2' : 'order-1'
          } `"
        >
          <p :class="`pt-12  px-4 fs-7 fw-3 d-flex   align-center`">
            <slot name="title"></slot>
          </p>
          <p
            :class="`pb-12 px-4 pt-4 fs-4  fw-2  d-flex flex-column flex-grow-1 `"
          >
            <slot name="subtitle"></slot>
          </p>
        </div>
        <div
          :class="`col-12 col-md-6 d-flex justify-center ${
            reverse ? 'order-1' : 'order-2'
          } `"
        >
          <slot name="image">
            <div
              :class="` ${imageClass} ar-1 a-image-${
                darkMode ? 'dark' : 'light'
              }-${image}`"
            ></div>
          </slot>
        </div>
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
  image: {
    type: String,
    default: '',
  },
  imageClass: {
    type: String,
    default: 'my-6 w-75 ',
  },
  reverse: {
    type: Boolean,
    default: false,
  },
})
</script>
<script>
export default {
  computed: {
    classesState() {
      return `rounded-8 text--${
        this.darkMode
          ? `grey-lighten-8-gradient-left`
          : `${this.color}-darken-7`
      } 
          `
    },
  },
}
</script>
<style lang="scss">
.order-1 {
  order: 1 !important;
}
.order-2 {
  order: 2 !important;
}
</style>
