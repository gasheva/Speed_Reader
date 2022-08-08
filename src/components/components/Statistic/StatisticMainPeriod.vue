<template>
    <div class="statistic-main">
        <div class="section-main__header">
            {{t('statisticFor')+' ' + selectedDate }}
        </div>
        <table-base
                class="statistic-main__table"
                :headers="headersYearOrMonthDisplayed"
                :rows-data="data"
        />

        <section>
            <div class="section-main__header">
                {{ t('exerciseStatistic') }}
            </div>
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
import {computed, onBeforeMount, PropType, ref, watch} from 'vue';
import TableBase from '@/components/app/Table/TableBase.vue';
import {Period, PERIODS} from '@/interfaces/periods';
import {headersYearOrMonth} from '@/constants/period';
import {TableBaseRowInterface} from '@/components/app/Table/data/tableBase.interface';
import {formatTime, FormatTimeTypes} from '@/utils/utils';
import SelectBase from '@/components/app/Select/SelectBase.vue';
import {useStore} from 'vuex';

import LineChart from '@/components/app/Charts/LineChart.vue';
import {LineChartDataInterface} from '@/components/app/Charts/data/lineChart.interface';
import {useI18n} from 'vue-i18n';


const props = defineProps({
    period: {type: Object as PropType<Period>, required: true},
    data: {type: Object as PropType<TableBaseRowInterface[]>, required: true},
    extraData: {type: Object as PropType<TableBaseRowInterface[]>, required: true},
    date: {type: Object as PropType<Date>, required: true},
});

const store = useStore();
const {t} = useI18n();

const headersYearOrMonthDisplayed = computed(() => {
    return headersYearOrMonth.map(param => ({...param, label: t(param.uname)}));
});

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
let selectedExercise = null;
onBeforeMount(async () => {
    // TODO(maybe only names)
    exercisesList.value = (await store.dispatch('statistic/fetchAllExercisesForPeriod')).map((item: Object) => ({
        ...item,
        label: item.name    // TODO(interface)
    }));
});

watch([() => props.period, () => props.date], async () => {
    await fetchExercise(selectedExercise, props.period.id);
});

const changeExerciseHandler = async (item: Object) => {
    console.log('changeExerciseHandler');
    selectedExercise = item;
    await fetchExercise(item, props.period.id);
};

const chartData = ref<LineChartDataInterface>({
    labels: [],
    datasets: [
        {
            label: '',
            backgroundColor: '#f87979',
            data: []
        }
    ],
});
const fetchExercise = async (item: Object, period: PERIODS) => {
    if (!item?.id) return;
    const exerciseData = await store.dispatch('statistic/fetchExerciseForPeriodById', {id: item.id});
    chartData.value.datasets[0].data = [];
    chartData.value.labels = [];
    exerciseData.statistic.forEach(stat => {
        chartData.value.datasets[0].data.push(stat.count);
        chartData.value.labels.push($_formatDateOnPeriod(period, stat.date));
    });
};

const $_formatDateOnPeriod = (period: PERIODS, date: Date) => {
    return period === PERIODS.month ? formatTime(date, {format: FormatTimeTypes.dateShort})
        : formatTime(date, {format: FormatTimeTypes.monthAndYear});
};
</script>

<style scoped>

</style>