const vueApp = new Vue({
  el: '#app-catalog',
  data: {
    teas: [
      {
        name: 'Black Tea',
        type: 'classic-blk',
        img: 'assets/menu/black-tea.jpg',
        price: 20000,
      },
      {
        name: 'Green Tea',
        type: 'classic-grn',
        img: 'assets/menu/green-tea.jpg',
        price: 20000,
      },
      {
        name: 'Herbal Tea',
        type: 'herbal',
        img: 'assets/menu/herbal-tea.jpg',
        price: 20000,
      },
      {
        name: 'Oolong Tea',
        type: 'oolong',
        img: 'assets/menu/oolong-tea.jpg',
        price: 20000,
      },
      {
        name: 'Black Tea',
        type: 'blk-flav',
        img: 'assets/menu/earl-grey.jpg',
        price: 20000,
      },
      {
        name: 'Green Tea',
        type: 'green-flav',
        img: 'assets/menu/green-tea.jpg',
        price: 20000,
      },
      {
        name: 'Blended Tea',
        type: 'blended',
        img: 'assets/menu/earl-grey.jpg',
        price: 20000,
      },
    ],
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
      });
    },
  },
});
