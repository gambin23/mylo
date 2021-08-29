<script lang="ts">
import { defineComponent } from 'vue'
import recipesStore from '@/store/recipes'
import RecipeOverviewComponent from '@/components/recipes/RecipeOverview.vue'
import { injectGroupsStore } from '@/store/groups.store'
import { RecipeCategory } from '@/types/recipe'

export default defineComponent({
    name: 'Recipes',
    components: {
        RecipeOverviewComponent
    },
    setup() {
        const groupsStore = injectGroupsStore()
        groupsStore.load()
        recipesStore.load()

        return {
            categories: Object.keys(RecipeCategory).filter(x => isNaN(Number(x))),
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
        <div class="col-md-3">
            <div class="card">
                <div class="card-header">
                    Filters
                </div>
                <div class="card-body">
                    <label class="alt">My Groups</label>
                    <div v-for="group in groups.state.data" :key="group.id" class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            {{group.name}}
                        </label>
                    </div>
                    <hr />
                    <label class="alt">Categories</label>
                    <div v-for="(category, index) in categories" :key="index" class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            {{category}}
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-9">
            <div class="row">
                <div v-for="recipe in recipes.state.data" :key="recipe.id" class="col-md-4">
                    <RecipeOverviewComponent :recipe="recipe" :error="recipes.state.error" :loading="recipes.state.loading" />
                </div>
            </div>
        </div>
    </div>
</template>
