<template>
  <div class="row justify-center">
    <div
      v-for="i in iterationCount"
      class="col-4 col-sm-3 col-md-2 icon-list-box"
    >
      <div class="pa-4">
        <main-icon-box
          @click="changeSelection(filteredIcons[i - 1])"
          :color="color"
          :active="selectedIcons.includes(filteredIcons[i - 1])"
          :icon-style="iconStyle"
          :icon-name="filteredIcons[i - 1]"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import icons from '~/plugins/data/icons.js'
// Returns sorted occurence of each key
/* let iconArray = Object.values(
  icons
    .reduce((acc, cur) => {
      acc.push(...cur.split('-'))
      return acc
    }, [])
    .reduce((obj, e) => {
      obj[e] = {
        name: e,
        count: (obj[e]?.count || 0) + 1,
      }
      return obj
    }, {}),
).sort((a, b) => {
  if (a.count < b.count) {
    return 1
  } else if (a.count > b.count) {
    return -1
  }
  return 0
})
console.log(iconArray) */
// ----------------------------------
const props = defineProps({
  color: {
    type: String,
    default: 'purple',
  },
  iconStyle: {
    type: String,
    default: 'bold',
  },
  category: {
    type: String,
    default: '',
  },
  query: {
    type: String,
    default: '',
  },
})
</script>
<script>
export default {
  data() {
    return {
      selectedIcons: [],
    }
  },
  computed: {
    filteredIcons() {
      return icons
        .filter((icon) => icon.includes(this.category))
        .filter((icon) => icon.includes(this.query))
    },
    iterationCount() {
      return this.filteredIcons.length > 80 ? 80 : this.filteredIcons.length
    },
  },
  methods: {
    changeSelection(iconName) {
      if (this.selectedIcons.includes(iconName)) {
        let index = this.selectedIcons.findIndex((icon) => icon === iconName)
        this.selectedIcons.splice(index, 1)
      } else {
        this.selectedIcons.push(iconName)
      }
    },
  },
}
</script>
<style lang="scss">
@media (min-width: 1280px - 16px) {
  .app {
    .icon-list-box {
      flex: 0 0 12.5% !important;
      width: 12.5% !important;
    }
  }
}
</style>
