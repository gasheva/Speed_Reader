<template>
    <div class="dropdown">
        <button class="dropdown__trigger"
                ref="dropdownMenuRef"
                @keydown.down="keypressHandler(DIRECTIONS.down)"
                @keydown.up="keypressHandler(DIRECTIONS.up)"
                @keydown.enter="enterHandler"
                @click="toggleMenu">
            <span>{{ currentItem?.label || '' }}</span>
            <span class="dropdown__icon" v-html="icons.chevronDown"/>
        </button>

        <div v-show="isActive"
             class="dropdown__menu"
        >
            <select-base-item
                    v-for="(item, index) in menu"
                    :item="item"
                    :is-active="activeItemIndex===index"
                    @mouseenter="mouseenterHandler(index)"
                    @click="itemClickHandler(item)"
            />
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'SelectBase'
};
</script>
<script setup lang="ts">
import {useToggle} from '@/composable/toggler';
import {useStore} from 'vuex';
import {onMounted, PropType, ref, unref, watch} from 'vue';
import {onClickOutside} from '@vueuse/core';
import {icons} from '@/constants/icons.constants';
import SelectBaseItem from '@/components/app/Select/SelectBaseItem.vue';
import {SelectBaseItemInterface} from '@/components/app/Select/data/selectBaseItem.interface.js';

enum DIRECTIONS {up, down}

const props = defineProps({
    menu: {type: Object as PropType<SelectBaseItemInterface[]>, required: true},
});
const emit = defineEmits(['select']);

const {isVisible: isActive, toggle: toggleMenu} = useToggle();
const store = useStore();

const currentItem = ref<Object|undefined>(undefined);

onMounted(()=>{
    currentItem.value = props.menu[0];
    emitSelect(currentItem);
});
watch(()=>props.menu, ()=>{
   if(currentItem.value) return;
   currentItem.value = props.menu[0];
   emitSelect(currentItem);
});

const itemClickHandler = (item: Object) => {
    currentItem.value = item;
    isActive.value = false;
    emitSelect(item);
};

const enterHandler = () => {
    currentItem.value = props.menu[activeItemIndex.value];
    emitSelect(currentItem.value);
};

const dropdownMenuRef = ref(null);
onClickOutside(dropdownMenuRef, () => isActive.value = false);


const activeItemIndex = ref(0);

const mouseenterHandler = (index: number) => {
    activeItemIndex.value = index;
};

const keypressHandler = (direction: DIRECTIONS) => {
    if (direction === DIRECTIONS.up) {
        activeItemIndex.value = activeItemIndex.value === 0 ?
            props.menu.length - 1 : activeItemIndex.value - 1;
    } else {
        activeItemIndex.value = activeItemIndex.value === props.menu.length - 1 ?
            0 : activeItemIndex.value + 1;
    }
    currentItem.value = props.menu[activeItemIndex.value];
};

const emitSelect = (item: Object) => {
    emit('select', unref(item));
};
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

.dropdown {
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
    min-height: 1rem;
  }

  &__icon {
    margin-left: auto;
    margin-right: .25rem;
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

  &__item {
    &--active {
      background-color: $grey-5;
    }

    &:hover {
      //background-color: $grey-5;
    }
  }
}
</style>