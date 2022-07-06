<template>
    <div class="exercise-end">
        <div class="exercise-end__header">
            <span></span>
        </div>
        <div class="exercise-end__content">
        </div>
        <div class="exercise-end__footer">
            <base-button :text="t('restart')" @click="restartHandler"/>
            <base-button :text="t('toExerciseList')" @click="goToExercisesHandler"/>
        </div>
    </div>
</template>

<script>
export default {
    name: "ExerciseEnd"
}
</script>
<script setup lang="ts">

import BaseButton from '@/components/app/BaseButton.vue';
import {useI18n} from 'vue-i18n';

const {t} = useI18n();

const restartHandler = () => {
    console.log('[x] restartHandler');
};

const goToExercisesHandler = () => {
    console.log('[x] goToExercisesHandler');
};

</script>

<style scoped>

</style>