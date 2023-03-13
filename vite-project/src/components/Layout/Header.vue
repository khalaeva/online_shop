<template>
    <header class="header">
        <div class="header-top">
            <div class="header-top-search">
                <img src="/svg/header-search.svg" alt="search">
            </div>
            <a href="#" class="header-logo">Online Shop</a>
            <div class="header-top-right">
                <div class="header-top-right__cart">
                    <a href="#">
                        <img src="/svg/header-cart.svg" alt="cart">
                    </a>
                </div>
                <div class="header-top-right__profile">
                    <a href="#">
                        <img src="/svg/header-user.svg" alt="user">
                    </a>
                </div>
            </div>
        </div>
        <div class="header-menu">
            <a 
                class="header-menu__link"
                :href="element.path" 
                v-for="(element, i) of menu"
                :key="i">{{ element.name }}</a>
        </div>
    </header>
</template>

<script setup>
    import {ref} from 'vue'

    const menu = [
        {
            name: 'Apple',
            path: '/plant',
        },
        {
            name: 'Samsung',
            path: '/ceramics',
        },
        {
            name: 'Other',
            path: '/tables',
        },
    ]
</script>

<style lang="scss">
.header {
    height: 132px;
    background: #fff;
    &-top {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        height: 70px;
        align-items: center;
        border-bottom: 1px solid rgba(0, 0, 0, 1);
        margin: 0 28px;
        &-right {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            &__cart {
                margin-right: 16px;
            }
        }
    }
    &-logo{
        color: black;
        font-size: 24px;
        text-decoration: none;
        font-family: var(--clash);
        text-align: center;
        &:hover {
            text-decoration: underline;
        }
    }
    &-menu {
        height: 62px;
        display: flex;
        justify-content: center;
        align-items: center;
        &__link {
            margin: 0 22px;
            color: #726E8D;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>