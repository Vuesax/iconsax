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
    <input
      type="text"
      placeholder="teste"
      @focus="focus()"
      @blur="blur()"
      :class="`a-input text--${color}-lighten-3`"
      v-model="val"
    />
  </div>
</template>
<script setup>
let val = ref('')
const props = defineProps({
  color: {
    type: String,
    default: 'primary',
  },
  light: {
    type: Boolean,
    default: false,
  },
  iconStyle: {
    type: String,
    default: 'bold',
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
    }
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
