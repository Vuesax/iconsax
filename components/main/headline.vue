<template>
  <div class="row justify-center mt-16">
    <div
      :class="`d-none d-md-block col-md-2 col-lg-3 a-waves-mask ${color}-gradient-radial`"
    ></div>
    <div class="col-10 col-md-8 col-lg-6 my-lg-3">
      <p
        :class="
          'text-xs-h6 text-md-h5 text-center font-weight-thin text--' +
          color +
          '-' +
          (darkMode ? 'lighten' : 'darken') +
          '-4'
        "
      >
        All Of The
        <span class="font-weight-medium">Free</span>
        And
        <span class="font-weight-medium">Pro</span>
        Icons Available
      </p>
      <p class="text-xs-h3 text-md-h2 text-center font-weight-bold">
        <span
          :class="
          (darkMode ? ('text--' + color + '-lighten-3') : ('text--' + color + '-lighten-1'))
            
          "
        >
          6000+
        </span>

        <span
          :class="(darkMode ? ( ' text--' +
            color +'-lighten-1-gradient-left') : ('text--' + color + '-darken-1'))"
        >
          Awesome Icons
        </span>
      </p>
      <p
        :class="
          'text-normal text-center font-weight-light text--' + color + '-pale-8'
        "
      >
        <span :class="'text--' + color + '-pale-7'">Download</span>
        in your favorite format
        <i class="isax isax-repeat3"></i>
      </p>
      <div class="d-flex flex-column mt-16 mb-6">
        <div :class="`rounded-3 row  border-${color}`">
          <div class="col-12 col-md-3">
            <a-select-button
              :color="color"
              width="100%"
              class="h-100"
              mode="flat"
              v-model="currentCategory"
              :items="iconCategories"
              rounded="0"
            >
              <template #default="{selected}">
                <a-icon
                  size="24px"
                  :icon-name="selected.icon"
                  class="mr-2"
                  :color="
                    color + '-' + (darkMode ? 'lighten' : 'darken') + '-2'
                  "
                ></a-icon>
                {{ selected.text || selected.value }}
              </template>
              <template #item="{item}">
                <a-icon
                  size="24px"
                  :icon-name="item.icon"
                  class="mr-2"
                  :color="
                    color + '-' + (darkMode ? 'lighten' : 'darken') + '-2'
                  "
                ></a-icon>
                <span class="flex-grow-1">{{ item.text || item.value }}</span>
              </template>
            </a-select-button>
          </div>
          <a-input
            class="col-12 col-md-6"
            :color="color"
            v-model="currentQuery"
            placeholder="Search for icons"
          ></a-input>
          <div class="col-12 col-md-3">
            <a-select-button
              :color="color"
              width="100%"
              class="h-100"
              mode="flat"
              v-model="currentColor"
              :items="colors"
              rounded="0"
            >
              <template #default="{selected}">
                <a-icon
                  size="24px"
                  :icon-name="selected.icon"
                  class="mr-2"
                  :color="selected.value"
                ></a-icon>
                {{ selected.value }}
              </template>
              <template #item="{item}">
                <div>
                  <a-icon
                    size="24px"
                    :icon-name="item.icon"
                    class="mr-2 rounded-circle bloom-2-grey-glassy-7 pa-1"
                    :color="item.value"
                  ></a-icon>
                </div>
                <span
                  :class="`text--${item.value}-lighten-4`"
                  class="flex-grow-1"
                >
                  {{ item.value }}
                </span>
              </template>
            </a-select-button>
          </div>
        </div>
      </div>
      <div class="d-flex justify-center flex-wrap">
        <a-button
          v-for="mode in iconModes"
          class="ma-2"
          @click="changeIconMode(mode)"
          rounded="3"
          :color="color"
          :active="currentIconMode === mode"
        >
          <a-icon
            size="24px"
            :color="darkMode ? color + '-lighten-2' : color + '-lighten-5'"
            class="mr-2"
            icon-name="story"
            :icon-style="mode"
          ></a-icon>
          {{ mode }}
        </a-button>
      </div>
    </div>
    <div
      :class="`d-none d-md-block col-md-2 col-lg-3 a-waves-mask ${color}-gradient-radial`"
    ></div>
  </div>
</template>
<script setup>
const darkMode = useState('darkMode')

const iconCategories = [
  { text: 'all', value: '', icon: 'archive' },
  { value: 'square', icon: 'more-square' },
  { value: 'circle', icon: 'more-circle' },
  { value: 'add', icon: 'add' },
  { value: 'arrow', icon: 'arrow-3' },
  { value: 'search', icon: 'search-normal' },
  { value: 'remove', icon: 'cloud-remove' },
]
const iconModes = ['bold', 'broken', 'bulk', 'linear', 'outline', 'twotone']
const colors = [
  { value: 'purple', icon: 'paintbucket' },
  { value: 'blue', icon: 'paintbucket' },
  { value: 'pink', icon: 'paintbucket' },
  { value: 'orange', icon: 'paintbucket' },
  { value: 'gold', icon: 'paintbucket' },
  { value: 'green', icon: 'paintbucket' },
  { value: 'cyan', icon: 'paintbucket' },
  { value: 'yellow', icon: 'paintbucket' },
  { value: 'red', icon: 'paintbucket' },
  { value: 'grey', icon: 'paintbucket' },
]
const props = defineProps({
  color: {
    type: String,
    default: 'purple',
  },
})
</script>
<script>
export default {
  data() {
    return {
      currentIconMode: 'linear',
      currentCategory: '',
      currentColor: 'purple',
      currentQuery: '',
    }
  },
  watch: {
    currentCategory: {
      handler: function () {
        this.$emit('update:modelValue', {
          currentCategory: this.currentCategory,
          currentIconMode: this.currentIconMode,
          currentColor: this.currentColor,
          currentQuery: this.currentQuery,
        })
      },
      deep: true,
    },
    currentColor: {
      handler: function () {
        this.$emit('update:modelValue', {
          currentCategory: this.currentCategory,
          currentIconMode: this.currentIconMode,
          currentColor: this.currentColor,
          currentQuery: this.currentQuery,
        })
      },
      deep: true,
    },
    currentQuery: {
      handler: function () {
        this.$emit('update:modelValue', {
          currentCategory: this.currentCategory,
          currentIconMode: this.currentIconMode,
          currentColor: this.currentColor,
          currentQuery: this.currentQuery,
        })
      },
      deep: true,
    },
  },
  methods: {
    changeIconMode(mode) {
      this.currentIconMode = mode
      this.$emit('update:modelValue', {
        currentCategory: this.currentCategory,
        currentIconMode: this.currentIconMode,
        currentColor: this.currentColor,
        currentQuery: this.currentQuery,
      })
    },
  },
}
</script>
