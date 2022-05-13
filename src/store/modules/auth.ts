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

const mutations = {
    setUser(state: State, user: User) {
        state.user = user;
    },
    clearUser(state: State) {
        state.user = undefined;
    }
};

const actions = {
    async login({commit}: { commit: Function }) {
        const mockUser = {uid: '1', email: 'beowulf@m.ru', nickname: 'Beowulf'};
        commit('setUser', mockUser);
    }
};

export const auth = {
    namespaced: true,
    state,
    mutations,
    actions,
};
