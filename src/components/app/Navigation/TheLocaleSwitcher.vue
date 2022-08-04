<template>
    <div class="locale-switcher">
        <select v-model="locale">
            <option value="ru">Russian</option>
            <option value="en">English</option>
        </select>
    </div>
</template>

<script lang="ts">
export default {
    name: 'TheLocaleSwitcher',
};
</script>
<script setup lang="ts">
import {useI18n} from 'vue-i18n';
import {onMounted, watch} from 'vue';
import {useStore} from 'vuex';

const {t, locale} = useI18n();
const store = useStore();

watch(locale, () => {
    store.commit('preference/setLocale', locale.value);
});

onMounted(() => {
    if (store.getters['preference/getLocale']) {
        locale.value = store.getters['preference/getLocale'];
    }
});
</script>

<style scoped>

</style>