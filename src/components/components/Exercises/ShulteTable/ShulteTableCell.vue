<template>
    <div class="shulte-table-cell noselect"
         @click="clickHandler"
         ref="cellRef"
         :class="[`shulte-table-cell--${currentStyle}`]"
    >
        {{ value }}
    </div>
</template>

<script lang="ts">
export default {
    name: 'ShulteTableCell'
};
</script>
<script setup lang="ts">
import {onBeforeUnmount, ref} from 'vue';

const props = defineProps({
    value: {type: String, required: true},
    isNext: {type: Boolean, required: true},
});

const emit = defineEmits(['rightSelect', 'wrongSelect']);

const cellRef = ref(null);
const STYLES = {neutral: 'neutral', right: 'right', wrong: 'wrong'};

const currentStyle = ref<string>(STYLES.neutral);

let timeoutId: number | null = null;
const setStyle = (style: string) => {
    currentStyle.value = style;
    if(timeoutId){
        resetTimeout();
    }
    timeoutId = setTimeout(() => {
        currentStyle.value = STYLES.neutral;
        timeoutId = null;
    }, 500);
};
const clickHandler = () => {
    if (props.isNext) {
        setStyle(STYLES.right);
        emit('rightSelect');
        return;
    }
    setStyle(STYLES.wrong);
    emit('wrongSelect');
};

const resetTimeout = ()=>{
    timeoutId && clearTimeout(timeoutId);
    timeoutId = null;
}
onBeforeUnmount(() => {
    resetTimeout();
});
</script>

<style lang="scss" scoped>
.shulte-table-cell {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3.5rem;
  max-width: 3.5rem;
  min-width: 3.5rem;
  height: 3.5rem;

  padding: 1rem;
  border: 1px solid black;
  color: black;
  font-size: 1.5rem;
  transition: color 400ms linear;

  &--neutral {
    color: black;
  }

  &--right {
    color: green;
  }

  &--wrong {
    color: $red-2;
  }
}

</style>