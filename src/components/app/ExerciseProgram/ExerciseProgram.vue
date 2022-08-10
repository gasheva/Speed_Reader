<template>
    <div class="program">
        <div class="program__tasks-block">
            <span class="section-wrapper__text"></span>

            <div class="program__tasks tasks-wrapper">
                <task-card class="program__task"
                           v-for="task in tasks"
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
import {FormatOptions, FormatTimeTypes} from '@/utils/utils';

const emit = defineEmits(['select']);
const props = defineProps({
    tasks: {type: Object, default: []},
});

const dateParams: FormatOptions = {
    format: FormatTimeTypes.dateShort,
};

const taskCardClickHandler = (taskName: string) => {
    emit('select', taskName);
};
</script>
<style lang="scss" scoped>
.program {
  &__tasks {
    margin: auto;
  }
}
</style>