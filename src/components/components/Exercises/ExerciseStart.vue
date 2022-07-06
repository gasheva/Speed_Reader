<template>
    <div class="exercise-start">
        <div class="exercise-start__buttons">
            <base-button :text="t('startTutorial')"
                         @click="startTutorialHandler"
            />
            <base-button style-btn="black" :text="t('startExercise')"
                         @click="startExerciseHandler"
            />
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'ExerciseStart'
};
</script>
<script setup lang="ts">

import BaseButton from '@/components/app/BaseButton.vue';
import {useI18n} from 'vue-i18n';

const {t} = useI18n();

const startTutorialHandler = () => {
    console.log('[x] startTutorialHandler');
};
const startExerciseHandler = () => {
    console.log('[x] startExerciseHandler');
};
</script>

<style scoped>

</style>