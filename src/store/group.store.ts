import { inject, provide, reactive } from 'vue'
import { Group } from '@/types/group'
import { getGroup } from '@/api/groups'
import { State } from './types/state'

const GROUP_STORE = 'groupStore'

export interface GroupStore {
    state: State<Group>,
    load: (id: string) => Promise<void>
}

export const initGroupStore = (): void => {
    const state: State<Group> = reactive({
        data: null,
        error: false,
        loading: false
    })

    const load = async (id: string): Promise<void> => {
        state.loading = true
        await getGroup(id)
            .then(menu => { state.data = menu })
            .catch(error => { state.error = error })
            .finally(() => { state.loading = false })
    }

    provide<GroupStore>(GROUP_STORE, {
        state,
        load
    })
}

export const injectGroupStore = (): GroupStore => inject(GROUP_STORE)
