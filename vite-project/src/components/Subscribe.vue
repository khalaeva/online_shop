<template>
    <div class="subscribe">
        <div class="subscribe-content">
            <h3 class="subscribe-title">Join to the club</h3>
            <span class="subscribe-description">subscribe description about shop and sign up</span>
            <form class="subscribe-form">
                <input 
                    type="text" 
                    placeholder="your@email.com" 
                    class="input-text subscribe-form__input">
                <ui-button>Sign Up</ui-button>
            </form>
        </div>
    </div>
</template>

<script setup>
import uiButton from '@/components/UI/Button.vue'
</script>

<style lang="scss" scoped> 
.subscribe {
    background: url('/img/sub.jpg');
    background-size: cover;
    padding: 97px 0 86px 0;
    &-content {
        max-width: 500px;
        margin: auto;
        text-align: center;
        color: white;
    }
    &-title {
        display: block;
        margin: 0 0 12px 0;
        font-size: 32;
        font-weight: 400;
        font-family: var(--clash);
    }
    &-description {
        display: block;
        font-size: 18px;
    }
    &-form {
        padding-top: 20px;
        display: flex;
        &__input {
            flex-grow: 1;
        }
    }
}
</style>