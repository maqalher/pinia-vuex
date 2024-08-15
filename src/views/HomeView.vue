<script setup>
import {useCounterStore} from "@/store/counter"
import { storeToRefs } from "pinia";

const useCounter = useCounterStore()

const {increment} = useCounter
const {count,doublue} = storeToRefs(useCounter)
</script>

<template>
  <h1>Home counter: {{ count }}</h1>
  <h2>Double counter: {{ doublue }}</h2>
  <button @click="increment">Increment</button>
  <!-- <h1>Home counter: {{ useCounter.count }}</h1>
  <h2>Double counter: {{ useCounter.doublue }}</h2>
  <button @click="useCounter.increment">Increment</button> -->
</template>
