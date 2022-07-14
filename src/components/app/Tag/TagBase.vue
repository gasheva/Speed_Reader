<template>
    <div ref="tagRef"
         class="tag">
        {{ value }}
    </div>
</template>

<script lang="ts">
export default {
    name: 'TagBase'
};
</script>
<script setup lang="ts">
import {onBeforeMount, onMounted, ref} from 'vue';

const props = defineProps({
    value: {type: String, required: true},
    color: {type: String, default: 'green'}
});

const tagRef = ref(null);
onMounted(() => {
    tagRef.value.style.backgroundColor = props.color;
});

</script>

<style lang="scss" scoped>
.tag {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 87px;
  height: 22px;
  font-size: $text-small;
  border-radius: 4px;
  color: white;
}
</style>