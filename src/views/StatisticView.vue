<template>
    <div class="statistic">
        <main-section-wrapper :parts="['main', 'right']">
            <template #main-tile>
                <statistic-main :period="selectedPeriod"/>
            </template>
            <template #right-tile>
                <statistic-tile @selectPeriod="changePeriodHandler"
                                :selected-period="selectedPeriod"/>
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
import StatisticMain from '@/components/components/Statistic/StatisticMain.vue';
import {ref} from 'vue';
import {Period} from '@/interfaces/periods';
import {periods} from '@/constants/period';

const selectedPeriod = ref<Period>(periods[0]);


const changePeriodHandler = (period: Period) => {
    selectedPeriod.value = period;
};
</script>

<style lang="scss" scoped>
</style>