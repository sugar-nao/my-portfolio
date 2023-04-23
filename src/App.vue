<script setup lang="ts">
import HeaderContent from './components/HeaderContent.vue'
import FooterContent from './components/FooterContent.vue'
</script>

<template>
  <HeaderContent />
  <RouterView class="content" />
  <FooterContent />
</template>

<style lang="scss" scoped>
.content {
  flex-grow: 1;
}
</style>
