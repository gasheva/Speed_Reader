<template>
    <div class="statistic-info">
        <div class="statistic-info__chart-wrapper">

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
import SelectBase from '@/components/app/Select/SelectBase';

const periods = [
    {
        id: '1',
        label: 'day'
    },
    {
        id: '2',
        label: 'month'
    },
    {
        id: '3',
        label: 'year'
    },
];
const selectPeriodHandler = (item: Object) => {
    console.log('selectPeriodHandler', item);
};
</script>

<style scoped>

</style>