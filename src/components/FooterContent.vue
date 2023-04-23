<template>
  <footer class="footer-content"><p class="copyright">© 2023 Nao Sato</p></footer>
</template>

<style lang="scss" scoped>
@use '@/assets/general';

.footer-content {
  background-color: general.$accent-color;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
  width: 100%;

  > .copyright {
    color: general.$dark-text-color;
    font-size: 1rem;
  }
}
</style>
