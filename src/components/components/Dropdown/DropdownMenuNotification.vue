<template>
    <div class="notification-dropdown">
        <div class="notification-dropdown__img">
            <span v-html="envelop"/>
        </div>
        <div class="notification-dropdown__info">
            <p>{{ notification.title }}</p>
            <span class="label">{{ notification.date }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import {icons} from '@/constants/icons.constants';
import {Notification} from '@/interfaces/notification.interface';
import {PropType} from 'vue';

export default {
    name: 'DropdownMenuNotification',
    props: {
        notification: {
            type: Object as PropType<Notification>,
            required: true,
        }
    },
    setup() {
        return {
            envelop: icons.envelop,
        };
    }
};
</script>

<style lang="scss" scoped>
.notification-dropdown {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 15rem;
    color: black;
    text-decoration: none;

    &:first-child:after {
        content: '';
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
