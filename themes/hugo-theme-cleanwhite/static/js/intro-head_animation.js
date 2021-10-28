// ヘッダーを取得
const introHead = document.getElementById("introHead");

// 現在地を示す変数を定義
let nextImage =1;
let count =0;
let imgArray;
let preImg= new Image();
let changeHeadTimer = 10000;//タイマー

const changeHeadImg = () => {
    if(introHead){
        introHead.style.backgroundImage = "url( "+imgArray[nextImage] + ")";
        nextImage = (nextImage == imgArray.length-1)?0:nextImage+1;
        //プレロード
        preImg.src = imgArray[nextImage];
    }
};
setInterval(changeHeadImg, changeHeadTimer);