<template>
    <div class="registration">
        <input-text :hint="'E-mail'" v-model:value="credits.email"/>
        <input-text :hint="'Password'" v-model:value="credits.password"/>

        <input-checkbox :label="t('broadcastAgreement')"
                        label-side="left"
                        v-model="credits.toBroadcast"
        />

        <div>
            <base-button style-btn="black"
                         :text="t('register')"
                         @click="register"/>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    name: 'TheRegistration',
};
</script>
<script setup lang="ts">
import InputText from '@/components/app/InputText.vue';
import InputCheckbox from '@/components/app/InputCheckbox.vue';
import {useI18n} from 'vue-i18n';
import BaseButton from '@/components/app/BaseButton.vue';
import {useStore} from 'vuex';
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const {t} = useI18n();
const store = useStore();
const router = useRouter();

const credits = ref({
    email: '',
    password: '',
    toBroadcast: true,
});

const register = async() => {
    const isSuccess = await store.dispatch('auth/register', credits);
    if(isSuccess) {
        await router.push({name: 'home'});
    }
};

</script>

<style lang="scss" scoped>
.registration {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
</style>
