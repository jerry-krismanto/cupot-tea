const vueApp = new Vue({
  el: '#app-menu',
  data() {
    return {
      teas: [],
      filter: '',
      isLoading: false,
    }
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
      });
    },
    getTeas() {
      const client = contentful.createClient({
        space: 'a05znusa0wfz',
        accessToken: 'IIgKriBczVHTmpXwi54ayIvV_ZH2oQHq3j9lKwlvuw8',
      });

      client.getEntries({
        content_type: 'tea',
        'fields.category': 'leaves',
      })
        .then((response) => {
          this.teas = response.items.map((item) => {
            return {
              id: item.sys.id,
              name: item.fields.name,
              type: item.fields.type,
              img: item.fields.img.fields.file.url,
              price: item.fields.price,
            };
          });
        }
      );
    },
    filterTea(type) {
      this.isLoading = true;
      this.filter = type;
      const client = contentful.createClient({
        space: 'a05znusa0wfz',
        accessToken: 'IIgKriBczVHTmpXwi54ayIvV_ZH2oQHq3j9lKwlvuw8',
      });

      client.getEntries({
        content_type: 'tea',
        'fields.category': 'leaves',
        'fields.type': type,
      })
        .then((response) => {
          this.teas = response.items.map((item) => {
            return {
              id: item.sys.id,
              name: item.fields.name,
              type: item.fields.type,
              img: item.fields.img.fields.file.url,
              price: item.fields.price,
            };
          });
          this.isLoading = false;
        }
      );
    },
  },
  mounted() {
    this.getTeas();
  },
  components: {
    'navbar': httpVueLoader('/components/navbar.vue'),
  }
});
