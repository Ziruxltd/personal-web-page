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
    <div id="results-container">
        <div id="raw-results" class="data">
            <h3>Result</h3>
            <span> {{ results.join(', ') }}</span>
        </div>
        <div id="sum-results" class="data">
            <h3>Sum</h3>
            <span>{{ results.reduce((a, b) => a + b, 0) }}</span>
        </div>
        <div id="ordered-result" class="data">
            <table>
                <thead>
                    <tr>
                        <th>Side</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(count, side) in countBySide" :key="side">
                        <td>{{ side }}</td>
                        <td>{{ count }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import AmountInput from '@/components/AmountInput.vue';
import MyButton from '@/components/MyButton.vue';
import { ref, computed } from 'vue';

const sides = ref(6);
const dices = ref(1);
const results = ref([]);

const countBySide = computed(() => {
    return results.value.reduce((counts, result) => {
        counts[result] = (counts[result] || 0) + 1;
        return counts;
    }, {});
});

function updateAmount(amount) {
    sides.value = amount;
}

function updateDices(amount) {
    dices.value = amount;
}

function throwDices() {
    results.value = [];
    for (let i = 0; i < dices.value; i++) {
        results.value.push(Math.floor(Math.random() * sides.value) + 1);
    }
    console.log(results.value);
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

#results-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}

.data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px;
    overflow: auto;
    height: 100px;
    width: 100%;
    border: 1px solid #ccc;
    margin: 5px 10px 0 10px;
}
</style>