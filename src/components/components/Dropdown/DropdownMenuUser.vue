<template>
    <div class="user-dropdown">
        <user-box class="user-dropdown__group"
                  :image="user.avatar"
                  :main-text="user.nickname"
                  :secondary-text="user.email"
        />
        <div class="user-dropdown__group">
            <router-link v-for="link in links"
                         :key="link.name" :to="{name: link.route}"
                         @click.prevent="clickHandler">
                {{ t(link.label) }}
            </router-link>
        </div>
        <div class="user-dropdown__group">
            <a class="bold" href="" @click="logout">{{ t('exit') }}</a>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'DropdownMenuUser',
};
</script>
<script setup lang="ts">
import links from '@/components/components/Dropdown/data/dropdownMenuUser';
import UserBox from '@/components/components/UserBox.vue';
import {useI18n} from 'vue-i18n';
import {useStore} from 'vuex';
import {computed, getCurrentInstance, onMounted} from 'vue';

const {t} = useI18n();
const store = useStore();

const logout = () => {
    store.dispatch('auth/logout');
};

let instance;
onMounted(() => {
    instance = getCurrentInstance();
});

const clickHandler = () => {
    instance.parent.setupState.isMenuVisible = false;
};

const user = computed(() => store.state.auth.user);
</script>

<style lang="scss" scoped>
.user-dropdown {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  width: 15rem;
  padding: .5rem;
  color: black;
  text-decoration: none;

  &__group + &__group {
    padding-top: 1rem;
    padding-bottom: .5rem;
  }

  &__group {
    position: relative;
    padding-right: 1rem;
    padding-left: 1rem;

    &:after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: -0.5rem;
      display: block;
      height: 1px;
      width: calc(100% + 1rem);
      background: $grey-2;
    }

    &:last-child:after {
      display: none;
    }
  }
}
</style>
