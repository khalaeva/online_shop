<template>
    <header class="header">
        <div class="header-top">
            <div class="header-top-search">
                <img src="/svg/header-search.svg" alt="search">
            </div>
            <a href="#" class="header-logo">Главная</a>
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
    </header>
</template>

<style lang="scss">
.header {
    height: 132px;
    background: #fff;
    &-top {
        display: flex;
        justify-content: space-between;
        &-right {
            display: flex;
            align-items: center;
            &__cart {
                margin-right: 16px;
            }
        }
    }
    &-logo{
        color: black;
        font-size: 24px;
        text-decoration: none;
        font-family: 'Clash Display', sans-serif;
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>