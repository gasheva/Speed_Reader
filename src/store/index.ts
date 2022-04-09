import {createStore} from 'vuex'
import {Breakpoints} from "@/constants/breakpoint.constant";

export default createStore({
    state: {
        breakpoint: Breakpoints.XL,
    },
    getters: {
        getBreakpoint: state => state.breakpoint
    },
    mutations: {
        setBreakpoint(state, br) {
            state.breakpoint = br;
        }
    },
    actions: {},
    modules: {}
})
