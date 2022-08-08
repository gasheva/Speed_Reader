<template>
    <a class="exercises-menu__item menu-item"
       :class="{'menu-item--active':isActive}"
       href="" @click.prevent>
        <span class="menu-item__icon icon" v-html="icons.clock"/>
        {{ item.label[locale] }}
        <span class="menu-item__count">{{ item.exerciseCount }}</span>
    </a>
</template>

<script lang="ts">
export default {
    name: 'HomeMenuItem'
};
</script>
<script setup lang="ts">
import {computed} from 'vue';
import {useStore} from 'vuex';
import {icons} from '@/constants/icons.constants';

const props = defineProps({
    item: {type: Object, required: true},
    isActive: {type: Boolean, default: false},
});
const store = useStore();
const locale = computed(() => store.getters['preference/getLocale']);

</script>

<style lang="scss" scoped>

</style>