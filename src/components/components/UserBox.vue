<template>
  <div class="user-box">
    <div class="user-box__image">
      <img alt="user logo" src="@/assets/mock/mockUserLogo.png">
    </div>
    <div class="user-box__text">
      <div class="">{{ mainText }}</div>
      <div class="hint">{{ secondaryText }}</div>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: "UserBox",
  props: {
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
  }
}
</script>

<style lang="scss" scoped>
.user-box {
  display: flex;

  &__image {
    height: 3rem;
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

.hint {
  font-size: 0.75rem;
}

</style>