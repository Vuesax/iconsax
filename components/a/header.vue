<template>
  <header
    class="z-100 w-100 py-2 p-fixed d-flex flex-wrap align-center justify-space-between"
    :class="
      darkMode
        ? 'background-pale-2-gradient-top-right'
        : 'grey-lighten-5-gradient-top-right'
    "
  >
    <div class="col-md-3 d-flex my-2 flex-grow-1 align-center">
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
    <div class="d-flex flex-grow-1 justify-center">
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
    <div class="d-none d-md-flex col-md-3 my-2 flex-grow-1 justify-end">
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
      <a href="https://iconsax.io/" target="_blank">
        <a-button
          class="mx-2 d-none d-md-flex"
          rounded="3"
          mode="filled"
          color="blue"
        >
          <a-icon
            size="24px"
            color="grey-lighten-5"
            class="mr-2"
            icon-name="box"
            icon-style="bold"
          ></a-icon>
          <span class="text-decoration-linethrough">Get icons v1.0</span>
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
