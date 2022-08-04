const LS_LOCALE = 'speedReader_locale';
type State = {
    locale: string
}

const state: State = {
    locale: localStorage.getItem(LS_LOCALE) || ''
};
const getters = {
    getLocale: (state: State) => state.locale
};

const mutations = {
    setLocale(state: State, locale: string) {
        localStorage.setItem(LS_LOCALE, locale ?? '');
        state.locale = locale;
    }
};

export const preference = {
    namespaced: true,
    state,
    getters,
    mutations
};