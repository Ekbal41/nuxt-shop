import { defineStore } from 'pinia'
export const useCartStore = defineStore('cart', {
    state: () => ({
        count: 0,
        name: [],
        item: [],
    }),
    getters: {

    },
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        },
        addItem(item) {
            this.item.push(item)
        },
        removeFromCart(id) {
            const newitem = this.item.filter(item => item.id !== id)
            this.item = newitem
        }
    },
})