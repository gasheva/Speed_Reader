<template>
    <div class="statistic-main">
        <table-base
                :headers="currentHeaders"
                :rows-data="data"
        />
    </div>
</template>

<script lang="ts">
export default {
    name: 'StatisticMain'
};
</script>
<script setup lang="ts">
import {computed, PropType} from 'vue';
import TableBase from '@/components/app/Table/TableBase.vue';
import {useStore} from 'vuex';
import {Period, PERIODS} from '@/interfaces/periods';
import {headersDay, headersYearOrMonth} from '@/constants/period';
import {TableBaseRowInterface} from '@/components/app/Table/data/tableBase.interface';

const props = defineProps({
    period: {type: Object as PropType<Period>, required: true},
    data: {type: Object as PropType<TableBaseRowInterface[]>, required: true},
});

const store = useStore();


const currentHeaders = computed(() => {
    return props.period.id === PERIODS.day ? headersDay : headersYearOrMonth;
});

</script>

<style scoped>

</style>