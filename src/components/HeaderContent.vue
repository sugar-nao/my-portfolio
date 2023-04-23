<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isAboutHovered = ref(false)
</script>

<template>
  <header class="header-content">
    <RouterLink class="logo" to="/">
      <img alt="logo" src="@/assets/logo.svg" width="50" height="50" />
    </RouterLink>

    <nav class="nav">
      <ul class="linklist">
        <li
          class="item -about"
          @mouseover="() => (isAboutHovered = true)"
          @mouseleave="() => (isAboutHovered = false)"
        >
          <RouterLink
            to="/about"
            class="link"
            :class="{ '-active': isAboutHovered }"
            active-class="-active"
            >About
          </RouterLink>
          <Transition name="anchor">
            <ul v-if="isAboutHovered" class="anchorlist">
              <li class="anchoritem">
                <RouterLink to="/about#aboutMe" class="link anchor">About me</RouterLink>
              </li>
              <li class="anchoritem">
                <RouterLink to="/about#skillSet" class="link anchor">Skill set</RouterLink>
              </li>
              <li class="anchoritem">
                <RouterLink to="/about#career" class="link anchor">Career</RouterLink>
              </li>
              <li class="anchoritem">
                <RouterLink to="/about#socialMedia" class="link anchor"
                  >Social<br />Media</RouterLink
                >
              </li>
            </ul>
          </Transition>
        </li>
        <li class="item">
          <RouterLink to="/works" class="link" active-class="-active">Works</RouterLink>
        </li>
        <li class="item">
          <RouterLink to="/contact" class="link" active-class="-active">Contact</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use '@/assets/general';

.header-content {
  z-index: 1;
  background-color: general.$accent-color;
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 0 4%;

  > .logo {
    align-self: center;
    height: 50px;
    width: 50px;
  }

  > .nav {
    display: flex;
    justify-content: space-between;
  }
  > .nav > .linklist {
    display: flex;
    list-style-type: none;
  }

  > .nav > .linklist > .item &.-about {
    display: flex;
    flex-direction: column;
    height: fit-content;
  }

  > .nav > .linklist > .item + .item {
    margin-left: 2rem;
  }

  > .nav > .linklist > .item .link {
    align-items: center;
    color: general.$dark-text-color;
    display: flex;
    font-size: 1.1rem;
    font-weight: bold;
    height: 70px;
    justify-content: center;
    text-decoration: none;
    width: 100px;

    &.-active,
    &:hover {
      background-color: general.$main-color;
      color: general.$base-color;
      // color: general.$light-text-color;
    }
  }

  > .nav > .linklist > .item > .anchorlist {
    display: flex;
    flex-direction: column;
    height: 280px;
    overflow: hidden;
    list-style-type: none;

    &.anchor-enter-active,
    &.anchor-leave-active {
      transition: height 0.3s;
    }

    &.anchor-enter-from,
    &.anchor-leave-to {
      height: 0;
    }
  }

  > .nav > .linklist > .item > .anchorlist > .anchoritem > .anchor {
    background-color: general.$accent-color;
    color: general.$dark-text-color;

    &:hover {
      background-color: general.$main-color;
      color: general.$base-color;
      // color: general.$light-text-color;
    }
  }
}
</style>
