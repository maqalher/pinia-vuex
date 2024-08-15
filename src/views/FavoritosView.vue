<script setup>
import {useFavoritosStore} from '@/store/favorito'
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';

const useFavoritos = useFavoritosStore()
const {favoritos} = storeToRefs(useFavoritos)
const {remove} = useFavoritos
</script>

<template>
    <h1>Favoritos</h1>
    <p v-if="favoritos.length === 0">Sin favoritos</p>
    <ul v-else class="list-group">
        <li class="list-group-item"
            v-for="poke in favoritos"
            :key="poke.id"
        >
            <div>
                {{ poke.name }}
            </div>
            <div>
                <router-link :to="`/pokemons/${poke.name}`" class="btn btn-primary btn-sm me-2">Mas informacion</router-link>
                <button class="btn btn-danger btn-sm" @click="remove(poke.id)">Eliminar</button>
            </div>
        </li>
    </ul>
</template>