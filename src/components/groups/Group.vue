<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Group } from '@/types/group'

export default defineComponent({
    name: 'GroupComponent',
    props: {
        group: {
            required: false,
            type: Object as PropType<Group>
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
                <img v-if="group?.img" :src="require(`@/assets/groups/${group.img}`)" class="img-fluid rounded-start">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">
                        {{group?.name}}
                    </h5>
                    <p class="card-text">
                        {{group?.description}}
                    </p>
                    <p class="card-text">
                        <small class="text-muted">
                            {{group?.dateCreated}}
                        </small>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
