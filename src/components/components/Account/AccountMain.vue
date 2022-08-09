<template>
    <div class="account">
        <main-section-wrapper :parts="['left', 'main']">
            <template #main-tile>

                <KeepAlive>
                    <component
                            :is="accountComponents[currentComponentName]"/>
                </KeepAlive>
            </template>
            <template #left-tile>
                <nav>
                    <ul class="account-navigation">
                        <li v-for="link in links" class="">
                            <a href="" class="link menu-item account-navigation__item"
                               :class="{'active-link': link.componentName===currentComponentName}"
                               @click.prevent="changeNavigationHandler(link.componentName)"
                            >
                                <span class="menu-item__icon" v-html="icons[link.icon]"/>
                                {{ t(link.label) }}
                            </a>
                        </li>
                    </ul>
                </nav>
            </template>

        </main-section-wrapper>
    </div>
</template>

<script lang="ts">
export default {
    name: 'AccountMain',
};
</script>
<script setup lang="ts">
import MainSectionWrapper from '@/components/app/MainSectionWrapper.vue';
import {links} from '@/components/components/Account/data';
import {icons} from '@/constants/icons.constants';
import {defineAsyncComponent, ref} from 'vue';
import {useI18n} from 'vue-i18n';

const AccountMainInformation = defineAsyncComponent(() => import('@/components/components/Account/AccountMainInformation.vue'));
const AccountMainMessages = defineAsyncComponent(() => import('@/components/components/Account/AccountMainMessages.vue'));

const {t} = useI18n();

const accountComponents = {AccountMainMessages, AccountMainInformation};
const currentComponentName = ref<string>('AccountMainInformation');

const changeNavigationHandler = (componentName: string) => {
    currentComponentName.value = componentName;
};
</script>

<style lang="scss" scoped>
.account-navigation {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 1rem;
  padding: 2rem 1rem;

  &__item {
  }
}
</style>