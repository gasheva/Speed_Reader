<template>
  <a class="new-msg" href="" @click.prevent>
    <span v-html="bell"/>
    <div v-if="msgCount" class="new-msg__count danger">{{ msgCount }}</div>
  </a>
</template>

<script>
import {computed} from "vue";
import {icons} from "@/constants/icons.constants"

export default {
  name: "Bell",
  setup() {
    const msgCount = computed(() => 4);
    return {
      msgCount,
      bell: icons.bell
    }
  }
}
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
  }
}

.danger {
  background-color: $danger;
}
</style>