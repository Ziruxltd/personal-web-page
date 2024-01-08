<template>
    <div>
        <button @click="clicked">{{ label }}</button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
    label: String
});

const label = ref(props.label || 'Label');

function clicked() {
    emit('btn-clicked', label.value);
}

const emit = defineEmits(['btn-clicked']);
</script>

<style scoped>
button {
    background-color: #BC6C25;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #DDA15E;
}
</style>