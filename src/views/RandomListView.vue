<template>
    <div class="about">
        <h2>Randomize a list</h2>
        <p>Enter a list of items, one per line, and click the button to randomize the list.</p>
        <div id="container">
            <div id="content-1" class="content">
                <textarea id="list-input" class="text-area" v-model="rawList"/>
            </div>
            <div id="content-2" class="content">
                <textarea readonly id="random-result" class="text-area" v-model="randomOrder"/>
            </div>
        </div>
        <div id="btn-checkboxes">
            <button id="randomize" @click="randomizeList">Randomize!</button>
            <div id="checkbox-container">
                <label for="order-number">Show order number</label>
                <input type="checkbox" v-model="orderNumber" @change="setOrderNumbers">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const rawList = ref('');
const randomOrder = ref('');
const orderNumber = ref(false);

function setOrderNumbers() {
    const list = randomOrder.value.split('\n');
    const newList = [];
    for (let i = 0; i < list.length; i++) {
        if (orderNumber.value) {
            newList.push(`${i + 1}) ${list[i]}`);
        } else {
            newList.push(list[i].replace(/^\d+\)\s/, ''));
        }
    }
    randomOrder.value = newList.join('\n');
}

function randomizeList() {
    const list = rawList.value.split('\n').filter(item => item.trim() !== '');
    const randomList = [];
    let position = 1;
    while (list.length > 0) {
        const randomIndex = Math.floor(Math.random() * list.length);
        if (orderNumber.value) {
            randomList.push(`${position}) ${list[randomIndex]}`);
        } else {
            randomList.push(list[randomIndex]);
        }
        list.splice(randomIndex, 1);
        position++;
    }
    randomOrder.value = randomList.join('\n');
}
</script>

<style>
#container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.content {
    width: 48%;
    height: 500px;
    margin: 10px 0px 10px 0;
}

#content-2 {
    border: 1px solid #ccc;
}

.text-area {
    width: 100%;
    height: 100%;
    resize: none;
    box-sizing: border-box;
}

#randomize {
    margin-top: 10px;
}

#btn-checkboxes {
    display: flex;
    align-items: center;
}

#checkbox-container {
    margin-left: 15px;
    display: flex;
    align-items: center;
}

#randomize {
    background-color: #BC6C25;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

#randomize:hover {
    background-color: #DDA15E;
}
</style>
  