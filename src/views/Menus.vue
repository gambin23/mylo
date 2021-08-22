<template>
    <div class="row">
        <div class="col">
            <MenusComponent></MenusComponent>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MenusComponent from '@/components/menus/Menus.vue'

@Options({
    components: {
        MenusComponent
    }
})
export default class Menus extends Vue {}
</script>
