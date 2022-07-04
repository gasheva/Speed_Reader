<template>
    <div>
        <button @click="changeTab('TheRegistration')">Registration</button>
        <button @click="changeTab('TheLogin')">Login</button>
    </div>
</template>

<script  lang="ts">
export default {
    name: 'SignTabs',
};
</script >
<script setup  lang="ts">
const emit = defineEmits(['changeTab']);

const changeTab = (toTab: string) => {
    emit('changeTab', toTab)
}
</script>

<style scoped>

</style>
