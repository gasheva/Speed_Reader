<template>
    <div>
        <message-base v-for="i in 5"/>
    </div>
</template>

<script lang="ts">
export default {
    name: 'AccountMainMessages',
};
</script>
<script setup lang="ts">
import MessageBase from '@/components/components/Messages/MessageBase.vue';
</script>
<style scoped>

</style>