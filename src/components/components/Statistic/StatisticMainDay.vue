<template>
    <div class="statistic-main">
        <div class="section-main__header">
            {{ t('statisticFor') + ' ' + getFullDate }}
        </div>
        <calendar-base/>
        <div class="section-main__header">
            {{ t('program') }}
        </div>
        <table-base
                class="statistic-main__table"
                :headers="headersDayDisplayed"
                :rows-data="data"
        />
        <div class="section-main__header">
            {{ t('extraExercises') }}
        </div>
        <table-base
                class="statistic-main__table"
                :headers="headersDayDisplayed"
                :rows-data="extraData"
                :placeholder="t('noDataFor')+' ' + getFullDate"
        />
    </div>
</template>

<script lang="ts">
export default {
    name: 'StatisticMainDay'
};
</script>
<script setup lang="ts">
import {computed, PropType} from 'vue';
import TableBase from '@/components/app/Table/TableBase.vue';
import {Period} from '@/interfaces/periods';
import {headersDay} from '@/constants/period';
import {TableBaseRowInterface} from '@/components/app/Table/data/tableBase.interface';
import {FormatOptions, formatTime, FormatTimeTypes} from '@/utils/utils';
import {useI18n} from 'vue-i18n';
import {useStore} from 'vuex';
import CalendarBase from '@/components/app/Calendar/CalendarBase.vue';


const props = defineProps({
    period: {type: Object as PropType<Period>, required: true},
    data: {type: Object as PropType<TableBaseRowInterface[]>, required: true},
    extraData: {type: Object as PropType<TableBaseRowInterface[]>, required: true},
    date: {type: Object as PropType<Date>, required: true},
});

const {t} = useI18n();
const store = useStore();

const dateParams: FormatOptions = {
    format: FormatTimeTypes.dateFull,
};

const headersDayDisplayed = computed(() => {
    return headersDay.map(dayParam => ({...dayParam, label: t(dayParam.uname)}));
});

const locale = computed(()=>store.getters['preference/getLocale'])
const getFullDate = computed(() => {
    return formatTime(props.date, dateParams, locale.value);
});

</script>

<style scoped>
.statistic-main > div:first-of-type {
    margin-bottom: 2rem;
}
</style>
