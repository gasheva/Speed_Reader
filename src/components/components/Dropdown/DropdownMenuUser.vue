<template>
    <div class="user-dropdown">
        <user-box class="user-dropdown__group"/>
        <div class="user-dropdown__group">
            <router-link v-for="link in links" :key="link.name" :to="{name: link.route}">
                {{ t(link.label) }}
            </router-link>
        </div>
        <div class="user-dropdown__group">
            <a class="bold" href="">Выйти</a>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'DropdownMenuUser',
}
</script>
<script setup lang="ts">
import links from '@/components/components/Dropdown/data/dropdownMenuUser';
import UserBox from '@/components/components/UserBox.vue';
import {useI18n} from 'vue-i18n';

const {t} = useI18n();
</script>

<style lang="scss" scoped>
.user-dropdown {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 15rem;
    color: black;
    text-decoration: none;

    &__group {
        position: relative;

        &:after {
            content: "";
            position: absolute;
            display: block;
            height: 1px;
            width: 100%;
            background: black;
            bottom: -8px;
        }

        &:last-child:after {
            display: none;
        }
    }
}
</style>
