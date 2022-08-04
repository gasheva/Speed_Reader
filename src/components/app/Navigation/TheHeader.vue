<template>
    <header class="header">
        <div class="header__start">
            <label class="header__logo logo">SpeedReader</label>
            <!--NAVIGATION-->
            <ul v-if="!isScreenSmall" class="header__navigation navigation">
                <li v-for="link in links"
                    :key="link.name"
                    class="navigation__item navigation-item"
                >
                    <router-link
                            v-if="link.isPublic || (!link.isPublic && isAuth)"
                            :to="{name: link.route}"
                            class="custom-router-link">
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
                                <img v-if="userAvatar" alt="user logo" :src="userAvatar"/>
                                <span v-else v-html="icons.defaultAvatar"/>
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
import BurgerButton from '@/components/app/Navigation/BurgerButton.vue';
import Bell from '@/components/app/Bell.vue';
import Dropdown from '@/components/components/Dropdown/Dropdown.vue';
import DropdownMenuUser from '@/components/components/Dropdown/DropdownMenuUser.vue';
import DropdownMenuNotification from '@/components/components/Dropdown/DropdownMenuNotification.vue';
import {useRouter} from 'vue-router';
import {icons} from '@/constants/icons.constants';


const store = useStore();
const router = useRouter();
const {t} = useI18n();
let {isScreenSmall} = useBreakpoint();
const {notifications} = useFetchNotifications();

const isAuth = computed(() => store.getters['auth/isAuth']);

const join = async () => {
    await router.push({name: 'sign'});
};

const userAvatar = computed(() => store.state.auth.user?.avatar);

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

  &__start,
  &__end {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
  }

  &__logo {
    margin-right: 5rem;
  }
}

.navigation {
  display: flex;
  justify-self: flex-end;

  &__item {
    margin-right: 2rem;
    font-weight: bold;
  }
}

.navigation-item {
  color: black;
}

.logo {
  font-weight: bold;
}

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
