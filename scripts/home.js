const vueApp = new Vue({
  el: '#app-home',
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
  },
  components: {
    'navbar': httpVueLoader('/components/navbar.vue'),
  }
});
