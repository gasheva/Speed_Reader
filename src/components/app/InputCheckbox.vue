<template>
    <label class="input-checkbox">
        <span :class="[labelSide, labelBold?'bold':'']" class="input-checkbox__label">{{ label }}</span>
        <input checked="checked" type="checkbox" v-model="value">
        <span class="input-checkbox__checkmark"/>
    </label>
</template>

<script lang="ts">
export default {
    name: 'InputCheckbox',
};
</script>

<script setup lang="ts">
import {computed} from 'vue';

const props = defineProps({
    label: {type: String, required: true},
    name: {type: String, default: ''},
    disabled: {type: Boolean, default: false},
    labelBold: {type: Boolean, default: false},
    labelSide: {
        type: String,
        default: 'right',
        // need to provide this: void or use arrow function
        // validator(this: void, val: string) {
        validator: (val: string) => {
            const types = new Set(['right', 'left']);
            return types.has(val);
        }
    },
    valueInit: {type: Boolean, required: true,}
});
const emit = defineEmits(['update:valueInit']);

const value = computed({
    get() {
        return props.valueInit;
    },
    set(val: boolean) {
        emit('update:valueInit', val);
    }
});
</script>

<style lang="scss" scoped>
/* Hide the browser's default checkbox */
input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.right {
  order: 2;
}

.input-checkbox {
  display: flex;
  position: relative;
  width: fit-content;
  margin-bottom: 12px;
  gap: .5rem;
  cursor: pointer;
  font-size: $text-middle;
  user-select: none;

  &__label {
    line-height: 22px;
  }

  /* Create a custom checkbox */
  &__checkmark {
    position: relative;
    top: 0;
    left: 0;
    height: 22px;
    width: 22px;
    border: 2px solid black;
    background-color: white;
  }

  /* On mouse-over */
  &:hover .input-checkbox__checkmark {
    background-color: #f2f2f2;
  }

  /* When the checkbox is checked */
  & input:checked ~ .input-checkbox__checkmark {
  }

  /* Create the input-checkbox__checkmark/indicator (hidden when not checked) */
  &__checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the input-checkbox__checkmark when checked */
  & input:checked ~ .input-checkbox__checkmark:after {
    display: block;
  }

  /* Style the input-checkbox__checkmark/indicator */
  & .input-checkbox__checkmark:after {
    left: 6px;
    top: 1px;
    width: 7px;
    height: 14px;
    border: solid black;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
}
</style>
