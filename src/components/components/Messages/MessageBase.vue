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
.message{
  &__header{
    position: relative;
  }
}
.cross-icon {
  position: absolute;
  right: 0;
  top: 0;
  width: 20px;
  height: 20px;
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
  &:hover {
    opacity: 1;
  }
  &:before, &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 20px;
    width: 2px;
    background-color: $grey-6;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
}


</style>