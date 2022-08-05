import {Module} from 'vuex';
import {ExerciseType} from '@/interfaces/exercises';
import {PropType} from 'vue';

interface State {
}

const state: State = {};

const actions = {
    async fetchExerciseData(_: any, props: { id: string }) {
        return {size: 4};
    },
    async fetchTypes(_: any): Promise<ExerciseType[]> {
        const mockTypes = [
            {
                id: 'read',
                label: {
                    ru: 'Чтение',
                    en: 'Read'
                },
                exerciseCount: 4,
            },
            {
                id: 'attention',
                label: {
                    ru: 'Внимание',
                    en: 'Attention'
                },
                exerciseCount: 4,
            },
            {
                id: 'speed',
                label: {
                    ru: 'Скорость',
                    en: 'Speed'
                },
                exerciseCount: 4,
            }
        ];
        return mockTypes;
    },

    async fetchExercises(_: any) {
        const mockExercises = [
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
        return mockExercises;
    }
};

export const exercise: Module<State, any> = {
    namespaced: true,
    state,
    actions
};
