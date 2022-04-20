<template>
  <div>
    <the-header class="wrapper"/>
    <the-mobile-sidebar v-if="isSidebarVisible"/>
    <router-view class="wrapper"/>
  </div>
</template>

<script>
import {computed, defineAsyncComponent} from "vue";
import {useStore} from "vuex";
import TheHeader from "@/components/app/Navigation/TheHeader";

export default {
  name: "MainLayout",
  components: {
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