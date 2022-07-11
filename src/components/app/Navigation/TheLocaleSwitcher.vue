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

const {t, locale} = useI18n();
</script>

<style scoped>

</style>