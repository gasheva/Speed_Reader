<template>
    <div class="exercise exercise--vertical-reading">
        <div class="vertical-reading">
            uid: '1',
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dignissimos harum ipsa nemo numquam,
            odit provident\n' +
            ' sed. Animi aut, cum cumque, deleniti ea id illo libero magni placeat quia ullam.',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dignissimos harum ipsa nemo numquam, odit
            provident\n' +
            ' sed. Animi aut, cum cumque, deleniti ea id illo libero magni placeat quia ullam.',
            date: new Date(),
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'VerticalReading'
};
</script>
<script setup lang="ts">


</script>

<style lang="scss" scoped>
.vertical-reading {
  line-height: 1.5rem;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}

.exercise {
  &--vertical-reading {
    max-height: 500px;
  }
}
</style>