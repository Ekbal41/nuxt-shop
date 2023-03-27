<template>
    <div>
        <Navbar />
        <div class="bg-gray-50">

            <div class=" px-4 md:px-20 pb-20 container mx-auto pt-8 min-h-screen ">
                <div class="grid grid-cols-2 gap-12">
                    <div>
                        <div v-if="item.length > 0">
                            <div v-for="(i, index) in item" :key="index">
                                <div class="bg-white rounded shadow border border-green-500 mb-4 p-4">

                                    <div class="flex justify-between">
                                        <div class="flex gap-4">
                                            <img class="rounded-lg border border-green-500  h-24 object-cover w-24 "
                                                :src="i.image" />
                                            <h3 class="text-green-500 font-bold text-2xl">{{ i.title }}</h3>
                                        </div>
                                        <div>
                                            <p class="text-green-500 font-extrabold text-2xl mb-4">{{ i.price }}</p>
                                            <button @click="removeCartItem(i.id)"
                                                class="bg-red-500 text-white font-bold py-2 px-4 rounded-full">Remove</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else>Nothin on the cart. 🥲</div>
                    </div>


                    <div>
                        <div class="p-4 border border-green-500 rounded-lg bg-white shadow">
                            <h1 class="text-green-500 px-8 font-bold text-4xl mt-8">Pay Bill</h1>
                            <p class="font-bold px-8">Id: 23466jhbdgu573</p>
                            <div class=" p-4 mt-8">
                                <div class="flex justify-between px-4 py-2">
                                    <p class="font-bold"> Total : </p>
                                    <p>
                                        {{ cart.getTolalAmount() }}
                                    </p>
                                </div>
                                <div class="flex justify-between px-4 py-2">
                                    <p class="font-bold"> Discound : </p>
                                    <p>100</p>
                                </div>
                                <div class="flex justify-between px-4 py-2">
                                    <p class="font-bold"> Tax : </p>
                                    <p>15</p>
                                </div>
                                <div class="flex justify-between px-4 py-2">
                                    <p class="font-bold"> Payable : </p>
                                    <p>
                                        {{
                                            totalAmount()
                                        }}
                                    </p>
                                </div>
                            </div>
                            <div class="flex gap-4 mx-8 mb-8">
                                <button class="bg-green-500 text-white font-bold py-2 px-4  rounded mt-8">
                                    <NuxtLink to="/products">
                                        Back to
                                        Shopping
                                    </NuxtLink>
                                </button>
                                <button class="bg-green-500 text-white font-bold py-2 px-4  rounded  mt-8"
                                    @click="billPaid">Pay Now</button>
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
import { storeToRefs } from 'pinia';
import { useCartStore } from '~~/store/cart';
const router = useRouter();
const cart = useCartStore()
const { item } = storeToRefs(cart)
const removeCartItem = (id) => {
    cart.decrement()
    cart.removeFromCart(id)

}
const totalAmount = () => {
    const total = cart.getTolalAmount() - 100 + 15
    const totalAmount = total.toFixed(2)
    if (totalAmount < 0) {
        return 0
    } else {
        return totalAmount
    }
}
const billPaid = () => {
    alert(`Your Bill is Paid ${totalAmount()}`)
    cart.$reset()
    router.push('/')
}
</script>
