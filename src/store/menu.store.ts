import { inject, provide, reactive } from 'vue'
import { Menu } from '@/types/Menu'
import { getMenu } from '@/api/menus'
import { State } from './types/state'

const MENU_STORE = 'menuStore'

export interface MenuStore {
    state: State<Menu>,
    load: (id: string) => Promise<void>
}

export const initMenuStore = (): void => {
    const state: State<Menu> = reactive({
        payload: null,
        error: false,
        loading: false
    })

    const load = async (id: string): Promise<void> => {
        state.loading = true
        await getMenu(id)
            .then(menu => { state.payload = menu })
            .catch(error => { state.error = error })
            .finally(() => { state.loading = false })
    }

    provide<MenuStore>(MENU_STORE, {
        state,
        load
    })
}

export const injectMenuStore = (): MenuStore => inject(MENU_STORE)
