import {createStore} from 'vuex'
import {Breakpoints} from "@/constants/breakpoint.constant";
import {toaster} from "@/store/modules/toaster";

export default createStore({
    state: {
        breakpoint: Breakpoints.XL,
        isSidebarVisible: false,
    },
    mutations: {
        setBreakpoint(state, breakpoint: Breakpoints) {
            state.breakpoint = breakpoint;
        },
        setSidebarVisible(state, isVisible: boolean) {
            state.isSidebarVisible = isVisible;
        }
    },
    actions: {},
    modules: {
        toaster
    }
})
