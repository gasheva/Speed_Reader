<template>
    <div class="cropper-tools">
        <div class="cropper-tools__image">
            <div v-show="imageSrc" class="" style="max-width: 450px; max-height: 450px">
                <img class="block max-w-full" ref="img" :src="imageSrc"
                     alt="avatar"/>
            </div>
        </div>
        <div class="cropper-tools__buttons">
            <base-button
                    style-btn="white"
                    :text="t('cancel')"
                    @click="cancelHandler"/>
            <base-button
                    style-btn="black"
                    :text="'update'"
                    @click="handleImageCropped"/>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'ImageCropperTools'
};
</script>
<script setup lang="ts">
import BaseButton from '@/components/app/BaseButton.vue';
import {onMounted, onUnmounted, ref, watch, watchEffect} from 'vue';
import {useI18n} from 'vue-i18n';
import Cropper from 'cropperjs';
import {useStore} from 'vuex';

const props = defineProps({
    selectedFile: {type: Blob, default: null},
    popupCancelHandler: {
        type: Function, default: () => {
        }
    },
    popupConfirmHandler: {
        type: Function, default: () => {
        }
    },
    reset: {type: Boolean, default: false},
});

const {t} = useI18n();
const store = useStore();

const imageSrc = ref<string | ArrayBuffer | null | undefined>(null);
const img = ref(null);
const fileReader = new FileReader();
let cropper: Cropper | null = null;
fileReader.onload = (event): void => {
    imageSrc.value = event?.target?.result;
};
const handleImageCropped = (): void => {
    cropper
        ?.getCroppedCanvas({
            width: 256,
            height: 256,
        })
        .toBlob((blob: Blob | null) => {
            store.dispatch('settings/postAvatar', {fullImage: imageSrc, avatar: blob});
            props.popupConfirmHandler();
        }, 'image/jpeg');
};

onMounted(() => {
    cropper = new Cropper(img.value, {
        viewMode: 3,
        aspectRatio: 1,
        minCropBoxWidth: 256,
        minCropBoxHeight: 256,
        dragMode: 'move',
        background: false,
        cropBoxResizable: true,
    });
});
onUnmounted(() => {
    cropper && cropper.destroy();
});


watchEffect(() => {
    if (props.selectedFile) {
        fileReader.readAsDataURL(props.selectedFile);
    } else {
        imageSrc.value = null;
    }
});

watch(
    imageSrc,
    () => {
        if (imageSrc.value) {
            cropper?.replace(imageSrc.value);
        }
    },
    {
        flush: 'post', // watch runs after component updates
    }
);

const cancelHandler = () => {
    props.popupCancelHandler();
};

watch(() => props.reset, () => {
    if (props.reset) {
        resetForm();
    }
}, {immediate: true});

const resetForm = () => {
    console.log('reset form');
};

</script>

<style lang="scss" scoped>
.cropper-tools {
  &__buttons{
    display: flex;
    flex-direction: row;
    padding: 1rem 0;
    gap: 1rem;
  }
}
</style>