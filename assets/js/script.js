'use strict'; /* 厳格にエラーをチェック */

try{
  const header = document.querySelector('.nav');
  let prevY = window.scrollY; // 前回のスクロール位置を初期化

  window.addEventListener('scroll', () => {
    const currentY = window.scrollY; // 現在のスクロール位置を取得
    if (currentY > prevY) { // 上にスクロールしている場合
      header.classList.remove('hidden'); // hiddenクラスを削除して表示する
    }
    if(currentY < 80){
      header.classList.add('hidden');
    }
    prevY = currentY; // 前回のスクロール位置を更新
});
}catch{
  console("no nav")
}

const hambtn = document.querySelector(".hambtn");
const ham = document.querySelector(".hammenu");
try{
    hambtn.addEventListener("click",()=>{
    hambtn.classList.toggle("act");
    ham.classList.toggle("act");
  })
}
catch{
  console.log("no ham");
}

try{
  gsap.set('.js-scroll', {
    opacity: 0,
    y: 50,
  });

  ScrollTrigger.batch('.js-scroll', {
    onEnter: batch => gsap.to(batch, {
      opacity: 1, 
      y: 0, 
      stagger: 0.1,
      overwrite: true,
    }),
    start:'top 80%',
    end:'bottom 20%',
    toggleActions:'play none none reverse',
  });

}catch{
  console.log("no scroll triger")
}

try{
  gsap.set(".js-spin", { autoAlpha: 0 });

  gsap.to(".js-spin", {
    //アニメーションしたい要素を指定
    autoAlpha: 1, //opacity: 1;とvisibility：visible;がつく
    x: -50, //横に500px動かす
    rotation: 360, //回転。rotationXとrotationYも指定できる
    duration: 2,
    scrollTrigger: {
      trigger: ".js-spin", //アニメーションが始まるトリガーとなる要素
      start:'top 80%',
      end:'bottom 20%',//アニメーションが始まる位置
    },
    stagger: {
      from: "start",
      amount: 0.4,
    },
  });
}catch{
  console.log("no gasap")
}

try{
  gsap.set('.js-left', {
    opacity: 0,
    x: -50,
  });
  
  ScrollTrigger.batch('.js-left', {
    onEnter: batch => gsap.to(batch, {
      opacity: 1, 
      x: 0, 
      stagger: 0.1,
      overwrite: true,
    }),
    start:'top 80%',
    end:'bottom 20%',
    toggleActions:'play none none reverse',
  });
}catch{
  console.log("no gsap")
}

try{
  gsap.set('.js-right', {
    opacity: 0,
    x: 50,
  });
  
  ScrollTrigger.batch('.js-right', {
    onEnter: batch => gsap.to(batch, {
      opacity: 1, 
      x: 0, 
      stagger: 0.1,
      overwrite: true,
    }),
    start:'top 80%',
    end:'bottom 20%',
    toggleActions:'play none none reverse',
  });
}catch{
  console.log("no gsap")
}

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

const hamBtn = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

try{
  hamBtn.addEventListener('click', function () {

    hamBtn.classList.toggle('active');
    nav.classList.toggle('active');
  
  });
}catch{
  console.log("no hambtn")
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

//二つ目のタブを選択した後のタブとそのコンテンツ内容の取得
const nestedTab10 = document.getElementById('subtab10');
const nestedContent10 = document.getElementById('subcontent10');
const nestedTab11 = document.getElementById('subtab11');
console.log(nestedTab11);
const nestedContent11 = document.getElementById('subcontent11');
console.log(nestedContent11)
const nestedTab12 = document.getElementById('subtab12');
const nestedContent12 = document.getElementById('subcontent12');
const nestedTab13 = document.getElementById('subtab13');
const nestedContent13 = document.getElementById('subcontent13');
const nestedTab14 = document.getElementById('subtab14');
const nestedContent14 = document.getElementById('subcontent14');

//三つ目のタブを選択した後のタブとそのコンテンツ内容の取得
const nestedTab15 = document.getElementById('subtab15');
const nestedContent15 = document.getElementById('subcontent15');
const nestedTab16 = document.getElementById('subtab16');
const nestedContent16 = document.getElementById('subcontent16');
const nestedTab17 = document.getElementById('subtab17');
const nestedContent17 = document.getElementById('subcontent17');
const nestedTab18 = document.getElementById('subtab18');
const nestedContent18 = document.getElementById('subcontent18');
const nestedTab19 = document.getElementById('subtab19');
const nestedContent19 = document.getElementById('subcontent19');

// ページ読み込み時に一つ目のタブと一つ目のサブタブを表示させる
window.addEventListener('load', () => {
  // 一つ目のタブを選択状態にし、それに応じた画像を表示
  tab1.style.backgroundColor = '#FFD355';
  tab2.style.backgroundColor = '#F39200';
  tab3.style.backgroundColor = '#F39200';

  // 一つ目のサブタブを選択状態にし、それに応じた画像を表示
  nestedTab1.src = "assets/img/tabItem1/tab1-2.png";
  nestedTab2.src = "assets/img/tabItem1/tab2-1.png";
  nestedTab3.src = "assets/img/tabItem1/tab3-1.png";
  nestedTab4.src = "assets/img/tabItem1/tab4-1.png";
  nestedTab5.src = "assets/img/tabItem1/tab5-1.png";
  nestedTab6.src = "assets/img/tabItem1/tab6-1.png";
  nestedTab7.src = "assets/img/tabItem1/tab7-1.png";
  nestedTab8.src = "assets/img/tabItem1/tab8-1.png";
  nestedTab9.src = "assets/img/tabItem1/tab9-1.png";

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

  // すべてのサブタブを初期画像に戻す
  resetNestedTabs();

  // 一つ目のサブタブをアクティブに
  nestedTab1.src = "assets/img/tabItem1/tab1-2.png";

  // サブコンテンツを非表示
  document.querySelectorAll('.nested-content').forEach(content => {
      content.style.display = 'none';
  });

  // 一つ目のサブコンテンツを表示
  document.getElementById('subcontent1').style.display = 'block';
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

    // すべてのサブタブを初期画像に戻す
    resetNestedTabs();

    // 一つ目のサブタブをアクティブに
    nestedTab10.src = "assets/img/tabItem2/tab1-2.png";

    // サブコンテンツを非表示
    document.querySelectorAll('.nested-content').forEach(content => {
        content.style.display = 'none';
    });

    // 一つ目のサブコンテンツを表示
    document.getElementById('subcontent10').style.display = 'block';
});

tab3.addEventListener('click', () => {
tab1.style.backgroundColor = '#F39200';
tab2.style.backgroundColor = '#F39200';
tab3.style.backgroundColor = '#FFD355';

  document.querySelectorAll('.tab-content').forEach(content => {
      content.style.display = 'none';
  });

  document.getElementById('content3').style.display = 'block';

        // すべてのサブタブを初期画像に戻す
        resetNestedTabs();

        // 一つ目のサブタブをアクティブに
        nestedTab15.style.color = '#000000';
        nestedTab15.style.background = '#9CFFF9';
        nestedTab15.style.borderColor = '#FDF150';
        
        // サブコンテンツを非表示
        document.querySelectorAll('.nested-content').forEach(content => {
            content.style.display = 'none';
        });
    
        // 一つ目のサブコンテンツを表示
        document.getElementById('subcontent15').style.display = 'block';
});

function resetNestedTabs() {
// すべてのサブタブを初期画像に戻す
nestedTab1.src = "assets/img/tabItem1/tab1-1.png";
nestedTab2.src = "assets/img/tabItem1/tab2-1.png";
nestedTab3.src = "assets/img/tabItem1/tab3-1.png";
nestedTab4.src = "assets/img/tabItem1/tab4-1.png";
nestedTab5.src = "assets/img/tabItem1/tab5-1.png";
nestedTab6.src = "assets/img/tabItem1/tab6-1.png";
nestedTab7.src = "assets/img/tabItem1/tab7-1.png";
nestedTab8.src = "assets/img/tabItem1/tab8-1.png";
nestedTab9.src = "assets/img/tabItem1/tab9-1.png";
nestedTab10.src = "assets/img/tabItem2/tab1-1.png";
nestedTab11.src = "assets/img/tabItem2/tab2-1.png";
nestedTab12.src = "assets/img/tabItem2/tab3-1.png";
nestedTab13.src = "assets/img/tabItem2/tab4-1.png";
nestedTab14.src = "assets/img/tabItem2/tab5-1.png";
nestedTab15.style.color = '#000000';
nestedTab15.style.background = '#ffffff';
nestedTab15.style.borderColor = '#000000';
nestedTab16.style.color = '#000000';
nestedTab16.style.background = '#ffffff';
nestedTab16.style.borderColor = '#000000';
nestedTab17.style.color = '#000000';
nestedTab17.style.background = '#ffffff';
nestedTab17.style.borderColor = '#000000';
nestedTab18.style.color = '#000000';
nestedTab18.style.background = '#ffffff';
nestedTab18.style.borderColor = '#000000';
nestedTab19.style.color = '#000000';
nestedTab19.style.background = '#ffffff';
nestedTab19.style.borderColor = '#000000';
}

// ネストされたタブがクリックされたときの処理
//　学科のサブタブ
nestedTab1.addEventListener('click', () => {
  // ネストされたタブのクリック処理
  nestedTab1.src = "assets/img/tabItem1/tab1-2.png";
  nestedTab2.src = "assets/img/tabItem1/tab2-1.png";
  nestedTab3.src = "assets/img/tabItem1/tab3-1.png";
  nestedTab4.src = "assets/img/tabItem1/tab4-1.png";
  nestedTab5.src = "assets/img/tabItem1/tab5-1.png";
  nestedTab6.src = "assets/img/tabItem1/tab6-1.png";
  nestedTab7.src = "assets/img/tabItem1/tab7-1.png";
  nestedTab8.src = "assets/img/tabItem1/tab8-1.png";
  nestedTab9.src = "assets/img/tabItem1/tab9-1.png";

  document.querySelectorAll('.nested-content').forEach(content => {
      content.style.display = 'none';
  });

  document.getElementById('subcontent1').style.display = 'block';
});

nestedTab2.addEventListener('click', () => {
  nestedTab1.src = "assets/img/tabItem1/tab1-1.png";
  nestedTab2.src = "assets/img/tabItem1/tab2-2.png";
  nestedTab3.src = "assets/img/tabItem1/tab3-1.png";
  nestedTab4.src = "assets/img/tabItem1/tab4-1.png";
  nestedTab5.src = "assets/img/tabItem1/tab5-1.png";
  nestedTab6.src = "assets/img/tabItem1/tab6-1.png";
  nestedTab7.src = "assets/img/tabItem1/tab7-1.png";
  nestedTab8.src = "assets/img/tabItem1/tab8-1.png";
  nestedTab9.src = "assets/img/tabItem1/tab9-1.png";
  document.querySelectorAll('.nested-content').forEach(content => {
    content.style.display = 'none';
});

document.getElementById('subcontent2').style.display = 'block';
});

nestedTab3.addEventListener('click', () => {
nestedTab1.src = "assets/img/tabItem1/tab1-1.png";
nestedTab2.src = "assets/img/tabItem1/tab2-1.png";
nestedTab3.src = "assets/img/tabItem1/tab3-2.png";
nestedTab4.src = "assets/img/tabItem1/tab4-1.png";
nestedTab5.src = "assets/img/tabItem1/tab5-1.png";
nestedTab6.src = "assets/img/tabItem1/tab6-1.png";
nestedTab7.src = "assets/img/tabItem1/tab7-1.png";
nestedTab8.src = "assets/img/tabItem1/tab8-1.png";
nestedTab9.src = "assets/img/tabItem1/tab9-1.png";
document.querySelectorAll('.nested-content').forEach(content => {
  content.style.display = 'none';
});

document.getElementById('subcontent3').style.display = 'block';
});

nestedTab4.addEventListener('click', () => {
nestedTab1.src = "assets/img/tabItem1/tab1-1.png";
nestedTab2.src = "assets/img/tabItem1/tab2-1.png";
nestedTab3.src = "assets/img/tabItem1/tab3-1.png";
nestedTab4.src = "assets/img/tabItem1/tab4-2.png";
nestedTab5.src = "assets/img/tabItem1/tab5-1.png";
nestedTab6.src = "assets/img/tabItem1/tab6-1.png";
nestedTab7.src = "assets/img/tabItem1/tab7-1.png";
nestedTab8.src = "assets/img/tabItem1/tab8-1.png";
nestedTab9.src = "assets/img/tabItem1/tab9-1.png";
document.querySelectorAll('.nested-content').forEach(content => {
  content.style.display = 'none';
});

document.getElementById('subcontent4').style.display = 'block';
});

nestedTab5.addEventListener('click', () => {
nestedTab1.src = "assets/img/tabItem1/tab1-1.png";
nestedTab2.src = "assets/img/tabItem1/tab2-1.png";
nestedTab3.src = "assets/img/tabItem1/tab3-1.png";
nestedTab4.src = "assets/img/tabItem1/tab4-1.png";
nestedTab5.src = "assets/img/tabItem1/tab5-2.png";
nestedTab6.src = "assets/img/tabItem1/tab6-1.png";
nestedTab7.src = "assets/img/tabItem1/tab7-1.png";
nestedTab8.src = "assets/img/tabItem1/tab8-1.png";
nestedTab9.src = "assets/img/tabItem1/tab9-1.png";
document.querySelectorAll('.nested-content').forEach(content => {
  content.style.display = 'none';
});

document.getElementById('subcontent5').style.display = 'block';
});

nestedTab6.addEventListener('click', () => {
nestedTab1.src = "assets/img/tabItem1/tab1-1.png";
nestedTab2.src = "assets/img/tabItem1/tab2-1.png";
nestedTab3.src = "assets/img/tabItem1/tab3-1.png";
nestedTab4.src = "assets/img/tabItem1/tab4-1.png";
nestedTab5.src = "assets/img/tabItem1/tab5-1.png";
nestedTab6.src = "assets/img/tabItem1/tab6-2.png";
nestedTab7.src = "assets/img/tabItem1/tab7-1.png";
nestedTab8.src = "assets/img/tabItem1/tab8-1.png";
nestedTab9.src = "assets/img/tabItem1/tab9-1.png";
document.querySelectorAll('.nested-content').forEach(content => {
  content.style.display = 'none';
});

document.getElementById('subcontent6').style.display = 'block';
});

nestedTab7.addEventListener('click', () => {
nestedTab1.src = "assets/img/tabItem1/tab1-1.png";
nestedTab2.src = "assets/img/tabItem1/tab2-1.png";
nestedTab3.src = "assets/img/tabItem1/tab3-1.png";
nestedTab4.src = "assets/img/tabItem1/tab4-1.png";
nestedTab5.src = "assets/img/tabItem1/tab5-1.png";
nestedTab6.src = "assets/img/tabItem1/tab6-1.png";
nestedTab7.src = "assets/img/tabItem1/tab7-2.png";
nestedTab8.src = "assets/img/tabItem1/tab8-1.png";
nestedTab9.src = "assets/img/tabItem1/tab9-1.png";
document.querySelectorAll('.nested-content').forEach(content => {
  content.style.display = 'none';
});

document.getElementById('subcontent7').style.display = 'block';
});

nestedTab8.addEventListener('click', () => {
nestedTab1.src = "assets/img/tabItem1/tab1-1.png";
nestedTab2.src = "assets/img/tabItem1/tab2-1.png";
nestedTab3.src = "assets/img/tabItem1/tab3-1.png";
nestedTab4.src = "assets/img/tabItem1/tab4-1.png";
nestedTab5.src = "assets/img/tabItem1/tab5-1.png";
nestedTab6.src = "assets/img/tabItem1/tab6-1.png";
nestedTab7.src = "assets/img/tabItem1/tab7-1.png";
nestedTab8.src = "assets/img/tabItem1/tab8-2.png";
nestedTab9.src = "assets/img/tabItem1/tab9-1.png";
document.querySelectorAll('.nested-content').forEach(content => {
  content.style.display = 'none';
});

document.getElementById('subcontent8').style.display = 'block';
});

nestedTab9.addEventListener('click', () => {
nestedTab1.src = "assets/img/tabItem1/tab1-1.png";
nestedTab2.src = "assets/img/tabItem1/tab2-1.png";
nestedTab3.src = "assets/img/tabItem1/tab3-1.png";
nestedTab4.src = "assets/img/tabItem1/tab4-1.png";
nestedTab5.src = "assets/img/tabItem1/tab5-1.png";
nestedTab6.src = "assets/img/tabItem1/tab6-1.png";
nestedTab7.src = "assets/img/tabItem1/tab7-1.png";
nestedTab8.src = "assets/img/tabItem1/tab8-1.png";
nestedTab9.src = "assets/img/tabItem1/tab9-2.png";
document.querySelectorAll('.nested-content').forEach(content => {
  content.style.display = 'none';
});

document.getElementById('subcontent9').style.display = 'block';
});

nestedTab10.addEventListener('click', () => {
nestedTab10.src = "assets/img/tabItem2/tab1-2.png";
nestedTab11.src = "assets/img/tabItem2/tab2-1.png";
nestedTab12.src = "assets/img/tabItem2/tab3-1.png";
nestedTab13.src = "assets/img/tabItem2/tab4-1.png";
nestedTab14.src = "assets/img/tabItem2/tab5-1.png";
document.querySelectorAll('.nested-content').forEach(content => {
  content.style.display = 'none';
});

document.getElementById('subcontent10').style.display = 'block';
});

nestedTab11.addEventListener('click', () => {
  nestedTab10.src = "assets/img/tabItem2/tab1-1.png";
  nestedTab11.src = "assets/img/tabItem2/tab2-2.png";
  nestedTab12.src = "assets/img/tabItem2/tab3-1.png";
  nestedTab13.src = "assets/img/tabItem2/tab4-1.png";
  nestedTab14.src = "assets/img/tabItem2/tab5-1.png";
  document.querySelectorAll('.nested-content').forEach(content => {
    content.style.display = 'none';
  });
  
  document.getElementById('subcontent11').style.display = 'block';
  });

nestedTab12.addEventListener('click', () => {
nestedTab10.src = "assets/img/tabItem2/tab1-1.png";
nestedTab11.src = "assets/img/tabItem2/tab2-1.png";
nestedTab12.src = "assets/img/tabItem2/tab3-2.png";
nestedTab13.src = "assets/img/tabItem2/tab4-1.png";
nestedTab14.src = "assets/img/tabItem2/tab5-1.png";
document.querySelectorAll('.nested-content').forEach(content => {
  content.style.display = 'none';
});

document.getElementById('subcontent12').style.display = 'block';
});

nestedTab13.addEventListener('click', () => {
nestedTab10.src = "assets/img/tabItem2/tab1-1.png";
nestedTab11.src = "assets/img/tabItem2/tab2-1.png";
nestedTab12.src = "assets/img/tabItem2/tab3-1.png";
nestedTab13.src = "assets/img/tabItem2/tab4-2.png";
nestedTab14.src = "assets/img/tabItem2/tab5-1.png";
document.querySelectorAll('.nested-content').forEach(content => {
  content.style.display = 'none';
});

document.getElementById('subcontent13').style.display = 'block';
});

nestedTab14.addEventListener('click', () => {
nestedTab10.src = "assets/img/tabItem2/tab1-1.png";
nestedTab11.src = "assets/img/tabItem2/tab2-1.png";
nestedTab12.src = "assets/img/tabItem2/tab3-1.png";
nestedTab13.src = "assets/img/tabItem2/tab4-1.png";
nestedTab14.src = "assets/img/tabItem2/tab5-2.png";
document.querySelectorAll('.nested-content').forEach(content => {
  content.style.display = 'none';
});

document.getElementById('subcontent14').style.display = 'block';
});



nestedTab15.addEventListener('click', () => {
nestedTab15.style.color = '#000000';
nestedTab15.style.background = '#9CFFF9';
nestedTab15.style.borderColor = '#FDF150';
nestedTab16.style.color = '#000000';
nestedTab16.style.background = '#ffffff';
nestedTab16.style.borderColor = '#000000';
nestedTab17.style.color = '#000000';
nestedTab17.style.background = '#ffffff';
nestedTab17.style.borderColor = '#000000';
nestedTab18.style.color = '#000000';
nestedTab18.style.background = '#ffffff';
nestedTab18.style.borderColor = '#000000';
nestedTab19.style.color = '#000000';
nestedTab19.style.background = '#ffffff';
nestedTab19.style.borderColor = '#000000';
document.querySelectorAll('.nested-content').forEach(content => {
  content.style.display = 'none';
});

document.getElementById('subcontent15').style.display = 'block';
});

nestedTab16.addEventListener('click', () => {
nestedTab16.style.color = '#000000';
nestedTab16.style.background = '#9CFFF9';
nestedTab16.style.borderColor = '#FDF150';
nestedTab15.style.color = '#000000';
nestedTab15.style.background = '#ffffff';
nestedTab15.style.borderColor = '#000000';
nestedTab17.style.color = '#000000';
nestedTab17.style.background = '#ffffff';
nestedTab17.style.borderColor = '#000000';
nestedTab18.style.color = '#000000';
nestedTab18.style.background = '#ffffff';
nestedTab18.style.borderColor = '#000000';
nestedTab19.style.color = '#000000';
nestedTab19.style.background = '#ffffff';
nestedTab19.style.borderColor = '#000000';
document.querySelectorAll('.nested-content').forEach(content => {
  content.style.display = 'none';
});

document.getElementById('subcontent16').style.display = 'block';
});

nestedTab17.addEventListener('click', () => {
nestedTab17.style.color = '#000000';
nestedTab17.style.background = '#9CFFF9';
nestedTab17.style.borderColor = '#FDF150';
nestedTab16.style.color = '#000000';
nestedTab16.style.background = '#ffffff';
nestedTab16.style.borderColor = '#000000';
nestedTab15.style.color = '#000000';
nestedTab15.style.background = '#ffffff';
nestedTab15.style.borderColor = '#000000';
nestedTab18.style.color = '#000000';
nestedTab18.style.background = '#ffffff';
nestedTab18.style.borderColor = '#000000';
nestedTab19.style.color = '#000000';
nestedTab19.style.background = '#ffffff';
nestedTab19.style.borderColor = '#000000';
document.querySelectorAll('.nested-content').forEach(content => {
  content.style.display = 'none';
});

document.getElementById('subcontent17').style.display = 'block';
});

nestedTab18.addEventListener('click', () => {
nestedTab18.style.color = '#000000';
nestedTab18.style.background = '#9CFFF9';
nestedTab18.style.borderColor = '#FDF150';
nestedTab16.style.color = '#000000';
nestedTab16.style.background = '#ffffff';
nestedTab16.style.borderColor = '#000000';
nestedTab17.style.color = '#000000';
nestedTab17.style.background = '#ffffff';
nestedTab17.style.borderColor = '#000000';
nestedTab15.style.color = '#000000';
nestedTab15.style.background = '#ffffff';
nestedTab15.style.borderColor = '#000000';
nestedTab19.style.color = '#000000';
nestedTab19.style.background = '#ffffff';
nestedTab19.style.borderColor = '#000000';
document.querySelectorAll('.nested-content').forEach(content => {
  content.style.display = 'none';
});

document.getElementById('subcontent18').style.display = 'block';
});

nestedTab19.addEventListener('click', () => {
nestedTab19.style.color = '#000000';
nestedTab19.style.background = '#9CFFF9';
nestedTab19.style.borderColor = '#FDF150';
nestedTab16.style.color = '#000000';
nestedTab16.style.background = '#ffffff';
nestedTab16.style.borderColor = '#000000';
nestedTab17.style.color = '#000000';
nestedTab17.style.background = '#ffffff';
nestedTab17.style.borderColor = '#000000';
nestedTab18.style.color = '#000000';
nestedTab18.style.background = '#ffffff';
nestedTab18.style.borderColor = '#000000';
nestedTab15.style.color = '#000000';
nestedTab15.style.background = '#ffffff';
nestedTab15.style.borderColor = '#000000';
document.querySelectorAll('.nested-content').forEach(content => {
  content.style.display = 'none';
});

document.getElementById('subcontent19').style.display = 'block';
});