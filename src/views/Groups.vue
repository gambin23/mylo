<script lang="ts">
import { defineComponent } from 'vue'
import { injectGroupsStore } from '@/store/groups.store'
import GroupsComponent from '@/components/groups/Groups.vue'

export default defineComponent({
    name: 'Groups',
    components: {
        GroupsComponent
    },
    setup() {
        const store = injectGroupsStore()

        store.load()

        return {
            ...store
        }
    }
})
</script>

<template>
    <div class="row">
        <div class="col">
            <GroupsComponent :groups="state.data" :loading="state.loading" :error="state.error" />
        </div>
    </div>
</template>
