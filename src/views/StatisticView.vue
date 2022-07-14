<template>
    <div class="statistic">
        <main-section-wrapper :parts="['main', 'right']">
            <template #main-tile>
            </template>
            <template #right-tile>
                <Doughnut
                        ref="doughnutRef"
                        v-if="loaded"
                        :chart-data="chartData"
                        :chart-options="chartOptions"
                        :plugins="[plugin]"
                        @click="onClick"
                />
                <div class="pos"
                     ref="calendarRef"
                >jflsd
                </div>
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

import {plugin} from '@/components/components/Statistic/data/doughnutChartPlugin';
import {Doughnut} from 'vue-chartjs';
import {Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, Plugin} from 'chart.js';
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, ref, watch} from 'vue';
import {getBreakpoint} from '@/utils/utils';
import {useStore} from 'vuex';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

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
    elements: {
        center: {
            text: '90%',
            sidePadding: 60
        }
    }
};

const onClick = (info: any) => {
    console.log('onClick', info);
};

const doughnutRef = ref(null);
const store = useStore();
const calendarRef = ref(null);

watch(() => store.state.breakpoint, () => {
    const clientRect = doughnutRef.value.$el.getClientRects()[0];
    const ctx = doughnutRef.value.chart.ctx;
    console.log(ctx);
    console.log(clientRect[0]);
    calendarRef.value.style.left = `${clientRect.left+ctx.computedCenterX}px`;
    calendarRef.value.style.top = `${clientRect.top+ctx.computedCenterY}px`;
});

onBeforeUnmount(() => {
    console.log('doughnutRef', doughnutRef.value.chart.ctx);
});

</script>

<style lang="scss" scoped>
.pos {
  position: absolute;
  right: 50px;
  top: 500px;
}
</style>