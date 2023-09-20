"strict";
function changeTab(tabNumber) {
  // すべてのコンテンツを非表示にする
  var contents = document.querySelectorAll(".content");
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }

  // 選択されたタブのコンテンツを表示する
  var selectedTabContent = document.getElementById("tab" + tabNumber + "-content");
  if (selectedTabContent) {
    selectedTabContent.style.display = "block";
  }
}
