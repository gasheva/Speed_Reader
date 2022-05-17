<template>
    <div class="user-dropdown">
        <user-box class="user-dropdown__item"/>
        <hr class="user-dropdown__separator">

        <router-link v-for="link in links" :key="link.name" :to="link.route">
            {{ t(link.label) }}
        </router-link>
        <hr class="user-dropdown__separator">
        <a class="bold" href="">Выйти</a>
    </div>
</template>

<script lang="ts">
import UserBox from '@/components/components/UserBox.vue';
import {defineComponent} from 'vue';
import {useI18n} from 'vue-i18n';
import links from '@/components/components/Dropdown/data';

export default defineComponent({
    name: 'DropdownMenuUser',
    components: {UserBox},
    setup() {
        const {t} = useI18n();

        return {
            links,
            t
        };
    },
});
</script>

<style lang="scss" scoped>
.user-dropdown {
    display: flex;
    flex-direction: column;
    gasp: .5rem;
    color: black;
    text-decoration: none;

    &__item {

    }
}
</style>
