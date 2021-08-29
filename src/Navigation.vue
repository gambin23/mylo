<script lang="ts">
import { defineComponent } from 'vue'
import { injectAccountStore } from '@/store/account'
import Avatar from '@/components/ui/Avatar.vue'

export default defineComponent({
    name: 'Navigation',
    components: {
        Avatar
    },
    setup() {
        const accountStore = injectAccountStore()

        return {
            ...accountStore
        }
    }
})
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">mylo</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item active">
                        <router-link to="/groups" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link to="/groups" class="nav-link">Groups</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link to="/recipes" class="nav-link">Recipes</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">About</router-link>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                    <router-link to="/my-account" class="ms-3">
                        <Avatar :text="`${state.data?.name} ${state.data?.surname}`" :size="48" :img="state.data?.img" />
                    </router-link>
                </form>
            </div>
        </div>
    </nav>
</template>
