import {config} from '@vue/test-utils';
import {DataTestIdPlugin} from "./utils";


config.plugins.VueWrapper.install(DataTestIdPlugin);