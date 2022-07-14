import {Module} from 'vuex';

interface State {
}

const state: State = {};

const actions = {
    async fetchExerciseData(_:any, props: { id:string }){
        return {size: 4};
    }
}

export const exercise: Module<State, any> = {
    namespaced: true,
    state,
    actions
};
