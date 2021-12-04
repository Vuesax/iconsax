<template>
  <div class="row justify-center mt-16">
    <div
      :class="`d-none d-md-block col-md-2 col-lg-3  a-waves-mask grey-gradient-radial`"
    ></div>
    <div class="col-10 col-md-8 col-lg-6 my-lg-3">
      <p
        :class="
          ' mt-12 fs-3  text-center fw-1 text--' +
          (darkMode ? 'grey-lighten' : 'primary-darken') +
          '-4'
        "
      >
        All Of The
        <span class="fw-4">Free</span>
        And
        <span class="fw-4">Pro</span>
        Icons Available
      </p>
      <p class="fs-8 text-center fw-4">
        <span
          :class="(darkMode ? ( ' text--grey-lighten-10-gradient-left') : ('text--' + color + '-darken-8'))"
        >
          All
          <span :class="darkMode ? '' : `text--${color}`">6000+</span>
          Awesome Icons
        </span>
      </p>
      <p
        :class="`mt-8  text-center fw-2 text--${
          darkMode ? 'grey-lighten-3' : 'primary-pale-7'
        }`"
      >
        <span :class="`fw-4 `">
          Download
        </span>
        in your favorite format
      </p>
      <div class="d-flex flex-wrap justify-center">
        <a class="ma-2" v-for="format in formatDownloads" :href="format.href">
          <a-button
            mode="flat"
            :color="darkMode ? 'grey' : 'blue'"
            aspect-ratio="1"
            rounded="2"
          >
            <div class="ar-1 ma-1 downloads-image" :style="format.image"></div>
          </a-button>
        </a>
      </div>

      <div class="d-flex flex-column mt-16 mb-6">
        <div class="row align-stretch">
          <div class="col-12 col-md-3">
            <a-select-button
              :color="darkMode ? 'grey' : 'blue'"
              width="100%"
              class="h-100"
              v-model="currentCategory"
              :items="iconCategories"
              rounded="left-7 rounded-right-7 rounded-right-md-0"
            >
              <template #default="{selected}">
                <div class="d-flex align-center">
                  <a-icon
                    size="24px"
                    :icon-name="selected.icon"
                    class="mr-8"
                    :color="color + '-lighten-9'"
                  ></a-icon>
                  {{ selected.text || selected.value }}
                </div>
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
          <div class="col-12 col-md-9">
            <div
              :class="darkMode ? '' : 'gradient-border-middle'"
              class="h-md-100 d-flex"
            >
              <div
                :class="darkMode ? 'grey-darken-6' : 'grey-lighten-10'"
                class="my-8 my-md-0 px-2 bloom-5-grey-glassy-9 h-100 rounded-right-7 rounded-left-7 rounded-left-md-0 flex-grow-1 d-flex align-center"
              >
                <a-input
                  class="h-100 flex-grow-1"
                  v-model="currentQuery"
                  placeholder="Search for icons"
                >
                  <template #prepend>
                    <a-icon
                      size="32px"
                      class="ma-2"
                      :color="darkMode ? 'grey-lighten-5' : 'primary-darken-9'"
                      icon-name="search-normal-1"
                      icon-style="outline"
                    />
                  </template>
                </a-input>
                <div class="border-left-grey ma-2">
                  <a-button
                    rounded="6"
                    :aspect-ratio="1"
                    padding="14px"
                    mode="flat"
                    class="mx-2"
                  >
                    <a-icon
                      :color="darkMode ? 'grey-lighten-10' : 'primary-darken-8'"
                      icon-name="category"
                      icon-style="outline"
                      size="24px"
                    ></a-icon>
                  </a-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-center flex-wrap">
        <a-button
          v-for="mode in iconModes"
          class="ma-2"
          @click="changeIconMode(mode)"
          rounded="6"
          mode="radio"
          color="primary"
          :active="currentIconMode === mode"
        >
          <div
            class="rounded-5 pa-2"
            :class="
              currentIconMode === mode
                ? darkMode
                  ? 'primary-darken-7'
                  : 'primary'
                : darkMode
                ? 'grey-darken-8'
                : 'primary-glassy-9'
            "
          >
            <a-icon
              size="24px"
              :color="
                currentIconMode === mode
                  ? darkMode
                    ? 'grey-lighten-10'
                    : 'primary-lighten-9'
                  : darkMode
                  ? 'grey-lighten-2'
                  : 'primary-darken-5'
              "
              icon-name="story"
              :icon-style="mode"
            ></a-icon>
          </div>
          <span class="mx-2">{{ mode }}</span>
        </a-button>
      </div>
    </div>
    <div
      :class="`d-none d-md-block col-md-2 col-lg-3 a-waves-mask grey-gradient-radial`"
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
const iconModes = ['linear', 'bold', 'broken', 'bulk', 'outline', 'twotone']
const formatDownloads = [
  {
    href: 'https://iconsax.io/Iconsax/AI.zip',
    image: 'background-image: url(downloads/ai-logo.svg); width: 20px;',
  },

  {
    href: '',
    image: 'background-image: url(downloads/ps-logo.svg); width: 20px;',
  },

  {
    href: 'https://iconsax.io/Iconsax/Xd.zip',
    image: 'background-image: url(downloads/xd-logo.svg); width: 20px;',
  },

  {
    href: 'https://iconsax.io/Iconsax/css.zip',
    image: 'background-image: url(downloads/iconsax-css.svg); width: 20px;',
  },

  {
    href: 'https://pub.dev/packages/iconsax',
    image:
      ' background-image: url(downloads/iconsax-flutter.svg); width: 20px;',
  },

  {
    href: 'https://iconsax.io/Iconsax/Jar.zip',
    image: 'background-image: url(downloads/iconsax-jar.svg); width: 20px;',
  },

  {
    href: 'https://iconsax.io/Iconsax/Svg.zip',
    image: 'background-image: url(downloads/iconsax-svg.svg); width: 20px;',
  },
]

/* const colors = [
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
] */
const props = defineProps({
  color: {
    type: String,
    default: 'primary',
  },
})
</script>
<script>
export default {
  data() {
    return {
      currentIconMode: 'linear',
      currentCategory: '',
      currentQuery: '',
    }
  },
  watch: {
    currentCategory: {
      handler: function () {
        this.$emit('update:modelValue', {
          currentCategory: this.currentCategory,
          currentIconMode: this.currentIconMode,
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
        currentQuery: this.currentQuery,
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.downloads-image {
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  width: 30px;
}
</style>
