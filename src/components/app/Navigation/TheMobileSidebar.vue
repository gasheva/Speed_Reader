<template>
    <Transition name="slide">
        <div class="mobile-sidebar">
            <ul class="mobile-sidebar__navigation navigation">
                <router-link v-for="link in links" :key="link.name"
                             :to="link.route"
                             @click="hideSidebar"
                             class="navigation-item">
                    <span class="navigation-item__icon icon"></span>
                    <span>{{ t(link.label) }}</span>
                </router-link>
            </ul>
        </div>
    </Transition>
</template>

<script lang="ts">

export default {
    name: 'TheMobileSidebar',
};
</script>
<script setup lang="ts">
import {useI18n} from 'vue-i18n';
import links from '@/components/app/Navigation/data/index';
import {useStore} from 'vuex';

const {t} = useI18n();
const store = useStore();

const hideSidebar = () => {
    store.commit('setSidebarVisible', false);
};
</script>

<style lang="scss" scoped>
.mobile-sidebar {
  position: fixed;
  width: 70%;
  height: 100vh;
  background-color: gray;
  z-index: 1;

  &__navigation {
    flex-direction: column;
  }
}

.navigation {
  display: flex;
}

.slide-enter-active,
.slide-leave-active {
  transform: translateX(0);
  transition: all 500ms linear;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
