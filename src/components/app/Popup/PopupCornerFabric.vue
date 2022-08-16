<template>
    <Teleport to="body">
        <div class="popup-corner-fabric"
        >
            <transition-group name="popups">
                <template v-for="msg in messagesDisplaying"
                          :key="msg.uid">
                    <popup-corner :uid="msg.uid"
                                  :title="msg.title"
                                  :text="msg.text"
                                  @hide="popupHideHandler"
                    />
                </template>
            </transition-group>
        </div>
    </Teleport>
</template>

<script lang="ts">
export default {
    name: 'PopupCornerFabric'
};
</script>
<script setup lang="ts">
import PopupCorner from '@/components/app/Popup/PopupCorner.vue';
import {PropType, ref, watch} from 'vue';
import {MessageInterface} from '@/interfaces/programMessage.interface';

const props = defineProps({
    message: {type: Object as PropType<MessageInterface>, default: () => null},
});

const messagesDisplaying = ref<MessageInterface[]>([]);

watch(() => props.message, () => {
    if (props.message) {
        messagesDisplaying.value.push({...props.message, uid: Date.now().toString()});
    }
});

const popupHideHandler = (uid: string) => {
    messagesDisplaying.value = messagesDisplaying.value
        .filter((msg: MessageInterface) => msg.uid !== uid);
};

</script>

<style lang="scss" scoped>
.popup-corner-fabric {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: end;
  align-content: end;
  gap: 0.075rem;
  top: 0;
  right: 0;
  margin: 0 auto;
  max-width: 200px;
  width: 100%;
}

.popups-enter-active,
.popups-leave-active {
  transition: 0.5s ease;
}

.popups-enter-from,
.popups-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>