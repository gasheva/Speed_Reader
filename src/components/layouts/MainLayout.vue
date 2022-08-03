<template>
    <div class="the-wrapper">
        <the-header class="container"/>
        <template v-if="isScreenSmall">
            <the-mobile-sidebar ref="sidebarRef" v-show="isSidebarVisible"
                                data-test="mobileSidebar"/>
        </template>
        <router-view class="content"/>
        <div class="footer-container">
            <the-footer/>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'MainLayout',
};
</script>
<script setup lang="ts">
import {useStore} from 'vuex';
import {computed, defineAsyncComponent, ref} from 'vue';
import {useBreakpoint} from '@/composable/breakpoint';
import TheHeader from '@/components/app/Navigation/TheHeader.vue';
import TheFooter from '@/components/app/TheFooter.vue';
import {onClickOutside} from '@vueuse/core';

const TheMobileSidebar = defineAsyncComponent(() =>
    import('@/components/app/Navigation/TheMobileSidebar.vue'));

const store = useStore();
let isSidebarVisible = computed(() => store.state.isSidebarVisible);
let {isScreenSmall} = useBreakpoint();

const sidebarRef = ref(null);
onClickOutside(sidebarRef,
    (event) => {
        if (isSidebarVisible.value) event.stopPropagation();
        store.commit('setSidebarVisible', false);
    });


</script>

<style lang="scss" scoped>
.footer-container {
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    border-top: 1px solid $grey-3;
  }
}
</style>
