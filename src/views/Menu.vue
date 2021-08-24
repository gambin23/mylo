<script lang="ts">
import { injectMenuStore } from '@/store/menu.store'
import { defineComponent, toRefs } from 'vue'
import MenuComponent from '@/components/menus/Menu.vue'
import { useRoute } from 'vue-router'

export default defineComponent({
    name: 'Menu',
    components: {
        MenuComponent
    },
    setup () {
        const store = injectMenuStore()
        const state = toRefs(store.state)
        const id = useRoute().params.id as string

        store.load(id)

        return {
            ...store,
            menu: state.payload,
            loading: state.loading,
            error: state.error
        }
    }
})
</script>

<template>
    <div class="row">
        <div class="col">
            <MenuComponent :menu="menu" :loading="loading" :error="error" />
        </div>
    </div>
</template>
