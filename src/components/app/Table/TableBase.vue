<template>
    <div class="table-wrapper">
        <table v-if="!showPlaceholder" class="table">
            <tr>
                <th v-for="header in headers">
                    {{ implyModifiers(header.label, {capitalize: true}) }}
                </th>
            </tr>
            <tr v-for="row in visibleRows"
                :key="row.id"
                class="table__row"
            >
                <td v-for="colIndex in headers.length" :key="colIndex">
                    {{row[headers[colIndex-1].uname]}}
                </td>
            </tr>
            <tr>
                <td class="table__hide-button"
                    @click="hideHandler" :colspan="headers.length">
                    {{ isHidden ? 'Показать все' : 'Скрыть' }}
                </td>
            </tr>
        </table>
        <div v-else class="no-data">
            {{ props.placeholder }}
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'TableBase'
};
</script>
<script setup lang="ts">

import {computed, onBeforeUnmount, PropType, ref} from 'vue';
import {implyModifiers} from '@/utils/modifiers';
import {TableBaseHeaderInterface, TableBaseRowInterface} from '@/components/app/Table/data/tableBase.interface';

const props = defineProps({
    placeholder: {type: String, default: ''},
    headers: {
        type: Object as PropType<TableBaseHeaderInterface[]>,
        required: true,
    },
    rowsData: {
        type: Object as PropType<TableBaseRowInterface[]>,
        default: []
    },
    maxVisibleRowsCount: {type: Number, default: 2},
});

const showPlaceholder = computed(() =>
    !props.headers || props.headers?.length === 0
);

const visibleRows = computed(() => {
    if (isHidden.value) {
        return props.rowsData?.slice(0, props.maxVisibleRowsCount);
    }
    return props.rowsData;
});

const isHidden = ref(true);

onBeforeUnmount(() => {
    isHidden.value = props.rowsData?.length > props.maxVisibleRowsCount;
});

const hideHandler = () => {
    isHidden.value = !isHidden.value;
};

const onEnter = () => {
    console.log('onEnter');
};
</script>

<style lang="scss" scoped>
.table-wrapper {
}

.table {
  &__hide-button {
    padding: .5rem;
    text-align: center;
    color: $grey-3;
    cursor: pointer;
  }

  &__row {
    animation-name: row-show;
    animation-duration: 1s;
  }
}

@keyframes row-show {
  from {
    transform: translateX(-30px);
    opacity: 0;
  }
}

table {
  border-spacing: 0;
  outline: 3px solid $grey-3;
  border-radius: $card-border-radius;
  width: 100%;
}

td {
  border-right: 1px solid $grey-3;
  border-bottom: 1px solid $grey-3;
  text-align: center;
  padding: .5rem;
}

td:first-child {
  border-left: none;
}

td:last-child {
  border-right: none;
}

tr:last-child > td {
  border-bottom: none;
}

th {
  border: 1px solid;
  border-image: linear-gradient(0deg, rgba(196, 196, 196, 1) 60%, rgba(255, 255, 255, 1) 60%);
  border-image-slice: 1;
  border-left: 0;
  text-align: start;
  padding: .5rem;
}

th:first-child {
  border-left: none;
}

th:last-child {
  border-right: none;
}

.no-data {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  border: 3px solid $grey-3;
  border-radius: $card-border-radius;
}
</style>