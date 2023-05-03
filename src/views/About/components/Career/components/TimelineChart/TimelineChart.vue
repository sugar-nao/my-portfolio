<script setup lang="ts">
import type { History } from './types'

type Props = { contents: History[] }

withDefaults(defineProps<Props>(), {
  contents: (): Props['contents'] => []
})
</script>

<template>
  <ul class="timeline-content">
    <li v-for="content in contents" :key="content.summary" class="item">
      <p class="date">{{ content.date }}</p>
      <div class="content">
        <p class="summary">{{ content.summary }}</p>
        <ul class="description" v-if="content.description && content.description.length > 0">
          <li v-for="(text, index) in content.description" :key="text" class="work">
            {{ text }}
            <p v-if="index === content.description?.length - 1" class="etc">etc.</p>
          </li>
        </ul>
        <ul class="sup" v-if="content.techs && content.techs.length > 0">
          使用技術：
          <li v-for="tech in content.techs" :key="tech" class="tech">{{ tech }}</li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@use '@/assets/general';

.timeline-content {
  list-style-type: none;

  > .item {
    display: flex;
  }

  > .item > .date {
    display: flex;
    justify-content: flex-end;
    width: 12rem;
  }

  > .item > .content {
    margin-left: 2rem;
    border-left: general.$sub-color solid 3px;
    padding: 0 0 2rem 4rem;
    position: relative;
    max-width: 450px;

    &::before {
      content: '';
      width: 12px;
      height: 12px;
      background: general.$main-color;
      position: absolute;
      left: -7.5px;
      border-radius: 100%;
    }
  }

  > .item > .content > .summary {
    font-weight: bold;
    font-size: 1.1rem;
  }

  > .item > .content > .description {
    list-style-type: disc;
    margin-left: 16px;
    margin-top: 8px;
  }

  > .item > .content > .description > .work {
    position: relative;
  }

  > .item > .content > .description > .work > .etc {
    margin-left: 2rem;
    position: absolute;
    top: 0;
    left: 12rem;
  }

  > .item > .content > .sup {
    font-size: 0.8rem;
    align-items: center;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    margin-top: 8px;
  }

  > .item > .content > .sup > .tech {
    border: general.$sub-color solid 1px;
    border-radius: 100vh;
    padding: 0 8px;
    margin-top: 4px;

    + .tech {
      margin-left: 4px;
    }
  }
}
</style>
