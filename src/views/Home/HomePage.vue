<template>
  <div class="home-view">
    <p class="title">SATONAO</p>
    <p class="text">Web Frontend Engineer</p>
    <img alt="" src="@/assets/logo.svg" class="image" />
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/general';

.home-view {
  background-color: general.$top-color;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .image {
    width: 20rem;
    height: 20rem;
  }

  > .title {
    font-size: 3rem;
  }

  > .text {
    font-size: 2rem;
  }
}
</style>
