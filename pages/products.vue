<template>
    <div>
        <Navbar />
        <div class="bg-gray-50">

            <div class=" px-4 md:px-20 pb-20 container mx-auto pt-8">
                <h1 class="text-5xl text-start font-bold text-green-500 mt-16 mb-12">All products</h1>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12 grid-cols-1">

                    <div class="bg-white rounded-lg shadow-lg p-4" v-for="(product, index) in products" :key="index">
                        <img class="rounded-lg border border-green-500 mb-4 h-60 object-cover w-full "
                            :src="product.image" />
                        <div class="flex justify-between ">
                            <p class="text-2xl text-green-500 capitalize ">{{ product.title }}</p>
                            <div class="flex gap-2 justify-center">
                                <p class="text-3xl text-green-500 capitalize ">{{ product.price }}</p>
                                <Icon class="text-green-500 text-3xl mt-1 cursor-pointer" name="material-symbols:add-circle"
                                    @click="addtocart(product)" />
                            </div>
                        </div>


                    </div>


                </div>

            </div>

        </div>
        <Footer />
    </div>
</template>
<script setup>
import { useCartStore } from '~~/store/cart';
const { data: products } = useFetch('https://fakestoreapi.com/products')
const cart = useCartStore()
const addtocart = (product) => {
    cart.addItem(product)
    cart.increment()
}
</script>
