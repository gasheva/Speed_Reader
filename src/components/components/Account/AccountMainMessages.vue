<template>
    <div>
        <message-base v-for="i in 5" @click="showMessageHandler"/>

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
import {onBeforeMount, ref} from 'vue';
import {MessageInterface} from '@/components/app/Message/data/message.interface';

const messages = ref<MessageInterface[]>([]);
const selectedMessage = ref<MessageInterface>();
const messagePopupRef = ref({});

onBeforeMount(() => {
    // TODO(fetch messages)
});

const showMessageHandler = async (id: string) => {
    // selectedMessage.value = messages.value.find(message=>message.id===id);
    selectedMessage.value = {
        id: '1',
        title: 'Title',
        text: '        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec urna hendrerit, commodo nisl quis, cursus sem. In congue velit lorem, non pellentesque nunc convallis eget. Sed non neque malesuada, efficitur neque sed, scelerisque nibh. Donec placerat lacus nec pretium posuere. Nulla ultricies orci et vestibulum facilisis. Donec vitae magna risus. Fusce a lorem nec tortor porta pellentesque ut vitae orci. Nulla eget tincidunt dolor, at dictum mi. Vivamus laoreet, tellus id porta mollis, augue mi suscipit lorem, a semper velit quam et neque.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec urna hendrerit, commodo nisl quis, cursus sem. In congue velit lorem, non pellentesque nunc convallis eget. Sed non neque malesuada, efficitur neque sed, scelerisque nibh. Donec placerat lacus nec pretium posuere. Nulla ultricies orci et vestibulum facilisis. Donec vitae magna risus. Fusce a lorem nec tortor porta pellentesque ut vitae orci. Nulla eget tincidunt dolor, at dictum mi. Vivamus laoreet, tellus id porta mollis, augue mi suscipit lorem, a semper velit quam et neque.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec urna hendrerit, commodo nisl quis, cursus sem. In congue velit lorem, non pellentesque nunc convallis eget. Sed non neque malesuada, efficitur neque sed, scelerisque nibh. Donec placerat lacus nec pretium posuere. Nulla ultricies orci et vestibulum facilisis. Donec vitae magna risus. Fusce a lorem nec tortor porta pellentesque ut vitae orci. Nulla eget tincidunt dolor, at dictum mi. Vivamus laoreet, tellus id porta mollis, augue mi suscipit lorem, a semper velit quam et neque.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec urna hendrerit, commodo nisl quis, cursus sem. In congue velit lorem, non pellentesque nunc convallis eget. Sed non neque malesuada, efficitur neque sed, scelerisque nibh. Donec placerat lacus nec pretium posuere. Nulla ultricies orci et vestibulum facilisis. Donec vitae magna risus. Fusce a lorem nec tortor porta pellentesque ut vitae orci. Nulla eget tincidunt dolor, at dictum mi. Vivamus laoreet, tellus id porta mollis, augue mi suscipit lorem, a semper velit quam et neque.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec urna hendrerit, commodo nisl quis, cursus sem. In congue velit lorem, non pellentesque nunc convallis eget. Sed non neque malesuada, efficitur neque sed, scelerisque nibh. Donec placerat lacus nec pretium posuere. Nulla ultricies orci et vestibulum facilisis. Donec vitae magna risus. Fusce a lorem nec tortor porta pellentesque ut vitae orci. Nulla eget tincidunt dolor, at dictum mi. Vivamus laoreet, tellus id porta mollis, augue mi suscipit lorem, a semper velit quam et neque.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec urna hendrerit, commodo nisl quis, cursus sem. In congue velit lorem, non pellentesque nunc convallis eget. Sed non neque malesuada, efficitur neque sed, scelerisque nibh. Donec placerat lacus nec pretium posuere. Nulla ultricies orci et vestibulum facilisis. Donec vitae magna risus. Fusce a lorem nec tortor porta pellentesque ut vitae orci. Nulla eget tincidunt dolor, at dictum mi. Vivamus laoreet, tellus id porta mollis, augue mi suscipit lorem, a semper velit quam et neque.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec urna hendrerit, commodo nisl quis, cursus sem. In congue velit lorem, non pellentesque nunc convallis eget. Sed non neque malesuada, efficitur neque sed, scelerisque nibh. Donec placerat lacus nec pretium posuere. Nulla ultricies orci et vestibulum facilisis. Donec vitae magna risus. Fusce a lorem nec tortor porta pellentesque ut vitae orci. Nulla eget tincidunt dolor, at dictum mi. Vivamus laoreet, tellus id porta mollis, augue mi suscipit lorem, a semper velit quam et neque.\n',
        senderEmail: 'valhalla@m.com'
    };
    await messagePopupRef.value.open();
};
</script>
<style scoped>

</style>