
<template>
    <form class="subscribe-form">
        <input 
            type="text" 
            placeholder="your@email.com" 
            class="input-text subscribe-form__input">
        <ui-button>Sign Up</ui-button>
    </form>
</template>

<script setup>
import uiButton from '@/components/UI/Button.vue'
</script>

<style lang="scss" scoped>
.subscribe-form {
    padding-top: 20px;
    display: flex;
    &__input {
        flex-grow: 1;
    }
}
</style>
