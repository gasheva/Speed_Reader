<template>
    <div class="burger"
         :class="{'burger--active':isActive}"
         @click="toggleSidebar"
         data-test="burgerButton">
        <span class="burger__line line1"/>
        <span class="burger__line line2"/>
        <span class="burger__line line3"/>
    </div>
</template>

<script lang="ts">

export default {
    name: 'BurgerButton',
};
</script>
<script setup lang="ts">
import {useToggle} from '@/composable/toggler';
import {useStore} from 'vuex';
import {watch} from 'vue';

const {isVisible: isActive, toggle: toggleSidebar} = useToggle();
const store = useStore();

watch(isActive, () => {
    store.commit('setSidebarVisible', isActive);
});
</script>

<style lang="scss" scoped>
.burger {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 40px;

  &__line {
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: black;
  }

  .line1 {
    transition: all 500ms;
  }

  .line2 {
    transition: opacity 500ms;
  }

  .line3 {
    transition: all 500ms;
  }

  &--active > .line1 {
    transform: rotate(45deg) translate(10px, 10px);
    transition: all 500ms;
  }

  &--active > .line2 {
    opacity: 0;
    transition: opacity 500ms;
  }

  &--active > .line3 {
    transform: rotate(-45deg) translate(10px, -10px);
    transition: all 500ms;
  }
}

</style>
