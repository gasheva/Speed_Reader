import {Module} from 'vuex';
import {User} from '@/store/modules/auth';

interface State {
}

const state: State = {};

const actions = {
    async postAvatar(_: any, payload: { fullImage: '', avatar: '' }) {
    },
    async postUser(_: any, payload: { credits: User }) {
    },
    async postPicture(_: any, payload: { picture: string, avatar: string, userId: string }) {
    },
};

export const settings: Module<State, any> = {
    namespaced: true,
    state,
    actions
};