<template>
    <div class="hero">
        <div class="hero-info">
            <div class="hero-info-text">
                <h2 class="hero-info__title">Luxury home</h2>
                <span class="hero-info__description">Description</span>
            </div>
            <a href="#" class="hero-info-link">Collection</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.hero {
    background: url("/img/hero.jpg");
    height: 704px;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 80px;
    &-img {
        max-width: 100%;
    }
    &-info {
        background: #fff;
        max-width: 630px;
        padding: 50px 55px;
        height: 444px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &__title {
            font-weight: 400;
            line-height: 1.5;
            margin: 0 0 20px 0;
            font-family: 'Clash Display', sans-serif;
        }
        &__description {
            font-size: 18px;
        }
        &-link {
            color: black;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }
}

</style>