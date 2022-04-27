<template>
  <div class="wrapper">
    <div v-if="!isScreenSmall" class="black-line"></div>
    <the-header/>
    <the-mobile-sidebar v-if="isSidebarVisible"/>
    <router-view class="content"/>
    <the-footer/>
  </div>
</template>

<script>
import {computed, defineAsyncComponent} from "vue";
import {useStore} from "vuex";
import TheHeader from "@/components/app/Navigation/TheHeader";
import TheFooter from "@/components/app/TheFooter";
import {useBreakpoint} from "@/composable/breakpoint";

export default {
  name: "MainLayout",
  components: {
    TheFooter,
    TheMobileSidebar: defineAsyncComponent(() =>
        import('@/components/app/Navigation/TheMobileSidebar.vue')),
    TheHeader
  },
  setup() {
    const store = useStore();
    let isSidebarVisible = computed(() => store.getters.isSidebarVisible)
    let {isScreenSmall} = useBreakpoint();
    return {
      isSidebarVisible,
      isScreenSmall
    }
  }
}
</script>

<style scoped>
.black-line {
  height: 4rem;
  background-color: black;
}
</style>