import {config} from "@vue/test-utils";
import {DataTestIdPlugin} from "./utils";

config.plugins.VueWrapper.install(DataTestIdPlugin);

export function createConfig(overrides?: any) {
    const id = 1;
    const mocks = {
        $router: {
            push: () => {
            }
        },
        $store: {
            state: [],
            commit: () => {
            }
        },
        data() {
            return {
                t: (msg: string) => msg,
            }
        }
    };
    const propsData = {id};
    return Object.assign({mocks, propsData}, overrides);
}

// export function createI18nConfig (){
//     const i18n = createI18n({
//         // vue-i18n options here ...
//     })
//
//     return{
//         global:{
//             plugins: [i18n]
//         }
//     }
// }