import {shallowMount} from '@vue/test-utils';
import * as route from 'vue-router';
import App from '@/App.vue';
import MainLayout from '@/components/layouts/MainLayout.vue';
import {createStore} from 'vuex';
import {Breakpoints} from '@/constants/breakpoint.constant';

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
        const useRouteResults = route.useRoute();
        const useRouteMockImplementation = {meta: {layout: 'main'}};
        // @ts-ignore
        mockUseRoute = jest.spyOn(route, 'useRoute').mockImplementation(() => useRouteMockImplementation);

        const wrapper = shallowMount(App, {
            global: {
                plugins: [store],
            }
        });

        // @ts-ignore
        expect(wrapper.findComponent(MainLayout).exists()).toBe(true);
    });
});
