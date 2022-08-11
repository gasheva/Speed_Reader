<template>
    <footer class="footer container">
        <div class="footer__copyright">
            SpeedReader 2022
        </div>
        <a class="link link--hover-underline footer__share" @click.prevent href="#">{{ t('shareVk') }}</a>

        <the-locale-switcher class="footer__end"/>
    </footer>
</template>

<script lang="ts">

export default {
    name: 'TheFooter',
};
</script>
<script setup lang="ts">
import TheLocaleSwitcher from '@/components/app/Navigation/TheLocaleSwitcher.vue';

import {useI18n} from 'vue-i18n';

const {t} = useI18n();

</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: auto;
  gap: 4rem;
  padding: 1rem;
  font-size: 12px;

  @media screen and (max-width: $md) {
    justify-content: space-between;
  }

  &__copyright {

  }

  &__share {

  }

  &__end {
    margin-left: auto;

    @media screen and (max-width: $sm) {
      margin-left: 0;
    }
  }
}
</style>
