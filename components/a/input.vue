<template>
  <div
    class="``"
    :class="
      `a-input-box rounded-2 ` +
      (isFocused
        ? `border-bottom-${color}  bloom-3-${color}-glassy-5`
        : `  bloom-3-grey-glassy-9`)
    "
  >
    <a-icon
      size="32px"
      class="ma-2"
      :color="color"
      icon-name="search-normal"
      icon-style="linear"
    />
    <input
      type="text"
      :placeholder="placeholder"
      @focus="focus()"
      @blur="blur()"
      :class="`a-input text--${color}-lighten-3`"
      v-model="val"
    />
  </div>
</template>
<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'purple',
  },
  light: {
    type: Boolean,
    default: false,
  },
  iconStyle: {
    type: String,
    default: 'bold',
  },
  placeholder: {
    type: String,
    default: '',
  },
  iconName: {
    type: String,
    default: 'book',
  },
})
</script>
<script>
export default {
  data() {
    return {
      isFocused: false,
      val: this.modelValue,
      timeout: null,
    }
  },
  watch: {
    val() {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        console.log('asd')

        this.$emit('update:modelValue', this.val)
      }, 1000)
    },
  },

  methods: {
    focus() {
      this.isFocused = true
    },
    blur() {
      this.isFocused = false
    },
  },
}
</script>
<style lang="scss">
.a-input-box {
  display: flex;
  align-items: center;
  .a-input {
    outline: none;
    appearance: none;
    background-color: transparent;
    border-style: none;
    font: inherit;
    flex: 1 1 auto;
    line-height: 20px;
    padding: 10px;
    max-width: 100%;
    min-width: 0;
    width: 100%;
  }
}
</style>
