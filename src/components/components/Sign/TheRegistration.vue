<template>
    <div>
        registration
        <input-text :hint="'E-mail'"/>
        <input-text :hint="'Password'"/>
    </div>
</template>

<script lang="ts">

export default {
    name: 'TheRegistration',
};
</script>
<script setup lang="ts">
import InputText from '@/components/app/InputText.vue';
</script>

<style scoped>

</style>
