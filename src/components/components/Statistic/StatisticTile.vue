<template>
    <div class="statistic-info">
        <div class="statistic-info__chart-wrapper">
            <section class="statistic-wrapper">
                <DoughnutChart
                    :data="chartData"
                />
                <div class="calendar">
                    <calendar-picker
                            :datepicker-type="selectedPeriod.type"
                            v-model:value="date"
                    />
                </div>
            </section>
        </div>
        <select-base
                :menu="periods"
                @select="selectPeriodHandler"
        />
    </div>
</template>

<script lang="ts">
export default {
    name: 'StatisticTile',
};
</script>
<script setup lang="ts">
import SelectBase from '@/components/app/Select/SelectBase.vue';


import {computed, PropType, ref, watch} from 'vue';
import CalendarPicker from '@/components/app/CalendarPicker/CalendarPicker.vue';
import {Period} from '@/interfaces/periods';
import {periods} from '@/constants/period';
import DoughnutChart from '@/components/app/Charts/DoughnutChart.vue';

const props = defineProps({
    selectedPeriod: {type: Object as PropType<Period>, required: true},
    data: {type: Object as PropType<{ id: string, count: number }[]>, required: true},
    undone: {type: Number, required: true},
    selectedDate: {type: [Object, String], required: true},
});
const emit = defineEmits(['selectPeriod', 'update:selectedDate']);

const date = computed({
    get() {
        return props.selectedDate;
    },
    set(val) {
        emit('update:selectedDate', val);
    }
});

const propsIdsAndCounts = computed(() => {
    return props.data.map(item => ({id: item.id, count: item.count}));
});


const chartData = ref({
    labels: ['Выполнено по программе', 'Не выполнено по программе'],
    datasets: [
        {
            backgroundColor: ['#BE3BCA', '#FFF'],
            data: [] as number[]
        }
    ]
});

watch(propsIdsAndCounts, () => {
    const doneExerciseCount = propsIdsAndCounts.value.reduce((sum, item) => sum += item.count, 0);
    chartData.value.datasets[0].data = [doneExerciseCount, props.undone];
}, {immediate: true});

const selectPeriodHandler = (item: Period) => {
    emit('selectPeriod', item);
};
</script>

<style lang="scss" scoped>
.statistic-wrapper {
  position: relative;
}

.calendar {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>