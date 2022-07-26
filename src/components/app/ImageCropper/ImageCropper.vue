<template>
    <div class="">
        <div v-show="imageSrc" class="my-2 w-64 h-64 object-fill mx-auto">
            <img class="block max-w-full" ref="img" :src="imageSrc" alt="ava"/>
        </div>
        <div class="flex justify-center content-end mt-2">
            <button
                    v-if="!imageSrc"
                    class="btn btn-blue w-32 mx-2"
                    @click="readress"
            >
                New Image
            </button>
            <button v-else class="btn btn-blue w-32 mx-2" @click="handleImageCropped">
                Update
            </button>
            <button
                    v-if="imageSrc"
                    class="btn btn-gray w-32 mx-2"
                    @click="fileCleared"
            >
                Cancel
            </button>
            <input
                    type="file"
                    ref="imageInput"
                    accept=".jpg,.jpeg,.png"
                    @change="fileChanged"
                    :style="{ display: 'none' }"
            />
        </div>
        <div v-if="selectedFile" class="my-2 align-baseline text-center">
            <span>Selected File: </span>
            <span>{{ selectedFile.name }}</span>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "ImageCropper"
}
</script>
<script setup lang="ts">
import 'cropperjs/dist/cropper.css';
import Cropper from 'cropperjs';
import {onMounted, onUnmounted, ref, watch, watchEffect} from 'vue';

const emit = defineEmits(['imageCropped']);

const imageInput = ref(null); // template ref for file input
const selectedFile = ref(null);
const imageSrc = ref(null);
const img = ref(null);
const fileReader = new FileReader();
let cropper = null;
fileReader.onload = (event) => {
    imageSrc.value = event.target.result;
};
const handleImageCropped = () => {
    cropper
        .getCroppedCanvas({
            width: 256,
            height: 256,
        })
        .toBlob((blob) => {
            console.log(blob);
            emit('imageCropped', blob);
        }, 'image/jpeg');
    selectedFile.value = null;
};
const fileChanged = (e) => {
    const files = e.target!.files || e.dataTransfer.files;
    if (files.length) {
        selectedFile.value = files[0];
    }
};
const fileCleared = () => {
    selectedFile.value = null;
};
onMounted(() => {
    cropper = new Cropper(img.value, {
        aspectRatio: 1,
        minCropBoxWidth: 256,
        minCropBoxHeight: 256,
        viewMode: 3,
        dragMode: 'move',
        background: false,
        cropBoxMovable: true,
        cropBoxResizable: false,
    });
});
onUnmounted(() => {
    cropper.destroy();
});
watchEffect(() => {
    if (selectedFile.value) {
        fileReader.readAsDataURL(selectedFile.value);
    } else {
        imageSrc.value = null;
    }
});
watch(
    imageSrc,
    () => {
        if (imageSrc.value) {
            cropper.replace(imageSrc.value);
        }
    },
    {
        flush: 'post', // watch runs after component updates
    }
);

const readress = ()=>{
    imageInput.value.value = null;
    imageInput.value.click();
}
</script>

<style scoped>

</style>

<style lang="scss">
.cropper-view-box, .cropper-face{
  border-radius: 50%;
}
</style>