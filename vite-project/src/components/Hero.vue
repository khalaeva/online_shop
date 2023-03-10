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
    &-img {
        max-width: 100%;
    }
    &-info {
        background: #fff;
        width: 630px;
        padding: 50px 55px;
        height: 444px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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