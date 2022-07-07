<template>
    <div>
        Time: {{ currentTime }}
    </div>
</template>

<script lang="ts">
export default {
    name: 'TimerBase'
};
</script>
<script setup lang="ts">

import {onBeforeMount, onBeforeUnmount, ref, watch} from 'vue';

const props = defineProps({
    startTime: {type: Number, required: true}
});
const emit = defineEmits(['timeout']);
const currentTime = ref(props.startTime);
let interval: number | null = null;
onBeforeMount(() => {
    interval = setInterval(() => {
        currentTime.value--;
    }, 1000);
});

onBeforeUnmount(() => {
    resetInterval();
});

const resetInterval = () => {
    interval && clearInterval(interval);
    interval = null;
    currentTime.value = props.startTime;
};

watch(currentTime, () => {
    if (currentTime.value === 0) {
        resetInterval();
        emit('timeout');
    }
});

</script>

<style scoped>

</style>