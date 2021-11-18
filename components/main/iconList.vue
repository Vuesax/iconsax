<template>
  <div class="row justify-center">
    <div v-for="i in iterationCount" class="icon-list-box">
      <div class="pa-4">
        <main-icon-box :color="color" :icon-name="iconNames[i]" />
      </div>
    </div>
  </div>
</template>
<script setup>
import icons from '~/plugins/data/icons.js'
let iconNames = icons
console.log(iconNames[0])
let iterationCount = ref(100)
const props = defineProps({
  color: {
    type: String,
    default: 'primary',
  },
  iconStyle: {
    type: String,
    default: 'bold',
  },
})
</script>
<style lang="scss">
.icon-list-box {
  flex: 0 0 12.5%;
  width: 12.5%;
}
</style>
