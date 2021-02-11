<template>
  <header class="header">
    <div class="header__left">
      <router-link to="/">
        <img src="../assets/images/logo.png" alt="logo" class="header__logo" />
      </router-link>
    </div>
    <div class="header__middle" :style="navStyle">
      <img
        src="../assets/images/close.svg"
        alt="close"
        class="header__close"
        @click="closeNav"
      />
      <ul>
        <li>
          <img
            src="../assets/images/logo.png"
            alt="logo"
            class="header__logo"
          />
        </li>
        <li>
          <router-link to="/register" class="header__link"
            >Register</router-link
          >
        </li>
        <li>
          <router-link to="/login" class="header__link">Login</router-link>
        </li>
      </ul>
    </div>
    <div class="header right">
      <img
        src="../assets/images/menu.svg"
        alt="menu"
        class="header__menu"
        @click="openNav"
      />
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      navStyle: {},
    };
  },
  methods: {
    openNav() {
      this.navStyle = { display: 'block' };
    },
    closeNav() {
      this.navStyle = { display: 'none' };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/main.scss';
</style>
