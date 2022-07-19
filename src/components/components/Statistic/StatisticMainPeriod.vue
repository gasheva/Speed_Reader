<template>
    <div class="statistic-main">
        {{ selectedDate }}
        <table-base
                :headers="headersYearOrMonth"
                :rows-data="data"
        />
    </div>
</template>

<script lang="ts">
export default {
    name: 'StatisticMainPeriod'
};
</script>
<script setup lang="ts">
import {computed, PropType} from 'vue';
import TableBase from '@/components/app/Table/TableBase.vue';
import {Period, PERIODS} from '@/interfaces/periods';
import {headersYearOrMonth} from '@/constants/period';
import {TableBaseRowInterface} from '@/components/app/Table/data/tableBase.interface';
import {formatTime, FormatTimeTypes} from '@/utils/utils';

const props = defineProps({
    period: {type: Object as PropType<Period>, required: true},
    data: {type: Object as PropType<TableBaseRowInterface[]>, required: true},
    extraData: {type: Object as PropType<TableBaseRowInterface[]>, required: true},
    date: {type: Object as PropType<Date>, required: true},
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

</script>

<style scoped>

</style>