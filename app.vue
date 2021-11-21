<template>
  <div class="app">
    <header
      class="bloom-2-grey-glassy-8 pa-2 d-flex align-center justify-space-between"
      :class="darkMode ? 'background-pale-2' : 'grey-lighten-5'"
    >
      <div class="d-flex align-center">
        <a-icon
          :class="`rounded-circle pa-1`"
          icon-name="iconsax-logo"
          size="30px"
          :color="darkMode ? 'grey-lighten-5' : 'grey-darken-5'"
        ></a-icon>
        <span
          class="text-h5 font-weight-light"
          :class="darkMode ? 'text--grey-lighten-5' : 'text--grey-darken-5'"
        >
          Icon
          <span class="font-weight-bold ml-n1">Sax</span>
        </span>
      </div>
      <div class="d-flex">
        <a-button
          rounded="circle"
          mode="flat"
          color="grey"
          aspectRatio="1"
          @click="darkMode = !darkMode"
        >
          <a-icon
            :icon-name="darkMode ? 'sun-1' : 'moon'"
            icon-style="linear"
            :color="darkMode ? 'grey-lighten-4' : 'grey-darken-4'"
          ></a-icon>
        </a-button>
        <a-button
          class="ml-2"
          rounded="3"
          mode="filled"
          color="blue"
          @click="darkMode = !darkMode"
        >
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
      class="app-wrapper"
      :class="darkMode ? 'background-pale-2' : 'grey-lighten-5'"
    >
      <NuxtPage />
    </div>
  </div>
</template>
<script setup>
const darkMode = useState('darkMode', () => false)
</script>
