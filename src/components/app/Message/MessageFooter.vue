<template>
    <div class="popup-message-footer">
        {{ 'From ' + senderMail }}
    </div>
</template>

<script lang="ts">
export default {
    name: 'MessageFooter'
};
</script>
<script setup lang="ts">
const props = defineProps({
    senderMail: {type: String, default: ''},
});
</script>

<style lang="scss" scoped>
.popup-message-footer {
  padding: 1rem;
  border-top: 1px solid $grey-3;
  font-size: $text-small;
  font-family: "Open Sans", serif;
}
</style>