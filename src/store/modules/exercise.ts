import {Module} from 'vuex';
import {ExerciseType} from '@/interfaces/exercises';

interface State {
}

const state: State = {};

const actions = {
    async fetchExerciseData(_: any, props: { id: string }) {
        const wordsFormat = (words: string[])=>{
            return words.flatMap((word: string)=> {
                let splitted = word.split('|');
                splitted.splice(1, 0, '|');
                return splitted;
            })
        }

        const wordAndColorMock = [
            {colour: 'green', hex: '#bd2b2b', isRight: false},
            {colour: 'red', hex: '#1e941a', isRight: false},
            {colour: 'blue', hex: '#3c5893', isRight: true},
            {colour: 'black', hex: '#c02bc5', isRight: false},
            {colour: 'yellow', hex: '#48beb1', isRight: false},
            {colour: 'yellow', hex: '#bea648', isRight: true},
        ]
        const pyramidsMock = {
            words: ['кос|тер', 'пат|рон', 'ли|вень'],
            separator: '|',
        }
        const mockSchulte = {size: 5};
        return wordAndColorMock;
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
