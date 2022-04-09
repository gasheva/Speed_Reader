import {Breakpoints} from "@/constants/breakpoint.constant";

export function getBreakPoint(windowWidth: Number): Breakpoints | undefined {
    switch (true) {
        case windowWidth >= 1400:
            return Breakpoints.XXL;
        case windowWidth >= 1200:
            return Breakpoints.XL;
        case windowWidth >= 992:
            return Breakpoints.LG;
        case windowWidth >= 768:
            return Breakpoints.MD;
        case windowWidth >= 576:
            return Breakpoints.SM;
        case windowWidth > 0:
            return Breakpoints.XS;
        default:
            return Breakpoints.XL;
    }
}