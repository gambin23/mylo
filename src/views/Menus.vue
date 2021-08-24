<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import { injectMenusStore } from '@/store/menus.store'
import MenusComponent from '@/components/menus/Menus.vue'

export default defineComponent({
    name: 'Menus',
    components: {
        MenusComponent
    },
    setup () {
        const store = injectMenusStore()
        const state = toRefs(store.state)

        store.load()

        return {
            ...store,
            menus: state.payload,
            loading: state.loading,
            error: state.error
        }
    }
})
</script>

<template>
    <div class="row">
        <div class="col">
            <MenusComponent :menus="menus" :loading="loading" :error="error" />
        </div>
    </div>
</template>
