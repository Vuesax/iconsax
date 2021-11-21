<template>
  <main-headline v-model="iconQuery" :color="iconQuery.currentColor" />

  <div class="row justify-center">
    <div class="col-12 col-md-10 col-lg-10 col-xl-8">
      <main-icon-list
        :category="iconQuery.currentCategory"
        :icon-style="iconQuery.currentIconMode"
        :color="iconQuery.currentColor"
        :query="iconQuery.currentQuery"
      ></main-icon-list>
    </div>
  </div>
</template>
<script setup>
const iconQuery = ref({
  currentCategory: '',
  currentIconMode: 'linear',
  currentColor: 'purple',
  currentQuery: '',
})
</script>
<script>
export default {
  methods: {},
}
</script>
<style lang="scss"></style>
