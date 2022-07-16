import {Module} from 'vuex';

interface State {
}

const state: State = {};

const actions = {
    async fetchTableForPeriod(_: any, payload: { period: number }) {
        // TODO (localization)
        return [
            {
                id: '1',
                name: 'Таблица Шульте ' + payload.period,
                type: 'Внимание',
                time: '74',
                count: 5,
                record: '893'
            },
            {
                id: '2',
                name: 'Таблица Шульте2 ' + payload.period,
                type: 'Внимание',
                time: '74',
                count: 5,
                record: '893'
            },
            {
                id: '3',
                name: 'Таблица Шульте3 ' + payload.period,
                type: 'Внимание',
                time: '74',
                count: 5,
                record: '893'
            },
        ];
    }
};

export const statistic: Module<State, any> = {
    namespaced: true,
    state,
    actions
};