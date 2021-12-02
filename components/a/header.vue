<template>
  <header
    class="z-100 w-100 py-2 p-fixed d-flex flex-wrap align-center justify-space-between"
    :class="
      darkMode
        ? 'background-pale-2-gradient-top-right'
        : 'grey-lighten-10-gradient-top-right'
    "
  >
    <div class="col-md-3 d-flex my-2 flex-grow-1 align-center">
      <a-icon
        :class="`ma-1 ma-sm-2 ma-md-4  pa-1`"
        icon-name="iconsax-logo"
        size="32px"
        :color="darkMode ? 'grey-lighten-5' : 'grey-darken-5'"
      ></a-icon>
      <span
        class="fs-4 fw-2"
        :class="darkMode ? 'text--grey-lighten-5' : 'text--grey-darken-5'"
      >
        Icon
        <span class="fw-5 ml-n2">Sax</span>
      </span>
    </div>
    <div class="d-flex flex-grow-1 justify-center">
      <a-button
        to="/"
        color="blue"
        :active="$route.name === 'index'"
        nav
        mode="nav"
        rounded="0"
        class="mx-2"
      >
        home
      </a-button>
      <a-button
        to="/iconsax-license"
        color="blue"
        :active="$route.name === 'iconsax-license'"
        rounded="0"
        nav
        mode="nav"
        class="mx-2"
      >
        license
      </a-button>
      <a-button
        to="/contact-us"
        color="blue"
        :active="$route.name === 'contact-us'"
        rounded="0"
        nav
        mode="nav"
        class="mx-2"
      >
        contact us
      </a-button>
    </div>
    <div
      class="d-none d-md-flex col-md-3 my-2 flex-grow-1 align-center justify-end"
    >
      <a-button
        rounded="10"
        mode="nav"
        color="grey"
        aspectRatio="1"
        @click="setTheme()"
      >
        <a-icon
          :icon-name="darkMode ? 'sun-1' : 'moon'"
          icon-style="linear"
          size="22px"
          :color="darkMode ? 'grey-lighten-4' : 'grey-darken-4'"
        ></a-icon>
      </a-button>
      <a href="https://iconsax.io/" target="_blank">
        <a-button
          class="mx-5 d-none d-md-flex"
          rounded="6"
          mode="filled"
          color="primary"
        >
          <a-icon
            size="24px"
            color="grey-lighten-9"
            class="ml-4 mr-2"
            icon-name="box-1"
            icon-style="bulk"
          ></a-icon>
          <span class="text-decoration-linethrough mr-4">Get icons v1.0</span>
        </a-button>
      </a>
    </div>
  </header>
</template>
<script setup>
const darkMode = useState('darkMode')
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
