<template>
  <div class="row justify-lg-center my-lg-16">
    <div class="col-lg-3 p-sm-relative waves-mask primary-gradient-radial">
      <!--  <div :class="'a-waves ' + color + '-gradient-radial'"></div> -->
    </div>
    <div class="col-lg-6 my-lg-3">
      <p
        :class="
          'text-lg-h5 text-sm-center font-weight-thin text--' +
          color +
          '-lighten-4'
        "
      >
        All Of The
        <span class="font-weight-medium">Free</span>
        And
        <span class="font-weight-medium">Pro</span>
        Icons Available
      </p>
      <p class="text-lg-h2 text-sm-center font-weight-bold">
        <span :class="'text--' + color + '-lighten-3'">
          6000+
        </span>

        <span :class="' text--' + color + '-lighten-1-gradient-left'">
          Awesome Icons
        </span>
      </p>
      <p
        :class="
          'text-lg-normal text-sm-center font-weight-light text--' +
          color +
          '-pale-8'
        "
      >
        <span :class="'text--' + color + '-pale-7'">Download</span>
        in your favorite format
        <i class="isax isax-repeat3"></i>
      </p>
      <div class="d-flex justify-center">
        <a-button
          class="ma-2"
          @click="$emit('change-icon-style', 'bold')"
          rounded="pill"
          :color="color"
        >
          bold
          <!--   <a-icon
              size="24px"
              :color="color"
              icon-name="global-search"
              icon-style="bold"
            ></a-icon> -->
        </a-button>
        <a-button
          class="ma-2"
          @click="$emit('change-icon-style', 'broken')"
          rounded="pill"
          :color="color"
        >
          broken
        </a-button>
        <a-button
          class="ma-2"
          @click="$emit('change-icon-style', 'bulk')"
          rounded="pill"
          :color="color"
        >
          bulk
        </a-button>
        <a-button
          class="ma-2"
          @click="$emit('change-icon-style', 'linear')"
          rounded="pill"
          :color="color"
        >
          linear
        </a-button>
        <a-button
          class="ma-2"
          @click="$emit('change-icon-style', 'outline')"
          rounded="pill"
          :color="color"
        >
          outline
        </a-button>
        <a-button
          class="ma-2"
          @click="$emit('change-icon-style', 'twotone')"
          rounded="pill"
          :color="color"
        >
          twotone
        </a-button>
      </div>
    </div>
    <div class="col-lg-3 p-sm-relative">
      <div :class="'a-waves ' + color + '-gradient-radial'"></div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'primary',
  },
})
</script>
