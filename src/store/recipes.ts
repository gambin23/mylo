import { reactive } from 'vue'
import { State } from './types/state'
import { Recipe } from '@/types/recipe'
import { getRecipes } from '@/api/recipes'

const state: State<Recipe[]> = reactive({
    data: [],
    error: false,
    loading: false
})

const load = async (): Promise<void> => {
    state.loading = true
    await getRecipes()
        .then(recipes => { state.data = recipes })
        .catch(error => { state.error = error })
        .finally(() => { state.loading = false })
}

export default {
    state,
    load
}
