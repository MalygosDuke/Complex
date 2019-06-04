let datas = [
  {
    name: "百樂0.5按鍵式魔擦筆 ( 深藍 ) --限量訂購",
    img: "001.jpg",
    price: 72,
    des: [
      "筆尾輕輕擦拭 錯字不留痕跡",
      "好寫、好擦、不留痕跡、不留屑",
      "日本票選年度最佳商品之一",
      "共有 黑、藍、紅、粉紅、橘、綠、淺綠、淺藍、深藍、紫 十種顏色"
    ]
  },
  {
    name: "三菱【Uni】國民溜溜筆+溜溜筆芯組--3色(附筆芯x1)",
    img: "002.jpg",
    price: 61,
    des: [
      "★超滑溜的書寫感受!!",
      "雙筆珠構造防止墨水逆流",
      "安全筆蓋,防止墨水揮發",
      "低摩擦力 ‧再附1.0mm筆芯 ‧黑/藍/紅 3色可選"
    ]
  },
  {
    name: "百樂3色變芯筆筆管+ 基本色筆芯組",
    img: "003.jpg",
    price: 126,
    des: [
      "好好變芯、心情好好",
      "筆管可裝3支筆芯",
      "筆芯分0.3mm、0.4mm、0.5mm 3種款式",
      "基本筆芯組→藍、紅、黑",
      "4色筆桿→透明桿、黑桿、藍桿、紅桿(隨機出色)",
      "可隨時替換筆芯"
    ]
  },
  {
    name: "OB 1005 自動原子筆 一盒50支入",
    img: "004.jpg",
    price: 390,
    des: ["0.3mm", "紅、藍三色", "一盒：50入"]
  },
  {
    name: "OP自動原子筆100/藍/0.7mm/12支/打",
    img: "005.jpg",
    price: 100,
    des: [
      "寫字精細滑溜",
      "不漏水、不刮紙",
      "商品規格：筆幅:0.5mm",
      "書寫流利、筆珠耐磨不積墨",
      "按鍵式一按，即可書寫，不用擔心筆蓋不見的困擾"
    ]
  },
  {
    name: "白金牌PLATINUM原子筆B-7/藍/0.7mm/12支/打",
    img: "006.jpg",
    price: 69,
    des: [
      "白金牌-使書寫成為一種享受「讓人們享有優質的書寫體驗」是白金牌的最高企業宗旨，更是永續發展與經營的基石！上班族、學生族群的最愛．書寫的好工具超經濟實惠流利好書寫筆幅:0.7mm"
    ]
  },
  {
    name: "OB自動原子筆1006/黑/0.3mm/12支/打",
    img: "007.jpg",
    price: 102,
    des: [
      "不漏水、不刮紙寫字精細滑溜書寫流利、筆珠耐磨不積墨 經濟實惠 按鍵式一按，即可書寫，不用擔心筆蓋不見的困擾商品規格: 筆幅:0.3mm"
    ]
  },
  {
    name: "百樂PILOT舒寫原子筆BPS-GP-EF-L/藍/0.5mm/6支/組",
    img: "008.jpg",
    price: 149,
    des: [
      "PILOT將專業文具產品引進台灣滿足文具使用者最高品質的期待!清晰易乾、不易暈開三角柔軟筆握久寫不累書寫流利、滑順透明筆身、墨水剩餘量可見商品說明0.5mm球珠徑筆頭材質：不鏽鋼 尺寸：全長154mm 替芯：RFJ-GP 墨水：油性墨水"
    ]
  },
  {
    name: "ZEBRA BP075 迷你伸縮桿原子筆 日本限定色",
    img: "009.jpg",
    price: 199,
    des: [
      "日本限定色新上市筆尖",
      "0.7mm",
      "金屬筆桿特殊處理、不易氧化",
      "伸縮筆桿‧每支附贈禮盒1個"
    ]
  },
  {
    name: "ZEBRA 斑馬 B4SA2、B4SA3 四色五合一多功能原子筆",
    img: "010.jpg",
    price: 344,
    des: [
      "機能滿載 原子筆+自動鉛筆彈性筆夾‧橡膠握把‧一筆4色多功能 金屬塗裝筆桿、手感沉穩每支附贈精美禮盒"
    ]
  }
];

let shop_list = [];
let input_title = "";

var vm = new Vue({
  el: "#app",
  data: {
    pen: datas,
    shop_list: shop_list,
    input_title: input_title
  },
  methods: {
    get_item: function(index) {
      shop_list.push({
        name: this.pen[index].name,
        price: this.pen[index].price
      });
      //console.log(shop_list);
    },

    del_item: function(index) {
      this.shop_list.splice(index, 1);
    }
  },
  computed: {
    total_price: function() {
      var total_price = 0;
      for (var i = 0; i < this.shop_list.length; i++) {
        total_price += this.shop_list[i].price;
      }
      return total_price;
    },
    itemtpye() {
      if (this.input_title != "") {
        return this.pen.filter(item => {
          let content = item.name.toLowerCase();
          let keyword = this.input_title.toLowerCase();
          return content.indexOf(keyword) != -1;
        });
      } else return this.pen;
    }
  }
});
