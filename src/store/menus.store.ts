import { inject, provide, reactive } from 'vue'
import { Menu } from '@/types/Menu'
import { getMenus } from '@/api/menus'
import { State } from './types/state'

const MENUS_STORE = 'menusStore'

export interface MenusStore {
    state: State<Menu[]>,
    load: () => Promise<void>
}

export const initMenusStore = (): void => {
    const state: State<Menu[]> = reactive({
        payload: [],
        error: false,
        loading: false
    })

    const load = async (): Promise<void> => {
        state.loading = true
        await getMenus()
            .then(menus => { state.payload = menus })
            .catch(error => { state.error = error })
            .finally(() => { state.loading = false })
    }

    provide<MenusStore>(MENUS_STORE, {
        state,
        load
    })
}

export const injectMenusStore = (): MenusStore => inject(MENUS_STORE)
