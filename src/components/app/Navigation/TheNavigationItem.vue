<template>
  <router-link :to="link.route" class="navigation-item">
    <span class="navigation-item__icon icon"></span>
    <span>{{ t(link.label) }}</span>
  </router-link>
</template>

<script lang="ts">
import {PropType} from "vue";
import {Link} from "@/components/app/Navigation/data/link.interface";
import {useI18n} from "vue-i18n";

export default {
  name: 'TheNavigationItem',
  props: {
    link: {
      type: Object as PropType<Link>,
      required: true
    }
  },
  setup() {
    const {t, locale} = useI18n();
    return {
      t
    };
  }
};
</script>

<style scoped>

</style>