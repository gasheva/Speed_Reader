<template>
    <div class="message">
        <tag-base :value="'fdjsk'"/>
        <div class="message__header">
            <span class="message__title">fsd</span>
            <div class="cross-icon"/>
        </div>
        <span class="message__message"></span>
    </div>
</template>

<script lang="ts">
export default {
    name: 'MessageBase'
};
</script>
<script setup lang="ts">

import TagBase from '@/components/app/Tag/TagBase.vue';
</script>

<style lang="scss" scoped>
.message {
  &__header {
    position: relative;
  }
}


</style>