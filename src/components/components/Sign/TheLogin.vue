<template>
    <div class="login">
        <input-text :hint="'E-mail'"/>
        <input-text :hint="'Password'"/>

        <div>
            <base-button style-btn="black" :text="t('login')" @click="login"/>
        </div>
        <a class="link link--hover-underline" href="#">Забыли пароль?</a>
    </div>
</template>

<script lang="ts">

export default {
    name: 'TheLogin',
}
</script>
<script setup  lang="ts">
import BaseButton from '@/components/app/BaseButton.vue';
import InputText from '@/components/app/InputText.vue';
import {useStore} from 'vuex';
import {useI18n} from 'vue-i18n';

const {t} = useI18n();
const store = useStore();
const login = () => {
    store.dispatch('auth/login');
};
</script>

<style lang="scss" scoped>
.login{
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
</style>
