<template>
    <div class="the-wrapper empty-wrapper">
        <router-view class="content container empty-wrapper__container"/>
        <div class="footer-container">
            <the-footer/>
        </div>
    </div>
</template>

<script>
import TheFooter from '@/components/app/TheFooter';

export default {
    name:       'EmptyLayout',
    components: {TheFooter},

};
</script>

<style lang="scss" scoped>
.empty-wrapper{
  padding-top: 1rem;
  &__container{
    max-width: 1080px;
  }
}
</style>
