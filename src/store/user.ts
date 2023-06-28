import { defineStore } from 'pinia'

const useStore = defineStore('user', {
    state: () => ({
        counter: 0,
        name: 'Eduardo',
        isAdmin: true
    }),

    getters: {
        counter: state => state.counter
    }
})
export default useStore
