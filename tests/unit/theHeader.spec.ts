import {shallowMount} from "@vue/test-utils";
import TheHeader from "@/components/app/Navigation/TheHeader.vue";
import {createConfig} from "./config";

const mockBreakpoint = {
    isScreenSmall: true,
}
jest.mock('@/composable/breakpoint', () => ({
    useBreakpoint: () => mockBreakpoint
}))

describe('TheHeader.vue', () => {
    it('should render burger button', function () {
        const wrapper = shallowMount(TheHeader);

        expect(wrapper.find('[data-test="burgerButton"]').exists()).toBe(true);
    });


    it('should ', function () {
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

    });
})
