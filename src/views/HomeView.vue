<template>
    <div class="home">
        <main-section-wrapper>
            <exercise-program
                    v-show="!isExerciseSelected"
                    @select="selectCardHandler"
            />
            <router-view/>
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

const ShulteTable = () => import('@/components/components/Exercises/ShulteTable/ShulteTable.vue');

import {ref} from 'vue';
import {implyModifiers} from '@/utils/modifiers';
import {useRouter} from 'vue-router';

const router = useRouter();

const exerciseComponents = {ShulteTable};
const currentComponent = ref<string | null>(null);

const selectCardHandler = (taskName: string) => {
    router.push({name:taskName});
    // currentComponent.value = getComponentName(taskName);
};
const getComponentName = (taskName: string) => {
    return implyModifiers(taskName, {capitalize: true});
};

</script>
