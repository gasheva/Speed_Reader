<template>
    <div class="account-container main-info">
        <h2 class="section-main__header">{{ t('mainInfo') }}</h2>
        <div class="main-info__photo-container">
            <div class="main-info__photo">
                <img v-if="credits.avatar" src="" alt="">
                <span v-else id="avatarWrapper" class="main-info__avatar" v-html="icons.defaultAvatar"/>
            </div>
            <div class="main-info__load-button main-info__button">
                <image-cropper @imageCropped="updatePictureHandler"/>
            </div>
        </div>
        <div class="main-info__credits">
            <input-text :hint="'E-mail'"
                        :input-validators="[inputRequiredOptions]"
                        v-model:value="credits.email"/>
            <input-text :hint="t('nickname')"
                        :input-validators="[inputRequiredOptions]"
                        v-model:value="credits.nickname"
            />

            <input-checkbox :label="t('broadcastAgreement')"
                            label-bold
                            label-side="left"
                            v-model:value-init="credits.toBroadcast"
            />
        </div>
        <div class="main-info__button">
            <base-button
                    :text="t('saveChanges')"
                    :disabled="isDisabled"
                    @click="saveChangesHandler"
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
import {computed, onBeforeMount, onMounted, ref} from 'vue';
import {useStore} from 'vuex';
import {User} from '@/store/modules/auth';
import {icons} from '@/constants/icons.constants';
import ImageCropper from '@/components/app/ImageCropper/ImageCropper.vue';
import {InputValidatorTypes, InputValidatorValues} from '@/interfaces/InputValidator';

const {t} = useI18n();
const store = useStore();

const inputRequiredOptions: InputValidatorValues = {type: InputValidatorTypes.NOT_EMPTY, msg: t('fieldIsEmpty')};

const credits = ref({
    email: '',
    nickname: '',
    toBroadcast: true,
    avatar: '',
});

const validateCredits = (_credits: { email: string, nickname: string }) => {
    return Boolean(_credits.email && _credits.nickname);
};
const isDisabled = computed(() => {
    return !validateCredits(credits.value);
});

onBeforeMount(() => {
    const user = store.state.auth.user;
    if (user?.uid) {
        setupCredits(user);
    }
});

onMounted(() => {
    setupAvatarSize();
});

const setupAvatarSize = () => {
    let avatarWrapper = document.getElementById('avatarWrapper');
    if (!avatarWrapper) return;
    avatarWrapper.children[0].setAttribute('viewBox', '0 0 42 42');
};

/* Upload avatar */
const openDialog = () => {
    document!.getElementById('uploadAvatar')!.click();
};

const setupCredits = (user: User) => {
    credits.value.email = user.email;
    credits.value.toBroadcast = user.broadcast;
    credits.value.nickname = user.nickname;
    credits.value.avatar = user.avatar;
};

const saveChangesHandler = async () => {
    await store.dispatch('settings/postUser', credits);
    await store.dispatch('settings/postPicture');
};

const updatePictureHandler = async () => {
    await store.dispatch('settings/postPicture');
};

</script>
<style lang="scss" scoped>
.main-info {
  gap: 4rem;

  &__photo-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4rem;
    padding: 0 1rem;

    @media screen and (max-width: $sm) {
      justify-content: center;
    }
  }

  &__credits {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }

  &__load-button {
    flex: 1;
  }

  &__photo {
    height: 168px;
    width: 168px;
  }

  &__button {
    max-width: 242px;

    @media screen and (max-width: $sm) {
      align-self: center;
    }
  }
}
</style>

<style lang="scss">
.main-info {
  &__avatar > svg {
    width: 168px;
    height: 168px;
  }
}
</style>