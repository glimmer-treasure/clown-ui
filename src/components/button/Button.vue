<template>
    <button @click="handleClick">
        <slot />
    </button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

interface Props {
  loading?: boolean
}
const props = withDefaults(defineProps<Props>(), {})

const emit = defineEmits<{
    (e: 'click', event: MouseEvent): void,
    (e: 'update:modelLoading', loading: boolean): void
}>()

let loadingState = ref<boolean>(false)


let innerLoading = computed({
    get() {
       return props.loading ? props.loading : loadingState.value
    },
    set(val) {
        if (props.loading) {
            emit('update:modelLoading', val)
        } else {
            loadingState.value = val
        }
    }
})


function handleClick(event: MouseEvent) {
    emit('click', event)
}
</script>

<script lang="ts">
export default {
    name: 'ClButton'
}
</script>