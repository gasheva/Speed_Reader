import {Module} from 'vuex';
import {ExerciseType} from '@/interfaces/exercises';

interface State {
}

const state: State = {};

const actions = {
    async fetchExerciseData(_: any, props: { id: string }) {
        const wordAndColorMock = [
            {colour: 'green', hex: '#bd2b2b'},
            {colour: 'red', hex: '#1e941a'},
            {colour: 'blue', hex: '#3c5893'},
            {colour: 'black', hex: '#c02bc5'},
            {colour: 'yellow', hex: '#48beb1'},
            {colour: 'yellow', hex: '#bea648'},
            {colour: 'yellow', hex: '#082a81'},
            {colour: 'yellow', hex: '#0da693'},
        ]
        const pyramidsMock = {
            words: ['ruwioe', 'jrwekj', 'bfj', 'fewo', 'gjrie', 'buv'],
            separator: '|',
            pyramidHeight: 2,
        }
        const mockSchulte = {size: 5};
        return pyramidsMock;
    },
    async fetchTypes(_: any): Promise<ExerciseType[]> {
        const mockTypes = [
            {
                id: 'read',
                label: {
                    ru: 'Чтение',
                    en: 'Read'
                },
                description: {
                    ru: 'Развитие широты взгляда',
                    en: '',
                },
                exerciseCount: 4,
            },
            {
                id: 'attention',
                label: {
                    ru: 'Внимание',
                    en: 'Attention'
                },
                description: {
                    ru: 'Запоминание смысла, логики, соотношения словесных элементов информации',
                    en: '',
                },
                exerciseCount: 4,
            },
            {
                id: 'speed',
                label: {
                    ru: 'Скорость',
                    en: 'Speed'
                },
                description: {
                    ru: 'Развитие скорости чтения',
                    en: '',
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
