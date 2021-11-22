<template>
  <div class="rounded-3 mx-2">
    <div :class="classesState">
      <div class="row align-center">
        <div :class="`col-12 col-md-6 ${reverse ? 'order-2' : 'order-1'} `">
          <p
            :class="`pt-12 px-4 text-h3 font-weight-medium d-flex flex-column align-center justify-center`"
          >
            <slot name="title"></slot>
          </p>
          <p
            :class="`pb-12 px-4 pt-6 text-h5  font-weight-light  d-flex flex-column align-center justify-center`"
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
      return `rounded-4 text--${
        this.darkMode
          ? `${this.color}-lighten-5-gradient-left`
          : `${this.color}-darken-4`
      } 
          `
    },
  },
}
</script>
<style lang="scss">
.order-1 {
  order: 2 !important;
}
.order-2 {
  order: 2 !important;
}
</style>
