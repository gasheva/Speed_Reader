<template>
    <div class="">
        <div class="">
            <slot name="uploader">
                <base-button
                        style-btn="black"
                        :text="t('loadPhoto')"
                        @click="readress"/>

                <input
                        type="file"
                        ref="imageInput"
                        accept=".jpg,.jpeg,.png"
                        @change="fileChanged"
                        :style="{ display: 'none' }"
                />
            </slot>
        </div>
        <div v-if="selectedFile" class="">
            <span>Selected File: </span>
            <span>{{ selectedFile.name }}</span>
        </div>

        <popup-base ref="cropperPopupRef">
            <template #body="{reset, cancel, confirm}">
                <image-cropper-tools :reset="reset"
                                     :popup-cancel-handler="cancel"
                                     :popup-confirm-handler="confirm"
                                     :selected-file="selectedFile"
                                     @fileClear="fileCleared"
                                     @error="errorHandler"/>
            </template>
            <template #footer>
                <div/>
            </template>
        </popup-base>
    </div>
</template>

<script lang="ts">
export default {
    name: 'ImageCropper'
};
</script>
<script setup lang="ts">
import 'cropperjs/dist/cropper.css';
import {ref} from 'vue';
import BaseButton from '@/components/app/BaseButton.vue';
import {useI18n} from 'vue-i18n';
import PopupBase from '@/components/app/Popup/PopupBase.vue';
import ImageCropperTools from '@/components/app/ImageCropper/ImageCropperTools.vue';

const emit = defineEmits(['imageCropped']);

const {t} = useI18n();

const imageInput = ref(null); // template ref for file input
const selectedFile = ref(null);
const cropperPopupRef = ref<Object>({});

const fileChanged = async (e) => {
    const files = e.target!.files || e.dataTransfer.files;
    if (files.length) {
        selectedFile.value = files[0];
    }
    const result = await cropperPopupRef.value.open();
    if (result) {
        selectedFile.value = null;
        emit('imageCropped', result);
    } else {
        fileCleared();
    }
};
const fileCleared = () => {
    selectedFile.value = null;
};

const readress = () => {
    imageInput.value.value = null;
    imageInput.value.click();
};

const errorHandler = () => {
    console.log('[x] Cropper error');
};

</script>

<style scoped>

</style>

<style lang="scss">
.cropper-view-box, .cropper-face {
  border-radius: 50%;
}
</style>