import { inject, provide, reactive } from 'vue'
import { User } from '@/types/user'
import { State } from './types/state'
import { getUser } from '@/api/users'

const ACCOUNT_STORE = 'accountStore'

export interface AccountStore {
    state: State<User>,
    load: () => Promise<void>
}

export const initAccountStore = (): void => {
    const state: State<User> = reactive({
        data: null,
        error: false,
        loading: false
    })

    const load = async (): Promise<void> => {
        state.loading = true
        await getUser('1')
            .then(user => { state.data = user })
            .catch(error => { state.error = error })
            .finally(() => { state.loading = false })
    }

    load()

    return provide<AccountStore>(ACCOUNT_STORE, {
        state,
        load
    })
}

export const injectAccountStore = (): AccountStore => inject(ACCOUNT_STORE)
