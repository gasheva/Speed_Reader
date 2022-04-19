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

export {DataTestIdPlugin}