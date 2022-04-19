import {createWrapperError, DOMWrapper, VueWrapper} from "@vue/test-utils";

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
    }
}
const setupMock = () => {
    function mockI18n(jest: any) {
        const mockI18n = {t: (msg: string) => msg};

        jest.mock('vue-i18n', () => ({
            useI18n: () => mockI18n,
        }));
    }

    return {
        mockI18n
    }
}

export {DataTestIdPlugin, setupMock}