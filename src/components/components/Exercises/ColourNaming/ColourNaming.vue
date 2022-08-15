<template>
    <div class="exercise">
        <div class="colour-naming">
            <div v-for="record in wordAndColor"
                 :style="[{color: record.hex}]">
                {{ record.colour }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'ColourNaming'
};
</script>
<script setup lang="ts">

import {useStore} from 'vuex';
import {useI18n} from 'vue-i18n';
import {onBeforeMount, shallowRef} from 'vue';
import {ColourNamingInterface} from '@/components/components/Exercises/ColourNaming/data/colourNaming';

const props = defineProps({
    taskName: {type: String, required: true},
});
const emit = defineEmits(['finish']);
const store = useStore();
const {t} = useI18n();

const wordAndColor = shallowRef<ColourNamingInterface[]>([]);
onBeforeMount(async () => {
    wordAndColor.value = await store.dispatch('exercise/fetchExerciseData', {id: props.taskName});
});

</script>

<style lang="scss" scoped>
.colour-naming {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: 2rem;

  @media screen and (max-width: $sm) {
    grid-template-columns: repeat(3, 1fr);
  }

  > * {
    justify-self: center;
  }
}
</style>