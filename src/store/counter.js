import {defineStore} from 'pinia'
import { computed, ref } from 'vue'

// composition api
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)

    const increment = () => count.value++

    const doublue = computed(() => count.value*2)

    return{
        count,
        increment,
        doublue
    }
})

// option api
// export const useCounterStore = defineStore('counter', {
//     state: () => ({ // Datos reactivos
//         count:0
//     }),
//     actions: { // metodos
//         increment(){
//             this.count++
//         }
//     },
//     getters: { // propiedades computadas
//         doublue: (state) => state.count * 2
//     }
// })