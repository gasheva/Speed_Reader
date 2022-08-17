<template>
    <div class="exercise">
        <timer-base class="exercise__timer" :start-time="startTimeSec"
                    @timeout="timeoutHandler" @timeUpdated="timeUpdatedHandler"/>
        <span class="exercise__value">{{ t('currentResult') + ': ' + currentVal }}</span>

        <div class="colour-naming" :style="[{color: wordAndColor[currentIdx]?.hex}]">
            {{ wordAndColor[currentIdx]?.colour }}
        </div>
        <div>
            <button @click="answerHandler(true)">true</button>
            <button @click="answerHandler(false)">false</button>
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
import {onBeforeMount, ref, shallowRef} from 'vue';
import {ColourNamingInterface} from '@/components/components/Exercises/ColourNaming/data/colourNaming';
import TimerBase from '@/components/components/Timer/TimerBase.vue';

const props = defineProps({
    taskName: {type: String, required: true},
});
const emit = defineEmits(['finish']);
const store = useStore();
const {t} = useI18n();

const wordAndColor = shallowRef<ColourNamingInterface[]>([]);
const currentIdx = ref<number>(0);
let currentVal = ref(0);
onBeforeMount(async () => {
    wordAndColor.value = await store.dispatch('exercise/fetchExerciseData', {id: props.taskName});
});

const answerHandler = (val: boolean) => {
    if (wordAndColor.value[currentIdx.value].isRight === val) {
        currentIdx.value += 1;
        currentVal.value += 1;
    }
};
const onResult = ()=>{
    const result = {time:currentTimeSec, level: currentVal.value};
    emit('finish', result);
}

/* TIMER LOGIC */
const startTimeSec = 30;
let currentTimeSec = startTimeSec;
const timeUpdatedHandler = (time: number): void => {
    currentTimeSec = time;
};
const timeoutHandler = () => {
    onResult();
};

</script>

<style lang="scss" scoped>
.colour-naming {
  margin: 3rem;
  text-align: center;
  font-size: 26px;

  > * {
    justify-self: center;
  }
}
</style>