<script lang="ts">
import { Group } from '@/types/group'
import { defineComponent, PropType } from 'vue'
import GroupComponent from '@/components/groups/Group.vue'

export default defineComponent({
    name: 'GroupsComponent',
    components: {
        GroupComponent
    },
    props: {
        groups: {
            required: true,
            type: Array as PropType<Group[]>
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

<template>
    <div v-if="loading">loading...</div>
    <div v-for="group in groups" :key="group.id" class="card mb-3">
        <router-link :to="{ name: 'Group', params: { id: group.id }}" class="row g-0">
            <GroupComponent :group="group" :loading="loading" :error="error" />
        </router-link>
    </div>
</template>
