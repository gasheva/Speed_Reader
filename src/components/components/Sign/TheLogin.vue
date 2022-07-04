<template>
    <div class="login">
        <input-text :hint="'E-mail'"/>
        <input-text :hint="'Password'"/>

        <div>
            <base-button style-btn="black" @click="login"/>
        </div>
        <a class="link" href="#">Забыли пароль?</a>
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
