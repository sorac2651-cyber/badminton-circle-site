// HTMLの読み込みが完了してから実行する
document.addEventListener("DOMContentLoaded", function () {
  // 必要な要素を取得
  const menuButton = document.getElementById("menuButton");
  const navigation = document.getElementById("navigation");
  const joinButton = document.getElementById("joinButton");
  const formMessage = document.getElementById("formMessage");
  const currentYear = document.getElementById("currentYear");

  // フッターに現在の西暦を表示
  currentYear.textContent = new Date().getFullYear();

  // スマートフォン用メニューの開閉
  menuButton.addEventListener("click", function () {
    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "メニューを閉じる" : "メニューを開く"
    );

    menuButton.textContent = isOpen ? "×" : "☰";
  });

  // メニュー内のリンクを押したらメニューを閉じる
  const navigationLinks = navigation.querySelectorAll("a");

  navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "メニューを開く");
      menuButton.textContent = "☰";
    });
  });

  // 参加ボタンを押したときの動作
  joinButton.addEventListener("click", function () {
    formMessage.textContent =
      "これはWEB動作テスト用サイトのため、実際の申し込みは送信されません。";
  });
});