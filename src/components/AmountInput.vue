<template>
        <div class="amount-input">
            <div class="input-group">
                <button @click="decrement" class="minus">-</button>
                <input type="text" v-model="amount" class="amount-field" @change="handleInputChange($event)"/>
                <button @click="increment" class="plus">+</button>
            </div>
        </div>
</template>
    
<script setup>
import { ref, onMounted, defineEmits, defineProps } from 'vue';

const props = defineProps({
  initialAmount: Number
});

const amount = ref(props.initialAmount || 1);

const emit = defineEmits(['update-amount']);

onMounted(() => {
    emitValue();
});

function emitValue() {
    emit('update-amount', amount.value);
}

function handleInputChange(e) {
    const value = parseInt(e.target.value);
    if (value > 0) {
        amount.value = value;
    } else {
        amount.value = 1;
    }
    emitValue();
}
  
function increment() {
  amount.value++;
  emitValue();
}

function decrement() {
  if (amount.value > 1) amount.value--;
  emitValue();
}
</script>

<style scoped>
.amount-input {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.input-group {
  display: flex;
  border: 1px solid #000;
  align-items: center;
}

.amount-field {
  border: none;
  text-align: center;
  width: 3em;
  margin: 0.5em;
}

button {
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
}

button:focus {
  outline: none;
}

button.minus {
  border-right: 1px solid #000;
}

button.plus {
  border-left: 1px solid #000;
}
</style>
