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
import {ref, watch} from 'vue';

const props = defineProps({
    datepickerType: {type: Object as () => DatepickerProps, default: ''}
});

const selectedDate = ref(new Date());

const datepickerKeyTrigger = ref(0);
watch(()=> props.datepickerType, ()=>{
    const currentDate = new Date();
    selectedDate.value = currentDate;
    if(props.datepickerType?.monthPicker){
        selectedDate.value = {
            month: currentDate.getMonth()+1,
            year: currentDate.getFullYear(),
        }
    }
    if(props.datepickerType?.yearPicker){
        selectedDate.value = currentDate.getFullYear().toString();
    }
    datepickerKeyTrigger.value+=1;
    // selectedDate.value='02/02/2002';
    // selectedDate.value = {
    //     month: 1,
    //     year: 2022,
    // }
});

watch(selectedDate, () => {
    console.log(selectedDate.value);
});
// const selectDateHandler = (selectedDate: any)=>{
//     debugger;
//     console.log(selectedDate);
// }

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