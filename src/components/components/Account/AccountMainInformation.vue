<template>
    <div class="main-info">
        <span>{{ t('mainInfo') }}</span>
        <div class="main-info__photo-container">
            <div class="main-info__photo">
                <img v-if="credits.avatar" src="" alt="">
                <span v-else id="avatarWrapper" class="main-info__avatar" v-html="icons.defaultAvatar"/>
            </div>
            <div class="main-info__load-button main-info__button">
                <image-cropper @imageCropped="$emit('imageSubmitted', $event)" />
<!--                <input id="uploadAvatar" type="file" hidden @input="uploadImageHandler">-->
<!--                <base-button id="uploadAvatarBtn" :text="t('loadPhoto')"/>-->
            </div>
        </div>
        <div class="main-info__credits">
            <input-text :hint="'E-mail'" v-model:value="credits.email"/>
            <input-text :hint="'Nickname'" v-model:value="credits.nickname"/>

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
import {computed, onBeforeMount, onMounted, onUnmounted, ref} from 'vue';
import {useStore} from 'vuex';
import {User} from '@/store/modules/auth';
import {icons} from '@/constants/icons.constants';
import ImageCropper from '@/components/app/ImageCropper/ImageCropper.vue';

const {t} = useI18n();
const store = useStore();

const credits = ref({
    email: '',
    nickname: '',
    toBroadcast: true,
    avatar: '',
});

const validateCredits = (_credits: { email: string, nickname: string }) => {
    return !(!_credits.email || !_credits.nickname);
};
const isDisabled = computed(() => {
    return !validateCredits(credits.value);
});

onBeforeMount(() => {
    const user = store.state.auth.user;
    if (!user?.uid) return;
});

onMounted(() => {
    let avatarWrapper = document.getElementById('avatarWrapper');
    if (avatarWrapper) {
        avatarWrapper.children[0].setAttribute('viewBox', '0 0 42 42');
    }
    // listenerForUploadAvatar();
});
onUnmounted(() => {
    // removeListenerForUploadAvatar();
});

/* Upload avatar */
const openDialog = () => {
    document!.getElementById('uploadAvatar')!.click();
};

const listenerForUploadAvatar = () => {
    document!.getElementById('uploadAvatarBtn')!.addEventListener('click', openDialog);
};

const removeListenerForUploadAvatar = () => {
    document!.getElementById('uploadAvatarBtn')!.removeEventListener('click', openDialog);
};

const setupCredits = (user: User) => {
    credits.value.email = user.email;
    credits.value.toBroadcast = user.broadcast;
    credits.value.nickname = user.nickname;
    credits.value.avatar = user.avatar;
};

const uploadImageHandler = (file:Event)=>{
    console.log('uploadImageHandler');
    console.log(file.target!.files);
}
</script>
<style lang="scss" scoped>
.main-info {
  display: flex;
  flex-direction: column;
  padding: 0 2.75rem;
  gap: 4rem;

  &__photo-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 3rem;
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