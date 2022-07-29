<template>
    <div class="message">
        <tag-base :value="'tag'"/>
        <div class="message__header">
            <span class="message__title">{{ message.title }}</span>
            <div class="cross-icon" @click.stop="emit('remove')"/>
        </div>
        <div class="message__message text-truncate-w100">{{ message.text }}</div>
        <span class="message__address label">{{ 'From ' + message.senderEmail }}</span>
    </div>
</template>

<script lang="ts">
export default {
    name: 'MessageBase'
};
</script>
<script setup lang="ts">
import TagBase from '@/components/app/Tag/TagBase.vue';
import {PropType} from 'vue';
import {MessageInterface} from '@/components/app/Message/data/message.interface';

const props = defineProps({
    message: {type: Object as PropType<MessageInterface>, default: () => ({})},
});
const emit = defineEmits(['remove']);

</script>

<style lang="scss" scoped>
.message {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  padding-right: .5rem;
  border-top: 1px solid $grey-3;

  &__header {
    position: relative;
  }

  &__message {
    max-width: 700px;
  }

  &__title {
    font-weight: bold;
  }

  &:hover {
    box-shadow: 4px 4px 4px 0 #c4c4c4;
  }
}


</style>