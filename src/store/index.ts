import {createLogger, createStore} from 'vuex';
import {Breakpoints} from '@/constants/breakpoint.constant';
import {toaster} from '@/store/modules/toaster';
import {notification} from '@/store/modules/notification';
import {auth} from '@/store/modules/auth';
import {exercise} from '@/store/modules/exercise';
import {statistic} from '@/store/modules/statistic';
import {settings} from '@/store/modules/settings';
import {message} from '@/store/modules/message';
import {preference} from '@/store/modules/preference';
import {MessageInterface} from '@/interfaces/programMessage.interface';


const debug = process.env.NODE_ENV !== 'production';

interface State {
    breakpoint: Breakpoints,
    isSidebarVisible: boolean,
    messages: MessageInterface[],
}

export default createStore({
    plugins: debug ? [createLogger()] : [],
    state: {
        breakpoint: Breakpoints.XL,
        isSidebarVisible: false,
        messages: [],
    } as State,
    mutations: {
        setBreakpoint(state, breakpoint: Breakpoints) {
            state.breakpoint = breakpoint;
        },
        setSidebarVisible(state, isVisible: boolean) {
            state.isSidebarVisible = isVisible;
        },
        setMessage(state, message: MessageInterface) {
            state.messages.push(message);
        },
    },
    getters: {
        hasMessage: (state) => Boolean(state.messages.length),
        getMessage: (state) => state.messages.shift(),
    },
    actions: {},
    modules: {
        toaster,
        auth,
        notification,
        exercise,
        statistic,
        settings,
        message,
        preference,
    }
});
