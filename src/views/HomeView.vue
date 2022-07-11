<template>
    <div class="home">
        <main-section-wrapper v-show="!isExerciseSelected">
            <template #main-tile>
                <exercise-program
                        :tasks="tasks"
                        @select="selectCardHandler"
                />
            </template>
        </main-section-wrapper>

        <exercise-container v-if="isExerciseSelected"/>
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


import {computed, onBeforeMount, ref} from 'vue';
import {useRouter} from 'vue-router';
import ExerciseContainer from '@/components/components/Exercises/ExerciseContainer.vue';

const router = useRouter();

let tasks = ref<Object[]>([]);
onBeforeMount(async () => {
    tasks.value = [
        {
            uid: Math.random().toString(),
            taskName: 'ShulteTable',
            image: '',
            title: 'Task',
            description: 'jfksld',
            level: '1',
            complete: true,
        },
        {
            uid: Math.random().toString(),
            taskName: 'ShulteTable',
            image: '',
            title: 'Task',
            description: 'jfksld',
            level: '1',
            complete: false,
        },
        {
            uid: Math.random().toString(),
            taskName: 'ShulteTable',
            image: '',
            title: 'Task',
            description: 'jfksld',
            level: '1',
            complete: false,
        },
        {
            uid: Math.random().toString(),
            taskName: 'ShulteTable',
            image: '',
            title: 'Task',
            description: 'jfksld',
            level: '1',
            complete: false,
        },
    ];
});

const currentPageName = computed(() =>
    router.currentRoute.value.name
);

const isExerciseSelected = computed(() =>
    currentPageName.value !== 'home'
);

const selectCardHandler = (taskName: string) => {
    router.push({name: taskName});
};

</script>
