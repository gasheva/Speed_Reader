<template>
<div>
    <timer-base :start-time="55" @timeout="timeoutHandler"/>
  <select-base
      :menu="[{
        id: '1',
        label: 'uroiweu'
      },
      {
         id: '2',
        label: 'bnifji'
      }, {
         id: '3',
        label: 'bmk'
      },
      ]"
  />
    shulte
</div>
</template>

<script lang="ts">
export default {
    name: "ShulteTable",
}
</script>
<script setup lang="ts">

import TimerBase from '@/components/components/Timer/TimerBase.vue';
import SelectBase from "@/components/app/Select/SelectBase.vue";

const emit = defineEmits(['finish']);
const timeoutHandler = ()=>{
    emit('finish');
}
</script>

<style scoped>

</style>