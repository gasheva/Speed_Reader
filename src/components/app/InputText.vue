<template>
    <div class="input-text">
        <label v-show="hint" class="input-text__label label">{{ hint }}</label>
        <input v-model="text"
               :class="{'border-danger':!isValid}"
               class="input-text__input input"
               type="text"/>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from 'vue';

// defineComponent allow to skip props typing
export default defineComponent({
    name: 'InputText',
    props: {
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
    },
    setup(props) {
        const text = ref(props.initText);

        const isValid = computed(() => {
            if (props.type === 'text') return true;
        });
        return {
            text,
            isValid
        };
    },
});
</script>

<style lang="scss" scoped>
.input-text {
    display: flex;
    flex-direction: column;

    &__input {
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
