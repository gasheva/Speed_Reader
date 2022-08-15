<template>
    <div class="exercise">
        <div class="up-down-text">
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
    name: 'UpDownTextReading'
};
</script>
<script setup lang="ts">


</script>

<style lang="scss" scoped>
.up-down-text {
  transform: rotate(180deg);
  line-height: 1.5rem;
}
</style>