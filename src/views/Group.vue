<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import GroupComponent from '@/components/groups/Group.vue'
import ScheduleComponent from '@/components/Schedule.vue'
import { injectGroupStore } from '@/store/group.store'
import { injectScheduleStore } from '@/store/schedule.store'
import { injectAccountStore } from '@/store/account'

export default defineComponent({
    name: 'Group',
    components: {
        GroupComponent,
        ScheduleComponent
    },
    setup() {
        const groupStore = injectGroupStore()
        const scheduleStore = injectScheduleStore()
        const accountStore = injectAccountStore()

        const id = useRoute().params.id as string

        groupStore.load(id)
        scheduleStore.load()

        return {
            group: { ...groupStore },
            schedules: { ...scheduleStore },
            account: { ...accountStore }
        }
    }
})
</script>

<template>
    <div class="row">
        <div class="col">
            <GroupComponent :group="group.state.data" :loading="group.state.loading" :error="group.state.error" />
            <div class="mb-5"></div>
            <ScheduleComponent :schedules="schedules.state.data" :account="account.state" :loading="schedules.state.loading" :error="schedules.state.error" />
        </div>
    </div>
</template>
