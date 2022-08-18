<template>
    <main-section-wrapper :parts="parts">
        <template #main-tile>
            <exercise-start
                    v-show="isStartPageVisible"
                    @startTutorial="startTutorialHandler"
                    @startExercise="startExerciseHandler"
            />
            <component :is="exercisesComponents[currentComponent]"
                       v-if="isExercisePageVisible"
                       :task-name="currentComponent"
                       @finish="finishExerciseHandler"
            />
            <exercise-end
                    v-show="isEndPageVisible"
                    @restart="restartHandler"
                    @goToExercises="goToExercisesHandler"
            />
        </template>
        <template #right-tile>
            <div class="exercise-description">
                <p class="exercise-description__title">Title</p>
                <p>Description</p>
            </div>
        </template>
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

const ShulteTable = defineAsyncComponent(() => import(/* webpackChunkName: "ShulteTable" */'@/components/components/Exercises/ShulteTable/ShulteTable.vue'));
const UpDownTextReading = defineAsyncComponent(() => import(/* webpackChunkName: "UpDownTextReading" */'@/components/components/Exercises/UpDownTextReading/UpDownTextReading.vue'));
const VerticalReading = defineAsyncComponent(() => import(/* webpackChunkName: "VerticalReading" */'@/components/components/Exercises/VerticalReading/VerticalReading.vue'));
const ColourNaming = defineAsyncComponent(() => import(/* webpackChunkName: "ColourNaming" */'@/components/components/Exercises/ColourNaming/ColourNaming.vue'));
const LettersPyramids = defineAsyncComponent(() => import(/* webpackChunkName: "LettersPyramids" */'@/components/components/Exercises/LettersPyramids/LettersPyramids.vue'));

const router = useRouter();

const exercisesComponents = {ShulteTable, UpDownTextReading, VerticalReading,
    ColourNaming, LettersPyramids};
const currentComponent = router.currentRoute.value.name;


const statuses = {start: 'start', exercise: 'exercise', tutorial: 'tutorial', end: 'end'};
const currentStatus = ref(statuses.start);

const finishExerciseHandler = () => {
    currentStatus.value = statuses.end;
};
const startTutorialHandler = () => {
    currentStatus.value = statuses.tutorial;
};
const startExerciseHandler = () => {
    currentStatus.value = statuses.exercise;
};
const restartHandler = () => {
    currentStatus.value = statuses.exercise;
};
const goToExercisesHandler = () => {
    router.push({name: 'home'});
};

const isStartPageVisible = computed(() => currentStatus.value === statuses.start);
const isExercisePageVisible = computed(() => currentStatus.value === statuses.exercise ||
    currentStatus.value === statuses.tutorial);
const isEndPageVisible = computed(() => currentStatus.value === statuses.end);

const parts = computed(() => {
    return ['main', 'right'];
});
</script>

<style lang="scss" scoped>
.exercise-description {
  padding: 1rem 2rem;

  &__title {
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
  }
}
</style>