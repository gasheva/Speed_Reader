<template>
  <div class="home">
      <main-section-wrapper>
          <exercise-program/>
      </main-section-wrapper>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HomeView',
};
</script>
<script setup lang="ts">
import MainSectionWrapper from '@/components/app/MainSectionWrapper.vue';
import ExerciseProgram from '@/components/app/ExerciseProgram/ExerciseProgram.vue';

</script>
