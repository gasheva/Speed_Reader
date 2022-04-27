<template>
  <header class="header">
    <div class="header__start">
      <label class="header__logo logo">SpeedReader</label>
      <!--NAVIGATION-->
      <ul v-if="!isScreenSmall" class="header__navigation navigation">
        <router-link v-for="link in links" :key="link.name" :to="link.route" class="navigation__item">
          <span class="navigation-item__icon icon"></span>
          <span>{{ t(link.label) }}</span>
        </router-link>
      </ul>
    </div>
    <div class="header__end">
      <burger-button v-if="isScreenSmall" data-test="burgerButton"/>
      <template v-else>
        <!-- USER SUBMENU -->
        <bell/>
        <user-box-dropdown/>
        <the-locale-switcher/>
      </template>
    </div>
  </header>
</template>

<script lang="ts">
import links from '@/components/app/Navigation/data/index'
import TheLocaleSwitcher from "@/components/app/Navigation/TheLocaleSwitcher.vue";
import {useI18n} from "vue-i18n";
import TheMobileSidebar from "@/components/app/Navigation/TheMobileSidebar.vue";
import BurgerButton from "@/components/app/Navigation/BurgerButton.vue";
import {useBreakpoint} from '@/composable/breakpoint';
import Bell from "@/components/app/Bell.vue";
import UserBoxDropdown from "@/components/components/UserBoxDropdown.vue";

export default {
  name: 'TheHeader',
  components: {UserBoxDropdown, Bell, BurgerButton, TheMobileSidebar, TheLocaleSwitcher},
  setup() {
    const {t} = useI18n();

    let {isScreenSmall} = useBreakpoint();
    return {
      links,
      t,
      isScreenSmall,
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 1rem;
  height: 4rem;

  &__start,
  &__end {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &__logo {
    padding: 2rem;
  }
}

.navigation {
  display: flex;
  justify-self: flex-end;

  &__item {
    color: black
  }
}

.logo {
  font-weight: bold;
}

</style>