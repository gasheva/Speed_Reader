<template>
    <div>
        <sign-tabs
                @changeTab="changeTab"/>
        <keep-alive>
            <component :is="tabs[currentTab]"/>
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

<style scoped>

</style>
