import {createWrapperError, DOMWrapper, VueWrapper} from '@vue/test-utils';
import {Store} from 'vuex';

const DataTestIdPlugin = (wrapper: VueWrapper) => {
    function findByTestId(selector: string) {
        const dataSelector = `[data-testid='${selector}]`;
        const element = wrapper.element.querySelector(dataSelector);
        if (element) {
            return new DOMWrapper(element);
        }
        return createWrapperError('DOMWrapper');
    }

    return {
        findByTestId,
    };
};
const setupMock = () => {
    function mockI18n(jest: any) {
        const mockI18n = {t: (msg: string) => msg};

        jest.mock('vue-i18n', () => ({
            useI18n: () => mockI18n,
        }));
    }

    return {
        mockI18n
    };
};

function spyOnModule(module: any, methodName: string, override: Object = {}) {
    if (!module[methodName]) throw (`Module ${module} does not have method ${methodName}`);
    const useResult = module[methodName]();
    const useMockImplementation = {...useResult, ...override};
    return jest.spyOn(module, methodName).mockImplementation(() => useMockImplementation);
}

function resetStore(store: Store<any>) {
    const defaultState = JSON.parse(JSON.stringify(store.state));
    console.log('init store');
    return () => {
        const storeKeys = Object.keys(store.state);
        console.log('reset store');
        storeKeys.forEach(key => {
            // @ts-ignore
            store.state[key] = JSON.parse(JSON.stringify(defaultState[key]));
        });
    };
}

export {DataTestIdPlugin, setupMock, spyOnModule, resetStore};
