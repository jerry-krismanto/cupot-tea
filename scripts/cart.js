const vueApp = new Vue({
  el: '#app-cart',
  data() {
    return {
      carts: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
      totalPrice: 0,
    }
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
      });
    },

    increaseQuantity(cart) {
      cart.quantity++;
      this.updateCart();
    },

    decreaseQuantity(cart) {
      if (cart.quantity > 1) {
        cart.quantity--;
      } else {
        if(confirm('Delete this item?')) {
          this.carts.splice(this.carts.indexOf(cart), 1);
        }
      }
      this.updateCart();
    },

    updateCart() {
      localStorage.setItem('cart', JSON.stringify(this.carts));
    },

    checkout() {
      window.location.href = 'checkout.html';
    },  
  },
  mounted() {
    this.totalPrice = this.carts.reduce((total, cart) => {
      return total + cart.quantity * cart.price;
    }, 0);
  },
  watch: {
    carts: {
      handler() {
        this.totalPrice = this.carts.reduce((total, cart) => {
          return total + cart.quantity * cart.price;
        }, 0);
      },
      deep: true,
    },
  },
  components: {
    'navbar': httpVueLoader('/components/navbar.vue'),
  }
});
