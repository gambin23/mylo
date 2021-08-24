<script lang="ts">
import { Group } from '@/types/group'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    name: 'GroupsComponent',
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
            <div class="col-md-4">
                <img :src="require(`@/assets/groups/${group.img}`)" class="img-fluid rounded-start">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">
                        {{group.name}}
                    </h5>
                    <p class="card-text">
                        {{group.description}}
                    </p>
                    <p class="card-text">
                        <small class="text-muted">
                            {{group.dateCreated}}
                        </small>
                    </p>
                </div>
            </div>
        </router-link>
    </div>
</template>
