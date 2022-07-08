<template>
    <div class="main-info">
        Main info
        <div class="main-info__photo-container">
            <div class="main-info__photo"></div>
            <base-button :text="t('loadPhoto')"/>
        </div>
        <div class="main-info__credits">
            <input-text :hint="'E-mail'" v-model:value="credits.email"/>
            <input-text :hint="'Password'" v-model:value="credits.password"/>

            <input-checkbox :label="t('broadcastAgreement')"
                            label-side="left"
                            v-model="credits.toBroadcast"
            />
        </div>
        <base-button :text="t('saveChanges')"/>
    </div>
</template>

<script lang="ts">
export default {
    name: 'AccountMainInformation',
};
</script>
<script setup lang="ts">
import BaseButton from "@/components/app/BaseButton.vue";
import {useI18n} from "vue-i18n";
import InputText from "@/components/app/InputText.vue";
import InputCheckbox from "@/components/app/InputCheckbox.vue";
import {ref} from "vue";

const {t} = useI18n();
const credits = ref({
    email: '',
    password: '',
    toBroadcast: true,
});


</script>
<style lang="scss" scoped>
.main-info {

}
</style>