<template>
  <header class="header">
    <label class="header__start logo">SpeedRead</label>
    <div class="header__end">
      <div v-if="isScreenSmall">
        <button class="burger">Burger</button>
      </div>
      <div v-else>
        <ul class="navigation">
          <router-link v-for="link in links" :key="link.name" :to="link.route" class="navigation-item">
            <span class="navigation-item__icon icon"></span>
            <span>{{ t(link.label) }}</span>
          </router-link>
        </ul>
        <the-locale-switcher/>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import links from '@/components/app/Navigation/data/index'
import TheLocaleSwitcher from "@/components/app/Navigation/TheLocaleSwitcher.vue";
import {useI18n} from "vue-i18n";
import {computed} from "vue";
import {Breakpoints} from "@/constants/breakpoint.constant";
import TheMobileSidebar from "@/components/app/Navigation/TheMobileSidebar.vue";
import {useStore} from 'vuex';

export default {
  name: 'TheHeader',
  components: {TheMobileSidebar, TheLocaleSwitcher},
  setup() {
    const {t} = useI18n();
    const store = useStore();
    let breakpoint = computed<Breakpoints>(() => store.getters.getBreakpoint)
    let isScreenSmall = computed<Boolean>(
        () => {
          return breakpoint.value === Breakpoints.XS || breakpoint.value === Breakpoints.SM
        })
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
  color: #fff;
  background-color: #3d536a;
}

.navigation {
  display: flex;
  justify-self: flex-end;
}

.header__start,
.header__end {
  display: flex;
  align-items: center;
}

.header img {
  margin-right: 1rem;
}

.header a {
  margin-right: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

</style>