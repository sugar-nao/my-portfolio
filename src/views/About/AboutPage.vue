<script setup lang="ts">
import AboutMe from './components/AboutMe/AboutMe.vue'
import SkillSet from './components/SkillSet/SkillSet.vue'
import Career from './components/Career/AboutCareer.vue'
import SocialMedia from './components/SocialMedia/SocialMedia.vue'
</script>

<template>
  <div class="about-page">
    <about-me id="aboutMe" class="content"></about-me>
    <skill-set id="skillSet" class="content"></skill-set>
    <career id="career" class="content"></career>
    <social-media id="socialMedia" class="content"></social-media>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/general';

.about-page {
  > .content {
    margin-top: 8rem;
  }
}
</style>
