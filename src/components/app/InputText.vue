<template>
    <div class="input-text">
        <label v-show="hint" class="input-text__label label">{{ hint }}</label>
        <input v-model="text"
               :key="trigger"
               :class="{'border-danger':!isValid}"
               class="input-text__input input"
               type="text"
               @change="onChange"
        />
    </div>
</template>

<script lang="ts">
export default {
    name: 'InputText',
};
</script>
<script setup lang="ts">
import {computed, ref} from 'vue';
import {implyModifiers, ModifierOptions} from '@/utils/modifiers';

const props = defineProps({
    initText: {
        type: String,
        default: '',
    },
    hint: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'text',
        // need to provide this: void or use arrow function
        // validator(this: void, val: string) {
        validator: (val: string) => {
            const types = new Set(['text']);
            return types.has(val);
        },
    },
    value: {type: String, default: ''},
    modelModifiers: {
        type: Object as () => ModifierOptions,
        default: () => ({
            trim: true,
        } as ModifierOptions)
    }
});

const emit = defineEmits(['update:value']);

const isValid = computed(() => {
    if (props.type === 'text') return true;
});

const text = computed({
    get() {
        return props.value;
    },
    set(val: string) {
        if (!isValid) return;

        const result: string = implyModifiers(val, props.modelModifiers);
        emit('update:value', result);
    }
});

// update field on change event
const trigger = ref(0);
const onChange = () => {
    trigger.value = Date.now();
};

</script>

<style lang="scss" scoped>
.input-text {
  display: flex;
  flex-direction: column;

  &__input {
    padding: 0 0.5rem;
    font-size: $text-middle;
    &:focus {
      box-shadow: inset 0 0 3px 1px $blue-1;
    }
  }
}

.input {
  height: 3rem;
  border: 1px solid black;
}
</style>
