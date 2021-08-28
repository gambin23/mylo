
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Avatar',
    props: {
        size: {
            default: () => 32,
            type: Number
        },
        text: {
            required: true,
            type: String
        },
        img: {
            required: false,
            type: String
        },
        color: {
            default: () => 'white',
            type: String
        },
        background: {
            default: () => 'darkgray',
            type: String
        }
    },
    setup(props) {
        return {
            styles: {
                'background-color': props.background,
                color: props.color,
                height: props.size.toString() + 'px',
                width: props.size.toString() + 'px',
                'font-size': ((props.size as number) / 2).toString() + 'px'
            }
        }
    }
})
</script>

<template>
    <div class="rounded-circle d-flex align-items-center justify-content-center" :style="styles">
        <img v-if="img" class="rounded-circle" alt="Image placeholder" :height="size" :width="size" :src="img">
        <div v-else class="text-center">
            <b>
                {{text.substring(0,2).toUpperCase()}}
            </b>
        </div>
    </div>
</template>
