<template>
  <div class="row">
   <div class="col" v-for="item in items">
     <div class="card">
       <div class="card-body">
         <h5 class="card-title">{{ item.name }}</h5>
         <h6 class="card-subtitle mb-2 text-muted">${{ item.price }}</h6>
         <p class="card-text">{{ item.description }}</p>
         <button @click="addToCart(item)" class="btn btn-primary btn-sm">Add to Cart</button>
       </div>
     </div>
   </div>
  </div>
</template>

<script>
import {cart} from "../stores/cart.js"
import { useToast, POSITION } from "vue-toastification";

export default {
  name: "ItemList",
  setup() {
    const toast = useToast();
    return { toast }
  },
  data() {
    return {
      items: {}
    }
  },
  methods: {
    async getItems() {
      const res = await fetch("/data/items.json");
      this.items = await res.json();
    },
    addToCart(item){
      cart.addItem(item);
      this.toast.success(item.name + " added to cart", { position: POSITION.BOTTOM_RIGHT });
    }
  },
  mounted() {
    this.getItems();
  }
}
</script>