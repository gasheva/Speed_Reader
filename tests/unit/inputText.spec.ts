import {shallowMount} from '@vue/test-utils';
import InputText from '@/components/app/InputText.vue';

describe('InputText.vue', () => {
    let wrapper: any;

    const createComponent = (props = {}, mountFn = shallowMount) => {
        wrapper = mountFn(InputText, {
            props
        });
    };

    afterEach(() => {
        wrapper && wrapper.destroy && wrapper.destroy();
        wrapper = null;
    });

    it('should show hint', function () {
        const hint = 'random hint';
        createComponent({hint});

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.text()).toMatch(hint);
    });
});
