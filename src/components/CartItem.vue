<template>
  <div>{{ item.name }} (${{ item.price}})</div>
  <div class="row g-3">
    <div class="col-3">
      <label for="itemQty">Quantity</label>
    </div>
    <div class="col-3">
      <input class="form-control form-control-sm" type="number" min="0" id="itemQty" :value="item.quantity" @input="item.quantity = $event.target.value">
    </div>
  </div>
</template>
<script>
export default {
  name: 'CartItem',

  props: {
    item: {}
  },
}
</script>