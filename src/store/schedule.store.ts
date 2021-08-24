import { inject, provide, reactive } from 'vue'
import { } from '@/api/groups'
import { State } from './types/state'
import { Schedule } from '@/types/schedule'
import { getSchedule } from '@/api/schedule'

const SCHEDULE_STORE = 'scheduleStore'

export interface MyOrdersStore {
    state: State<Schedule[]>,
    load: () => Promise<void>
}

export const initScheduleStore = (): void => {
    const state: State<Schedule[]> = reactive({
        data: [],
        error: false,
        loading: false
    })

    const load = async (): Promise<void> => {
        state.loading = true
        await getSchedule()
            .then(myOrders => { state.data = myOrders })
            .catch(error => { state.error = error })
            .finally(() => { state.loading = false })
    }

    provide<MyOrdersStore>(SCHEDULE_STORE, {
        state,
        load
    })
}

export const injectScheduleStore = (): MyOrdersStore => inject(SCHEDULE_STORE)
