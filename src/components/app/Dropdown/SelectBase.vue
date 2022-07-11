<template>
<div class="dropdown">
    <button class="dropdown__trigger" @click="toggleSidebar">
        click me
    </button>

    <div v-show="isActive"
         ref="dropdownMenuRef"
         class="dropdown__menu">
        <div class="dropdown__item"
             v-for="item in menu"
             :key="item.id"
             @click="itemClickHandler(item.id)"
        >
            {{item.label}}
        </div>
    </div>
</div>
</template>

<script lang="ts">
export default {
    name: "SelectBase"
}
</script>
<script setup lang="ts">
import {useToggle} from '@/composable/toggler';
import {useStore} from 'vuex';
import {PropType, ref, watch} from 'vue';
import {onClickOutside} from '@vueuse/core';

const props = defineProps({
    menu: {type: Object as PropType<Object[]>, default: [] },
})

const {isVisible: isActive, toggle: toggleSidebar} = useToggle();
const store = useStore();

const itemClickHandler = (id: string)=>{
    console.log('itemClickHandler');
}

const dropdownMenuRef = ref(null);
onClickOutside(dropdownMenuRef, (event) => isActive.value = false)
</script>

<style lang="scss" scoped>
select::-ms-expand {
    display: none;
}
select {
    background: white;
    padding: 0.25rem 0.5rem;
    border: 2px solid black;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-overflow: '';
}

.dropdown{
  position: relative;
  min-width: 234px;
  width: fit-content;
  border: 2px solid black;

  &__trigger {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }

  &__menu {
    position: absolute;
    right: 0;
    width: 100%;
    margin-top: .5rem;
    //box-shadow: 0 0 18px 0 rgb(0 0 0 / 25%);
    z-index: $dropdown-z-index;
    background: white;
    outline: 2px solid black;
  }

  &__item{
    &:hover{
      background-color: $grey-5;
    }
  }
}
</style>