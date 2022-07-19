<template>
    <div class="statistic">
        <main-section-wrapper :parts="['main', 'right']">
            <template #main-tile>
                <keep-alive>
                    <component
                            :is="mainComponents[currentComponentName]"
                            :period="selectedPeriod"
                            :extra-data="[]"
                            :data="currentData"
                            :date="selectedDate"
                    />
                </keep-alive>
            </template>
            <template #right-tile>
                <statistic-tile v-model:selected-date="selectedDate"
                                :selected-period="selectedPeriod"
                                :data="currentData"
                                :selected-date="selectedDate"
                                :undone="10"
                                @selectPeriod="changePeriodHandler"
                />
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
import StatisticMainDay from '@/components/components/Statistic/StatisticMainDay.vue';
import StatisticMainPeriod from '@/components/components/Statistic/StatisticMainPeriod.vue';
import {ref, watch} from 'vue';
import {Period, PERIODS} from '@/interfaces/periods';
import {periods} from '@/constants/period';
import {useStore} from 'vuex';

const store = useStore();
const mainComponents = {StatisticMainDay, StatisticMainPeriod};
const selectedPeriod = ref<Period>(periods[0]);
const currentComponentName = ref('');

const changePeriodHandler = (period: Period) => {
    selectedPeriod.value = period;
};

const currentData = ref([]);
const selectedDate = ref(new Date());
watch(() => selectedPeriod.value.id, async () => {
    currentComponentName.value = selectedPeriod.value.id === PERIODS.day ? 'StatisticMainDay'
        : 'StatisticMainPeriod';
    currentData.value = await store.dispatch('statistic/fetchTableForPeriod', {period: selectedPeriod.value.id});
}, {immediate: true});

</script>

<style lang="scss" scoped>
</style>