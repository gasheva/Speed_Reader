<template>
    <div class="main-info">
        Main info
        <div class="main-info__photo-container">
            <div class="main-info__photo"></div>
            <div class="main-info__button">
                <base-button :text="t('loadPhoto')"/>
            </div>
        </div>
        <div class="main-info__credits">
            <input-text :hint="'E-mail'" v-model:value="credits.email"/>
            <input-text :hint="'Password'" v-model:value="credits.password"/>

            <input-checkbox :label="t('broadcastAgreement')"
                            label-side="left"
                            v-model="credits.toBroadcast"
            />
        </div>
        <div class="main-info__button">
            <base-button
                    :text="t('saveChanges')"
                    :disabled="isDisabled"
            />
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'AccountMainInformation',
};
</script>
<script setup lang="ts">
import BaseButton from '@/components/app/BaseButton.vue';
import {useI18n} from 'vue-i18n';
import InputText from '@/components/app/InputText.vue';
import InputCheckbox from '@/components/app/InputCheckbox.vue';
import {computed, ref} from 'vue';
import {validateCredits} from '@/utils/utils';

const {t} = useI18n();
const credits = ref({
    email: '',
    password: '',
    toBroadcast: true,
});

const isDisabled = computed(() => {
    return !validateCredits(credits.value);
});

</script>
<style lang="scss" scoped>
.main-info {
  &__button {
    max-width: 242px;
  }
}
</style>