<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-top">
                <div class="footer-menu">
                    <div class="footer-menu-column">
                        <span class="footer-menu__title">Menu</span>
                        <router-link to="/" class="footer-menu__link">New Arrivals</router-link>
                        <router-link to="/" class="footer-menu__link">Best Sellers</router-link>
                        <router-link to="/" class="footer-menu__link">Popular</router-link>
                    </div>
                    <div class="footer-menu-column">
                        <span class="footer-menu__title">Categories</span>
                        <router-link to="/" class="footer-menu__link">Phones</router-link>
                        <router-link to="/" class="footer-menu__link">Watch</router-link>
                        <router-link to="/" class="footer-menu__link">Charge</router-link>
                    </div>
                    <div class="footer-menu-column">
                        <span class="footer-menu__title">Our company</span>
                        <router-link to="/" class="footer-menu__link">About us</router-link>
                        <router-link to="/" class="footer-menu__link">Vacancies</router-link>
                        <router-link to="/" class="footer-menu__link">Contacts</router-link>
                    </div>
                </div>
                <div class="footer-subscribe">
                    <SubForm/>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import SubForm from '@/components/SubForm.vue';
</script>

<style lang="scss" scoped>
.footer {
    background: pink;
    color: white;
    &-content {
        padding: 58px 82px 82px 25px;
    }
    &-top {
        display: grid;
        grid-template-columns: 540px, 1fr;
        column-gap: 110px;
    }
    &-menu {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        &__title {
            font-family: var(--clash);
            display: block;
            margin-bottom: 12px;
        }
        &__link {
            display: block;
            color: white;
            font-size: 14px;
            text-decoration: none;
            margin-bottom: 12px;
            &:last-child {
                margin-bottom: 0;
            }
            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>