<template>
  <main-headline @change-icon-style="changeIconStyle" :color="color" />

  <div class="row justify-center">
    <div class="col-8">
      <main-icon-list :icon-style="iconStyle" color="grey"></main-icon-list>
    </div>
  </div>
</template>
<script setup>
const colors = ['primary']
const color = ref('primary')
const iconStyle = ref('twotone')
</script>
<script>
export default {
  methods: {
    changeColor() {
      this.color = 'green'
    },
    changeIconStyle(style) {
      this.iconStyle = style
    },
  },
}
</script>
<style lang="scss"></style>
