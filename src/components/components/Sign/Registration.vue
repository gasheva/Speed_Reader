<template>
    <div>
        registration
        <input-text :hint="'E-mail'"/>
        <input-text :hint="'Password'"/>
    </div>
</template>

<script>
import InputText from '@/components/app/InputText';

export default {
    name:       'Registration',
    components: {InputText},
};
</script>

<style scoped>

</style>
