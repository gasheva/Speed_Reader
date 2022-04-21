<template>
  <div class="wrapper">
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
    return {
      isSidebarVisible
    }
  }
}
</script>

<style scoped>

</style>