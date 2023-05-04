<script setup lang="ts">
import BaseContent from '@/components/BaseContent.vue'
</script>

<template>
  <base-content class="social-media">
    <template #title>Social Media</template>
    <template #content>
      <ul class="list">
        <li>
          <a href="https://github.com/sugar-nao" target="_blank"
            ><img alt="github" src="@/assets/images/github.svg" width="70" height="70"
          /></a>
        </li>
        <li>
          <a href="https://qiita.com/sugar-nao" target="_blank"
            ><img alt="qiita" src="@/assets/images/qiita.svg" width="70" height="70"
          /></a>
        </li>
        <li>
          <a href="https://twitter.com/umevosi_" target="_blank"
            ><img alt="twitter" src="@/assets/images/twitter.svg" width="70" height="70"
          /></a>
        </li>
      </ul>
    </template>
  </base-content>
</template>

<style lang="scss" scoped>
@use '@/assets/general';

.social-media {
  .list {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    min-width: 300px;
  }
}
</style>
