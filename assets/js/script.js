"strict"

const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', function () {

  ham.classList.toggle('active');
  nav.classList.toggle('active');

});

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
const nestedContent11 = document.getElementById('subcontent11');
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
const nestedTab20 = document.getElementById('subtab20');
const nestedContent20 = document.getElementById('subcontent20');





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
//　学科のサブタブ
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

nestedTab3.addEventListener('click', () => {
  nestedTab1.src = "../assets/img/tabItem1/tab1-1.png";
  nestedTab2.src = "../assets/img/tabItem1/tab2-1.png";
  nestedTab3.src = "../assets/img/tabItem1/tab3-2.png";
  nestedTab4.src = "../assets/img/tabItem1/tab4-1.png";
  nestedTab5.src = "../assets/img/tabItem1/tab5-1.png";
  nestedTab6.src = "../assets/img/tabItem1/tab6-1.png";
  nestedTab7.src = "../assets/img/tabItem1/tab7-1.png";
  nestedTab8.src = "../assets/img/tabItem1/tab8-1.png";
  nestedTab9.src = "../assets/img/tabItem1/tab9-1.png";
  document.querySelectorAll('.nested-content').forEach(content => {
    content.style.display = 'none';
});

document.getElementById('subcontent3').style.display = 'block';
});

nestedTab4.addEventListener('click', () => {
  nestedTab1.src = "../assets/img/tabItem1/tab1-1.png";
  nestedTab2.src = "../assets/img/tabItem1/tab2-1.png";
  nestedTab3.src = "../assets/img/tabItem1/tab3-1.png";
  nestedTab4.src = "../assets/img/tabItem1/tab4-2.png";
  nestedTab5.src = "../assets/img/tabItem1/tab5-1.png";
  nestedTab6.src = "../assets/img/tabItem1/tab6-1.png";
  nestedTab7.src = "../assets/img/tabItem1/tab7-1.png";
  nestedTab8.src = "../assets/img/tabItem1/tab8-1.png";
  nestedTab9.src = "../assets/img/tabItem1/tab9-1.png";
  document.querySelectorAll('.nested-content').forEach(content => {
    content.style.display = 'none';
});

document.getElementById('subcontent4').style.display = 'block';
});

nestedTab5.addEventListener('click', () => {
  nestedTab1.src = "../assets/img/tabItem1/tab1-1.png";
  nestedTab2.src = "../assets/img/tabItem1/tab2-1.png";
  nestedTab3.src = "../assets/img/tabItem1/tab3-1.png";
  nestedTab4.src = "../assets/img/tabItem1/tab4-1.png";
  nestedTab5.src = "../assets/img/tabItem1/tab5-2.png";
  nestedTab6.src = "../assets/img/tabItem1/tab6-1.png";
  nestedTab7.src = "../assets/img/tabItem1/tab7-1.png";
  nestedTab8.src = "../assets/img/tabItem1/tab8-1.png";
  nestedTab9.src = "../assets/img/tabItem1/tab9-1.png";
  document.querySelectorAll('.nested-content').forEach(content => {
    content.style.display = 'none';
});

document.getElementById('subcontent5').style.display = 'block';
});

nestedTab6.addEventListener('click', () => {
  nestedTab1.src = "../assets/img/tabItem1/tab1-1.png";
  nestedTab2.src = "../assets/img/tabItem1/tab2-1.png";
  nestedTab3.src = "../assets/img/tabItem1/tab3-1.png";
  nestedTab4.src = "../assets/img/tabItem1/tab4-1.png";
  nestedTab5.src = "../assets/img/tabItem1/tab5-1.png";
  nestedTab6.src = "../assets/img/tabItem1/tab6-2.png";
  nestedTab7.src = "../assets/img/tabItem1/tab7-1.png";
  nestedTab8.src = "../assets/img/tabItem1/tab8-1.png";
  nestedTab9.src = "../assets/img/tabItem1/tab9-1.png";
  document.querySelectorAll('.nested-content').forEach(content => {
    content.style.display = 'none';
});

document.getElementById('subcontent6').style.display = 'block';
});

nestedTab7.addEventListener('click', () => {
  nestedTab1.src = "../assets/img/tabItem1/tab1-1.png";
  nestedTab2.src = "../assets/img/tabItem1/tab2-1.png";
  nestedTab3.src = "../assets/img/tabItem1/tab3-1.png";
  nestedTab4.src = "../assets/img/tabItem1/tab4-1.png";
  nestedTab5.src = "../assets/img/tabItem1/tab5-1.png";
  nestedTab6.src = "../assets/img/tabItem1/tab6-1.png";
  nestedTab7.src = "../assets/img/tabItem1/tab7-2.png";
  nestedTab8.src = "../assets/img/tabItem1/tab8-1.png";
  nestedTab9.src = "../assets/img/tabItem1/tab9-1.png";
  document.querySelectorAll('.nested-content').forEach(content => {
    content.style.display = 'none';
});

document.getElementById('subcontent7').style.display = 'block';
});

nestedTab8.addEventListener('click', () => {
  nestedTab1.src = "../assets/img/tabItem1/tab1-1.png";
  nestedTab2.src = "../assets/img/tabItem1/tab2-1.png";
  nestedTab3.src = "../assets/img/tabItem1/tab3-1.png";
  nestedTab4.src = "../assets/img/tabItem1/tab4-1.png";
  nestedTab5.src = "../assets/img/tabItem1/tab5-1.png";
  nestedTab6.src = "../assets/img/tabItem1/tab6-1.png";
  nestedTab7.src = "../assets/img/tabItem1/tab7-1.png";
  nestedTab8.src = "../assets/img/tabItem1/tab8-2.png";
  nestedTab9.src = "../assets/img/tabItem1/tab9-1.png";
  document.querySelectorAll('.nested-content').forEach(content => {
    content.style.display = 'none';
});

document.getElementById('subcontent8').style.display = 'block';
});

nestedTab9.addEventListener('click', () => {
  nestedTab1.src = "../assets/img/tabItem1/tab1-1.png";
  nestedTab2.src = "../assets/img/tabItem1/tab2-1.png";
  nestedTab3.src = "../assets/img/tabItem1/tab3-1.png";
  nestedTab4.src = "../assets/img/tabItem1/tab4-1.png";
  nestedTab5.src = "../assets/img/tabItem1/tab5-1.png";
  nestedTab6.src = "../assets/img/tabItem1/tab6-1.png";
  nestedTab7.src = "../assets/img/tabItem1/tab7-1.png";
  nestedTab8.src = "../assets/img/tabItem1/tab8-1.png";
  nestedTab9.src = "../assets/img/tabItem1/tab9-2.png";
  document.querySelectorAll('.nested-content').forEach(content => {
    content.style.display = 'none';
});

document.getElementById('subcontent9').style.display = 'block';
});

nestedTab10.addEventListener('click', () => {
  nestedTab10.src = "../assets/img/tabItem2/tab1-2.png";
  nestedTab11.src = "../assets/img/tabItem2/tab2-1.png";
  nestedTab12.src = "../assets/img/tabItem2/tab3-1.png";
  nestedTab13.src = "../assets/img/tabItem2/tab4-1.png";
  nestedTab14.src = "../assets/img/tabItem2/tab5-1.png";
  document.querySelectorAll('.nested-content').forEach(content => {
    content.style.display = 'none';
});

document.getElementById('subcontent10').style.display = 'block';
});

nestedTab11.addEventListener('click', () => {
  nestedTab10.src = "../assets/img/tabItem2/tab1-1.png";
  nestedTab11.src = "../assets/img/tabItem2/tab2-2.png";
  nestedTab12.src = "../assets/img/tabItem2/tab3-1.png";
  nestedTab13.src = "../assets/img/tabItem2/tab4-1.png";
  nestedTab14.src = "../assets/img/tabItem2/tab5-1.png";
  document.querySelectorAll('.nested-content').forEach(content => {
    content.style.display = 'none';
});

document.getElementById('subcontent11').style.display = 'block';
});

nestedTab12.addEventListener('click', () => {
  nestedTab10.src = "../assets/img/tabItem2/tab1-1.png";
  nestedTab11.src = "../assets/img/tabItem2/tab2-1.png";
  nestedTab12.src = "../assets/img/tabItem2/tab3-2.png";
  nestedTab13.src = "../assets/img/tabItem2/tab4-1.png";
  nestedTab14.src = "../assets/img/tabItem2/tab5-1.png";
  document.querySelectorAll('.nested-content').forEach(content => {
    content.style.display = 'none';
});

document.getElementById('subcontent12').style.display = 'block';
});

nestedTab13.addEventListener('click', () => {
  nestedTab10.src = "../assets/img/tabItem2/tab1-1.png";
  nestedTab11.src = "../assets/img/tabItem2/tab2-1.png";
  nestedTab12.src = "../assets/img/tabItem2/tab3-1.png";
  nestedTab13.src = "../assets/img/tabItem2/tab4-2.png";
  nestedTab14.src = "../assets/img/tabItem2/tab5-1.png";
  document.querySelectorAll('.nested-content').forEach(content => {
    content.style.display = 'none';
});

document.getElementById('subcontent13').style.display = 'block';
});

nestedTab14.addEventListener('click', () => {
  nestedTab10.src = "../assets/img/tabItem2/tab1-1.png";
  nestedTab11.src = "../assets/img/tabItem2/tab2-1.png";
  nestedTab12.src = "../assets/img/tabItem2/tab3-1.png";
  nestedTab13.src = "../assets/img/tabItem2/tab4-1.png";
  nestedTab14.src = "../assets/img/tabItem2/tab5-2.png";
  document.querySelectorAll('.nested-content').forEach(content => {
    content.style.display = 'none';
});

document.getElementById('subcontent14').style.display = 'block';
});