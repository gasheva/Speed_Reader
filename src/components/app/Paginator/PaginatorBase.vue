<template>
    <div class="paginator">
        <button :class="{'button--disabled':isFirst}"
                :disabled="isFirst"
                @click.prevent="prevHandler">{{ '<<' }}
        </button>
        <button :class="{'button--disabled':isFirst}"
                :disabled="isFirst"
                @click.prevent="prevHandler">{{ '<' }}
        </button>
        <span>{{ currentPageValue }}</span>
        <button :class="{'button--disabled':isLast}"
                :disabled="isLast"
                @click.prevent="nextHandler">{{ '>' }}
        </button>
        <button :class="{'button--disabled':isLast}"
                :disabled="isLast"
                @click.prevent="nextHandler">{{ '>>' }}
        </button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'PaginatorBase'
};
</script>
<script setup lang="ts">

import {computed} from 'vue';

const props = defineProps({
    currentPageValue: {type: Number, default: 1},
    lastPage: {type: Number, default: 1},
});
const emit = defineEmits(['prev', 'next']);

const prevHandler = (): void => {
    emit('prev');
};
const nextHandler = (): void => {
    emit('next');
};

const isLast = computed(() => props.currentPageValue === props.lastPage);
const isFirst = computed(() => props.currentPageValue === 1);

</script>

<style lang="scss" scoped>
.paginator {
  display: flex;
}

.button {
  &__disabled {

  }
}
</style>