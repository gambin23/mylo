import { inject, provide, reactive } from 'vue'
import { Group } from '@/types/group'
import { getGroups } from '@/api/groups'
import { State } from './types/state'

const GROUPS_STORE = 'groupsStore'

export interface GroupsStore {
    state: State<Group[]>,
    load: () => Promise<void>
}

export const initGroupsStore = (): void => {
    const state: State<Group[]> = reactive({
        data: [],
        error: false,
        loading: false
    })

    const load = async (): Promise<void> => {
        state.loading = true
        await getGroups()
            .then(menus => { state.data = menus })
            .catch(error => { state.error = error })
            .finally(() => { state.loading = false })
    }

    return provide<GroupsStore>(GROUPS_STORE, {
        state,
        load
    })
}

export const injectGroupsStore = (): GroupsStore => inject(GROUPS_STORE)
