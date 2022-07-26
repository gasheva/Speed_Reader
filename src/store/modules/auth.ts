import {unref} from 'vue';

const LS_TOKEN_FIELD_NAME = 'sp_token';

export type User = {
    uid: string,
    email: string,
    nickname: string,
    broadcast: boolean,
    avatar: string,
}

interface State {
    user: User | undefined;
}

const state: State = {
    user: undefined,
};

const getters = {
    getToken: () => localStorage.getItem(LS_TOKEN_FIELD_NAME),
    isAuth: (_:State, getters: any) => Boolean(getters.getToken?.length),
};

const mutations = {
    setUser(state: State, user: User) {
        state.user = user;
    },
    clearUser(state: State) {
        state.user = undefined;
    },
    setToken(state: State, token: string) {
        localStorage.setItem(LS_TOKEN_FIELD_NAME, token);
    },
    clearToken() {
        localStorage.removeItem(LS_TOKEN_FIELD_NAME);
    }
};

const actions = {
    async login({commit}: { commit: Function }, credits: User & {password: string}) {
        // const mockUser = {uid: '1', email: 'beowulf@m.ru', nickname: 'Beowulf'};
        const mockToken = '123';
        const unrefUser = unref(credits);
        commit('setUser', unrefUser);
        commit('setToken', mockToken);
        return true;
    },

    async register({commit}: { commit: Function }, credits: User & {password: string}) {
        // const mockUser = {uid: '1', email: 'beowulf@m.ru', nickname: 'Beowulf'};
        const mockToken = '123';
        const unrefUser = unref(credits);
        commit('setUser', unrefUser);
        commit('setToken', mockToken);
        return true;
    },

    logout({commit}: { commit: Function }) {
        commit('clearToken');
    }
};

export const auth = {
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
};
