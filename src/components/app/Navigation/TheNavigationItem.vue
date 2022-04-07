<template>
  <router-link :to="link.route" class="navigation-item">
    <span class="navigation-item__icon icon"></span>
    <span>{{ link.label.get('ru') }}</span>
  </router-link>
</template>

<script lang="ts">
import {PropType} from "vue";
import {Link} from "@/components/app/Navigation/data/link.interface";

export default {
  name: 'TheNavigationItem',
  props: {
    link: {
      type: Object as PropType<Link>,
      required: true
    }
  }
};
</script>

<style scoped>

</style>