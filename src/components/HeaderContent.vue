<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header-content">
    <RouterLink to="/">
      <img alt="logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
    </RouterLink>

    <nav class="nav">
      <RouterLink to="/about" class="link -active">About</RouterLink>
      <RouterLink to="/works" class="link">Works</RouterLink>
      <RouterLink to="/contact" class="link">Contact</RouterLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header-content {
  display: flex;
  justify-content: space-between;
  padding: 0 150px;
  border-bottom: solid aquamarine;

  > .nav {
    display: flex;
    justify-content: space-between;
    width: 40%;
  }

  > .nav > .link {
    text-decoration: none;
    color: aquamarine;

    &.-active {
      background-color: aquamarine;
      color: white;
    }
  }
}
</style>
