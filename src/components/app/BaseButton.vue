<template>
    <button :class="`base-button--${styleBtn}`"
            :disabled="disabled"
            class="base-button"
            @click="$emit('click')">
        {{ text }}
    </button>
</template>

<script lang="ts">
export default {
    name: 'BaseButton',
}

</script>
<script setup lang="ts">

const props = defineProps(
    {
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
    }
);
const emit = defineEmits(['click']);

</script>

<style lang="scss" scoped>
.base-button {
    display: inline-block;
    width: 100%;
    padding: 1rem 1.5rem;
    border: 2px solid black;
    font-family: $roboto;
    font-weight: 700;
    font-size: $text-middle;

    &--white {
        background-color: white;
        color: black;

      @media(hover: hover) and (pointer: fine) {
        &:hover{
          background-color: black;
          color: white;
        }
      }

      @media(hover: none) and (pointer: coarse) {
        &:active{
          background-color: black;
          color: white;
        }
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

      @media(hover: hover) and (pointer: fine) {
        &:hover{
          background-color: black;
        }
      }

      @media(hover: none) and (pointer: coarse) {
        &:active{
          background-color: black;
        }
      }

        &:disabled {
            background-color: $grey-2 !important;
            border-color: $grey-2 !important;
            cursor: default;
        }
    }
}
</style>
