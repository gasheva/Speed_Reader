import {Breakpoints} from '@/constants/breakpoint.constant';
import {useI18n} from 'vue-i18n';

export function getBreakpoint(windowWidth: Number): Breakpoints | undefined {
    switch (true) {
        case windowWidth >= 1400:
            return Breakpoints.XXL;
        case windowWidth >= 1200:
            return Breakpoints.XL;
        case windowWidth >= 992:
            return Breakpoints.LG;
        case windowWidth >= 768:
            return Breakpoints.MD;
        case windowWidth >= 576:
            return Breakpoints.SM;
        case windowWidth > 0:
            return Breakpoints.XS;
        default:
            return Breakpoints.XL;
    }
}

export enum FormatTimeTypes {
    dateFull, dateShort, time, daysBack, monthAndYear
}

interface IntlDateOptions {
    day?: string,
    month?: string,
    year?: string,
    hour?: string,
    minute?: string,
    second?: string
}

export interface FormatOptions {
    format: FormatTimeTypes,
    maxFullDay?: number,
}

export function formatTime(value: Date, params: FormatOptions) {
    let options: IntlDateOptions = {};
    const dateOptions = (): IntlDateOptions => ({
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });
    if(params.format === FormatTimeTypes.monthAndYear){
        options = {
            month: 'long',
            year: 'numeric'
        }
    }
    if (params.format === FormatTimeTypes.dateFull) {
        options = dateOptions();
    }
    if (params.format === FormatTimeTypes.dateShort) {
        options.day = '2-digit';
        options.month = '2-digit';
        options.year = '2-digit';
    }
    if (params.format === FormatTimeTypes.time) {
        options.hour = '2-digit';
        options.minute = '2-digit';
        options.second = '2-digit';
    }
    if (params.format === FormatTimeTypes.daysBack) {
        if(!params.maxFullDay) throw "Expected argument - 'daysBack'"
        const currentDate = new Date();
        const diffTime = Math.abs(currentDate.getTime() - value.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays > params.maxFullDay) {
            options = dateOptions();
        } else {
            const getFullDays = (dayCount: number) => {
                const {t} = useI18n();
                return t('dayCountable', dayCount) + ' назад';
            };
            return getFullDays(diffDays);
        }

    }

    // TODO(get locale)
    // const locale = store.getters.info.locale || 'ru-Ru';
    const locale = 'ru-Ru';
    return new Intl.DateTimeFormat(locale, options as Intl.DateTimeFormatOptions)
        .format(new Date(value));
}

export function validateAuthCredits(_credits: { email: string, password: string }): Boolean {
    return !(!_credits.email || !_credits.password);
}

export function deepClone(dataToClone: Object | any[]){
    return JSON.parse(JSON.stringify(dataToClone));
}