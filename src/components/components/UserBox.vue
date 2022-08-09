<template>
    <div class="user-box">
        <div class="user-box__image">
            <img v-if="image" alt="user logo" :src="image">
            <span v-else v-html="icons.defaultAvatar"/>
        </div>
        <div class="user-box__text">
            <div class="">{{ mainText }}</div>
            <div class="label">{{ secondaryText }}</div>
        </div>

    </div>
</template>

<script lang="ts">
export default {
    name: 'UserBox',
};
</script>
<script setup lang="ts">

import {icons} from '@/constants/icons.constants';

const props = defineProps({
    image: {
        type: String,
        default: '',
    },
    mainText: {
        type: String,
        default: '',
    },
    secondaryText: {
        type: String,
        default: '',
    },
});
</script>

<style lang="scss" scoped>
.user-box {
  display: flex;

  &__image {
    height: 3rem;
    margin-right: 1rem;
  }

  &__image img {
    height: 100%;
    margin-right: 0.875rem;
  }

  &__text {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: space-between;
    padding: 2px 0;
  }
}

</style>