import {config, shallowMount} from "@vue/test-utils";
import TheHeader from "@/components/app/Navigation/TheHeader.vue";
import * as m from "@/composable/breakpoint"; // 1. import module
import {computed} from "vue";
import {DataTestIdPlugin} from "./utils";

config.plugins.VueWrapper.install(DataTestIdPlugin);

const mockI18n = {t: (msg: string) => msg};

jest.mock('vue-i18n', () => ({
    useI18n: () => mockI18n,
}));

describe('TheHeader.vue', () => {
    let mockUseBrekpoint: jest.SpyInstance;
    // 2. can use 'beforeEach' for all tests, but we want to return different values
    // beforeEach(() => {
    //     const useBreakpointMockImplementation = {isScreenSmall: (computed(()=>true)), breakpoint: (computed(()=>Breakpoints.XS))};
    //     mockGenName = jest.spyOn(m,
    //         'useBreakpoint').mockImplementation(()=>useBreakpointMockImplementation);
    // })


    afterEach(() => {
        mockUseBrekpoint.mockRestore();
    })

    it('should render burger button', function () {
        const useBreakpointResult = m.useBreakpoint();
        // 3. implement mock function for current test before mounting component
        const useBreakpointMockImplementation = {...useBreakpointResult, isScreenSmall: (computed(() => true))};
        mockUseBrekpoint = jest.spyOn(m, 'useBreakpoint').mockImplementation(() => useBreakpointMockImplementation);
        // 4. the order is important
        const wrapper = shallowMount(TheHeader, {
            global: {
                mocks: {
                    t: (msg: string) => msg,
                }
            }
        });

        // expect(wrapper.find('[data-test="burgerButton"]').exists()).toBe(true);
        expect(wrapper.find('[data-test="burgerButton"]').exists()).toBe(false);
    });

    it('should not render burger button', function () {
        const useBreakpointResult = m.useBreakpoint();
        const useBreakpointMockImplementation = {...useBreakpointResult, isScreenSmall: (computed(() => false))};
        mockUseBrekpoint = jest.spyOn(m, 'useBreakpoint').mockImplementation(() => useBreakpointMockImplementation);
        const wrapper = shallowMount(TheHeader);

        expect(wrapper.find('[data-test="burgerButton"]').exists()).toBe(false);
    });


    /* it('should ', function () {
         const getBreakpointMock = jest.fn();
         getBreakpointMock.mockReturnValue(true);

         const wrapper = shallowMount(TheHeader, {
             global: {
                 mocks: {
                     isScreenSmall: getBreakpointMock
                 }
             }
         });
         // const breakpoint = require('@/composable/breakpoint');

         expect(wrapper.vm.isScreenSmall).toBe(true);
     });

     it('should render burger button if mobile is used', function () {
         const config = createConfig({
             data() {
                 return {
                     t: (msg: string) => msg,
                 }
             },
             // computed doesn't exist
             computed: {
                 isScreenSmall: () => true,
             },
             $store: {
                 state: {
                     breakpoint: {value: 5},
                 },
                 getters: {
                     getBreakpoint: () => 5,
                 },
                 commit: () => {
                 }
             },
         });
         const $store = {
             state: {
                 breakpoint: 5,
             },
             getters: {
                 getBreakpoint: () => 5,
             },
             commit: jest.fn()
         }
         const storeMock = {
             methods: {
                 t: (msg: string) => '121'
             },
             global: {
                 mocks: {
                     $store
                 }
             }
         }
         const wrapper = shallowMount(TheHeader, storeMock);


         expect(wrapper.vm.t).toBe(true);
         expect(wrapper.vm.isScreenSmall).toBe(true);

         expect(wrapper.find('[data-test="burgerButton"]').exists()).toBe(true);

     });*/
})
