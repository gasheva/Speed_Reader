<template>
    <div class="registration">
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

<style lang="scss" scoped>
.registration{
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
</style>
