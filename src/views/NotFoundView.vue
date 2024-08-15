<script setup>
import router from "@/router"

const back = () => {
    router.push('/pokemons')
}
</script>

<template>
    <div>
        <h1>404</h1>
        <button class="btn btn-primary" @click="back">Volver</button>
    </div>
</template>