<template>
    <div class="about-brand">
        <h3 class="about-brand__title">About brand</h3>
        <div class="about-brand-elements">
            <div 
                class="abour-brand-element"
                v-for="(element, i) of aboutBrand"
                :key="i">
                <img 
                    :src="element.img" 
                    :alt="element.title"
                    class="about-brand-element__img">
                <h4 class="about-brand-element__title">{{ element.title }}</h4>
                <span class="about-brand-element__description">{{ element.description }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const aboutBrand = [
    {
        img: '/svg/about-brand-1.svg',
        title: 'Title icon 1',
        description: 'Desciption icon 1'
    },
    {
        img: '/svg/about-brand-2.svg',
        title: 'Title icon 2',
        description: 'Desciption icon 2'
    },
    {
        img: '/svg/about-brand-3.svg',
        title: 'Title icon 3',
        description: 'Desciption icon 3'
    },
    {
        img: '/svg/about-brand-4.svg',
        title: 'Title icon 4',
        description: 'Desciption icon 4'
    }
]
</script>

<style lang="scss" scoped>
.about-brand{
    padding: 80px 80px 130px 80px;
    &__title {
        text-align: center;
        font-size: 24px;
        color: black;
        margin: 0 0 84px 0;
    }
    &-elements {
        display: grid;
        grid-template-columns: repeat(4, 210px);
        justify-content: space-between;
    }
    &-element {
        &__img {
            display: block;
            margin-bottom: 12px;
        }
        &__title {
            margin: 0 0 12px 0;
            font-size: 20px;
        }
        &__description {
            font-size: 16px;
            line-height: 1.5;
        }
    }
}
</style>