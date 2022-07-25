<template>
    <div class="statistic-main">
        {{ selectedDate }}
        <table-base
                :headers="headersYearOrMonth"
                :rows-data="data"
        />

        <section>
            Статистика по упражнениям
            <div>
                <select-base :menu="exercisesList" @select="changeExerciseHandler"/>
                <LineChart
                        :data="chartData"
                />
            </div>

        </section>
    </div>
</template>

<script lang="ts">
export default {
    name: 'StatisticMainPeriod'
};
</script>
<script setup lang="ts">
import {computed, defineAsyncComponent, defineComponent, onBeforeMount, PropType, ref} from 'vue';
import TableBase from '@/components/app/Table/TableBase.vue';
import {Period, PERIODS} from '@/interfaces/periods';
import {headersYearOrMonth} from '@/constants/period';
import {TableBaseRowInterface} from '@/components/app/Table/data/tableBase.interface';
import {formatTime, FormatTimeTypes} from '@/utils/utils';
import SelectBase from '@/components/app/Select/SelectBase.vue';
import {useStore} from 'vuex';

import LineChart from '@/components/app/Charts/LineChart.vue';


const props = defineProps({
    period: {type: Object as PropType<Period>, required: true},
    data: {type: Object as PropType<TableBaseRowInterface[]>, required: true},
    extraData: {type: Object as PropType<TableBaseRowInterface[]>, required: true},
    date: {type: Object as PropType<Date>, required: true},
});

const store = useStore();

const selectedDate = computed(() => {
    if (props.period.id === PERIODS.year) {
        return getYearFormat(props.date);
    }
    return getMonthFormat(props.date);
});
const getYearFormat = (_date: Date): string => {
    return _date.getFullYear() + ' г.';
};

const getMonthFormat = (_date: Date): string => {
    return formatTime(_date, {format: FormatTimeTypes.monthAndYear});
};

/* CHART */
const exercisesList = ref([]);
onBeforeMount(async () => {
    // TODO(maybe only names)
    exercisesList.value = (await store.dispatch('statistic/fetchAllExercisesForPeriod')).map((item: Object) => ({
        ...item,
        label: item.name    // TODO(interface)
    }));
});
const changeExerciseHandler = (item: Object) => {
    console.log('changeExerciseHandler');
    console.log(item);
};

// TODO (finish date)
const chartData = ref({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 39, 10, 40, 39, 80, 40]
        }
    ],
});
</script>

<style scoped>

</style>