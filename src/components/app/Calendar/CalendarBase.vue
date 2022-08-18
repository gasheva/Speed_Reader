<template>
    <div>
        <div id="tooltip" class="calendar-tooltip">fsdf</div>
        <svg width="823" height="128" class="js-calendar-graph-svg">
            <g transform="translate(15, 20)"
               data-hydro-click="{'event_type':'user_profile.click','payload':{'profile_user_id':65405671,'target':'CONTRIBUTION_CALENDAR_SQUARE','user_id':65405671,'originating_url':'https://github.com/users/gasheva/contributions?from=2021-12-01&amp;to=2021-12-31'}}"
               data-hydro-click-hmac="c39844e10042f1867547c6127a153f12b9cd25f7dd30b4122bdefb8bbedff496">
                <!-- FIRST WEEK -->
                <g transform="translate(0, 0)">
                    <rect v-for="day in getFirstWeekDaysAmount(selectedYear)"
                          width="11" height="11" x="16" :y="(getDay(firstJan)-1)*15+(day-1)*15"
                          class="ContributionCalendar-day" rx="2" ry="2" data-count="0"
                          :data-date="`${selectedYear}-01-${day}`" data-level="0"
                          @click="showTooltip($event, 'This is blue');" @onmouseout="hideTooltip();"
                    />
                </g>

                <g v-for="week in selectedYearWeeks-1" :transform="`translate(${week*16}, 0)`">
                    <rect v-for="day in 7"
                          :id="getFirstWeekDaysAmount(selectedYear)+(7*week-(7-day))"
                          width="11" height="11" :x="16-week" :y="15*(day-1)"
                          class="ContributionCalendar-day" rx="2" ry="2" data-count="0"
                          :data-date="new Date(Number(firstJan)+getNumberFromYearBegin(getFirstWeekDaysAmount(selectedYear)+(7*week-(7-day)))-1)"
                          data-level="0"/>
                </g>

                <!-- LAST WEEK -->
                <g :transform="`translate(${selectedYearWeeks*16}, 0)`">
                    <rect v-for="day in getLastWeekDaysAmount(selectedYear)"
                          width="11" height="11" :x="16-selectedYearWeeks" :y="15*(day-1)"
                          class="ContributionCalendar-day" rx="2" ry="2" data-count="0"
                          :data-date="`${selectedYear}-12-${31-getLastWeekDaysAmount(selectedYear)+day}`"
                          data-level="0"/>
                </g>
                <text x="16" y="-8" class="ContributionCalendar-label">Jan</text>
                <text x="106" y="-8" class="ContributionCalendar-label">Feb</text>
                <text x="166" y="-8" class="ContributionCalendar-label">Mar</text>
                <text x="226" y="-8" class="ContributionCalendar-label">Apr</text>
                <text x="286" y="-8" class="ContributionCalendar-label">May</text>
                <text x="361" y="-8" class="ContributionCalendar-label">Jun</text>
                <text x="421" y="-8" class="ContributionCalendar-label">Jul</text>
                <text x="481" y="-8" class="ContributionCalendar-label">Aug</text>
                <text x="556" y="-8" class="ContributionCalendar-label">Sep</text>
                <text x="616" y="-8" class="ContributionCalendar-label">Oct</text>
                <text x="691" y="-8" class="ContributionCalendar-label">Nov</text>
                <text x="751" y="-8" class="ContributionCalendar-label">Dec</text>
                <text text-anchor="start" class="ContributionCalendar-label" dx="-15" dy="8">Mon</text>
                <text text-anchor="start" class="ContributionCalendar-label" dx="-15" style="display: none;" dy="25">
                    Tue
                </text>
                <text text-anchor="start" class="ContributionCalendar-label" dx="-15" dy="41">Wed</text>
                <text text-anchor="start" class="ContributionCalendar-label" dx="-15" style="display: none;" dy="56">
                    Thu
                </text>
                <text text-anchor="start" class="ContributionCalendar-label" dx="-15" dy="71">Fri</text>
                <text text-anchor="start" class="ContributionCalendar-label" dx="-15" style="display: none;" dy="86">
                    Sat
                </text>
                <text text-anchor="start" class="ContributionCalendar-label" dx="-15" dy="100">Sun</text>
            </g>
        </svg>
    </div>
</template>

<script lang="ts">
export default {
    name: 'CalendarBase'
};
</script>
<script setup lang="ts">
import {computed, onMounted, onUnmounted} from 'vue';
import {formatTime, FormatTimeTypes} from '@/utils/utils';
import {useStore} from 'vuex';

const store = useStore();
const firstJan = new Date(2017, 0);

const selectedYear = computed(() => {
    return firstJan.getFullYear();
});

const selectedYearDays = computed(() => {
    return getDaysInYear(selectedYear.value);
});

const selectedYearWeeks = computed(() => {
    return getWeekAmount(selectedYearDays.value, getFirstWeekDaysAmount(selectedYear.value));
});

const getDaysInYear = (year: number): number => {
    // @ts-ignore
    return (new Date(`${year}/12/31`) - new Date(`${year}/01/01`)) / 60 / 60 / 24 / 1000 + 1;
};

const getWeekAmount = (daysAmount: number, firstWeekDays: number): number => {
    return Math.ceil((daysAmount - firstWeekDays) / 7);
};

const getFirstWeekDaysAmount = (year: number) => {
    const firstJanuary = new Date(year, 0);
    const dayOfWeek = getDay(firstJanuary);
    return 7 - dayOfWeek + 1;
};

const getLastWeekDaysAmount = (year: number) => {
    const lastDecember = new Date(year, 11, 31);
    return getDay(lastDecember);
};

const getDay = (date: Date) => {
    const day = date.getDay();
    return day === 0 ? 7 : day;
};

const getNumberFromYearBegin = (day: number) => {
    return 24 * 60 * 60 * 1000 * day;
};

const locale = computed(() => store.getters['preference/getLocale']);

onMounted(() => {
    addEventListeners();
});

onUnmounted(() => {
    for (let day = 1; day <= selectedYearDays.value; day++) {
        document.getElementById(day.toString())?.removeEventListener('mouseenter', showTooltip);
        document.getElementById(day.toString())?.removeEventListener('mouseleave', hideTooltip);
    }
});


const showTooltip = (evt: MouseEvent) => {
    const tooltip = document.getElementById('tooltip');
    if (tooltip) {
        tooltip.style.display = 'block';
        // not standard properties
        tooltip.style.top = evt.layerY - 20 + 'px';
        tooltip.style.left = evt.layerX + 5 + 'px';
        const selectedDate = new Date(evt.path[0].attributes['data-date'].nodeValue);
        // TODO(add exercise count (maybe also attribute))
        tooltip.innerHTML = formatTime(selectedDate, {format: FormatTimeTypes.dateShort}, locale.value);
    }
};

const hideTooltip = () => {
    const tooltip = document.getElementById('tooltip');
    if (tooltip) {
        tooltip.style.display = 'none';
    }
};

const addEventListeners = () => {
    for (let day = 1; day <= selectedYearDays.value; day++) {
        document.getElementById(day.toString())?.addEventListener('mouseenter', showTooltip);
        document.getElementById(day.toString())?.addEventListener('mouseleave', hideTooltip);
    }
};
</script>

<style lang="scss" scoped>
.ContributionCalendar-day {
  position: relative;
  pointer-events: all;
  fill: $grey-1;
  shape-rendering: geometricPrecision;
  outline: 1px solid $grey-3;
  outline-offset: -1px;

  &:hover {
    fill: $grey-2;
  }
}

div {
  position: relative;
}

.calendar-tooltip {
  position: absolute;
  display: none;
  padding: .5rem;
  background: rgba(0, 0, 0, .9);
  color: white;
  border-radius: 5px;
  font-size: $text-small;
}
</style>
