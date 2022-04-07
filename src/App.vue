<template>
  <the-navigation class="wrapper"/>
  <router-view class="wrapper"/>
</template>

<script>
import TheNavigation from '@/components/app/Navigation/TheNavigation';

export default {
  components: {TheNavigation},
};
</script>

<style lang="scss">
</style>