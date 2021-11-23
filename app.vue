<template>
  <div class="app">
    <a-header></a-header>
    <div class="d-md-none mobile-buttons z-100 mb-3">
      <a-button
        rounded="circle"
        mode="flat"
        class="ml-3"
        color="grey"
        aspectRatio="1"
        @click="setTheme()"
      >
        <a-icon
          :icon-name="darkMode ? 'sun-1' : 'moon'"
          icon-style="linear"
          :color="darkMode ? 'grey-lighten-4' : 'grey-darken-4'"
        ></a-icon>
      </a-button>
      <a href="https://iconsax.io/" target="_blank">
        <a-button class="mr-3" rounded="3" mode="filled" color="blue">
          <a-icon
            size="24px"
            color="grey-lighten-5"
            class="mr-2"
            icon-name="box"
            icon-style="bold"
          ></a-icon>
          <span class="text-decoration-none">Get icons v1.0</span>
        </a-button>
      </a>
    </div>

    <div
      class="app-wrapper pt-16"
      :class="darkMode ? 'background-pale-2' : 'grey-lighten-5'"
    >
      <NuxtPage />
      <a-footer></a-footer>
    </div>
  </div>
</template>
<script setup>
let isDark = false
const theme = localStorage.getItem('theme')
if (theme) {
  if (theme === 'dark') {
    isDark = true
  } else {
    isDark = false
  }
} else if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  isDark = true
  localStorage.setItem('theme', 'dark')
}

const darkMode = useState('darkMode', () => isDark)
</script>
<script>
export default {
  methods: {
    setTheme() {
      this.darkMode = !this.darkMode
      localStorage.setItem('theme', this.darkMode ? 'dark' : 'light')
    },
  },
}
</script>

<style lang="scss">
.mobile-buttons {
  position: fixed;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  right: 0;
  width: 100%;
}
</style>
