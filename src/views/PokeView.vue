<script setup>
    // import axios from "axios"
    // import { ref } from "vue"
    import {useRoute, useRouter} from 'vue-router'
    import {useGetData} from '@/composables/getData'
    import {useFavoritosStore} from '@/store/favorito'


    const useFavoritos = useFavoritosStore()
    const {add,findPoke} = useFavoritos
    const route = useRoute()
    const router = useRouter()
    // const poke = ref({})

    const {data,loading,getData,error} = useGetData()

    const back = () => {
        router.push('/pokemons')
    }

    // const getData = async () => {
    //     try {
    //         const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
    //         console.log(data);
    //         poke.value = data
    //     } catch (error) {
    //         console.log(error);
    //         poke.value = null
    //     }
    // }

    getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
</script>

<template>
    <!-- <h1>Poke name: {{ $route.params.name }}</h1> -->
    <p v-if="loading">Cargando informacion...</p>
    <div v-if="error" class="alert alert-danger mt-2">No existe el pokemon</div>
     <div v-if="data">
         <img :src="data.sprites?.front_default" :alt="data.name">
         <h1>Poke name: {{ data.name }}</h1>
         <button :disabled="findPoke(data.name)" class="btn btn-primary my-2" @click="add(data)">Agregar Favoritos</button>
     </div>
     <button type="button" class="btn btn-dark" @click="back">Volver</button>
</template>