<template>
    <div class="exercise">
        <div class="letters-pyramids">
            <div class="letters-pyramids__field letters-pyramids__field--right">
                <div class="letters-pyramids__row" v-for="currentHeight in pyramidHeight">
                    <div class="letters-pyramids__item" v-for="i in currentHeight">
                        {{ getWord() }}
                    </div>
                    <div class="letters-pyramids__item separator">|</div>
                </div>
            </div>
            <div class="letters-pyramids__field letters-pyramids__field--left">
                <div class="letters-pyramids__row" v-for="currentHeight in pyramidHeight">
                    <div class="letters-pyramids__item" v-for="i in currentHeight">
                        {{ getWord() }}
                    </div>
                </div>
            </div>
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
import {onBeforeMount, shallowRef} from 'vue';

const props = defineProps({
    taskName: {type: String, required: true},
});
const emit = defineEmits(['finish']);
const store = useStore();
const {t} = useI18n();

const words = shallowRef([]);
const pyramidHeight = shallowRef<number>(0);
const separator = shallowRef<string>('');
onBeforeMount(async () => {
    const response = await store.dispatch('exercise/fetchExerciseData', {id: props.taskName});
    words.value = response.words;
    pyramidHeight.value = response.pyramidHeight;
    separator.value = response.separator;
});

const getWord = $_getWord();

function $_getWord() {
    let wordIdx = 0;
    return () => {
        wordIdx += 1;
        return words.value[wordIdx - 1];
    };
}
</script>

<style lang="scss" scoped>
.letters-pyramids {
  display: flex;
  &__row {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
  }

  &__field {
    display: flex;
    flex-direction: column;

    &--left {
      align-items: start;
    }

    &--right {
      align-items: end;
    }
  }


  &__item {
    margin: 0 .25rem;
  }

  .separator {
    text-align: center;
  }
}
</style>