import {computed} from "vue";
import {Breakpoints} from "@/constants/breakpoint.constant";
import store from "@/store";

export function useBreakpoint() {
    let breakpoint = computed<Breakpoints>(() => store.state.breakpoint)
    let isScreenSmall = computed<Boolean>(() =>
        breakpoint.value === Breakpoints.XS || breakpoint.value === Breakpoints.SM);
    return {
        breakpoint, isScreenSmall
    }
}
