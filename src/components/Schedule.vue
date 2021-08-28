<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { format } from 'date-fns'
import { Schedule } from '@/types/schedule'
import Avatar from '@/components/ui/Avatar.vue'

export default defineComponent({
    name: 'ScheduleComponent',
    components: {
        Avatar
    },
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
    },
    setup() {
        return {
            format
        }
    }
})
</script>

<template>
    <div v-if="loading">loading...</div>
    <div v-for="schedule in schedules" :key="schedule.id" class="mb-5">
        <div class="row">
            <h3>
                {{format(schedule.date, 'EEE, dd-MMM-yyyy')}}
            </h3>
            <div v-for="option in schedule.options" :key="option.id" class="col-md-4">
                <div class="card h-100">
                    <div class="card-header p-0">
                        <img v-if="option?.img" :src="require(`@/assets/recipes/${option.img}`)" height="250" class="w-100">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">
                            {{option.name}}
                        </h5>
                        <p class="card-text">
                            {{option.description}}
                        </p>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                                <router-link v-for="user in option.votes.slice(0,3)" :to="`/user/${user.id}`" :key="user.id" class="me-1">
                                    <Avatar :text="`${user.name} ${user.surname}`" :img="user.img" />
                                </router-link>
                                <b v-if="option.votes.length > 3">+{{option.votes.length - 3}}</b>
                            </div>
                            <div class="btn btn-primary">
                                Vote
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
