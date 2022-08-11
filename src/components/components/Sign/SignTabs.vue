<template>
    <div class="sign-tabs">
        <div class="sign-tabs__buttons">
            <a @click.prevent="changeTab('TheLogin')"
               class="sign-tabs__btn login-btn link"
               :class="{'sign-tabs__btn--active':'TheLogin'===activeTab,
               'sign-tabs__btn--inactive':'TheLogin'!==activeTab,
               }"
            >
                Login
            </a>
            <a @click.prevent="changeTab('TheRegistration')"
               class="sign-tabs__btn registration-btn link"
               :class="{'sign-tabs__btn--active':'TheRegistration'===activeTab,
               'sign-tabs__btn--inactive':'TheRegistration'!==activeTab,
            }"
            >
                Registration
            </a>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'SignTabs',
};
</script>
<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
    currentTab: {type: String, required: true}
});
const emit = defineEmits(['changeTab']);

const changeTab = (toTab: string) => {
    emit('changeTab', toTab)
}

const activeTab = computed<String>(() =>
    props.currentTab
)
</script>

<style lang="scss" scoped>
.sign-tabs {

  &__buttons {
    display: flex;
    flex-wrap: nowrap;

    & * + *:before {
      content: '';
      height: 100%;
      margin-right: .5rem;
      border-right: 1px solid blue;
    }

    & :last-child {
      padding-right: 0;
    }
  }

  &__btn {
    position: relative;
    padding-right: .5rem;
    border-bottom: 1px solid $grey-3;

    &--active:after, &--inactive:after {
      content: "";
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
    }

    &--inactive:after {
      border-bottom: 1px solid $grey-3;
      transform: scaleX(0);
    }

    &--active:after {
      border-bottom: 1px solid $blue-1;
      transform: scaleX(1);
      transition: all 250ms ease-in-out;
    }
  }
}
</style>
