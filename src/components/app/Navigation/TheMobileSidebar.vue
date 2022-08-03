<template>
    <Transition name="slide">
        <div class="mobile-sidebar">
            <ul class="mobile-sidebar__navigation navigation">
                <li v-for="link in links" :key="link.name">
                    <a href="" v-if="link.isPublic || (!link.isPublic && isAuth)"
                       @click.prevent="hideSidebar(link)"
                       class="navigation-item">
                        <span class="navigation-item__icon icon"></span>
                        <span>{{ t(link.label) }}</span>
                    </a>
                </li>
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
import {Link} from '@/components/app/Navigation/data/link.interface';
import {useStore} from 'vuex';
import {computed} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();
const {t} = useI18n();
const store = useStore();
const isAuth = computed(() => store.getters['auth/isAuth']);

const hideSidebar = (link: Link) => {
    router.push({name: link.route});
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
