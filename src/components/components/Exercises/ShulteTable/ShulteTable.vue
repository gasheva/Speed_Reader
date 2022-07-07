<template>
<div>
    shulte
</div>
</template>

<script lang="ts">
export default {
    name: "ShulteTable",
}
</script>
<script setup lang="ts">

const emit = defineEmits(['finish']);
const timeoutHandler = ()=>{
    emit('finish');
}
</script>

<style scoped>

</style>