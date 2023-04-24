<template>
  <div class="base-content">
    <h1 class="title"><slot name="title"></slot></h1>
    <div class="content"><slot name="content"></slot></div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/general';

.base-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .title {
    font-size: 3rem;
    font-weight: bold;
  }

  > .content {
    margin-top: 2rem;
  }
}
</style>
