import {DatepickerProps} from '@/components/app/CalendarPicker/data/datepickerProps.interface';
import {Period, PERIODS} from '@/interfaces/periods';
import {TableBaseHeaderInterface} from '@/components/app/Table/data/tableBase.interface';

export const periods: Period[] = [
    {
        id: PERIODS.day,
        label: 'day',
        uname: 'day',
        type: {},
    },
    {
        id: PERIODS.month,
        label: 'month',
        uname: 'month',
        type: {monthPicker: true} as DatepickerProps,
    },
    {
        id: PERIODS.year,
        label: 'year',
        uname: 'year',
        type: {yearPicker: true} as DatepickerProps,
    },
];

export const headersDay:TableBaseHeaderInterface[] = [
    {label: 'Название', uname: 'name'},
    {label: 'Тип', uname: 'type'},
    {label: 'Время', uname: 'time'},
    {label: 'Количество подходов', uname: 'count'},
    {label: 'Рекорд', uname: 'bestTime'}
];

export const headersYearOrMonth:TableBaseHeaderInterface[] = [
    {label: 'Название', uname: 'name'},
    {label: 'Тип', uname: 'type'},
    {label: 'Выполнено раз', uname: 'count'},
    {label: 'Худшее время', uname: 'worseTime'},
    {label: 'Лучшее время', uname: 'bestTime'}
];