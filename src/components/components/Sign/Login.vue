<template>
    <div>
        login
        <input-text :hint="'E-mail'"/>
        <input-text :hint="'Password'"/>

        <a class="link" href="#">Забыли пароль?</a>
    </div>
</template>

<script>
import InputText from '@/components/app/InputText';

export default {
    name:       'Login',
    components: {InputText},
};
</script>

<style scoped>

</style>
