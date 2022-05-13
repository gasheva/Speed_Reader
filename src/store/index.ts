import {createLogger, createStore} from 'vuex';
import {Breakpoints} from '@/constants/breakpoint.constant';
import {toaster} from '@/store/modules/toaster';
import {auth} from '@/store/modules/auth';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({

    plugins: debug ? [createLogger()] : [],
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
        toaster,
        auth,
    }
});
