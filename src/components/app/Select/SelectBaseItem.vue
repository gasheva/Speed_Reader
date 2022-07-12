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

const props = defineProps({
    isActive: {type:Boolean, default: false},
    item: {type: Object, required: true},
});
const emit = defineEmits(['mouseenter', 'click'])

</script>
<style scoped>

</style>