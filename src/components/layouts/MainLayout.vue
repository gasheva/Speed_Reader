<template>
    <div class="the-wrapper main-wrapper">
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
    import(/* webpackChunkName: "TheMobileSidebar" */'@/components/app/Navigation/TheMobileSidebar.vue'));

const store = useStore();
let isSidebarVisible = computed(() => store.state.isSidebarVisible);
let {isScreenSmall} = useBreakpoint();

const sidebarRef = ref(null);
onClickOutside(sidebarRef,
    (event) => {
        if (isSidebarVisible.value) event.stopPropagation();
        if (store.state.isSidebarVisible) {
            store.commit('setSidebarVisible', false);
        }
    });


const isAuth = computed(() => store.getters['auth/isAuth']);
</script>

<style lang="scss" scoped>
.main-wrapper{
  @media screen and (min-width: $sm) {
    border-top: 4rem solid black;
  }
}
</style>
