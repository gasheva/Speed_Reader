<template>
    <Transition name="slide">
        <div class="mobile-sidebar">
            <ul class="mobile-sidebar__navigation navigation">
                <li v-for="link in links" :key="link.name">
                    <a href="" v-if="link.isPublic || (!link.isPublic && isAuth)"
                       @click.prevent="hideSidebar(link)"
                       class="navigation-item bold">
                        <span class="navigation-item__icon icon"></span>
                        <span>{{ t(link.label) }}</span>
                    </a>
                </li>

                <template v-if="isAuth">
                    <li v-for="link in linksAccount">
                        <a href=""
                           @click.prevent="hideSidebar(link)"
                           class="navigation-item bold">
                            <span class="navigation-item__icon icon"></span>
                            <span>{{ t('account') }}</span>
                        </a>
                    </li>
                </template>
                <li v-if="!isAuth">
                    <a href=""
                       @click.prevent="hideSidebar(joinLink)"
                       class="navigation-item bold">
                        <span class="navigation-item__icon icon"></span>
                        <span>{{ t(joinLink.label) }}</span>
                    </a>
                </li>
                <li v-else>
                    <a class="" href="" @click="logout">{{ t('exit') }}</a>
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
import linksAccount from '@/components/components/Dropdown/data/dropdownMenuUser';
import {Link as LinkAccount} from '@/components/components/Dropdown/data/dropdownMenuUser/link.interface';
import {Link} from '@/components/app/Navigation/data/link.interface';
import {useStore} from 'vuex';
import {computed, watch} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();
const {t} = useI18n();
const store = useStore();
const isAuth = computed(() => store.getters['auth/isAuth']);

const hideSidebar = (link: Link | LinkAccount) => {
    router.push({name: link.route});
    store.commit('setSidebarVisible', false);
};

const joinLink = {
    name: 'join',
    label: 'join',
    route: 'sign',
};

const logout = () => {
    store.dispatch('auth/logout');
};

</script>

<style lang="scss" scoped>
.mobile-sidebar {
  position: fixed;
  width: 70%;
  height: 100vh;
  z-index: 1;

  display: flex;
  padding-top: 3rem;
  justify-content: center;
  background: $grey-2;

  &__navigation {
    flex-direction: column;
    text-align: center;
  }
}

.navigation {
  display: flex;
  @media screen and (max-width: $md){
    gap: 1rem;
  }
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
