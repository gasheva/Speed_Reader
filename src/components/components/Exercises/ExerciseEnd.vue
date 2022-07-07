<template>
    <div class="exercise-end">
        <div class="exercise-end__header">
            <span></span>
        </div>
        <div class="exercise-end__content">
        </div>
        <div class="exercise-end__buttons">
            <base-button class="exercise-end__button"
                    :text="t('restart')" @click="restartHandler"/>
            <base-button class="exercise-end__button"
                    :text="t('toExerciseList')"
                         style-btn="black"
                         @click="goToExercisesHandler"/>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'ExerciseEnd'
};
</script>
<script setup lang="ts">

import BaseButton from '@/components/app/BaseButton.vue';
import {useI18n} from 'vue-i18n';

const emit = defineEmits(['restart', 'goToExercises']);
const {t} = useI18n();

const restartHandler = () => {
    emit('restart');
};

const goToExercisesHandler = () => {
    emit('goToExercises');
};

</script>

<style lang="scss" scoped>
.exercise-end {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 500px;

  &__content{
    flex:1;
  }

  &__buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    max-width: 70%;
    width: 100%;
    margin: 0 auto;
    gap: 2rem;
  }

  &__button{
    max-width: 273px;
    min-width: 245px;
  }
}
</style>