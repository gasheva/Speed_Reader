<template>
    <button :class="`base-button--${styleBtn}`" :disabled="disabled" class="base-button">{{ text }}</button>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'BaseButton',
    props: {
        text: {type: String, default: 'Undefined'},
        disabled: {type: Boolean, default: false},
        styleBtn: {
            type: String,
            default: 'white',
            validator: (val: string) => {
                const types = new Set(['white', 'black']);
                return types.has(val);
            }
        },
    },
});
</script>

<style lang="scss" scoped>
.base-button {
    display: inline-block;
    border: 2px solid black;
    padding: 1rem 1.75rem;
    font-family: $roboto;
    font-weight: 700;
    font-size: $text-middle;

    &--white {
        background-color: white;
        color: black;

        &:hover {
            background-color: black;
            color: white;
        }

        &:disabled {
            background-color: white !important;
            color: $grey-2;
            border-color: $grey-2;
            cursor: default;
        }
    }

    &--black {
        background-color: $black-1;
        color: white;

        &:hover {
            background-color: black;
        }

        &:disabled {
            background-color: $grey-2 !important;
            border-color: $grey-2 !important;
            cursor: default;
        }
    }
}
</style>
