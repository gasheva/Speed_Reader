<template>
    <div class="statistic-main">
        <table-base
                :headers="currentHeaders"
                :rows-data="currentData"
        />
    </div>
</template>

<script lang="ts">
export default {
    name: 'StatisticMain'
};
</script>
<script setup lang="ts">
import {computed, PropType, ref, watch} from 'vue';
import TableBase from '@/components/app/Table/TableBase.vue';
import {useStore} from 'vuex';
import {Period, PERIODS} from '@/interfaces/periods';
import {headersDay, headersYearOrMonth} from '@/constants/period';

const props = defineProps({
    period: {type: Object as PropType<Period>, required: true}
});

const store = useStore();


const currentHeaders = computed(() => {
    return props.period.id === PERIODS.day ? headersDay : headersYearOrMonth;
});

const currentData = ref([]);
watch(() => props.period.id, async () => {
    currentData.value = await store.dispatch('statistic/fetchTableForPeriod', {period: props.period.id});
}, {immediate: true});


</script>

<style scoped>

</style>