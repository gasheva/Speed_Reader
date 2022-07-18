<template>
    <div class="statistic-main">
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
import {PropType} from 'vue';
import TableBase from '@/components/app/Table/TableBase.vue';
import {Period} from '@/interfaces/periods';
import {headersYearOrMonth} from '@/constants/period';
import {TableBaseRowInterface} from '@/components/app/Table/data/tableBase.interface';
import {FormatOptions, FormatTimeTypes} from '@/utils/utils';

const props = defineProps({
    period: {type: Object as PropType<Period>, required: true},
    data: {type: Object as PropType<TableBaseRowInterface[]>, required: true},
    extraData: {type: Object as PropType<TableBaseRowInterface[]>, required: true},
    date: {type: Object as PropType<Date>, required: true},
});

// TODO (options depend on period)
const dateParams: FormatOptions = {
    format: FormatTimeTypes.dateFull,
};
</script>

<style scoped>

</style>