<template>
    <div class="exercise">
        <div class="letters-pyramids">
            <div class="letters-pyramids__item"
                 :style="{'margin-right': Math.floor(currentHeight/3)+1+'em',
                 'margin-left': currentHeight/3+'em'}"
                 v-for="currentHeight in (wordsLength)">
                {{ words[currentHeight - 1] }}
            </div>
        </div>
        <div class="exercise__button">
            <base-button styleBtn="black" :text="t('finishExercise')" @click="finishHandler"/>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: 'LettersPyramids'
};
</script>
<script setup lang="ts">
import {useStore} from 'vuex';
import {useI18n} from 'vue-i18n';
import {computed, onBeforeMount, shallowRef} from 'vue';
import BaseButton from '@/components/app/BaseButton.vue';

const props = defineProps({
    taskName: {type: String, required: true},
});
const emit = defineEmits(['finish']);
const store = useStore();
const {t} = useI18n();

const words = shallowRef<string[]>([]);
const wordsLength = computed(() => {
    return words.value.length;
});
const separator = shallowRef<string>('');
onBeforeMount(async () => {
    const response = await store.dispatch('exercise/fetchExerciseData', {id: props.taskName});
    words.value = response.words;
    separator.value = response.separator;
});

const finishHandler = () => {
    emit('finish');
};
</script>

<style lang="scss" scoped>
$mg: 1em;

.letters-pyramids {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: auto;

  &__item {
    display: flex;
    margin: 0 .25rem;
  }

  &__item:nth-child(3n-2) {
    justify-self: end;
    margin-left: 0 !important;
  }

  &__item:nth-child(3n-1) {
    justify-self: center;
    margin: 0 !important;
  }

  &__item:nth-child(3n) {
    justify-self: start;
    margin-right: 0 !important;
  }

  .separator {
    text-align: center;
  }
}

</style>