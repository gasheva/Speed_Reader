<template>
    <div class="notification-dropdown">
        <div class="notification-dropdown__img">
            <span v-html="icons.envelop"/>
        </div>
        <div class="notification-dropdown__info">
            <p>{{ notification.title }}</p>
            <span class="label">{{ date }}</span>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'DropdownMenuNotification',
};
</script>
<script setup lang="ts">
import {FormatOptions, formatTime, FormatTimeTypes} from '@/utils/utils';
import {constants} from '@/constants/constants';
import {computed, onMounted, PropType} from 'vue';
import {Notification} from '@/interfaces/notification.interface';
import {icons} from '@/constants/icons.constants';
import {useStore} from 'vuex';

const props = defineProps({
    notification: {
        type: Object as PropType<Notification>,
        required: true,
    }
});

const store = useStore();

const $_dateParams: FormatOptions = {
    format: FormatTimeTypes.daysBack,
    maxFullDay: constants.MAX_DAYS_FOR_FULL_DAY_FORMAT,
};
const locale = computed(() => store.getters['preference/getLocale']);
const date = computed(() => formatTime(props.notification.date, $_dateParams), locale.value);

onMounted(() => {
    console.log('mount');
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
    background-color: $grey-3;
  }

  &__img{
    align-items: center;
    display: flex;
    padding-right: 1rem;
  }
}
</style>
