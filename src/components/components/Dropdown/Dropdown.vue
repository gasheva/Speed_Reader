<template>
    <div class="dropdown">
        <a class="dropdown__trigger" href="#" @click="toggleMenu">
            <slot name="trigger"/>
            <span v-html="chevronDown"></span>
        </a>
        <div v-if="isMenuVisible" ref="dropdownMenuRef" class="dropdown__menu">
            <slot name="menu"/>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Dropdown',
};
</script>
<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import {ref} from "vue";
import {icons} from "@/constants/icons.constants";

const props = defineProps({
    image: {
        type: String,
        default: '',
    },
});
const emit = defineEmits(['openMenu']);
const chevronDown = icons.chevronDown;

const dropdownMenuRef = ref(null);
const isMenuVisible = ref(false);
const toggleMenu = () => {
    isMenuVisible.value = true;
    emit('openMenu');
};
onClickOutside(dropdownMenuRef, (event) => isMenuVisible.value = false)

</script>

<style lang="scss" scoped>
.dropdown {
    position: relative;

    &__trigger {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    &__menu {
        position: absolute;
        right: 0;
        margin-top: .5rem;
        box-shadow: 0 0 18px 0 rgb(0 0 0 / 25%);
        border-radius: 3px;
    }
}

</style>
