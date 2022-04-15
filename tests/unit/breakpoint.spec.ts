import {useBreakpoint} from "@/composable/breakpoint";
import {Breakpoints} from "@/constants/breakpoint.constant";

const store = {
    getters: {
        getBreakpoint: Breakpoints.XS,
    }
}
jest.mock('@/store', () => store);

describe('breakpoint.js', () => {
    it('should return true if screen small or false otherwise', function () {
        const {isScreenSmall, breakpoint} = useBreakpoint();

        expect(breakpoint.value).toBe(Breakpoints.XS)
        expect(isScreenSmall.value).toBe(true)
    });
})