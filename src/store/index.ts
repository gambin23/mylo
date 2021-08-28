import { initAccountStore } from '@/store/account'
import { initGroupsStore } from '@/store/groups.store'
import { initGroupStore } from '@/store/group.store'
import { initScheduleStore } from '@/store/schedule.store'

export const initStore = (): void => {
    initAccountStore()
    initGroupsStore()
    initGroupStore()
    initScheduleStore()
}
