<template>
    <div class="account-container messages">
        <h2 class="section-main__header messages__title">{{ t('messages') }}</h2>
        <message-base v-for="message in displayingItems"
                      :message="message"
                      @remove="removeMessageHandler(message.id)"
                      @click.stop="showMessageHandler(message.id)"/>

        <paginator-base
                :currentPageValue="currentPage"
                :last-page="pageCount"
                @prev="prevHandler"
                @next="nextHandler"
                @openFirst="openFirstHandler"
                @openLast="openLastHandler"
                @update:currentPageValue="turnPageHandler"
        />

        <popup-base ref="messagePopupRef" with-cross>
            <template #body>
                <message-content :message="selectedMessage"/>
            </template>
            <template #footer>
                <message-footer :sender-mail="selectedMessage?.senderEmail"/>
            </template>
        </popup-base>
    </div>
</template>

<script lang="ts">
export default {
    name: 'AccountMainMessages',
};
</script>
<script setup lang="ts">
import MessageBase from '@/components/components/Messages/MessageBase.vue';
import PopupBase from '@/components/app/Popup/PopupBase.vue';
import MessageContent from '@/components/app/Message/MessageContent.vue';
import MessageFooter from '@/components/app/Message/MessageFooter.vue';
import {onBeforeMount, ref, watch} from 'vue';
import {MessageInterface} from '@/components/app/Message/data/message.interface';
import {useStore} from 'vuex';
import {useI18n} from 'vue-i18n';
import PaginatorBase from '@/components/app/Paginator/PaginatorBase.vue';
import {usePagination} from '@/composable/pagination';

const store = useStore();
const {t} = useI18n();
const messages = ref<MessageInterface[]>([]);
const selectedMessage = ref<MessageInterface>();
const messagePopupRef = ref({});

onBeforeMount(async () => {
    messages.value = await store.dispatch('message/fetchMessages');
});

const showMessageHandler = async (id: string) => {
    selectedMessage.value = messages.value.find(message => message.id === id);
    await messagePopupRef.value.open();
};
const removeMessageHandler = async (id: string) => {
    await store.dispatch('message/deleteMessage', {id});
};

// PAGINATOR
const {currentPage, next, prev, displayingItems, setup, pageCount, onPage, onFirst, onLast} = usePagination();
watch(messages, () => {
    setup(messages.value);
});
const prevHandler = (): void => {
    prev();
};
const nextHandler = (): void => {
    next();
};
const turnPageHandler = (_page: number) => {
    onPage(_page);
};
const openFirstHandler = (): void => {
    onFirst();
};
const openLastHandler = (): void => {
    onLast();
};
</script>
<style lang="scss" scoped>
.messages {
  &__title {
    margin-bottom: 2rem;
  }
}
</style>