<template>
    <div class="main-content wrapper">
        <div v-if="!isScreenSmall" class="black-line"></div>
        <the-header/>
        <template v-if="isScreenSmall">
            <the-mobile-sidebar v-show="isSidebarVisible" data-test="mobileSidebar"/>
        </template>
        <router-view class="content"/>
        <the-footer/>
    </div>
</template>

<script lang="ts">
import {computed, defineAsyncComponent} from 'vue';
import {useStore} from 'vuex';
import TheHeader from '@/components/app/Navigation/TheHeader.vue';
import TheFooter from '@/components/app/TheFooter.vue';
import {useBreakpoint} from '@/composable/breakpoint';

export default {
    name: 'MainLayout',
    components: {
        TheFooter,
        TheMobileSidebar: defineAsyncComponent(() =>
            import('@/components/app/Navigation/TheMobileSidebar.vue')),
        TheHeader
    },
    setup() {
        const store = useStore();
        let isSidebarVisible = computed(() => store.state.isSidebarVisible);
        let {isScreenSmall} = useBreakpoint();
        return {
            isSidebarVisible,
            isScreenSmall,
        };
    }
};
</script>

<style scoped>
.main-content {
    height: 100vh;
}

.black-line {
    height: 4rem;
    background-color: black;
}
</style>
