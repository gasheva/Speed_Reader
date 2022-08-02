<template>
    <footer class="footer container">
        <div class="footer__copyright">
            © SpeedReader 2022
        </div>
        <a class="link link--hover-underline footer__share" href="#">Поделиться в вк </a>
    </footer>
</template>

<script>
import InputCheckbox from '@/components/app/InputCheckbox';

export default {
    name: 'TheFooter',
    components: {InputCheckbox},
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: auto;
  gap: 4rem;
  padding: 1rem;
  font-size: 12px;

  @media screen and (max-width: $md) {
    justify-content: space-between;
  }

  &__copyright {

  }

  &__share {

  }
}
</style>
