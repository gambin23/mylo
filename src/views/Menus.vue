<template>
    <div class="row">
        <div class="col">
            <MenusComponent :menus="state.payload" :loading="state.loading" :error="state.error" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { injectMenusStore } from '@/store/menus.store'
import MenusComponent from '@/components/menus/Menus.vue'

export default defineComponent({
    name: 'Menus',
    components: {
        MenusComponent
    },
    setup () {
        const store = injectMenusStore()
        store.load()
        return {
            ...store
        }
    }
})
</script>
