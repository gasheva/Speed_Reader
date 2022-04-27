<template>
  <a class="user-box">
    <div class="user-box__image">
      <img alt="user logo" src="@/assets/mock/mockUserLogo.png">
    </div>
    <div>
      <span v-html="chevronDown"></span>
    </div>
  </a>
</template>

<script lang="ts">
import {icons} from "@/constants/icons.constants";

export default {
  name: "UserBoxDropdown",
  props: {
    image: {
      type: String,
      default: '',
    },
  },

  setup() {

    return {
      chevronDown: icons.chevronDown,
    }
  }
}
</script>

<style lang="scss" scoped>
.user-box {
  display: flex;
  align-items: center;

  &__image {
    height: 3rem;
  }

  &__image img {
    height: 100%;
    margin-right: 0.875rem;
  }
}

</style>