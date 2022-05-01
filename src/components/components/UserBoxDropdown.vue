<template>
  <div>
    <a class="user-box">
      <div class="user-box__image">
        <img alt="user logo" src="@/assets/mock/mockUserLogo.png">
      </div>
      <div>
        <span v-html="chevronDown"></span>
      </div>
    </a>
    <!--TODO(show dropdown on click)-->
    <div class="dropdown">

    </div>
  </div>
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
.dropdown {
  min-height: 4rem;
}

.user-box {
  display: flex;
  align-items: center;
  cursor: pointer;

  &__image {
    height: 3rem;
  }

  &__image img {
    height: 100%;
    margin-right: 0.875rem;
  }
}

</style>
