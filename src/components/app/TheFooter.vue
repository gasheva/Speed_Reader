<template>
    <footer class="footer">
        <div class="footer__copyright">
            © SpeedReader 2022
        </div>
        <a class="link footer__share" href="#">Поделиться в вк </a>
        <input-checkbox label="fjldk"/>
    </footer>
</template>

<script>
import InputCheckbox from '@/components/app/InputCheckbox';

export default {
    name:       'TheFooter',
    components: {InputCheckbox},
};
</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    @media screen and (max-width: $md) {
        justify-content: space-between;
    }

    &__copyright {

    }

    &__share {

    }
}
</style>
