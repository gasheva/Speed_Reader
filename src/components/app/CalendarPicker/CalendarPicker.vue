<template>
    <div class="calendar-picker">
        <datepicker
                :key="datepickerKeyTrigger"
                v-model="selectedDate"
                v-bind="datepickerType"
                v-bind:hide-input-icon="true"
                :clearable="false"
                :enableTimePicker="false"
                autoApply
                placeholder="Select Date"
                inputClassName="dp-custom-input"
        >
            <template #dp-input="{ value, onInput, onEnter, onTab, onClear }">
                <span class="dp-custom-input" @click.prevent>{{ value }}</span>
            </template>
        </datepicker>
    </div>
</template>

<script lang="ts">
export default {
    name: 'CalendarPicker'
};
</script>
<script setup lang="ts">
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import {DatepickerProps} from '@/components/app/CalendarPicker/data/datepickerProps.interface';
import {computed, ref, watch} from 'vue';
import {DatePickerMonthInterface} from '@/components/app/CalendarPicker/data/datePickerMonth.interface';

const props = defineProps({
    datepickerType: {type: Object as () => DatepickerProps, default: ''},
    value: {type: Object as () => Date, default: new Date()},
});

const emit = defineEmits(['update:value']);

const convertPickerDateToDate = (_pickerDate: DatePickerMonthInterface | string | Date, _datepickerType: DatepickerProps) => {
    if (_pickerDate instanceof Date) return _pickerDate;
    if (_datepickerType.yearPicker) {
        return new Date('01/01/' + _pickerDate);
    }
    // TODO(check cast)
    if (_datepickerType.monthPicker) {
        return new Date(`${(_pickerDate as DatePickerMonthInterface).month + 1}/01/${(_pickerDate as DatePickerMonthInterface).year}`);
    }
    return new Date(_pickerDate as string);
};
const convertDateToPickerDate = (_date: Date, _datepickerType: DatepickerProps): DatePickerMonthInterface | string => {
    if (_datepickerType.yearPicker) {
        return _date.getFullYear().toString();
    }
    if (_datepickerType.monthPicker) {
        return {month: _date.getMonth(), year: _date.getFullYear()};
    }
    return _date.toString();
};

const selectedDate = computed({
    get(): DatePickerMonthInterface | string {
        return convertDateToPickerDate(props.value, props.datepickerType);
    },
    set(val: DatePickerMonthInterface | string | Date) {
        emit('update:value', convertPickerDateToDate(val, props.datepickerType));
    }
});

const datepickerKeyTrigger = ref(0);
watch(() => props.datepickerType, () => {
    const currentDate = new Date();
    selectedDate.value = currentDate;
    if (props.datepickerType?.monthPicker) {
        selectedDate.value = {
            month: currentDate.getMonth() + 1,
            year: currentDate.getFullYear(),
        };
    }
    if (props.datepickerType?.yearPicker) {
        selectedDate.value = currentDate.getFullYear().toString();
    }
    datepickerKeyTrigger.value += 1;
});

</script>

<style lang="scss">
.dp-custom-input {
  text-align: center;
  font-size: 1rem;
  font-family: $montserrat;
  line-height: 1.5rem;
  padding: 3px 3px;
  cursor: pointer;
  border-bottom: 1px solid black;
}
</style>