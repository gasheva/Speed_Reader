<template>
    <div>
        login
        <input-text :hint="'E-mail'"/>
        <input-text :hint="'Password'"/>

        <div class="wrapper">
            <base-button style-btn="black" @click="login"/>
        </div>
        <a class="link" href="#">Забыли пароль?</a>
    </div>
</template>

<script lang="ts">
import BaseButton from '@/components/app/BaseButton.vue';
import InputText from '@/components/app/InputText.vue';
import {defineComponent} from 'vue';
import {useStore} from 'vuex';

export default defineComponent({
    name: 'Login',
    components: {BaseButton, InputText},
    setup() {
        const store = useStore();
        const login = () => {
            store.dispatch('auth/login');
        };
        return {
            login
        };
    }
});
</script>

<style scoped>

</style>
