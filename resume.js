let data = {
  infos: {
    chineseName: "吳建勳",
    englishName: "Jain Xun Wu",
    profile: "./picture/擷取.PNG",
    city: "Kaoshuing",
    country: "TW",
    keynote:
      "你好,自己畢業於台科大,因緣際會下接觸到前端,立志踏入此領域。目前透過自學彌補不足之處,目標為希望找尋一起成長,喜愛分享交流的團隊。",
    mail: "ruralboy0511@gmail.com",
    phone: "0958013919"
  },
  contactIcon: {
    facebook:
      "https://upload.wikimedia.org/wikipedia/commons/4/45/New_Logo_Gmail.svg",
    github: "https://png.pngtree.com/svg/20170916/760db8f69c.svg",
    phone:
      "https://cdn1.iconfinder.com/data/icons/office-2/512/phone_symbol_2-512.png",
    demoCard: "./picture/democard.jpg"
  },
  education: {
    mastertime: "國立台灣科技大學, Sep2015 - Aug2017",
    masterparagraph:
      "畢業於電子所,在學期間從事影像處理相關研究,其中論文為:互動式加密之雙層QR碼,其內容於編碼端包含針對傳統QR碼進行資料量的增加同時不影響QR解碼器的解碼,於解碼端則包含影像的校正與額外資料的解碼,全程於Matlab的環境下撰寫。",
    universitytime: "私立正修科技大學, Sep2010 - Jun2014",
    universityparagraph:
      "畢業於電子工程系，期間學習了單晶片相關知識與參加過許多競賽並獲得不錯的成績，，其中包含：2012年台灣區機器人運動機器狗賽跑-第一名、2013年全國智慧型機器人大賽負重致遠-第一名…等等。"
  },
  experiance: {
    first_title: "測試部-高級工程師 / 群創光電, Dec2017 - Mar2019",
    firstcontent: [
      "機台檢修與參數校調",
      "針對機台設定Recipe的流程進行部分自動化的優化"
    ]
  }
};

let vm = new Vue({
  el: "#app",
  data: data
});
