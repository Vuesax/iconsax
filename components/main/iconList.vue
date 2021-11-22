<template>
  <div @mouseleave="currentlyHovered = 0" class="row justify-center">
    <div
      v-for="i in iterationCount"
      class="col-4 col-sm-3 col-md-2 icon-list-box"
    >
      <div class="pa-4 p-relative">
        <main-icon-box
          @click="changeSelection(filteredIcons[i - 1])"
          :color="color"
          :active="selectedIcons.includes(filteredIcons[i - 1])"
          :icon-style="iconStyle"
          :icon-name="filteredIcons[i - 1]"
          @mouseover="currentlyHovered = i"
        />
        <transition name="expand">
          <div v-show="currentlyHovered === i" class="hover-box rounded-2">
            <a-button color="cyan" @click="copy(filteredIcons[i - 1])">
              <a-icon
                size="14px"
                color="grey-lighten-5"
                class="mr-1"
                :icon-name="isCopyed ? 'copy-success' : 'copy'"
                icon-style="bold"
              ></a-icon>
              <span class="text-caption">
                {{ isCopyed ? 'Copyed' : 'Copy' }}
              </span>
            </a-button>
          </div>
        </transition>
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
      currentlyHovered: 0,
      isCopyed: false,
    }
  },
  computed: {
    filteredIcons() {
      return icons
        .filter((icon) => icon.includes(this.category))
        .filter((icon) => icon.includes(this.query))
    },
    iterationCount() {
      return this.filteredIcons.length > 40 ? 40 : this.filteredIcons.length
    },
  },
  watch: {
    currentlyHovered() {
      this.isCopyed = false
    },
  },
  methods: {
    copy(text) {
      navigator.clipboard.writeText(text).then(() => {
        this.isCopyed = true
      })
    },
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
.hover-box {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 17px;
  width: calc(100% - 31px);
}
.expand-enter-active {
  animation: expand 0.1s ease-out;
}
.expand-leave-active {
  animation: expand 0.1s ease-out reverse;
}
.expand-enter-to {
  transform: scale(1);
  opacity: 1;
}
.expand-enter-from,
.expand-leave-to {
  transform: scale(0);
  opacity: 0;
}

@keyframes expand {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
