import {useBreakpoint} from '@/composable/breakpoint';
import {Breakpoints} from '@/constants/breakpoint.constant';
import store from '@/store/index';
import {resetStore} from './utils';

describe('breakpoint.js', () => {
    const reset = resetStore(store);
    afterEach(() => {
        reset();
    });

    it('should return true if screen small or false otherwise', function () {
        store.state.breakpoint = Breakpoints.XS;
        const {isScreenSmall, breakpoint} = useBreakpoint();

        expect(breakpoint.value).toBe(Breakpoints.XS);
        expect(isScreenSmall.value).toBe(true);

        store.state.breakpoint = Breakpoints.LG;

        expect(breakpoint.value).toBe(Breakpoints.LG);
        expect(isScreenSmall.value).toBe(false);
    });
});
