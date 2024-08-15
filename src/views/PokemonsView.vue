<script setup>
    // import axios from 'axios'
    import {ref} from 'vue'
    import {RouterLink} from 'vue-router'
    import {useGetData} from '@/composables/getData'

    // const pokemons = ref([])
    const {data,loading,getData,error} = useGetData()

    // const getData = async () => {
    //     try {
    //         const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon")
    //         // console.log(data);
    //         pokemons.value = data.results
    //     } catch (error) {
    //         console.log(error);
            
    //     }
    // }
    getData("https://pokeapi.co/api/v2/pokemon")
</script>

<template>
    <h1>Pokemons</h1>
    <p v-if="loading">Cargando informacion...</p>
    <div v-if="error" class="alert alert-danger mt-2">{{ error }}</div>
    <div v-if="data">
        <ul class="list-group">
            <li 
                v-for="poke in data.results" 
                class="list-group-item"
                :key="poke.name"
            ><router-link :to="`/pokemons/${poke.name}`">{{ poke.name }}</router-link></li>
        </ul>
        <div class="mt-2">
            <button :disabled="!data.previous" class="btn btn-success me-2" @click="getData(data.previous)">Previous</button>
            <button :disabled="!data.next" class="btn btn-primary" @click="getData(data.next)">Next</button>
        </div>
    </div>
</template>