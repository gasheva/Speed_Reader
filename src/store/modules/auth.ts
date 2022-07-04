const LS_TOKEN_FIELD_NAME = 'token';

type User = {
    uid: String,
    email: String,
    nickname: String,
}

interface State {
    user: User | undefined;
}

const state: State = {
    user: undefined,
};

const getters = {
    getToken: () => localStorage.getItem(LS_TOKEN_FIELD_NAME),
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
    async login({commit}: { commit: Function }) {
        const mockUser = {uid: '1', email: 'beowulf@m.ru', nickname: 'Beowulf'};
        const mockToken = '123';
        commit('setUser', mockUser);
        commit('setToken', mockToken);
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
