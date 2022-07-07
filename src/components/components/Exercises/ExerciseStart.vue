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

const emit = defineEmits(['startTutorial', 'startExercise']);
const {t} = useI18n();

const startTutorialHandler = () => {
    emit('startTutorial');

};
const startExerciseHandler = () => {
    emit('startExercise');
};
</script>

<style lang="scss" scoped>
.exercise-start {
  display: flex;
  align-items: center;
  height: 500px;
  padding: 2rem 0;
  background-color: $grey-3;

  &__buttons{
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 70%;
    width: 100%;
    margin: 0 auto;
    gap: 2rem;
  }
}
</style>