<template>
  <nav class="navigation">
    <label class="navigation__start logo">SpeedRead</label>
    <ul>
      <the-navigation-item v-for="link in links" :key="link.name" :link="link"/>
    </ul>
    <div class="navigation__end">
      <the-locale-switcher/>
    </div>
  </nav>
</template>

<script lang="ts">
import links from '@/components/app/Navigation/data/index'
import TheNavigationItem from '@/components/app/Navigation/TheNavigationItem.vue';
import TheLocaleSwitcher from "@/components/app/Navigation/TheLocaleSwitcher.vue";

export default {
  name: 'TheNavigation',
  components: {TheLocaleSwitcher, TheNavigationItem},
  setup() {
    return {links};
  }
};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 1rem;
  color: #fff;
  background-color: #3d536a;
}

.navigation__start,
.navigation__end {
  display: flex;
  align-items: center;
}

.navigation img {
  margin-right: 1rem;
}

.navigation a {
  margin-right: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

</style>