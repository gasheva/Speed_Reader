<template>
    <div class="home">
        <main-section-wrapper :parts="['left', 'main']" v-show="!isExerciseSelected">
            <template #left-tile>
                <div @click="changeTypeHandler(typeAll)">
                    {{ typeAll.label[locale] }}
                </div>
                <div v-for="type in taskTypes" @click="changeTypeHandler(type)">
                    {{ type.label[locale] }}
                </div>
            </template>
            <template #main-tile>
                <exercise-program
                        :tasks="tasksDisplaying"
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
import {useStore} from 'vuex';

const router = useRouter();
const store = useStore();

let tasks = ref<Object[]>([]);
const selectedType = ref('all');
const taskTypes = ref<Object[]>([]);
const locale = computed(() => store.getters['preference/getLocale']);
const typeAll = {
    id: 'all',
    label: {
        ru: 'Все упражнения',
        en: 'All exercises'
    }
};

const tasksDisplaying = computed(() => {
    return selectedType.value === 'all' ?
        tasks.value : tasks.value.filter(task => task.type === selectedType.value);
});

const changeTypeHandler = (type: Object) => {
    selectedType.value = type.id;
};

onBeforeMount(async () => {
    taskTypes.value = [
        {
            id: 'read',
            label: {
                ru: 'Чтение',
                en: 'Read'
            }
        }
    ];
    tasks.value = [
        {
            uid: Math.random().toString(),
            taskName: 'ShulteTable',
            type: 'read',
            image: '',
            title: 'Task',
            description: 'jfksld',
            level: '1',
            complete: true,
        },
        {
            uid: Math.random().toString(),
            taskName: 'ShulteTable',
            type: 'memory',
            image: '',
            title: 'Task',
            description: 'jfksld',
            level: '1',
            complete: false,
        },
        {
            uid: Math.random().toString(),
            taskName: 'ShulteTable',
            type: 'read',
            image: '',
            title: 'Task',
            description: 'jfksld',
            level: '1',
            complete: false,
        },
        {
            uid: Math.random().toString(),
            taskName: 'ShulteTable',
            type: 'read',
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
