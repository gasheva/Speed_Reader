import {unref} from 'vue';
import authApi from '@/services/index';
import serviceApi from '@/services/index';

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
    user: {
        uid: '1',
        email: 'valhalla@mail.c',
        nickname: 'Thor',
        broadcast: false,
        avatar: '',
    },
};

const getters = {
    getToken: () => localStorage.getItem(LS_TOKEN_FIELD_NAME),
    isAuth: (_: State, getters: any) => Boolean(getters.getToken?.length),
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
    async getUser({commit}: { commit: Function }, {id}: { id: string }) {
        const resp = await serviceApi.get(`user/${id}`);
        if (!resp) return false;
        commit('setUser', resp.data);
        return true;
    },

    async login({commit}: { commit: Function }, credits: User & { password: string }) {
        // const mockUser = {uid: '1', email: 'beowulf@m.ru', nickname: 'Beowulf'};
        const mockToken = '123';
        const unrefUser = unref(credits);
        commit('setUser', unrefUser);
        commit('setToken', mockToken);
        return true;
    },

    async register({commit}: { commit: Function }, credits: User & { password: string }) {
        const creditsUnref = unref(credits);
        const resp = await serviceApi.post('auth',
            {
                login: creditsUnref.email,
                password: creditsUnref.password,
            });
        if (!resp) return false;
        commit('setUser', {
            login: resp.data.login,
            uid: resp.data.id
        });
        commit('setToken', resp.data.jwtToken);
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
