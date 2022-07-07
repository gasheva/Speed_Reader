<template>
    <main-section-wrapper :parts="['main', 'right']">
        <exercise-start
                v-show="isStartPageVisible"
                @startTutorial="startTutorialHandler"
                @startExercise="startExerciseHandler"
        />
        <component :is="exercisesComponents[currentComponent]"
                   v-if="isExercisePageVisible"
                   @finish="finishExerciseHandler"
        />
        <exercise-end
                v-show="isEndPageVisible"
                @restart="restartHandler"
                @goToExercises="goToExercisesHandler"
        />

        <template #right-tile>fds</template>
    </main-section-wrapper>
</template>

<script lang="ts">
export default {
    name: 'ExerciseContainer'
};
</script>
<script setup lang="ts">

import ExerciseStart from '@/components/components/Exercises/ExerciseStart.vue';
import ExerciseEnd from '@/components/components/Exercises/ExerciseEnd.vue';
import {computed, defineAsyncComponent, ref} from 'vue';
import {useRouter} from 'vue-router';
import MainSectionWrapper from '@/components/app/MainSectionWrapper.vue';

const ShulteTable = defineAsyncComponent(() => import('@/components/components/Exercises/ShulteTable/ShulteTable.vue'))

const router = useRouter();

const exercisesComponents = {ShulteTable};
const currentComponent = router.currentRoute.value.name;


const statuses = {start: 'start', exercise:'exercise', tutorial: 'tutorial', end: 'end'}
const currentStatus = ref(statuses.start)

const finishExerciseHandler = () => {
    console.log('finishExerciseHandler');
    currentStatus.value = statuses.end;
};
const startTutorialHandler = () => {
    console.log('startTutorialHandler');
    currentStatus.value = statuses.tutorial;
};
const startExerciseHandler = () => {
    console.log('startExerciseHandler');
    currentStatus.value = statuses.exercise;
};
const restartHandler = () => {
    console.log('restartHandler');
    currentStatus.value = statuses.exercise;
};
const goToExercisesHandler = () => {
    console.log('goToExercisesHandler');
    router.push({name:'home'})
};

const isStartPageVisible = computed(()=>currentStatus.value===statuses.start);
const isExercisePageVisible = computed(()=>currentStatus.value===statuses.exercise ||
    currentStatus.value===statuses.tutorial);
const isEndPageVisible = computed(()=>currentStatus.value===statuses.end);
</script>

<style scoped>

</style>