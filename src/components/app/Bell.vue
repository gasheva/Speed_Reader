<template>
  <a class="new-msg noselect" href="" @click.prevent>
    <span v-html="icons.bell"/>
    <div v-if="msgCount" class="new-msg__count danger">{{ msgCount }}</div>
  </a>
</template>

<script  lang="ts">
export default {
  name: "Bell",
}
</script>
<script setup lang="ts">
import {computed} from 'vue';
import {icons} from "@/constants/icons.constants"

const msgCount = computed(() => 4);
</script>

<style lang="scss">

.new-msg {
  position: relative;
  display: inline-block;
  padding: 0.25rem;
  color: white;

  &__count {
    position: absolute;
    top: 0;
    right: 0;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    font-size: 10px;
    text-align: center;
    line-height: 1rem;
    color: white;
  }
}

.danger {
  background-color: $red-2;
}
</style>
