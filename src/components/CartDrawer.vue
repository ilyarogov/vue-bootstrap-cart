<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="showCart" aria-labelledby="yourCartLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="yourCartLabel">Your Cart</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div>
        <ul class="list-group">
          <li class="list-group-item" v-for="item in cart">
            <CartItem :item="item"/>
          </li>
          <li v-if="total > 0" class="list-group-item"><h6>Subtotal ${{ total }}</h6></li>
        </ul>
      </div>
      <div v-if="cart.length > 0" class="mt-3">
        <button type="button" class="btn btn-success">Checkout</button>
      </div>
    </div>
  </div>
</template>
<script>
import {cart} from "../stores/cart.js"
import CartItem from "./CartItem.vue";

export default {
  name: 'CartDrawer',
  components: {CartItem},
  data(){
    return {
      cartTotal: 0
    }

  },
  computed: {
    cart() {
      return cart.cartItems
    },
    total() {
      let initialValue = 0;
      return cart.cartItems.reduce((total, item) => total + (item.price * item.quantity), initialValue);
    }
  }
}
</script>
