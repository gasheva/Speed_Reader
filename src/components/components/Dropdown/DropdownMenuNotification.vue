<template>
    <div class="notification-dropdown">
        <div class="notification-dropdown__img">
            <span v-html="envelop"/>
        </div>
        <div class="notification-dropdown__info">
            <p>{{ notification.title }}</p>
            <span class="label">{{ date }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import {icons} from '@/constants/icons.constants';
import {Notification} from '@/interfaces/notification.interface';
import {computed, defineComponent, onMounted, PropType} from 'vue';
import {FormatOptions, formatTime, FormatTimeTypes} from '@/utils/utils';
import {constants} from '@/constants/constants';

export default defineComponent({
    name: 'DropdownMenuNotification',
    props: {
        notification: {
            type: Object as PropType<Notification>,
            required: true,
        }
    },
    setup(props) {
        const dateParams: FormatOptions = {
            format: FormatTimeTypes.daysBack,
            maxFullDay: constants.MAX_DAYS_FOR_FULL_DAY_FORMAT,
        };
        const date = computed(() => formatTime(props.notification.date, dateParams));

        onMounted(() => {
            console.log('mount');
        });

        return {
            envelop: icons.envelop,
            date,
        };
    }
});
</script>

<style lang="scss" scoped>
.notification-dropdown {
    display: flex;
    flex-direction: row;
    gap: .5rem;
    width: 15rem;
    color: black;
    text-decoration: none;

    & > div {
        position: relative;
    }

    & > div:first-child:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        width: 1px;
        height: 100%;
        background-color: #1e1e1e;
    }

    &__group {
        position: relative;

        &:after {
            content: "";
            position: absolute;
            display: block;
            height: 1px;
            width: 100%;
            background: black;
            bottom: -8px;
        }

        &:last-child:after {
            display: none;
        }
    }
}
</style>
