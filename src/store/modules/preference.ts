const LS_LOCALE = 'speedReader_locale';
const getters = {
    getLocale: () => localStorage.getItem(LS_LOCALE)
};

const mutations = {
    setLocale(_: any, locale: string) {
        localStorage.setItem(LS_LOCALE, locale ?? '');
    }
};

export const preference = {
    namespaced: true,
    getters,
    mutations
};