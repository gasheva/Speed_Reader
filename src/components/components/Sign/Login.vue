<template>
    <div>
        login
        <input-text :hint="'E-mail'"/>
        <input-text :hint="'Password'"/>

        <div class="wrapper">
            <base-button style-btn="black"/>
        </div>
        <a class="link" href="#">Забыли пароль?</a>
    </div>
</template>

<script>
import BaseButton from '@/components/app/BaseButton';
import InputText  from '@/components/app/InputText';

export default {
    name:       'Login',
    components: {BaseButton, InputText},
};
</script>

<style scoped>

</style>
