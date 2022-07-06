<template>
    <div class="card"
         :class="{'card--complete': info.complete, 'card--disabled': disabled}"
         @click="clickHandler"
    >
        <div class="card__image">
            <img src="" alt="('^')">
            {{ info.image }}
        </div>
        <div class="card__info">
            <div class="card__title">{{ info.title }}</div>
        </div>
        <div class="card__footer">
            <span class="card__label label text-small">Уровень {{ info.level }}</span>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'TaskCard'
};
</script>
<script setup lang="ts">
import {CardInfo} from '@/interfaces/cardInfo.interface';

const props = defineProps({
    info: {type: Object as () => CardInfo, required: true},
    disabled: {type: Boolean, default: false},
});
const emit = defineEmits(['click']);

const clickHandler = () => {
    if (!props.disabled) {
        emit('click', props.info.taskName);
    }
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 220px;

  border-radius: $card-border-radius;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  &--disabled {
    & * {
      opacity: .8;
    }
  }

  &:hover:not(.card--disabled) {
    transform: translateY(-9px);
    box-shadow: 12px 12px 13px rgba(0, 0, 0, 0.25)
  }

  &--complete:not(.card--disabled) {
    & * {
      opacity: .8;
    }

    &:hover:after {
      content: 'Restart';
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 136px;
    }
  }

  &__image {
    flex: 6;
    border-radius: $card-border-radius $card-border-radius 0 0;
  }

  &__label {
    color: $grey-4;
  }

  &__info {
    flex: 3;
  }

  &__footer {

  }
}
</style>