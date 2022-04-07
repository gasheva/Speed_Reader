<template>
  <the-navigation/>
  <router-view/>
</template>

<script>
import TheNavigation from '@/components/app/Navigation/TheNavigation';

export default {
  components: {TheNavigation},
};
</script>

<style lang="scss">
</style>