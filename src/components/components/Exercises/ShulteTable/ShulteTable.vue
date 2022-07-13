<template>
    <div class="exercise">
        <timer-base :start-time="startTimeSec" @timeout="timeoutHandler" @timeUpdated="timeUpdatedHandler"/>

        <div class="shulte-table">
            {{currentVal}}
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

const props = defineProps({
    taskName: {type: String, required: true},
})
const emit = defineEmits(['finish']);
const store = useStore();

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

const generateTable = (arrayCapacity: number, type: string): ShulteData[] => {
    const getValue = (i: number):string=>{
        if(type==='numbers'){
            return i.toString();
        }
        return String.fromCharCode(1039+i);
    }

    const randomArray = [];
    for (let i = 1; i < arrayCapacity + 1; i++) {
        randomArray.push({index: i, value: getValue(i)});
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
const startTimeSec = 5;
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
</style>