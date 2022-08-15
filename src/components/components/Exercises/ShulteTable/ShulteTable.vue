<template>
    <div class="exercise">
        <timer-base class="exercise__timer" :start-time="startTimeSec"
                    @timeout="timeoutHandler" @timeUpdated="timeUpdatedHandler"/>

        <div class="shulte-table">
            <span class="exercise__value">{{t('currentResult') +': ' + currentVal}}</span>
            <div class="shulte-table__row" v-for="rowIdx in tableSize">
                <shulte-table-cell
                        v-for="colIdx in tableSize"
                        :value="getVal(rowIdx, colIdx).value"
                        :is-next="getVal(rowIdx, colIdx).index===currentVal"
                        @rightSelect="rightSelectHandler"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'ShulteTable',
};
</script>
<script setup lang="ts">

import TimerBase from '@/components/components/Timer/TimerBase.vue';
import {computed, onBeforeMount, ref} from 'vue';
import ShulteTableCell from '@/components/components/Exercises/ShulteTable/ShulteTableCell.vue';
import {ShulteData} from '@/components/components/Exercises/ShulteTable/data/shulteData.interface';
import {useStore} from 'vuex';
import {useI18n} from 'vue-i18n';

const props = defineProps({
    taskName: {type: String, required: true},
})
const emit = defineEmits(['finish']);
const store = useStore();
const {t} = useI18n();

const timeoutHandler = () => {
    onResult();
};

const onResult = ()=>{
    const result = {time:currentTimeSec, level: currentVal.value};
    emit('finish', result);
}

/* GAME LOGIC */
const tableSize = ref<number>(0);
let cellCount: number = 0;
let shulteTable = ref<ShulteData[]>([]);
let currentVal = ref(1);
onBeforeMount(async () => {
    tableSize.value = (await store.dispatch('exercise/fetchExerciseData', {id:props.taskName})).size;
    cellCount = tableSize.value * tableSize.value;
    shulteTable.value = generateTable(cellCount, props.taskName);
    shuffle(shulteTable.value);
});

const locale = computed(()=> store.getters['preference/getLocale']);

const getFirstLetter = (locale: string = 'ru')=>{
    if (locale==='ru'){
        return 1040;
    }
    return 65;
}

const generateTable = (arrayCapacity: number, type: string): ShulteData[] => {
    const getValue = (i: number):string=>{
        if(type==='numbers'){
            return i.toString();
        }
        return String.fromCharCode(getFirstLetter(locale.value)+i);
    }

    const randomArray = [];
    for (let i = 1; i < arrayCapacity + 1; i++) {
        randomArray.push({index: i, value: getValue(i-1)});
    }
    return randomArray;
};

const shuffle = (arr: Object[]): void => {
    for (let i = arr.length - 1; i >= 0; i--) {
        const randomIndex = Math.floor(Math.random() * i);
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
};

const getVal = (rowIdx: number, colIdx: number): ShulteData => {
    return shulteTable.value[(rowIdx - 1) * tableSize.value + (colIdx - 1)];
};

const isGameFinished = computed(() => {
    return currentVal.value === cellCount;
});

const rightSelectHandler = () => {
    if (isGameFinished.value) {
        onResult();
        return;
    }
    currentVal.value += 1;
};


/* TIMER LOGIC */
const startTimeSec = 30;
let currentTimeSec = startTimeSec;
const timeUpdatedHandler = (time: number): void => {
    currentTimeSec = time;
};
</script>

<style lang="scss" scoped>
.shulte-table {
  &__row {
    display: flex;
    width: 100%;
  }
}
.exercise{
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: auto;
  padding: 1.5rem 0;

  &__timer{
    align-self: end;
  }

  &__value{
    display: block;
    align-self: end;
    width: fit-content;
    margin: .25rem 0 .25rem auto;
  }
}
</style>