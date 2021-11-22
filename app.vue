<template>
  <div class="app">
    <header
      class="z-100 w-100 py-2 p-fixed d-flex align-center justify-space-between"
      :class="
        darkMode
          ? 'background-pale-2-gradient-top-right'
          : 'grey-lighten-5-gradient-top-right'
      "
    >
      <div class="d-flex align-center">
        <a-icon
          :class="`rounded-circle pa-1`"
          icon-name="iconsax-logo"
          size="32px"
          :color="darkMode ? 'grey-lighten-5' : 'grey-darken-5'"
        ></a-icon>
        <span
          class="text-h5 font-weight-light"
          :class="darkMode ? 'text--grey-lighten-5' : 'text--grey-darken-5'"
        >
          Icon
          <span class="font-weight-bold ml-n2">Sax</span>
        </span>
      </div>
      <div class="d-flex">
        <a-button
          to="/"
          :color="darkMode ? 'blue' : 'grey'"
          :active="$route.name === 'index'"
          rounded="pill"
          mode="flat"
          class="mx-2"
        >
          home
        </a-button>
        <a-button
          to="/iconsax-license"
          :color="darkMode ? 'blue' : 'grey'"
          :active="$route.name === 'iconsax-license'"
          rounded="pill"
          mode="flat"
          class="mx-2"
        >
          license
        </a-button>
        <a-button
          to="/contact-us"
          :color="darkMode ? 'blue' : 'grey'"
          :active="$route.name === 'contact-us'"
          rounded="pill"
          mode="flat"
          class="mx-2"
        >
          contact us
        </a-button>
      </div>
      <div class="d-flex">
        <a-button
          rounded="circle"
          mode="flat"
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
        <a-button class="mx-2" rounded="3" mode="filled" color="blue">
          <a-icon
            size="24px"
            color="grey-lighten-5"
            class="mr-2"
            icon-name="box"
            icon-style="bold"
          ></a-icon>
          Get Icons v1.0
        </a-button>
      </div>
    </header>
    <div
      class="app-wrapper pt-16"
      :class="darkMode ? 'background-pale-2' : 'grey-lighten-5'"
    >
      <NuxtPage />
      <footer
        class="py-2 mt-16 row"
        :class="
          darkMode
            ? 'background-pale-2-gradient-top-right text--grey-lighten-5'
            : 'grey-lighten-5-gradient-top-right text--grey-darken-5'
        "
      >
        <div class="col-12 col-sm-4 d-flex justify-center align-center">
          <a-icon
            :class="`rounded-circle pa-1`"
            icon-name="iconsax-logo"
            size="100px"
            :color="darkMode ? 'blue-lighten-1' : 'grey-darken-5'"
          ></a-icon>
          <div class="d-flex flex-column">
            <div
              class="text-h4 font-weight-light mb-5"
              :class="darkMode ? 'text--grey-lighten-5' : 'text--grey-darken-5'"
            >
              Icon
              <span class="font-weight-bold ml-n2">Sax</span>
            </div>
            <div class="d-flex justify-space-between">
              <a-icon
                size="25px"
                icon-name="behance"
                :color="darkMode ? 'blue-lighten-3' : 'grey-darken-5'"
              ></a-icon>
              <a-icon
                size="25px"
                icon-name="dribble"
                :color="darkMode ? 'blue-lighten-3' : 'grey-darken-5'"
              ></a-icon>
              <a-icon
                size="25px"
                icon-style="linear"
                icon-name="instagram"
                :color="darkMode ? 'blue-lighten-3' : 'grey-darken-5'"
              ></a-icon>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-2 d-flex flex-column">
          <div class="font-weight-bold text-h6 mb-6">VueSax</div>
          <div class="mb-4">
            <a class="text--blue-lighten-3 text-decoration-none" href="">
              What is VueSax?
            </a>
          </div>
          <div class="mb-4">
            <a class="text--blue-lighten-3 text-decoration-none" href="">
              Why VueSax?
            </a>
          </div>
          <div class="mb-4">
            <a class="text--blue-lighten-3 text-decoration-none" href="">
              What's new in V4?
            </a>
          </div>
          <div class="mb-4">
            <a class="text--blue-lighten-3 text-decoration-none" href="">
              FAQ
            </a>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-2 d-flex flex-column">
          <div class="font-weight-bold text-h6 mb-6">Resources</div>
          <div class="mb-4">
            <a class="text--blue-lighten-3 text-decoration-none" href="">
              Documentation
            </a>
          </div>
          <div class="mb-4">
            <a class="text--blue-lighten-3 text-decoration-none" href="">
              Github
            </a>
          </div>
          <div class="mb-4">
            <a class="text--blue-lighten-3 text-decoration-none" href="">
              Privacy policy
            </a>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-2 d-flex flex-column">
          <div class="font-weight-bold text-h6 mb-6">Help</div>
          <div class="mb-4">
            <a class="text--blue-lighten-3 text-decoration-none" href="">
              Github Issues
            </a>
          </div>
          <div class="mb-4">
            <a class="text--blue-lighten-3 text-decoration-none" href="">
              FAQ
            </a>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-2 d-flex flex-column">
          <div class="font-weight-bold text-h6 mb-6">Community</div>
          <div class="mb-4">
            <a class="text--blue-lighten-3 text-decoration-none" href="">
              Discord
            </a>
          </div>
          <div class="mb-4">
            <a class="text--blue-lighten-3 text-decoration-none" href="">
              Github
            </a>
          </div>
        </div>
      </footer>
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
  mounted() {
    console.log(this.$route)
  },
}
</script>
