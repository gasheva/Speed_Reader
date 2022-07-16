import {DatepickerProps} from '@/components/app/CalendarPicker/data/datepickerProps.interface';

export enum PERIODS {
    day, month, year
}

export interface Period{
    id: PERIODS,
    label: string,
    type: DatepickerProps,
}