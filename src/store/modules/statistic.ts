import {Module} from 'vuex';

interface State {
}

const state: State = {};

const actions = {
    async fetchTableForPeriod(_: any, payload: { period: number }) {
        // TODO (localization)
        if (payload.period === 1)
            return [
                {
                    id: '1',
                    name: 'Таблица Шульте ' + payload.period,
                    type: 'Внимание',
                    time: '74',
                    count: 5,
                    bestTime: '893'
                },
                {
                    id: '2',
                    name: 'Таблица Шульте2 ' + payload.period,
                    type: 'Внимание',
                    time: '74',
                    count: 5,
                    bestTime: '893'
                },
                {
                    id: '3',
                    name: 'Таблица Шульте3 ' + payload.period,
                    type: 'Внимание',
                    time: '74',
                    count: 9,
                    bestTime: '893'
                },
            ];

        return [
            {
                id: '1',
                name: 'Таблица Шульте ' + payload.period,
                type: 'Внимание',
                time: '74',
                count: 5,
                bestTime: '893'
            },
            {
                id: '2',
                name: 'Таблица Шульте2 ' + payload.period,
                type: 'Внимание',
                time: '74',
                count: 5,
                bestTime: '893'
            },
        ];
    },

    async fetchExerciseForPeriodById(_: any, payload: { id: string }) {
        const mockId = Math.floor(Math.random() * 3);
        switch (mockId) {
            case 1:
                return {
                    id: '1',
                    name: 'Таблица Шульте',
                    type: 'Внимание',
                    time: '74',
                    bestTime: '893',
                    statistic: [
                        {
                            date: new Date('01/01/2021'),
                            count: Math.random() * 10,
                        },
                        {
                            date: new Date('02/01/2021'),
                            count: Math.random() * 10,
                        },
                        {
                            date: new Date('05/01/2021'),
                            count: Math.random() * 10,
                        },
                    ]
                };
            case 2:
                return {
                    id: '2',
                    name: 'Найди пару',
                    type: 'Внимание',
                    time: '74',
                    bestTime: '893',
                    statistic: [
                        {
                            date: new Date('01/01/2021'),
                            count: Math.random() * 10,
                        },
                        {
                            date: new Date('02/01/2021'),
                            count: Math.random() * 10,
                        },
                        {
                            date: new Date('05/01/2021'),
                            count: Math.random() * 10,
                        },
                    ]
                };
            default:
                return {
                    id: '3',
                    name: 'Перпендикулярное чтение',
                    type: 'Внимание',
                    time: '74',
                    bestTime: '893',
                    statistic: [
                        {
                            date: new Date('01/01/2021'),
                            count: Math.random() * 10,
                        },
                        {
                            date: new Date('02/01/2021'),
                            count: Math.random() * 10,
                        },
                        {
                            date: new Date('05/01/2021'),
                            count: Math.random() * 10,
                        },
                    ]
                };
        }
    },

    async fetchAllExercisesForPeriod(_: any, payload: { period: string }) {
        return [
            {
                id: '1',
                name: 'Таблица Шульте',
                type: 'Внимание',
                time: '74',
                bestTime: '893',
                statistic: [
                    {
                        date: new Date('01/01/2021'),
                        count: Math.random() * 10,
                    },
                    {
                        date: new Date('02/01/2021'),
                        count: Math.random() * 10,
                    },
                    {
                        date: new Date('05/01/2021'),
                        count: Math.random() * 10,
                    },
                ]
            },
            {
                id: '2',
                name: 'Найди пару',
                type: 'Внимание',
                time: '74',
                bestTime: '893',
                statistic: [
                    {
                        date: new Date('01/01/2021'),
                        count: Math.random() * 10,
                    },
                    {
                        date: new Date('02/01/2021'),
                        count: Math.random() * 10,
                    },
                    {
                        date: new Date('05/01/2021'),
                        count: Math.random() * 10,
                    },
                ]
            },
            {
                id: '3',
                name: 'Перпендикулярное чтение',
                type: 'Внимание',
                time: '74',
                bestTime: '893',
                statistic: [
                    {
                        date: new Date('01/01/2021'),
                        count: Math.random() * 10,
                    },
                    {
                        date: new Date('02/01/2021'),
                        count: Math.random() * 10,
                    },
                    {
                        date: new Date('05/01/2021'),
                        count: Math.random() * 10,
                    },
                ]
            }
        ];
    }
};

export const statistic: Module<State, any> = {
    namespaced: true,
    state,
    actions
};