<template>
    <div class="ideas">
        <HeroInformation
        title="Title"
        description="description"
        colorTitle="white"
        colorDescription="white"
        background="pink"
        colorLink="white"/>
        <img src="/img/idea-1.jpg" alt="idea-1">
    </div>
</template>

<script setup>
    import HeroInformation from '@/HeroInformation.vue';
</script>

<style lang="scss" scoped>
.ideas {
    padding: 0 80px;
    margin-bottom: 60px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 16px;
}
</style>