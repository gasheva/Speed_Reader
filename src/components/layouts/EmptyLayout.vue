<template>
    <div>
        <router-view/>
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

</style>
