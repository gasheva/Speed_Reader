import {createStore} from 'vuex'
import {Breakpoints} from "@/constants/breakpoint.constant";

export default createStore({
    state: {
        breakpoint: Breakpoints.XL,
        isSidebarVisible: false,
    },
    getters: {
        getBreakpoint: state => state.breakpoint,
        isSidebarVisible: state => state.isSidebarVisible,
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
    modules: {}
})
