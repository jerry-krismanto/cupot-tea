const vueApp = new Vue({
  el: '#app-checkout',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      address: '',
      carts: localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : [],
      totalPrice: 0,
    };
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
      });
    },

    pay() {
      const data = {
        transaction_details: {
          order_id: this.name.replace(' ', '-') + '-' + Date.now(),
          gross_amount: this.totalPrice,
          payment_link_id: this.name.replace(' ', '-') + '-' + Date.now(),
        },
        credit_card: {
          secure: true,
        },
        usage_limit: 1,
        enabled_payments: ['credit_card', 'bca_va', 'indomaret'],
        item_details: this.carts.map((cart) => {
          return {
            id: cart.id,
            name: cart.name,
            price: cart.price,
            quantity: cart.quantity,
          };
        }),
        customer_details: {
          first_name: this.name,
          email: this.email,
          phone: this.phone,
          address: this.address,
        },
      };

      fetch('https://api.sandbox.midtrans.com/v1/payment-links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic U0ItTWlkLXNlcnZlci1NbkotdVBfajVVR3l4WFpTZGtqbi1kczA='
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          window.location.href = data.payment_url;
        });
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

  components: {
    navbar: httpVueLoader('/components/navbar.vue'),
  },
});
