<template>
    <div class="program">
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
import {FormatOptions, formatTime, FormatTimeTypes} from '@/utils/utils';
import {useDateInterval} from '@/composable/dateInterval';

const emit = defineEmits(['select']);
const props = defineProps({
    tasks: {type: Object, default: []},
});

const dateParams: FormatOptions = {
    format: FormatTimeTypes.dateShort,
};

const {currentDate} = useDateInterval();
const taskCardClickHandler = (taskName: string) => {
    emit('select', taskName);
};
</script>
<style lang="scss" scoped>
.program {
  padding: 1.5rem 2.75rem 1.5rem;
}
</style>