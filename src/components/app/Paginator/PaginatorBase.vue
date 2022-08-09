<template>
    <div class="paginator">
        <button class="paginator__button"
                :class="{'button--disabled':isFirst}"
                :disabled="isFirst"
                @click.prevent="openFirstHandler">{{ '<<' }}
        </button>
        <button class="paginator__button"
                :class="{'button--disabled':isFirst}"
                :disabled="isFirst"
                @click.prevent="prevHandler">{{ '<' }}
        </button>
        <div class="input">
            <span class="input__wrapper">
                <span class="input__width-setter" aria-hidden="true">_{{ currentPage }}_</span>
                <input class="input__input"
                       ref="inputRef"
                       v-model.trim.lazy="currentPage">
            </span>
            <span class="paginator__label">{{ ' / ' + lastPage }}</span>
        </div>
        <button class="paginator__button"
                :class="{'button--disabled':isLast}"
                :disabled="isLast"
                @click.prevent="nextHandler">{{ '>' }}
        </button>
        <button class="paginator__button"
                :class="{'button--disabled':isLast}"
                :disabled="isLast"
                @click.prevent="openLastHandler">{{ '>>' }}
        </button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'PaginatorBase'
};
</script>
<script setup lang="ts">

import {computed, ref, watch} from 'vue';
import {useFocus} from '@vueuse/core';

const props = defineProps({
    currentPageValue: {type: Number, default: 1},
    lastPage: {type: Number, default: 1},
});
const emit = defineEmits(['prev', 'next', 'update:currentPageValue', 'openFirst', 'openLast']);

const prevHandler = (): void => {
    emit('prev');
};
const nextHandler = (): void => {
    emit('next');
};

const openFirstHandler = (): void => {
    emit('openFirst');
};
const openLastHandler = (): void => {
    emit('openLast');
};

const $_setInputValue = (val: string | number) => {
    inputRef.value.value = val;
};
const inputRef = ref({});
const currentPage = computed({
    get(): number {
        return props.currentPageValue;
    },
    set(val: string) {
        if (!val) return;
        const valNumber = Number(val);
        if (!valNumber) {
            $_setInputValue(props.currentPageValue);
            return;
        }
        if (checkMoreThanLast(valNumber)) {
            $_setInputValue(props.lastPage);
            emit('update:currentPageValue', props.lastPage);
            return;
        }
        if (checkLessThanFirst(valNumber)) {
            $_setInputValue(1);
            emit('update:currentPageValue', 1);
            return;
        }
        emit('update:currentPageValue', Number(val));
    }
});
const isLast = computed(() => props.currentPageValue === props.lastPage);
const isFirst = computed(() => props.currentPageValue === 1);

const checkMoreThanLast = (_page: number) => _page > props.lastPage;
const checkLessThanFirst = (_page: number) => _page < 1;

const {focused} = useFocus(inputRef);
watch(focused, () => {
    if (!focused.value) {
        $_setInputValue(currentPage.value as number | string);
    }
});

</script>

<style lang="scss" scoped>
.paginator {
  display: flex;

  &__button{

  }

 &__button + &__button{
   margin-left: .25rem;
  }

  .input {
    font-size: $text-small;
  }

  .input__wrapper {
    position: relative;
    font-size: $text-small;
  }

  .input__input {
    position: absolute;
    width: 100%;
    left: 0;
    font-size: $text-small;
    line-height: 1rem;
    text-align: end;
  }

  .input__width-setter {
    font-size: $text-small;
    line-height: 1rem;
  }

  &__label {
    padding-right: 13px;
    font-size: $text-small;
  }
}

.button {
  &__disabled {

  }
}
</style>