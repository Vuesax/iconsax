<template>
  <main-headline :color="color" />

  <div class="row justify-center">
    <div class="col-8">
      <main-icon-list :color="color"></main-icon-list>
    </div>
  </div>
</template>
<script setup>
const colors = ['primary']
const color = ref('grey')
</script>
<script>
export default {
  methods: {
    changeColor() {
      this.color = 'green'
    },
  },
}
</script>
<style lang="scss"></style>
