<template>
    <div class="statistic">
        <main-section-wrapper :parts="['main', 'right']">
            <template #main-tile>
            </template>
            <template #right-tile>
                <section class="statistic-wrapper">
                    <Doughnut
                            ref="doughnutRef"
                            v-if="loaded"
                            :chart-data="chartData"
                            :chart-options="chartOptions"
                            @click="onClick"
                    />
                    <div class="calendar"
                         @click="calendarClickHandler"
                    >
                        jflsd
                    </div>
                </section>
                <statistic-tile/>
            </template>
        </main-section-wrapper>
    </div>
</template>

<script lang="ts">
export default {
    name: 'StatisticView'
};
</script>
<script setup lang="ts">
import MainSectionWrapper from '@/components/app/MainSectionWrapper.vue';
import StatisticTile from '@/components/components/Statistic/StatisticTile.vue';

import {Doughnut} from 'vue-chartjs';
import {Chart as ChartJS, Title, Tooltip, ArcElement, CategoryScale} from 'chart.js';
import {ref} from 'vue';

ChartJS.register(Title, Tooltip, ArcElement, CategoryScale);

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

const onClick = (info: any) => {
    console.log('onClick', info);
};

const doughnutRef = ref(null);

const calendarClickHandler = () => {

};
</script>

<style lang="scss" scoped>
.statistic-wrapper {
  position: relative;
}

.calendar {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>