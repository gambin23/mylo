<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Menu } from '@/types/Menu'

export default defineComponent({
    name: 'MenuComponent',
    props: {
        menu: {
            required: false,
            type: Object as PropType<Menu>
        },
        loading: {
            required: false,
            type: Boolean
        },
        error: {
            required: false,
            type: Boolean
        }
    }
})
</script>

<template>
    <div v-if="loading">loading...</div>
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
                <img v-if="menu?.img" :src="require(`@/assets/menus/${menu.img}`)" class="img-fluid rounded-start">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">
                        {{menu?.name}}
                    </h5>
                    <p class="card-text">
                        {{menu?.description}}
                    </p>
                    <p class="card-text">
                        <small class="text-muted">
                            {{menu?.dateCreated}}
                        </small>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
