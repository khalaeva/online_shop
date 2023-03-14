<template>
    <div class="subscribe">
        <div class="subscribe-content">
            <h3 class="subscribe-title">Join to the club</h3>
            <span class="subscribe-description">subscribe description about shop and sign up</span>
            <sub-form/>
        </div>
    </div>
</template>

<script setup>
import SubForm from '@/components/SubForm.vue';
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