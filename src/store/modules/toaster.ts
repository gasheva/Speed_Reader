interface State {
    isVisible: boolean;
}

const state: State = {
    isVisible: false,
};

const mutations = {
    setIsVisible(state: State, isVisible: boolean) {
        state.isVisible = isVisible;
    }
};

export const toaster = {
    namespaced: true,
    state,
    mutations,
};
