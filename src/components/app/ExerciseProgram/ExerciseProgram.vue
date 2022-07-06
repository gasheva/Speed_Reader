<template>
    <div class="program">
        <div class="program_calendar-block"></div>
        <div class="program__tasks-block">
            <span class="section-wrapper__title">{{ formatTime(currentDate, dateParams) }}</span>
            <span class="section-wrapper__text"></span>

            <div class="program__tasks tasks-wrapper">
                <task-card v-for="task in tasks"
                           :key="task.uid"
                           :info="task"
                           @click="taskCardClickHandler"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'ExerciseProgram'
};
</script>
<script setup lang="ts">

import TaskCard from '@/components/components/TaskCard/TaskCard.vue';
import {onBeforeMount, onBeforeUnmount, ref} from 'vue';
import {FormatOptions, formatTime, FormatTimeTypes} from '@/utils/utils';

const dateParams: FormatOptions = {
    format: FormatTimeTypes.dateShort,
};

const tasks = ref([
    {
        uid: Math.random().toString(),
        image: '',
        title: 'Task',
        description: 'jfksld',
        level: '1',
        complete: true,
    },
    {
        uid: Math.random().toString(),
        image: '',
        title: 'Task',
        description: 'jfksld',
        level: '1',
        complete: false,
    },
    {
        uid: Math.random().toString(),
        image: '',
        title: 'Task',
        description: 'jfksld',
        level: '1',
        complete: false,
    },
    {
        uid: Math.random().toString(),
        image: '',
        title: 'Task',
        description: 'jfksld',
        level: '1',
        complete: false,
    },
]);
/* Get Date */
onBeforeMount(async () => {
    // TODO(fetch from server)
    getDate();
});
onBeforeUnmount(() => {
    interval && clearInterval(interval);
    interval = undefined;
});

const currentDate = ref(new Date());
let interval: number | undefined = undefined;
const getDate = () => {
    interval = setInterval(() => currentDate.value = new Date(), 3000);
};

const taskCardClickHandler = () => {
    console.log('[x] taskCardClickHandler');
};
</script>
<style scoped>

</style>