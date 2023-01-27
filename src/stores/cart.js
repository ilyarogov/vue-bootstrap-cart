import { reactive } from 'vue'

export const cart = reactive({
  count: 0,
  opened: false,
  cartItems: [],
  addCount(){
    this.count++;
  },
  addItem(item){
    let itemInCart = this.cartItems.find(e => e.id === item.id);
    if(itemInCart){
      this.cartItems.find(e => e.id === item.id).quantity++;
    }else {
      const cartItem = {id: item.id, name: item.name, quantity: 1, price: item.price}
      this.cartItems.push(cartItem)
    }
  },
  setIsOpened(){
    this.opened = true;
  },
  setIsClosed(){
    this.opened = false;
  }
})