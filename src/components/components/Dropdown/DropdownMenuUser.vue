<template>
    <div class="user-dropdown">
        <user-box class="user-dropdown__group"/>
        <div class="user-dropdown__group">
            <router-link v-for="link in links" :key="link.name" :to="link.route">
                {{ t(link.label) }}
            </router-link>
        </div>
        <div class="user-dropdown__group">
            <a class="bold" href="">Выйти</a>
        </div>
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
