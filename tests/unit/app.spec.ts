import {shallowMount} from '@vue/test-utils';
import * as route from 'vue-router';
import {RouteLocationNormalizedLoaded} from 'vue-router';
import App from '@/App.vue';
import MainLayout from '@/components/layouts/MainLayout.vue';
import {createStore} from 'vuex';
import {Breakpoints} from '@/constants/breakpoint.constant';
import EmptyLayout from '@/components/layouts/EmptyLayout.vue';

const store = createStore({
    state() {
        return {breakpoint: Breakpoints.XS};
    },
    mutations: {
        setBreakpoint: jest.fn(),
    }
});

describe('App.vue', () => {
    let mockUseRoute: jest.SpyInstance;

    afterEach(() => {
        mockUseRoute.mockRestore();
    });

    it('should render main layout', function () {
        const useRouteMockImplementation = {meta: {layout: 'main'}};
        mockUseRoute = jest.spyOn(route, 'useRoute').mockReturnValue(useRouteMockImplementation as unknown as RouteLocationNormalizedLoaded);

        const wrapper = shallowMount(App, {
            global: {
                plugins: [store],
            }
        });
        
        expect(wrapper.findComponent(MainLayout).exists()).toBe(true);
        expect(wrapper.findComponent(EmptyLayout).exists()).toBe(false);
    });
});
