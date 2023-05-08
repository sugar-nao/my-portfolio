<script setup lang="ts">
import BaseContent from '@/components/BaseContent.vue'
import WorkList from './components/WorkList/WorkList.vue'
import type { Work } from './components/WorkList/types'

const WORKS: Work[] = [
  {
    title: "Nao's Portfolio（このサイト）",
    image: 'src/assets/images/portfolio.png',
    href: 'https://github.com/sugar-nao/my-portfolio'
  }
]
</script>

<template>
  <base-content class="works-page">
    <template #title>Works</template>
    <template #content><work-list :works="WORKS"></work-list></template>
  </base-content>
</template>

<style lang="scss" scoped>
@use '@/assets/general';

.works-page {
  margin: 8rem 0;
}
</style>
