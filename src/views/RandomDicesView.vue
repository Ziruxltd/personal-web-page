<template>
    <h2>Random dices</h2>
    <div id="input-container">
        <div id="dices-container" class="component">
            <h3>Dices</h3>
            <AmountInput :initial-amount="dices" @update-amount="updateDices"/>
        </div>
        <div id="sides-container" class="component">
            <h3>Sides</h3>
            <AmountInput :initial-amount="sides" @update-amount="updateAmount"/>
        </div>
    </div>
    <div id="throw-btn-container">
        <my-button id="throw-btn" :label="'Throw!'" @btn-clicked="throwDices"/>
    </div>
</template>

<script setup>
import AmountInput from '@/components/AmountInput.vue';
import MyButton from '@/components/MyButton.vue';
import { ref } from 'vue';

const sides = ref(6);
const dices = ref(1);

function updateAmount(amount) {
    sides.value = amount;
}

function updateDices(amount) {
    dices.value = amount;
}

function throwDices() {
    const results = [];
    for (let i = 0; i < dices.value; i++) {
        results.push(Math.floor(Math.random() * sides.value) + 1);
    }
    alert(results.join(', '));
}
</script>

<style>
#input-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.component {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
}

#throw-btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}
</style>