// ヘッダーを取得
const header = document.getElementById("navBack");
const titleB = document.getElementById("headBlock");
const backClass = document.getElementsByClassName('nav-hoge');
const backClassLen = backClass.length

// ヘッダーの高さを取得
const tbH = titleB.clientHeight;

// 現在地を示す変数を定義
let pos = 0;
let lastPos = 0;
let nowOnMouse = 0;

const winH = window.innerHeight;

// ページの高さを取得
const docH = document.documentElement.scrollHeight;
var heH = header.clientHeight;

// ウィンドウが最下部達した場合のウィンドウ上部の位置を取得
const windBtm = docH - winH;

const onScroll = () => {
    var alphaValue = (pos > tbH) ? 1.0 : (pos * 1.0 / tbH) * (pos * 1.0 / tbH);
    for (var i = 0; i < backClassLen; i++) {
        var color = window.getComputedStyle(backClass[i], '').backgroundColor;
        var colors = color.match(/\d+/g);
        backClass[i].style.backgroundColor = "rgba(" + colors[0] + "," + colors[1] + "," + colors[2] + "," + alphaValue + ")";
    }

    // 最後のスクロール位置を保存
    lastPos = pos;
};

window.addEventListener("scroll", () => {
    // スクロールするごとにpos（現在地）の値を更新
    pos = window.scrollY;
    if (nowOnMouse == 0) {
        onScroll();
    }
});

window.addEventListener("click", () => {
    onScroll();
    heH = header.clientHeight;
    console.log(heH);

    if (heH == 0) {
        for (var i = 0; i < backClassLen; i++) {
            backClass[i].style.height = "100%";
        }
    } else {
        for (var i = 0; i < backClassLen; i++) {
            backClass[i].style.height = "20%";
        }
    }
});