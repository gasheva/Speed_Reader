<template>
    <div class="home">
        <main-section-wrapper :parts="['left', 'main']" v-show="!isExerciseSelected">
            <template #left-tile>
                <div class="exercises-menu">
                    <div @click="changeTypeHandler(typeAll)">
                        <a class="exercises-menu__item" href="" @click.prevent>
                            {{ typeAll.label[locale] }}
                            {{ typeAll.exerciseCount }}
                        </a>
                    </div>
                    <div class="exercises-menu__item"
                         v-for="type in taskTypes"
                         :key="type.id"
                         @click="changeTypeHandler(type)">
                        <a href="" @click.prevent>
                            {{ type.label[locale] }}
                            {{ type.exerciseCount }}
                        </a>
                    </div>
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
import {ExerciseType} from '@/interfaces/exercises';

const router = useRouter();
const store = useStore();

let tasks = ref<Object[]>([]);
const selectedType = ref('all');
const taskTypes = ref<ExerciseType[]>([]);
const locale = computed(() => store.getters['preference/getLocale']);
const typeAll = ref<ExerciseType>({
    id: 'all',
    label: {
        ru: 'Все упражнения',
        en: 'All exercises'
    },
    exerciseCount: 0,
});

const tasksDisplaying = computed(() => {
    return selectedType.value === 'all' ?
        tasks.value : tasks.value.filter(task => task.type === selectedType.value);
});

const changeTypeHandler = (type: ExerciseType) => {
    selectedType.value = type.id;
};

onBeforeMount(async () => {
    const taskPromise = store.dispatch('exercise/fetchTypes');
    tasks.value = await store.dispatch('exercise/fetchExercises');
    taskTypes.value = await taskPromise;
    typeAll.value.exerciseCount = taskTypes.value.reduce((sum, val) => sum += val.exerciseCount, 0);
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
