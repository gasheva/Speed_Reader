import {flushPromises, shallowMount} from '@vue/test-utils';
import MainLayout from '@/components/layouts/MainLayout.vue';
import store from '@/store';
import {resetStore} from './utils';
import * as m from '@/composable/breakpoint';
import {computed} from 'vue';

describe('MainLayout.vue', () => {
    const reset = resetStore(store);
    let mockUseBrekpoint: jest.SpyInstance;

    afterEach(() => {
        reset();
        mockUseBrekpoint.mockRestore();
    });

    it('should render sidebar and show it or not', async function () {
        const useBreakpointResult = m.useBreakpoint();
        const useBreakpointMockImplementation = {...useBreakpointResult, isScreenSmall: (computed(() => true))};
        mockUseBrekpoint = jest.spyOn(m, 'useBreakpoint').mockImplementation(() => useBreakpointMockImplementation);
        const wrapper = shallowMount(MainLayout, {
            global: {
                plugins: [store]
            }
        });

        expect(wrapper.find('[data-test="mobileSidebar"]').exists()).toBe(true);

        const makeAsync = (action: Function) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    action();
                    resolve(true);
                });
            });
        };

        await makeAsync(() => store.state.isSidebarVisible = true);
        // restructure DOM
        await flushPromises();
        expect(wrapper.get('[data-test="mobileSidebar"]').isVisible()).toBe(true);

        await makeAsync(() => store.state.isSidebarVisible = false);
        await flushPromises();
        expect(wrapper.find('[data-test="mobileSidebar"]').isVisible()).toBe(false);

    });

    it('should not render sidebar', function () {
        const useBreakpointResult = m.useBreakpoint();
        const useBreakpointMockImplementation = {...useBreakpointResult, isScreenSmall: (computed(() => false))};
        mockUseBrekpoint = jest.spyOn(m, 'useBreakpoint').mockImplementation(() => useBreakpointMockImplementation);
        const wrapper = shallowMount(MainLayout);

        expect(wrapper.find('[data-test="mobileSidebar"]').exists()).toBe(false);
    });
});
