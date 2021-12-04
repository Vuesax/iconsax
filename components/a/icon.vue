<template>
  <div class="a-icon-box">
    <div :class="`a-icon-${iconStyle}-${iconName} ${color}`"></div>
  </div>
</template>
<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'grey',
  },
  size: {
    type: String,
    default: '100%',
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
<style lang="scss" scoped>
.a-icon-box {
  width: v-bind(size);
  height: auto;
  aspect-ratio: 1;
}
</style>
