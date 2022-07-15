<template>
    <div class="statistic">
        <main-section-wrapper :parts="['main', 'right']">
            <template #main-tile>
            </template>
            <template #right-tile>
                <statistic-tile/>
            </template>
        </main-section-wrapper>
    </div>
</template>

<script lang="ts">
export default {
    name: 'StatisticView'
};
</script>
<script setup lang="ts">
import MainSectionWrapper from '@/components/app/MainSectionWrapper.vue';
import StatisticTile from '@/components/components/Statistic/StatisticTile.vue';

</script>

<style lang="scss" scoped>
</style>