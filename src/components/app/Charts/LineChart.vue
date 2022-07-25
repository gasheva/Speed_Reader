<template>
    <Line
            v-if="loaded"
            :chart-data="data"
            :chart-options="chartOptions"
    />
</template>

<script lang="ts">
export default {
    name: "LineChart"
}
</script>
<script setup lang="ts">
import {Line} from 'vue-chartjs';
import {computed, PropType} from 'vue';
import {ChartOptions} from 'chart.js';
import {LineChartDataInterface} from '@/components/app/Charts/data/lineChart.interface';

const props = defineProps({
    data: {type: Object as PropType<LineChartDataInterface>, required: true},
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