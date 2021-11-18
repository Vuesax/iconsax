<template>
  <div
    :class="`icon-box  rounded-3 bloom-4-${color}-glassy-8 border-${color}-glassy-6 ${color}-glassy-9-gradient-bottom-right`"
  >
    <div class="d-flex flex-column h-100 align-center justify-center">
      <div class="col-4 pa-3">
        <div
          :class="`a-icon-${iconStyle}-${iconName} ${color}-lighten-1`"
        ></div>
      </div>

      <span :class="`text--${color}-lighten-4 text-subtitle-2 text-truncate`">
        <small>
          {{ iconName }}
        </small>
      </span>
    </div>
  </div>
</template>
<script setup>
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
})
</script>
<style lang="scss">
.icon-box {
  max-width: 100%;
  width: 100%;
  height: auto;
  aspect-ratio: 1;
}
</style>
