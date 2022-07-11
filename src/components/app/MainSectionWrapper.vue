<template>
    <div class="section container">
        <div v-for="part in parts"
             :class="['section-'+part]">
            <slot :name="part+'-tile'"></slot>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'MainSectionWrapper'
};
</script>
<script setup lang="ts">

const props = defineProps({
    parts: {
        type: Array,
        default: ['main'],
        validator: (val: string[]) => {
            const values = new Set(['right', 'main', 'left']);
            return val.reduce((acc: boolean, cur: string) => acc &&= values.has(cur), true);
        }
    }
});
</script>
