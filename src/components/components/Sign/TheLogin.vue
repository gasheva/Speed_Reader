<template>
    <div class="login">
        <input-text :hint="'E-mail'"
                    :input-validators="[inputRequiredOptions]"
                    input-type="email"
                    v-model:value="credits.email"/>
        <input-text :hint="t('password')"
                    :input-validators="[inputRequiredOptions]"
                    input-type="password"
                    v-model:value="credits.password"/>

        <div>
            <base-button style-btn="black" :text="t('login')" @click="login"/>
        </div>
        <a class="link link--hover-underline" href="#">{{t('forgetPassword')}}</a>
    </div>
</template>

<script lang="ts">

export default {
    name: 'TheLogin',
}
</script>
<script setup  lang="ts">
import BaseButton from '@/components/app/BaseButton.vue';
import InputText from '@/components/app/InputText.vue';
import {useStore} from 'vuex';
import {useI18n} from 'vue-i18n';
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {InputValidatorTypes, InputValidatorValues} from '@/interfaces/InputValidator';

const {t} = useI18n();
const store = useStore();
const router = useRouter();

const inputRequiredOptions: InputValidatorValues = {type: InputValidatorTypes.NOT_EMPTY, msg: t('fieldIsEmpty')};

const credits = ref({
    email: '',
    password: '',
});
const login = async() => {
    const isSuccess = await store.dispatch('auth/login', credits);
    if(isSuccess) {
        await router.push({name: 'home'});
    }
};
</script>

<style lang="scss" scoped>
.login{
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
</style>
