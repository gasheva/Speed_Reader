<template>
    <div class="locale-switcher-wrapper">
        <select-base
                :menu="languages"
                :selected-item-idx="selectedLanguageIdx"
                menu-position="top"
                locale-switcher
                @select="selectedLanguageHandler"
        />
    </div>
</template>

<script lang="ts">
export default {
    name: 'TheLocaleSwitcher',
};
</script>
<script setup lang="ts">
import {useI18n} from 'vue-i18n';
import {onBeforeMount, ref, watch} from 'vue';
import {useStore} from 'vuex';
import SelectBase from '@/components/app/Select/SelectBase.vue';

const {t, locale} = useI18n();
const store = useStore();

const languages = [
    {
        id: 'ru',
        label: 'Русский'
    },
    {
        id: 'en',
        label: 'English'
    }
];

const selectedLanguageIdx = ref(0);


watch(locale, () => {
    store.commit('preference/setLocale', locale.value);
});

onBeforeMount(() => {
    if (store.getters['preference/getLocale']) {
        locale.value = store.getters['preference/getLocale'];
        selectedLanguageIdx.value = languages.findIndex(lang => lang.id === locale.value);
        if(selectedLanguageIdx.value===-1){
            selectedLanguageIdx.value = 0;
        }
    }
});

const selectedLanguageHandler = (item: Object)=>{
    locale.value = item.id;
}
</script>

<style lang="scss" scoped>
.locale-switcher-wrapper {
}

.locale-switcher {
  background: white;
  cursor: pointer;
}
</style>