import {shallowMount} from "@vue/test-utils";
import BurgerButton from "@/components/app/Navigation/BurgerButton.vue";
import {createStore} from "vuex";

const mockI18n = {t: (msg: string) => msg};

jest.mock('vue-i18n', () => ({
    useI18n: () => mockI18n,
}));

jest.mock("@/composable/breakpoint", () => ({
    useBreakpoint: jest.fn(() => ({isScreenSmall: true}))
}))

const store = createStore({
    state() {
        return {isSidebarVisible: false}
    },
    mutations: {
        setSidebarVisible(state: any, isVisible: boolean) {
            state.isSidebarVisible = isVisible;
        }
    }
})


describe('BurgerButton.vue', () => {
    // let mockUseBreakpoint: jest.SpyInstance;
    // let mockUseToggle: jest.SpyInstance;

    afterEach(() => {
        // if(mockUseToggle?.mockRestore) mockUseToggle.mockRestore();
        // if(mockUseBreakpoint?.mockRestore) mockUseBreakpoint.mockRestore();
    })

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

    // it('should remove active style if screen is small', function () {
    //     // TODO(cond: screen must be large; res: commit 'setSidebarVisible' in sidebar.spec.ts)
    //
    //     // mockUseToggle = spyOnModule(t, 'useToggle', {isVisible: ref(true)});
    //     const wrapper = shallowMount(BurgerButton);
    //
    //     expect(wrapper.find('[data-test="burgerButton"]').attributes().class).toMatch('--active');
    // });
})