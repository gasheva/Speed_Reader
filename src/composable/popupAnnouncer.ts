import {getCurrentInstance} from 'vue';

export const usePopupAnnouncer = () => {
    const instance = getCurrentInstance();
    const errorAnnounce = (error = {msg: 'error'}) => {
        if (!error?.msg) throw Error('useCustomPopupAnnouncer(): no error message has been provided');
        // @ts-ignore
        if (!instance?.parent?.setupState.error) return;
        // @ts-ignore
        instance.parent.setupState.error.msg = error.msg;
    };
    const successAnnounce = (result = {}) => {
        // @ts-ignore
        if (!instance?.parent?.setupState) return;
        // @ts-ignore
        if (instance.parent.setupState.error) {
            // @ts-ignore
            instance.parent.setupState.error.msg = '';
        }
        debugger
        // @ts-ignore
        if (instance.parent.setupState.popupResult) {
            // @ts-ignore
            instance.parent.setupState.popupResult.result = result;
        }
    };

    return {
        errorAnnounce,
        successAnnounce,
    };
};