<template>
    <div class="statistic-info">
        <div class="statistic-info__chart-wrapper">
            <section class="statistic-wrapper">
                <Doughnut
                        ref="doughnutRef"
                        v-if="loaded"
                        :chart-data="chartData"
                        :chart-options="chartOptions"
                        @click="onClick"
                />
                <div class="calendar"
                     @click="calendarClickHandler">
                    <calendar-picker
                            :datepicker-type="selectedPeriod.type"
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
import SelectBase from '@/components/app/Select/SelectBase';

import {Doughnut} from 'vue-chartjs';
import {Chart as ChartJS, Title, Tooltip, ArcElement, CategoryScale} from 'chart.js';
import {ref} from 'vue';
import CalendarPicker from '@/components/app/CalendarPicker/CalendarPicker.vue';
import {DatepickerProps} from '@/components/app/CalendarPicker/data/datepickerProps.interface';

ChartJS.register(Title, Tooltip, ArcElement, CategoryScale);

const emit = defineEmits(['select']);

const loaded = true;
const chartData = {
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
    datasets: [
        {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: [40, 20, 80, 10]
        }
    ]
};

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
    layout: {
        padding: {
            bottom: 0
        }
    },
};

const doughnutRef = ref(null);

const calendarClickHandler = () => {

};

const changePeriodHandler = (id: number)=>{

}

const onClick = (info: any) => {
    console.log('onClick', info);
};

const periods = [
    {
        id: '1',
        label: 'day',
        type: {},
    },
    {
        id: '2',
        label: 'month',
        type: {monthPicker: true} as DatepickerProps,
    },
    {
        id: '3',
        label: 'year',
        type: {yearPicker: true} as DatepickerProps,
    },
];
const selectedPeriod = ref(periods[0])
const selectPeriodHandler = (item: Object) => {
    selectedPeriod.value = item
};
</script>

<style lang="scss" scoped>
.statistic-wrapper {
    position: relative;
}

.calendar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>