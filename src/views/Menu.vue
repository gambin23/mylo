<template>
    <div class="row">
        <div class="col">
            <MenuComponent></MenuComponent>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MenuComponent from '@/components/menus/Menu.vue'

@Options({
    components: {
        MenuComponent
    }
})
export default class Menu extends Vue {}
</script>
