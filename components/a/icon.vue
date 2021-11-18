<template>
  <div class="icon-box">
    <div :class="`a-icon-${iconStyle}-${iconName} ${color}`"></div>
  </div>
</template>
<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'primary',
  },
  iconStyle: {
    type: String,
    default: 'bold',
  },
  iconName: {
    type: String,
    default: 'book',
  },
})
</script>
<style lang="scss">
.icon-box {
  width: 100%;
  height: auto;
  aspect-ratio: 1;
}
</style>
