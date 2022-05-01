import {shallowMount} from '@vue/test-utils';
import BurgerButton from '@/components/app/Navigation/BurgerButton.vue';
import store from '@/store/index';
import {resetStore} from './utils';

const mockI18n = {t: (msg: string) => msg};

jest.mock('vue-i18n', () => ({
    useI18n: () => mockI18n,
}));

jest.mock('@/composable/breakpoint', () => ({
    useBreakpoint: jest.fn(() => ({isScreenSmall: true}))
}));

describe('BurgerButton.vue', () => {
    const reset = resetStore(store);
    afterEach(() => {
        reset();
    });

    it('should set and unset active style on click', async function () {
        const wrapper = shallowMount(BurgerButton, {
            global: {
                plugins: [store]
            }
        });

        const burgerButton = wrapper.find('[data-test="burgerButton"]');
        expect((burgerButton).attributes().class).not.toMatch('--active');

        await burgerButton.trigger('click');
        expect((burgerButton).attributes().class).toMatch('--active');

        await burgerButton.trigger('click');
        expect((burgerButton).attributes().class).not.toMatch('--active');
    });
});
