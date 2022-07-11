<template>
    <div>
        <button :class="{'burger--active':isActive}" class="burger" data-test="burgerButton" @click="toggleSidebar">
            Burger
        </button>
    </div>
</template>

<script lang="ts">

export default {
    name: 'BurgerButton',
};
</script>
<script setup lang="ts">
import {useToggle} from '@/composable/toggler';
import {useStore} from 'vuex';
import {watch} from 'vue';

const {isVisible: isActive, toggle: toggleSidebar} = useToggle();
const store = useStore();

watch(isActive, () => {
    store.commit('setSidebarVisible', isActive);
});
</script>

<style lang="scss" scoped>
.burger {

    &--active {

    }
}

</style>
