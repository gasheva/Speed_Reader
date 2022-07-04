<template>
    <div class="empty-content wrapper">
        <router-view class="content"/>
        <the-footer/>
    </div>
</template>

<script>
import TheFooter from '@/components/app/TheFooter';

export default {
    name:       'EmptyLayout',
    components: {TheFooter},

};
</script>

<style scoped>
.empty-content{
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-width: 1180px;
    margin: 0 auto;
}
</style>
