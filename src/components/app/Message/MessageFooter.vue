<template>
    <div class="popup-message-footer">
        {{ t('from') + ' ' + senderMail }}
    </div>
</template>

<script lang="ts">
export default {
    name: 'MessageFooter'
};
</script>
<script setup lang="ts">
import {useI18n} from 'vue-i18n';

const props = defineProps({
    senderMail: {type: String, default: ''},
});
const {t} = useI18n();

</script>

<style lang="scss" scoped>
.popup-message-footer {
  padding: 1rem;
  border-top: 1px solid $grey-3;
  font-size: $text-small;
  font-family: "Open Sans", serif;
}
</style>