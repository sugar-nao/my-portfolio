<script setup lang="ts">
import type { Work } from './types'

type Props = { works: Work[] }

withDefaults(defineProps<Props>(), {
  works: (): Props['works'] => []
})
</script>

<template>
  <ul class="work-list">
    <li v-for="work in works" :key="work.href" class="item">
      <a :href="work.href" target="_blank" class="link"
        ><img class="image" :src="work.image" :alt="work.title" />
        <p class="title">{{ work.title }}</p>
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@use '@/assets/general';

.work-list {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 950px;

  > .item > .link {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.5rem;
    text-decoration: none;
  }

  > .item > .link > .title {
    margin-top: 0.75rem;
    color: general.$dark-text-color;
  }

  > .item > .link > .image {
    position: relative;
    top: 0;
    transition: all 0.2s ease-in-out;
    width: 250px;

    &:hover {
      top: -5px;
      box-shadow: 0 8px 16px 0px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
