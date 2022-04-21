<template>
  <div class="mobile-sidebar">
    <ul class="mobile-sidebar__navigation navigation">
      <router-link v-for="link in links" :key="link.name" :to="link.route" class="navigation-item">
        <span class="navigation-item__icon icon"></span>
        <span>{{ t(link.label) }}</span>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
import links from '@/components/app/Navigation/data/index'
import {useI18n} from "vue-i18n";

export default {
  name: "TheMobileSidebar",
  setup() {
    const {t} = useI18n();

    return {
      links,
      t,
    };
  }
}
</script>

<style lang="scss" scoped>
.mobile-sidebar {
  position: absolute;
  width: 70%;
  height: 100vh;
  background-color: gray;

  &__navigation {
    flex-direction: column;

  }
}

.navigation {
  display: flex;
}
</style>