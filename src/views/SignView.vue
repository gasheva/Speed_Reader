<template>
    <div class="sign">
        <sign-tabs
                :current-tab="currentTab"
                @changeTab="changeTab"/>
        <keep-alive>
            <component :is="tabs[currentTab]" class="sign__content"/>
        </keep-alive>
    </div>
</template>

<script lang="ts">
export default {
    name: 'SignView',
};
</script>
<script setup lang="ts">
import SignTabs from "@/components/components/Sign/SignTabs.vue";
import TheRegistration from "@/components/components/Sign/TheRegistration.vue";
import TheLogin from "@/components/components/Sign/TheLogin.vue";
import {ref} from "vue";

const currentTab = ref('TheLogin');
const tabs = {
    TheLogin,
    TheRegistration,
}
const changeTab = (tabName: string) => {
    currentTab.value = tabName;
}

</script>

<style lang="scss" scoped>
.sign{
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;

  &__content{
    width: 100%;
    padding: 0 1.5rem;
  }
}
</style>
