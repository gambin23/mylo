import { reactive } from 'vue'
import { User } from '@/types/user'
import { State } from './types/state'
import { getUser } from '@/api/users'

const state: State<User> = reactive({
    data: null,
    error: false,
    loading: false
})

const load = async (id: string): Promise<void> => {
    state.loading = true
    await getUser(id)
        .then(user => { state.data = user })
        .catch(error => { state.error = error })
        .finally(() => { state.loading = false })
}

export default {
    state,
    load
}
