<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Schedule } from '@/types/schedule'

export default defineComponent({
    name: 'ScheduleComponent',
    props: {
        schedules: {
            required: true,
            type: Array as PropType<Schedule[]>
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
    <div v-for="schedule in schedules" :key="schedule.id" class="card mb-3">
        <div class="card-header">
            {{schedule.date}}
        </div>
        <div class="col-md-12">
            <div v-for="option in schedule.options" :key="option.id" class="card-body">
                <h5 class="card-title">
                    {{option.name}}
                </h5>
                <p class="card-text">
                    {{option.description}}
                </p>
            </div>
        </div>
    </div>
</template>
