<template>
  <div class="home">
    <div class="head">
      <Header />
      <section class="landing">
        <div class="landing__con">
          <h1 class="landing__heading">Your New Bank</h1>
          <button class="landing__know-us btn">Find Out About Us</button>
          <p class="landing__paragraph">
            Secure your money safely with Octavia three-factor authentication
            and sleep tight every night and We understand your business and
            personal needs, so We help protect your funds from Cyber criminals.
          </p>
        </div>
      </section>
    </div>
    <section class="about">
      <h1 class="about__header"><span>About</span> Us</h1>
      <div class="about__con">
        <div class="about__child">
          <img src="../assets/images/fingerprint.svg" class="about__img" />
        </div>
        <div class="about__child">
          <p class="about__paragraph">
            Download the app, sign up in Seconds and start converting your
            currency. That’s all you need to make the right money moves. No
            sweat. Whatever you want to do with your money, you can do it from
            the app. We’ll make sure it’s done better and hassle-free.
          </p>
          <button class="about__know-us btn">Find Out About Us</button>
        </div>
      </div>
      <div class="about__con about__con-2">
        <div class="about__child">
          <p class="about__paragraph">
            Download the app, sign up in Seconds and start converting your
            currency. That’s all you need to make the right money moves. No
            sweat. Whatever you want to do with your money, you can do it from
            the app. We’ll make sure it’s done better and hassle-free.
          </p>
          <button class="about__know-us about__know-us--active btn">
            Find Out About Us
          </button>
        </div>
        <div class="about__child">
          <img src="../assets/images/power.svg" class="about__img" />
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/main.scss';
</style>
