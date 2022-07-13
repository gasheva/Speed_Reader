<template>
    <div class="exercise">
        <timer-base :start-time="55" @timeout="timeoutHandler" @timeUpdated="timeUpdatedHandler"/>

        <div class="shulte-table">
            {{currentVal}}
            <div class="shulte-table__row" v-for="rowIdx in tableSize">
                <shulte-table-cell
                        v-for="colIdx in tableSize"
                        :value="getVal(rowIdx, colIdx)"
                        :is-next="getVal(rowIdx, colIdx)===currentVal"
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

const emit = defineEmits(['finish']);
const timeoutHandler = () => {
    onResult();
};

const onResult = ()=>{
    const result = {time:currentTimeSec, level: currentVal.value};
    emit('finish', result);
}

/* GAME LOGIC */
let tableSize: number = 5;
let cellCount: number = 0;
let shulteTable = ref<number[]>([]);
let currentVal = ref(1);
onBeforeMount(async () => {
    // TODO (fetch size)
    cellCount = tableSize * tableSize;
    shulteTable.value = generateTable(cellCount);
    shuffle(shulteTable.value);
});

const generateTable = (arrayCapacity: number): number[] => {
    const randomArray = [];
    for (let i = 1; i < arrayCapacity + 1; i++) {
        randomArray.push(i);
    }
    return randomArray;
};

const shuffle = (arr: Object[]): void => {
    for (let i = arr.length - 1; i >= 0; i--) {
        const randomIndex = Math.floor(Math.random() * i);
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
};

const getVal = (rowIdx: number, colIdx: number): number => {
    return shulteTable.value[(rowIdx - 1) * tableSize + (colIdx - 1)];
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
const startTimeSec = 55;
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