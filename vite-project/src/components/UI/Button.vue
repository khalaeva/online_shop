<template>
    <button v-if="type === 'button'"
            :class="[ 
                'btn', 
                { 
                    'btn--primary': color === 'primary', 
                    'btn--second': color === 'second', 
                    'btn--lightgray': color === 'lightgray' 
                } 
            ]">
        <slot/>
    </button>
    <router-link 
        v-else 
        :to="to"
        :class="[ 
                'btn', 
                { 
                    'btn--primary': color === 'primary', 
                    'btn--second': color === 'second', 
                    'btn--lightgray': color === 'lightgray' 
                } 
            ]">
        <slot/>
    </router-link>
</template>

<script setup>
const props = defineProps({
    background: {
        type: String,
        required: false,
    },
    type: {
        type: String, 
        default: 'button',
    },
    to: {
        type: String, 
        required: false
    },
    color: {
        type: String, 
        default: 'primary'
    }
})
</script>

<style lang="scss" scoped>
.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 32px;
    border: none;
    font-size: 16px;
    height: 56px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
    &--primary {
        background: rgba(249, 249, 249, 0.15);
        color: black;
    }
    &--second {
        background: rgba(249, 249, 249, 0.15);
        color: white;
    }
    &--lightgray {
        background: #F9F9F9;
        color: #2A254B;
    }
}
</style>