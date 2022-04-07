<template>
  <div class="locale-switcher">
    <select v-model="locale">
      <option value="ru">Russian</option>
      <option value="en">English</option>
    </select>
  </div>
</template>

<script>
import {useI18n} from "vue-i18n";

export default {
  name: 'TheLocaleSwitcher',
  setup() {
    const {t, locale} = useI18n();
    return {
      t, locale
    };
  }
};
</script>

<style scoped>

</style>