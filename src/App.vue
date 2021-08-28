<script lang="ts">
import { defineComponent } from 'vue'
import { initStore } from '@/store/index'
import Navigation from './Navigation.vue'

export default defineComponent({
    components: {
        Navigation
    },
    setup() {
        initStore()
    }
})
</script>

<template>
    <Navigation />
    <div class="container mt-5">
        <router-view />
    </div>
</template>
