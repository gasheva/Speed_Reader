<template>
    <div class="the-wrapper">
        <the-header class="container"/>
        <template v-if="isScreenSmall">
            <the-mobile-sidebar v-show="isSidebarVisible" data-test="mobileSidebar"/>
        </template>
        <router-view class="content"/>
        <the-footer class="container"/>
    </div>
</template>

<script lang="ts">
export default {
    name: 'MainLayout',
};
</script>
<script setup lang="ts">
import {useStore} from 'vuex';
import {computed, defineAsyncComponent} from 'vue';
import {useBreakpoint} from '@/composable/breakpoint';
import TheHeader from '@/components/app/Navigation/TheHeader.vue';
import TheFooter from '@/components/app/TheFooter.vue';
const TheMobileSidebar = defineAsyncComponent(() =>
    import('@/components/app/Navigation/TheMobileSidebar.vue'));

const store = useStore();
let isSidebarVisible = computed(() => store.state.isSidebarVisible);
let {isScreenSmall} = useBreakpoint();


</script>

<style lang="scss" scoped>
</style>
