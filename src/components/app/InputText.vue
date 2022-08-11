<template>
    <div class="input-text">
        <label v-show="hint" class="input-text__label label">{{ hint }}</label>
        <input ref="inputRef"
               v-model="text"
               :class="{'border-danger':!isValid.isValid}"
               class="input-text__input input"
               :type="inputType"
        />
        <span v-show="!isValid.isValid"
              class="input-text__error"
        >{{ isValid.msg }}</span>
    </div>
</template>

<script lang="ts">
export default {
    name: 'InputText',
};
</script>
<script setup lang="ts">
import {computed, PropType, ref} from 'vue';
import {implyModifiers, ModifierOptions} from '@/utils/modifiers';
import {InputValidatorResultInterface, InputValidatorTypes, InputValidatorValues} from '@/interfaces/InputValidator';

const props = defineProps({
    initText: {
        type: String,
        default: '',
    },
    hint: {
        type: String,
        default: '',
    },
    value: {type: String, default: ''},
    inputType: {
        type: String,
        default: 'text',
        validator: (val: string)=>{
            const values = new Set(['text', 'password', 'email', 'number']);
            return values.has(val);
        }
    },
    modelModifiers: {
        type: Object as () => ModifierOptions,
        default: () => ({
            trim: true,
        } as ModifierOptions)
    },
    inputValidators: {type: Object as PropType<InputValidatorValues[]>, default: []},
    permittedValue: {
        type: String,
        default: 'text',
        validator: (val: string) => {
            const values = new Set(['text', 'wholeNumber', 'decimal']);
            return values.has(val);
        }
    },
});

const emit = defineEmits(['update:value', 'onValidation']);

const inputRef = ref({});
const checkIsValid = (val: string): InputValidatorResultInterface => {
    let result: InputValidatorResultInterface = {isValid: true, errors: []};

    props.inputValidators?.forEach(option => {
        switch (option.type) {
            case InputValidatorTypes.NOT_EMPTY:
                const checkRes = !isEmpty(val);
                result.isValid &&= checkRes;
                !checkRes && result.errors.push(option);
                break;
            case InputValidatorTypes.WHOLE_NUMBER:
                if (isEmpty(val)) break;
                const checkRes2 = isWholeNumber(val);
                result.isValid &&= checkRes2;
                !checkRes2 && result.errors.push(option);
                break;
            case InputValidatorTypes.DECIMAL:
                if (isEmpty(val)) break;
                const checkRes3 = isDecimal(val);
                result.isValid &&= checkRes3;
                !checkRes3 && result.errors.push(option);
                break;
        }
    });
    return result;
};

const isValid = ref<{ isValid: boolean, msg: string }>({isValid: true, msg: ''});

const isDecimal = (val: string): boolean => {
    return Boolean(!isNaN(Number(val)));
};
const isWholeNumber = (val: string): boolean => {
    const valNumber = Number(val);
    return Boolean(!isNaN(valNumber) && Number.isInteger(valNumber) && val.indexOf('.') === -1);
};
const isEmpty = (val: string): boolean => {
    return val?.trim().length === 0;
};

const text = computed({
    get() {
        return props.value;
    },
    set(val: string) {
        const valTrimmed = val.trim();
        if (valTrimmed.length && valTrimmed !== '-' && props.permittedValue !== 'text') {
            if (props.permittedValue === 'wholeNumber' && !isWholeNumber(val)
                || props.permittedValue === 'decimal' && !isDecimal(val)) {
                inputRef.value.value = text.value;
                return;
            }
        }
        const validationResult = checkIsValid(valTrimmed);
        isValid.value.isValid = validationResult.isValid;
        isValid.value.msg = validationResult.errors.reduce((sum: string, val) => sum += val.msg + '. ', '');

        const result: string = implyModifiers(val, props.modelModifiers);
        inputRef.value.value = result;
        emit('update:value', result);

        emit('onValidation', validationResult);

    }
});

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

    &:focus.border-danger {
      box-shadow: inset 0 0 3px 1px $red-2;
    }
  }

  &__error{
    font-size: $text-small;
    color: $red-2;
  }
}

.input {
  height: 3rem;
  border: 1px solid black;
}
</style>
