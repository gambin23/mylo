<script lang="ts">
import { defineComponent } from 'vue'
import recipesStore from '@/store/recipes'
import { injectGroupsStore } from '@/store/groups.store'
import RecipeOverviewComponent from '@/components/recipes/RecipeOverview.vue'
import RecipesFilterComponent from '@/components/recipes/RecipesFilter.vue'

export default defineComponent({
    name: 'Recipes',
    components: {
        RecipesFilterComponent,
        RecipeOverviewComponent
    },
    setup() {
        const groupsStore = injectGroupsStore()
        groupsStore.load()
        recipesStore.load()

        return {
            groups: {
                store: groupsStore,
                state: groupsStore.state
            },
            recipes: {
                store: recipesStore,
                state: recipesStore.state
            }
        }
    }
})
</script>

<template>
    <div class="row">
        <div class="col-md-3 pb-4">
            <RecipesFilterComponent :groups="groups.state.data" :error="groups.state.error" :loading="groups.state.loading" />
        </div>
        <div class="col-md-9">
            <div class="row">
                <div v-for="recipe in recipes.state.data" :key="recipe.id" class="col-md-4 pb-4">
                    <RecipeOverviewComponent :recipe="recipe" :error="recipes.state.error" :loading="recipes.state.loading" />
                </div>
            </div>
        </div>
    </div>
</template>
