<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { format } from 'date-fns'
import Avatar from '@/components/ui/Avatar.vue'
import { injectAccountStore } from '@/store/account'

export default defineComponent({
    name: 'Account',
    components: {
        Avatar
    },
    setup() {
        const accountStore = injectAccountStore()

        accountStore.load()

        return {
            accountStore,
            state: accountStore.state,
            format
        }
    }
})
</script>

<template>
    <div class="row">
        <div v-if="state.loading">
            loading...
        </div>
        <template v-else>
            <div class="col-md-3 d-flex justify-content-center">
                <Avatar :size="250" :img="state.data?.img" :text="`${state.data?.name} ${state.data?.surname}`" />
            </div>
            <div class="col-md-9">
                <div class="card">
                    <div class="card-header">
                        <b>{{state.data?.name}} {{state.data?.surname}}</b>
                    </div>
                    <div class="card-body">
                        <p>
                            Date registered: {{format(state.data?.dateRegistered, 'dd-MMM-yyyy')}}
                        </p>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
