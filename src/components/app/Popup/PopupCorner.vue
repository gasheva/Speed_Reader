<template>
    <div class="popup-corner"
         :class="['popup-corner--'+type]">
        <div class="popup-corner__header">{{ title }}</div>
        <div class="popup-corner__text">{{ text }}</div>
        <div class="cross-icon" @click="emit('hide', uid)"/>
    </div>
</template>

<script lang="ts">
export default {
    name: 'PopupCorner'
};
</script>
<script setup lang="ts">

import {onMounted, onUnmounted} from 'vue';

const props = defineProps({
    uid: {type: String, required: true},
    title: {type: String, default: ''},
    text: {type: String, default: ''},
    type: {
        type: String,
        default: 'error',
        validator: (val: string) => {
            const values = new Set(['error', 'info', 'success']);
            return values.has(val);
        }
    },
    showTimeSec: {type: Number, default: 5}
});
const emit = defineEmits(['hide']);

let timeoutCode: number | undefined = undefined;
onMounted(() => {
    timeoutCode = setTimeout(() => {
        emit('hide', props.uid);
    }, props.showTimeSec * 1000);
});

onUnmounted(() => {
    timeoutCode && clearTimeout(timeoutCode);
});

</script>

<style lang="scss" scoped>
.popup-corner {
  position: relative;
  height: fit-content;
  width: 100%;
  padding: .5rem;
  color: white;
  font-size: $text-small;


  &--error {
    background-color: $red-1;
  }

  &--info {
    background-color: $blue-1;
  }

  &--success {
    background-color: $green-2;
  }

  &__header {
    padding-bottom: 0.25rem;
    font-weight: bold;
  }

  &__text {
    padding-top: 0.25rem;
  }
}
</style>