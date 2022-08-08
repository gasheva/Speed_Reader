<template>
    <div class="dropdown__item"
         :key="item.id"
         :class="{'dropdown__item--active': isActive}"
         @click="emit('click')"
         @mouseenter="emit('mouseenter')"
    >
        {{ item.label }}
    </div>
</template>

<script  lang="ts">
export default {
    name: 'SelectBaseItem'
};
</script>
<script setup lang="ts">

import {SelectBaseItemInterface} from '@/components/app/Select/data/selectBaseItem.interface.js';
import {PropType} from 'vue';

const props = defineProps({
    isActive: {type:Boolean, default: false},
    item: {type: Object as PropType<SelectBaseItemInterface>, required: true},
});
const emit = defineEmits(['mouseenter', 'click'])

</script>