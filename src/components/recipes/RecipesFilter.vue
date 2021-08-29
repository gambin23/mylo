<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Group } from '@/types/group'
import { RecipeCategory } from '@/types/recipe'

export interface GroupComponentProps {
    group: Group
    loading: boolean
    error: boolean
}

export default defineComponent({
    name: 'RecipesFilterComponent',
    props: {
        groups: {
            required: true,
            type: Array as PropType<Group[]>
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
            categories: Object.keys(RecipeCategory).filter((x) => isNaN(Number(x))),
            category: RecipeCategory
        }
    }
})
</script>

<template>
    <div class="card">
        <div class="card-header">
            Filters
        </div>
        <div class="card-body">
            <input type="search" class="form-control" id="search" placeholder="Search...">
            <hr />
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="">
                <label class="form-check-label" for="flexCheckDefault">
                    Show only my recipes
                </label>
            </div>
            <hr />
            <label class="alt">My Groups</label>
            <div v-for="group in groups" :key="group.id" class="form-check">
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
</template>
