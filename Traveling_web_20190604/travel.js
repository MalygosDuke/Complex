let products = [
  {
    number: { id: "1" },
    fields: {
      title: "Tokyo street",
      price: 10300,
      image: "./image/location_1.jpg",
      amount: 1
    }
  },
  {
    number: { id: "2" },
    fields: {
      title: "Taiwan street",
      price: 13300,
      image: "./image/location_2.jpg",
      amount: 1
    }
  },
  {
    number: { id: "3" },
    fields: {
      title: "Korean street",
      price: 12300,
      image: "./image/location_3.jpg",
      amount: 1
    }
  },
  {
    number: { id: "4" },
    fields: {
      title: "China street",
      price: 14300,
      image: "./image/location_4.jpg",
      amount: 1
    }
  },
  {
    number: { id: "5" },
    fields: {
      title: "Australia street",
      price: 10300,
      image: "./image/location_5.jpg",
      amount: 1
    }
  },
  {
    number: { id: "6" },
    fields: {
      title: "American street",
      price: 25600,
      image: "./image/location_6.jpg",
      amount: 1
    }
  },
  {
    number: { id: "7" },
    fields: {
      title: "Paris street",
      price: 15400,
      image: "./image/location_7.jpg",
      amount: 1
    }
  },
  {
    number: { id: "8" },
    fields: {
      title: "chicago street",
      price: 64050,
      image: "./image/location_8.jpg",
      amount: 1
    }
  },
  {
    number: { id: "9" },
    fields: {
      title: "Taipei street",
      price: 64052,
      image: "./image/location_9.jpg",
      amount: 1
    }
  }
];

let cart = [];
let total = 0;
let total_item = 0;

let vm = new Vue({
  el: "#app",
  data: { products, cart, total, total_item },
  methods: {
    showCart() {
      $(".cart-overlay").css("visibility", "visible");
      $(".cart").css("transform", "translateX(0%)");
    },
    hideCart() {
      $(".cart-overlay").css("visibility", "hidden");
      $(".cart").css("transform", "translateX(100%)");
    },
    addcart: function(id) {
      //將物品加入cart陣列
      this.cart.push(this.products[id]);
      //打開清單
      this.showCart();
      //計算總和
      this.totalprice();
    },
    totalprice() {
      let totalprice = 0;
      this.cart.forEach(item => {
        totalprice += item.fields.price * item.fields.amount;
      });
      console.log(totalprice);
      this.total = totalprice;
    },
    clearitem() {
      //將cart陣列清除 --> display
      this.cart = [];
      //restart calcalate totalprice
      this.totalprice();
    },
    singleclear: function(index) {
      //查詢cart
      this.cart.splice(index, 1);
      //restart calcalate totalprice
      this.totalprice();
    },
    additem: function(index) {
      //增加數量
      let tempnumber = this.cart[index].fields.amount;
      tempnumber += 1;
      this.cart[index].fields.amount = tempnumber;
      //console.log(this.cart[index]);
      //計算總價格
      this.totalprice();
    },
    loweritem: function(index) {
      let tempnumber = this.cart[index].fields.amount;
      if (tempnumber > 1) {
        tempnumber -= 1;
        this.cart[index].fields.amount = tempnumber;
      } else {
        this.cart.splice(index, 1);
      }
      this.totalprice();
    }
  },
  computed: {
    control_item_number_now() {
      let cart = this.cart;
      let totalnumber = 0;
      cart.forEach(item => {
        totalnumber += item.fields.amount;
        this.total_item = totalnumber;
        console.log("successful");
      });
    }
  }
});
