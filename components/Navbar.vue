<template lang="">
    <div class="shadow">
        <div class="container flex justify-between p-4  px-8 mx-auto ">
       <h4 class="font-bold uppercase text-green-500  text-2xl">NuxtShop</h4>
       <ul class="flex gap-4">
           <li class=" cursor-pointer mt-2">
            <NuxtLink to="/">Home</NuxtLink>
           </li>
           <li class=" cursor-pointer mt-2">
            <NuxtLink to="/products">Products</NuxtLink>
           </li>
           <li class=" cursor-pointer mt-2">
           Signin
           </li>
           <div>
            <NuxtLink to="/cart">
           <Icon class="text-green-500 text-3xl mt-1" name="ph:shopping-cart-fill" />
           <span class="bg-green-500 rounded-full text-white font-bold px-1">{{cart.count}}</span>
              </NuxtLink>
           </div>
         </ul>
        </div>
    </div>
</template>
<script setup>
import { useCartStore } from '~~/store/cart'
const cart = useCartStore()
</script>

<style scoped>
.router-link-active {
    color: #22c55e;


}

.router-link-active:hover {
    color: #22c55e;

}
</style>