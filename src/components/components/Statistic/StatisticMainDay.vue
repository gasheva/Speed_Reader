<template>
    <div class="statistic-main">
        <div class="section-wrapper__title">
            {{ 'Статистика за ' + getFullDate }}
        </div>
        <div>
            Программа развития
        </div>
        <table-base
                :headers="headersDay"
                :rows-data="data"
        />

        Дополнительные упражнения
        <table-base
                :headers="headersDay"
                :rows-data="extraData"
                :placeholder="'Нет данных за ' + getFullDate"
        />
    </div>
</template>

<script lang="ts">
export default {
    name: 'StatisticMainDay'
};
</script>
<script setup lang="ts">
import {computed, PropType} from 'vue';
import TableBase from '@/components/app/Table/TableBase.vue';
import {Period} from '@/interfaces/periods';
import {headersDay} from '@/constants/period';
import {TableBaseRowInterface} from '@/components/app/Table/data/tableBase.interface';
import {FormatOptions, formatTime, FormatTimeTypes} from '@/utils/utils';


const props = defineProps({
    period: {type: Object as PropType<Period>, required: true},
    data: {type: Object as PropType<TableBaseRowInterface[]>, required: true},
    extraData: {type: Object as PropType<TableBaseRowInterface[]>, required: true},
    date: {type: Object as PropType<Date>, required: true},
});

const dateParams: FormatOptions = {
    format: FormatTimeTypes.dateFull,
};
const getFullDate = computed(() => {
    return formatTime(props.date, dateParams);
});

</script>

<style scoped>

</style>