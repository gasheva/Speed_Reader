import {Module} from 'vuex';

interface State {
}

const state: State = {};

const actions = {
    async postAvatar(_: any, payload:{fullImage:'', avatar: ''}){
        console.log('postAvatar');

    }
}

export const settings: Module<State, any> = {
    namespaced: true,
    state,
    actions
};