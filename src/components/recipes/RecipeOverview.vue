<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Group } from '@/types/group'
import { Recipe, RecipeCategory } from '@/types/recipe'

export interface GroupComponentProps {
    group: Group
    loading: boolean
    error: boolean
}

export default defineComponent({
    name: 'RecipeOverviewComponent',
    props: {
        recipe: {
            required: false,
            type: Object as PropType<Recipe>
        },
        loading: {
            required: false,
            type: Boolean
        },
        error: {
            required: false,
            type: Boolean
        }
    },
    setup() {
        return {
            category: RecipeCategory
        }
    }
})
</script>

<template>
    <div v-if="loading">loading...</div>
    <div class="card h-100">
        <div class="card-header p-0">
            <img v-if="recipe?.img" :src="recipe.img" class="img-fluid rounded-start">
        </div>
        <div class="card-body">
            <h5 class="card-title">
                {{recipe?.name}} ({{category[recipe?.category]}})
            </h5>
            <p class="card-text">
                {{recipe?.description}}
            </p>
        </div>
    </div>
</template>
