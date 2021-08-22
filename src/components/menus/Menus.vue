<template>
    <div v-for="menu in menus" :key="menu.id" class="card mb-3">
        <router-link :to="{ name: 'Menu', params: { id: menu.id }}" class="row g-0">
            <div class="col-md-4">
                <img :src="require(`@/assets/menus/${menu.img}`)" class="img-fluid rounded-start">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">
                        {{menu.name}}
                    </h5>
                    <p class="card-text">
                        {{menu.description}}
                    </p>
                    <p class="card-text">
                        <small class="text-muted">
                            {{menu.dateCreated}}
                        </small>
                    </p>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Menu } from './Menu'

@Options({
    components: {}
})
export default class MenusComponent extends Vue {
    menus: Menu[] = [
        {
            id: '1',
            name: 'GiG Lunch | Malta',
            description: 'All the lunch menu offered at GiG Beach. You can book your lunch from here.',
            dateCreated: new Date(),
            dateUpdated: new Date(),
            img: 'gig.png'
        },
        {
            id: '2',
            name: 'GiG Lunch | Spain',
            description: 'All the lunch menu offered at GiG Marbella. You can book your lunch from here.',
            dateCreated: new Date(),
            dateUpdated: new Date(),
            img: 'gig.png'
        }
    ]
}
</script>
