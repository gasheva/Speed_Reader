<template>
    <header class="header">
        <div class="header__start">
            <label class="header__logo logo">SpeedReader</label>
            <!--NAVIGATION-->
            <ul v-if="!isScreenSmall" class="header__navigation navigation">
                <li v-for="link in links"
                     :key="link.name">
                    <router-link
                            v-if="link.isPublic || (!link.isPublic && isAuth)"
                            :to="{name: link.route}"
                            class="custom-router-link navigation__item">
                        <span class="navigation-item__icon icon"/>
                        <span>{{ t(link.label) }}</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="header__end">
            <burger-button v-if="isScreenSmall" data-test="burgerButton"/>
            <template v-else>
                <!-- USER SUBMENU -->
                <template v-if="isAuth">
                    <dropdown>
                        <template #trigger>
                            <bell/>
                        </template>
                        <template #menu>
                            <dropdown-menu-notification v-for="notification in notifications"
                                                        :key="notification.uid"
                                                        :notification="notification"/>
                        </template>
                    </dropdown>
                    <dropdown>
                        <template #trigger>
                            <div class="user-box__image">
                                <img alt="user logo" src="@/assets/mock/mockUserLogo.png">
                            </div>
                        </template>
                        <template #menu>
                            <dropdown-menu-user/>
                        </template>
                    </dropdown>
                </template>
                <a v-else class="navigation__item link"
                   @click.prevent="join"
                >
                    <span class="navigation-item__icon icon"></span>
                    <span>{{ t('join') }}</span>
                </a>
                <the-locale-switcher/>
            </template>
        </div>
    </header>
</template>

<script lang="ts">
export default {
    name: 'TheHeader',
};
</script>
<script setup lang="ts">
import {useStore} from 'vuex';
import {computed} from 'vue';
import {useI18n} from 'vue-i18n';
import {useBreakpoint} from '@/composable/breakpoint';
import {useFetchNotifications} from '@/composable/fetchNotifications';
import links from '@/components/app/Navigation/data/index';
import TheLocaleSwitcher from '@/components/app/Navigation/TheLocaleSwitcher.vue';
import BurgerButton from '@/components/app/Navigation/BurgerButton.vue';
import Bell from '@/components/app/Bell.vue';
import Dropdown from '@/components/components/Dropdown/Dropdown.vue';
import DropdownMenuUser from '@/components/components/Dropdown/DropdownMenuUser.vue';
import DropdownMenuNotification from '@/components/components/Dropdown/DropdownMenuNotification.vue';
import {useRouter} from 'vue-router';


const store = useStore();
const router = useRouter();
const {t} = useI18n();
let {isScreenSmall} = useBreakpoint();
const {notifications} = useFetchNotifications();

const isAuth = computed(() => store.getters['auth/isAuth']);

const join = async () => {
    await router.push({name: 'sign'});
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
  background: white;

  @media screen and (max-width: $sm) {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
  }

  &__start,
  &__end {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &__logo {
    padding-right: 1rem;
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

/* TODO (rewrite style) */
.user-box {
  display: flex;
  align-items: center;
  cursor: pointer;

  &__image {
    height: 3rem;
  }

  &__image img {
    height: 100%;
    margin-right: 0.875rem;
  }
}

</style>
