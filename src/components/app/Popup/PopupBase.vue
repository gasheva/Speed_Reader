<template>
    <Teleport to="body">
        <div v-show="isOpen" class="popup-base-background" @click="cancelHandler"/>
        <div v-show="isOpen" class="popup-base" :class="{
            'black-header':withBlackHeader,
            'round-corners': withRoundCorner
        }">
            <div v-if="withCross" class="popup-base__header">
                <div class="popup-base__cross cross-icon" @click="cancelHandler"/>
            </div>
            <div class="popup-base__body">
                <slot name="body" :reset="resetContent" :cancel="cancelHandler" :confirm="confirmHandler"/>
            </div>
            <div class="popup__footer">
                <slot name="footer" :cancel="cancelHandler" :confirm="confirmHandler">
                    <base-button style-btn="black" :text="t('ok')" @click="confirmHandler"/>
                    <base-button style-btn="white" :text="t('cancel')" @click="cancelHandler"/>
                </slot>
            </div>
        </div>
    </Teleport>
</template>

<script lang="ts">
export default {
    name: 'PopupBase'
};
</script>
<script setup lang="ts">
import BaseButton from '@/components/app/BaseButton.vue';
import {useI18n} from 'vue-i18n';
import {ref} from 'vue';
import {deepClone} from '@/utils/utils';

const props = defineProps({
    withCross: {type: Boolean, default: false},
    withBlackHeader: {type: Boolean, default: false},
    withRoundCorner: {type: Boolean, default: false},
});
const {t} = useI18n();
let popupController: { resolve: any, reject: any } = {resolve: null, reject: null};
let popupResult = {};
const isOpen = ref(false);
const resetContent = ref(false);

function cancelHandler() {
    popupController.resolve(false);
    $_close();
}

function confirmHandler() {
    popupController!.resolve(deepClone(popupResult));
    $_close();
}

const $_close = () => {
    resetContent.value = true;
    isOpen.value = false;
};

const open = () => {
    let resolve, reject;
    const popupPromise = new Promise((ok, fail) => {
        [resolve, reject] = [ok, fail];
    });

    popupController = {resolve, reject};
    isOpen.value = true;
    resetContent.value = false;

    return popupPromise;
};

defineExpose({open});
</script>

<style lang="scss" scoped>
.popup-base-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 20%;
}

.popup-base {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  max-width: 600px;
  height: fit-content;
  background: white;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  &__header {
    position: relative;
    padding: 1rem;
  }

  &__cross {
    margin: 0.5rem;
  }

  &__body {
    padding: 1rem;
  }

  &__footer {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 1rem;
    justify-content: space-around;
  }
}

.black-header {
  border-top: 4rem solid black
}

.round-corners {
  border-radius: 32px
}
</style>
