<template>
    <div v-if="loading">loading...</div>
    <div v-for="menu in menus" :key="menu.id" class="card mb-3">
        <router-link :to="{ name: 'Menu', params: { id: menu.id }}" class="row g-0">
            <div class="col-md-4">
                <img :src="require(`@/assets/menus/${menu.img}`)" class="img-fluid rounded-start">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">
                        {{menu.name}}
                    </h5>
                    <p class="card-text">
                        {{menu.description}}
                    </p>
                    <p class="card-text">
                        <small class="text-muted">
                            {{menu.dateCreated}}
                        </small>
                    </p>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script lang="ts">
import { Menu } from '@/types/Menu'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    name: 'MenusComponent',
    props: {
        menus: {
            required: true,
            type: Array as PropType<Menu[]>
        },
        loading: {
            required: true,
            type: Boolean
        },
        error: {
            required: true,
            type: Boolean
        }
    }
})
</script>
