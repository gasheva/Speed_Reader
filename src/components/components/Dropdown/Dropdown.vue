<template>
    <div class="dropdown">
        <a class="dropdown__trigger" href="#" @click="toggleMenu">
            <slot name="trigger"/>
            <span v-html="chevronDown"></span>
        </a>
        <div v-if="isMenuVisible" v-click-away="onClickAway" class="dropdown__menu">
            <slot name="menu"/>
        </div>
    </div>
</template>

<script lang="ts">
import {icons} from '@/constants/icons.constants';
import {defineComponent, ref} from 'vue';
import {mixin as VueClickAway} from 'vue3-click-away';

export default defineComponent({
    name: 'Dropdown',
    mixins: [VueClickAway],
    props: {
        image: {
            type: String,
            default: '',
        },
    },

    setup() {
        const isMenuVisible = ref(false);
        const onClickAway = () => {
            isMenuVisible.value = false;
        };
        const toggleMenu = () => {
            isMenuVisible.value = true;
        };

        return {
            chevronDown: icons.chevronDown,
            isMenuVisible,
            onClickAway,
            toggleMenu,
        };
    }
});
</script>

<style lang="scss" scoped>
.dropdown {
    position: relative;

    &__menu {
        position: absolute;
        right: 0;
    }
}

</style>
