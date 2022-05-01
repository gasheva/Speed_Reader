<template>
    <div>
        <button :class="{'burger--active':isActive}" class="burger" data-test="burgerButton" @click="toggleSidebar">
            Burger
        </button>
    </div>
</template>

<script lang="ts">
import {useToggle} from '@/composable/toggler';
import {watch} from 'vue';
import {useStore} from 'vuex';
import {useBreakpoint} from '@/composable/breakpoint';

export default {
    name: 'BurgerButton',
    setup() {
        const {isVisible: isActive, toggle: toggleSidebar} = useToggle();
        const store = useStore();

        watch(isActive, () => {
            store.commit('setSidebarVisible', isActive);
        });
        let {isScreenSmall} = useBreakpoint();
        return {
            toggleSidebar, isActive
        };
    }
};
</script>

<style lang="scss" scoped>
.burger {

    &--active {

    }
}

</style>
