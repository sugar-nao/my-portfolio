<script setup lang="ts">
import AboutMe from './components/AboutMe/index.vue'
import SkillSet from './components/SkillSet/index.vue'
import Career from './components/Career/index.vue'
import SocialMedia from './components/SocialMedia/index.vue'
</script>

<template>
  <div class="about-view">
    <about-me id="aboutMe" class="content"></about-me>
    <skill-set id="skillSet" class="content"></skill-set>
    <career id="career" class="content"></career>
    <social-media id="socialMedia" class="content"></social-media>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/general';

.about-view {
  margin-bottom: 2rem;

  .content {
    margin-top: 2rem;
  }
}
</style>
