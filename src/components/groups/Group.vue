<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { Group } from '@/types/group'
import Avatar from '@/components/ui/Avatar.vue'

export interface GroupComponentProps {
    group: Group
    loading: boolean
    error: boolean
}

export default defineComponent({
    name: 'GroupComponent',
    components: {
        Avatar
    },
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
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setup(props: any) {
        const moreUsersCount = computed(() => props.group?.usersCount - props.group?.users.length)

        return {
            props,
            moreUsersCount
        }
    }
})
</script>

<template>
    <div v-if="loading">loading...</div>
    <div class="card">
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
                    <div class="d-flex flex-row align-items-center">
                        <router-link v-for="user in group?.users" :to="`/user/${user.id}`" :key="user.id" class="me-1">
                            <Avatar :text="`${user.name} ${user.surname}`" :img="user.img" />
                        </router-link>
                        <b v-if="moreUsersCount > 0">+{{moreUsersCount}}</b>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
