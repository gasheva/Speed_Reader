<template>
<div>
    <timer-base :start-time="55" @timeout="timeoutHandler"/>
    shulte
</div>
</template>

<script lang="ts">
export default {
    name: "ShulteTable",
}
</script>
<script setup lang="ts">

import TimerBase from '@/components/components/Timer/TimerBase.vue';

const emit = defineEmits(['finish']);
const timeoutHandler = ()=>{
    emit('finish');
}
</script>

<style scoped>

</style>