<script setup lang="ts">
import BaseContent from '@/components/BaseContent.vue'
</script>

<template>
  <base-content class="skill-set">
    <template #title>Skill Set</template>
    <template #content>
      <ul class="list">
        <li class="item">
          <p class="heading">Front-end</p>
          <p class="content">HTML・CSS・SCSS・JavaScript・ TypeScript・Vue.js</p>
        </li>
        <li class="item">
          <p class="heading">Back-end</p>
          <p class="content">Java・MySQL<br />※実務での実装経験はなし</p>
        </li>
        <li class="item">
          <p class="heading">保有資格</p>
          <ul class="content">
            <li class="detail">基本情報技術者</li>
            <li class="detail">HTML5プロフェッショナル認定 レベル1</li>
            <li class="detail">AWS Certified Solutions Architect - Associate</li>
          </ul>
        </li>
      </ul>
    </template>
  </base-content>
</template>

<style lang="scss" scoped>
@use '@/assets/general';

.skill-set {
  .list {
    list-style-type: none;
    width: 50rem;
  }

  .list > .item {
    display: flex;
    align-items: center;

    + .item {
      margin-top: 2rem;
    }
  }

  .list > .item > .heading {
    background-color: general.$main-color;
    color: general.$base-color;
    font-size: 1.1rem;
    font-weight: bold;
    flex-shrink: 0;
    height: 2.5rem;
    width: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .list > .item > .content {
    margin-left: 4rem;
    flex-shrink: 1;
  }
}
</style>
