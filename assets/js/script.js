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