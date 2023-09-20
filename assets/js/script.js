'use strict'; /* 厳格にエラーをチェック */

window.onscroll = function () {
    let gHeader = document.getElementsByClassName('header')[0]; //headerを任意のclass名に 
    let gNav = document.getElementsByClassName('nav')[0]; // navを任意のclass名に
    let gNavHeight = gNav.clientHeight;
    let gMain =
      document.getElementsByClassName('main')[0]; // mainを任意のclass名に 
    if (window.pageYOffset >= gHeader.clientHeight) {
      gNav.classList.add('fixed'); // fixedを任意のclass名に 
      gMain.setAttribute('style', 'padding-top:' + gNavHeight + 'px');
    } else {
      gNav.classList.remove('fixed'); // fixedを任意のclass名に(上記と同じにする) 
      gMain.setAttribute('style', 'padding-top:0;'); //padding-top:0;を任意の数値に
    }
}

const hambtn = document.querySelector(".hambtn");
const ham = document.querySelector(".hammenu");

hambtn.addEventListener("click",()=>{
  hambtn.classList.toggle("act");
  ham.classList.toggle("act");
})

{ /* ローカルスコープ */

// DOM取得
const tabMenus = document.querySelectorAll('.tab__menu-item');
console.log(tabMenus);

// イベント付加
tabMenus.forEach((tabMenu) => {
  tabMenu.addEventListener('click', tabSwitch);
})

// イベントの処理
function tabSwitch(e) {

  // クリックされた要素のデータ属性を取得
  const tabTargetData = e.currentTarget.dataset.tab;
  // クリックされた要素の親要素と、その子要素を取得
  const tabList = e.currentTarget.closest('.tab__menu');
  console.log(tabList);
  const tabItems = tabList.querySelectorAll('.tab__menu-item');
  console.log(tabItems);
  // クリックされた要素の親要素の兄弟要素の子要素を取得
  const tabPanelItems = tabList.
  nextElementSibling.querySelectorAll('.tab__panel-box');
  console.log(tabPanelItems);

  // クリックされたtabの同階層のmenuとpanelのクラスを削除
  tabItems.forEach((tabItem) => {
    tabItem.classList.remove('is-active');
  })
  tabPanelItems.forEach((tabPanelItem) => {
    tabPanelItem.classList.remove('is-show');
  })

  // クリックされたmenu要素にis-activeクラスを付加
  e.currentTarget.classList.add('is-active');
  // クリックしたmenuのデータ属性と等しい値を持つパネルにis-showクラスを付加
  tabPanelItems.forEach((tabPanelItem) => {
    if (tabPanelItem.dataset.panel ===  tabTargetData) {
      tabPanelItem.classList.add('is-show');
    }
  })

}

}

// タブの要素を取得
const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
const tab3 = document.getElementById('tab3');

// 一つ目のタブを選択し後のタブとそのコンテンツ内容の取得
const nestedTab1 = document.getElementById('subtab1');
const nestedContent1 = document.getElementById('subcontent1');
const nestedTab2 = document.getElementById('subtab2');
const nestedContent2 = document.getElementById('subcontent2');
const nestedTab3 = document.getElementById('subtab3');
const nestedContent3 = document.getElementById('subcontent3');
const nestedTab4 = document.getElementById('subtab4');
const nestedContent4 = document.getElementById('subcontent4');
const nestedTab5 = document.getElementById('subtab5');
const nestedContent5 = document.getElementById('subcontent5');
const nestedTab6 = document.getElementById('subtab6');
const nestedContent6 = document.getElementById('subcontent6');
const nestedTab7 = document.getElementById('subtab7');
const nestedContent7 = document.getElementById('subcontent7');
const nestedTab8 = document.getElementById('subtab8');
const nestedContent8 = document.getElementById('subcontent8');
const nestedTab9 = document.getElementById('subtab9');
const nestedContent9 = document.getElementById('subcontent9');


// ページ読み込み時に一つ目のタブと一つ目のサブタブを表示させる
window.addEventListener('load', () => {
    // 一つ目のタブを選択状態にし、それに応じた画像を表示
    tab1.style.backgroundColor = '#FFD355';
    tab2.style.backgroundColor = '#F39200';
    tab3.style.backgroundColor = '#F39200';

    // 一つ目のサブタブを選択状態にし、それに応じた画像を表示
    nestedTab1.src = "../assets/img/tabItem1/tab1-2.png";
    nestedTab2.src = "../assets/img/tabItem1/tab2-1.png";
    nestedTab3.src = "../assets/img/tabItem1/tab3-1.png";
    nestedTab4.src = "../assets/img/tabItem1/tab4-1.png";
    nestedTab5.src = "../assets/img/tabItem1/tab5-1.png";
    nestedTab6.src = "../assets/img/tabItem1/tab6-1.png";
    nestedTab7.src = "../assets/img/tabItem1/tab7-1.png";
    nestedTab8.src = "../assets/img/tabItem1/tab8-1.png";
    nestedTab9.src = "../assets/img/tabItem1/tab9-1.png";

    // タブコンテンツとサブタブコンテンツを非表示
    document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = 'none';
    });

    document.querySelectorAll('.nested-content').forEach(content => {
        content.style.display = 'none';
    });

    // 一つ目のタブコンテンツとサブタブコンテンツを表示
    document.getElementById('content1').style.display = 'block';
    document.getElementById('subcontent1').style.display = 'block';
});

// タブがクリックされたときの処理
tab1.addEventListener('click', () => {
    // タブのクリック処理
    tab1.style.backgroundColor = '#FFD355';
    tab2.style.backgroundColor = '#F39200';
    tab3.style.backgroundColor = '#F39200';

    // タブコンテンツを非表示
    document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = 'none';
    });

    // 一つ目のタブコンテンツを表示
    document.getElementById('content1').style.display = 'block';
});

// タブ2とタブ3のクリック処理も同様に設定
tab2.addEventListener('click', () => {
    tab1.style.backgroundColor = '#F39200';
    tab2.style.backgroundColor = '#FFD355';
    tab3.style.backgroundColor = '#F39200';

    document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = 'none';
    });

    document.getElementById('content2').style.display = 'block';
});

tab3.addEventListener('click', () => {
  tab1.style.backgroundColor = '#F39200';
  tab2.style.backgroundColor = '#F39200';
  tab3.style.backgroundColor = '#FFD355';

    document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = 'none';
    });

    document.getElementById('content3').style.display = 'block';
});

// ネストされたタブがクリックされたときの処理
nestedTab1.addEventListener('click', () => {
    // ネストされたタブのクリック処理
    nestedTab1.src = "../assets/img/tabItem1/tab1-2.png";
    nestedTab2.src = "../assets/img/tabItem1/tab2-1.png";
    nestedTab3.src = "../assets/img/tabItem1/tab3-1.png";
    nestedTab4.src = "../assets/img/tabItem1/tab4-1.png";
    nestedTab5.src = "../assets/img/tabItem1/tab5-1.png";
    nestedTab6.src = "../assets/img/tabItem1/tab6-1.png";
    nestedTab7.src = "../assets/img/tabItem1/tab7-1.png";
    nestedTab8.src = "../assets/img/tabItem1/tab8-1.png";
    nestedTab9.src = "../assets/img/tabItem1/tab9-1.png";

    document.querySelectorAll('.nested-content').forEach(content => {
        content.style.display = 'none';
    });

    document.getElementById('subcontent1').style.display = 'block';
});

nestedTab2.addEventListener('click', () => {
    nestedTab1.src = "../assets/img/tabItem1/tab1-1.png";
    nestedTab2.src = "../assets/img/tabItem1/tab2-2.png";
    nestedTab3.src = "../assets/img/tabItem1/tab3-1.png";
    nestedTab4.src = "../assets/img/tabItem1/tab4-1.png";
    nestedTab5.src = "../assets/img/tabItem1/tab5-1.png";
    nestedTab6.src = "../assets/img/tabItem1/tab6-1.png";
    nestedTab7.src = "../assets/img/tabItem1/tab7-1.png";
    nestedTab8.src = "../assets/img/tabItem1/tab8-1.png";
    nestedTab9.src = "../assets/img/tabItem1/tab9-1.png";
    document.querySelectorAll('.nested-content').forEach(content => {
      content.style.display = 'none';
  });

  document.getElementById('subcontent2').style.display = 'block';
});
