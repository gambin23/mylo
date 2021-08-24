
<template>
    <div class="row">
        <div class="col">
            <MenuComponent :menu="state.payload" :loading="state.loading" />
            <div v-if="loading">
                Loading...
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { injectMenuStore } from '@/store/menu.store'
import { defineComponent } from 'vue'
import MenuComponent from '@/components/menus/Menu.vue'
import { useRoute } from 'vue-router'

export default defineComponent({
    name: 'Menu',
    components: {
        MenuComponent
    },
    setup () {
        const store = injectMenuStore()
        const id = useRoute().params.id as string
        store.load(id)

        return {
            ...store
        }
    }
})
</script>
