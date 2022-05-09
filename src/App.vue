<template>
    <component
        :is="layout"/>
</template>

<script lang="ts">
import {computed, onMounted, onUnmounted, ref, watch} from 'vue';
import {getBreakpoint} from '@/utils/utils';
import {useStore} from 'vuex';
import MainLayout from '@/components/layouts/MainLayout.vue';
import EmptyLayout from '@/components/layouts/EmptyLayout.vue';
import {useRoute} from 'vue-router';

export default {
    components: {
        MainLayout, EmptyLayout
    },
    setup() {
        const store = useStore();
        const windowWidth = ref(window.innerWidth);
        let breakpoint = computed(() => store.state.breakpoint);
        const handleResize = (() => {
            windowWidth.value = window.innerWidth;
        });

        watch(windowWidth, (width) => {
            let br = getBreakpoint(width);
            if (breakpoint.value !== br) {
                store.commit('setBreakpoint', br);
            }
        }, {immediate: true});

        onMounted(() => {
            window.addEventListener('resize', handleResize);
        });

        onUnmounted(() => {
            window.removeEventListener('resize', handleResize);
        });

        const route = useRoute();
        const layout = computed(() => (route.meta.layout || 'empty') + '-layout');

        return {layout};
    },
};
</script>

<style lang="scss">
/* CLEARING STYLES */
* {
    padding: 0;
    margin: 0;
    border: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

*, *:before, *:after {
    box-sizing: border-box;
}

:focus, :active {
    outline: none;
}

a:focus, a:active {
    outline: none;
}

nav, footer, header, aside {
    display: block;
}

// по дефолту они inline
html, body {
    height: 100%;
    width: 100%;
    line-height: 100%;
    font-size: 1rem;
    ms-text-size-adjust: 100%; // запрет изменения размера шрифта браузером
    moz-text-size-adjust: 100%;
    webkit-text-size-adjust: 100%;
}

input, button, textarea {
    font-family: inherit;
}

// по дефолту не наследуют
input::-ms-clear {
    display: none;
}

// убрать крестик в инпуте
button {
    cursor: pointer;
}

button::-moz-focus-inner {
    padding: 0;
    border: 0;
}

a, a:visited {
    text-decoration: none;
}

a:hover {
    text-decoration: none;
}

ul li {
    list-style: none;
}

img {
    vertical-align: top;
}

h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: 400;
}
</style>
