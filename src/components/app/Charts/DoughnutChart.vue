<template>
    <Doughnut
            v-if="loaded"
            :chart-data="data"
            :chart-options="chartOptions"
    />
</template>

<script lang="ts">
export default {
    name: "DoughnutChart"
}
</script>
<script setup lang="ts">
import {Doughnut} from 'vue-chartjs';
import {computed, PropType} from 'vue';
import {DoughnutChartDataInterface} from '@/components/app/Charts/data/doughnutChart.interface';
import {ChartOptions} from 'chart.js';

const props = defineProps({
    data: {type: Object as PropType<DoughnutChartDataInterface>, required: true},
    options: {type: Object as PropType<ChartOptions>, default: null}
});


const loaded = true;


const chartOptions = computed(()=> props.options || {
    responsive: true,
    maintainAspectRatio: false,
    events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
    layout: {
        padding: {
            bottom: 0
        }
    },
    borderColor: '#000',
    borderWidth: 1,
    plugins: {
        tooltip: {
            yAlign: 'top',
        },
        legend: {display: false},
    }
})
</script>

<style scoped>

</style>