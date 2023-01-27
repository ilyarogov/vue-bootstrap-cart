<template>
  <div class="container">
    <h1 class="text-center">Shopping Cart Demo</h1>
    <NavigationMenu/>
    <ItemList/>
  </div>
  <CartDrawer/>
</template>

<script>
import ItemList from "./components/ItemList.vue";
import CartDrawer from "./components/CartDrawer.vue";
import NavigationMenu from "./components/NavigationMenu.vue";
import {cart} from "./stores/cart.js"
export default {
  name: "App",
  components: {NavigationMenu, CartDrawer, ItemList},
  mounted() {
    const cartDrawer = document.getElementById('showCart')
    cartDrawer.addEventListener('hidden.bs.offcanvas', event => {
      cart.setIsClosed();
    })
  }
}
</script>