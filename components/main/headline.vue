<template>
  <div class="row justify-lg-center my-lg-16">
    <div class="col-lg-3 p-sm-relative">
      <div :class="'waves ' + color + '-gradient-radial'"></div>
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
      <p
        :class="
          'text-lg-h2 text-sm-center font-weight-bold text--' +
          color +
          '-lighten-3-gradient-left'
        "
      >
        <span :class="'text--' + color + 'lighten-1-gradient-radial'">
          6000+
        </span>
        Awesome Icons
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
      <div class="row justify-center">
        <div class="col-6">
          <a-select :color="color"></a-select>
        </div>
      </div>
    </div>
    <div class="col-lg-3 p-sm-relative">
      <div :class="'waves ' + color + '-gradient-radial'"></div>
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
