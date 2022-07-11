<template>
    <div class="mobile-sidebar">
        <ul class="mobile-sidebar__navigation navigation">
            <router-link v-for="link in links" :key="link.name" :to="link.route" class="navigation-item">
                <span class="navigation-item__icon icon"></span>
                <span>{{ t(link.label) }}</span>
            </router-link>
        </ul>
    </div>
</template>

<script lang="ts">

export default {
    name: 'TheMobileSidebar',
};
</script>
<script setup lang="ts">
import {useI18n} from 'vue-i18n';
import links from '@/components/app/Navigation/data/index';

const {t} = useI18n();

</script>

<style lang="scss" scoped>
.mobile-sidebar {
    position: absolute;
    width: 70%;
    height: 100vh;
    background-color: gray;
    z-index: 1;

    &__navigation {
        flex-direction: column;

    }
}

.navigation {
    display: flex;
}
</style>
