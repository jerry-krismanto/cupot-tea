const vueApp = new Vue({
  el: '#app-product-detail',
  data() {
    return {
      product: {},
      relatedProducts: [],
      quantity: 1,
    }
  },

  methods: {
    formatPrice(price) {
      return price.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
      });
    },

    getProduct() {
      const client = contentful.createClient({
        space: 'a05znusa0wfz',
        accessToken: 'IIgKriBczVHTmpXwi54ayIvV_ZH2oQHq3j9lKwlvuw8',
      });

      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');
      client
        .getEntries({
          content_type: 'tea',
          'sys.id': id,
        })
        .then((response) => {
          this.product = response.items[0].fields;
          this.product.id = response.items[0].sys.id;
          this.getRelatedProducts();
        });
    },

    getRelatedProducts() {
      const client = contentful.createClient({
        space: 'a05znusa0wfz',
        accessToken: 'IIgKriBczVHTmpXwi54ayIvV_ZH2oQHq3j9lKwlvuw8',
      });

      client
        .getEntries({
          content_type: 'tea',
          // 'fields.type[in]': this.product.type,
          limit: 4,
        })
        .then((response) => {
          this.relatedProducts = response.items.map((item) => {
            return {
              id: item.sys.id,
              name: item.fields.name,
              type: item.fields.type,
              img: item.fields.img.fields.file.url,
              price: item.fields.price,
            };
          });
        });
    },

    addToCart() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const product = {
        id: this.product.id,
        name: this.product.name,
        price: this.product.price,
        quantity: this.quantity,
        img: this.product.img.fields.file.url,
      };

      const index = cart.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        cart[index].quantity += product.quantity;
      } else {
        cart.push(product);
      }

      localStorage.setItem('cart', JSON.stringify(cart));

      window.location.href = '/cart.html';
    },

  },

  created() {
    this.getProduct();
  },

  components: {
    'navbar': httpVueLoader('/components/navbar.vue'),
  }
});


