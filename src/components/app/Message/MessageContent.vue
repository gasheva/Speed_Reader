<template>
    <div class="popup-message">
        <h6 class="popup-message__title">{{ message.title }}</h6>
        <textarea class="popup-message__textarea">
        {{message.text}}
    </textarea>
    </div>
</template>

<script lang="ts">
export default {
    name: 'MessageContent'
};
</script>
<script setup lang="ts">
import {PropType} from 'vue';
import {MessageInterface} from '@/components/app/Message/data/message.interface';

const props = defineProps({
    message: {type: Object as PropType<MessageInterface>, default: () => ({})},
});


</script>

<style lang="scss" scoped>
.popup-message {
  display: flex;
  flex-direction: column;
  padding: 0 3rem 2rem;
  font-family: "Open Sans", serif;


  &__title {
    margin-bottom: 2rem;
    text-align: center;
    font-weight: bold;
  }

  &__textarea {
    resize: none;
    width: 430px;
    height: 291px;
    font-size: $text-middle;

  }
}

</style>