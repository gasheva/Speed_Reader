<template>
    <div class="section container">
        <div v-if="isVisible('left')"
             class="section-tile">
            <slot name="left-tile"/>
        </div>
        <div v-if="isVisible('main')"
             class="section-main">
            <div class="main-section">
                <slot/>
            </div>
        </div>
        <div v-if="isVisible('right')"
             class="section-tile">
            <slot name="right-tile"/>
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


const isVisible = (val: string) => {
    return props.parts?.includes(val);
};

</script>