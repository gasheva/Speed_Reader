<template>
    <div class="home">
        <main-section-wrapper>
            <exercise-program
                    v-show="!isExerciseSelected"
                    :tasks="tasks"
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


import {computed, onBeforeMount, ref} from 'vue';
import {implyModifiers} from '@/utils/modifiers';
import {useRouter} from 'vue-router';

const router = useRouter();

let tasks = ref<Object[]>([]);
onBeforeMount(async()=>{
    tasks.value = [
        {
            uid: Math.random().toString(),
            taskName: 'shulteTable',
            image: '',
            title: 'Task',
            description: 'jfksld',
            level: '1',
            complete: true,
        },
        {
            uid: Math.random().toString(),
            taskName: 'shulteTable',
            image: '',
            title: 'Task',
            description: 'jfksld',
            level: '1',
            complete: false,
        },
        {
            uid: Math.random().toString(),
            taskName: 'shulteTable',
            image: '',
            title: 'Task',
            description: 'jfksld',
            level: '1',
            complete: false,
        },
        {
            uid: Math.random().toString(),
            taskName: 'shulteTable',
            image: '',
            title: 'Task',
            description: 'jfksld',
            level: '1',
            complete: false,
        },
    ];
});

const isExerciseSelected = computed(()=>
    router.currentRoute.value.name !=='home'
);

const selectCardHandler = (taskName: string) => {
    router.push({name:taskName});
};

const getComponentName = (taskName: string) => {
    return implyModifiers(taskName, {capitalize: true});
};

</script>
