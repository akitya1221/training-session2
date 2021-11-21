// スライド設定
$('#slider').slick({ //{}を入れる
  autoplay: true, 
  arrows: true,
  dots: true,
  dotsClass: 's-dots',
  fade: false,
  vertical: true,
  verticalSwiping: true,
  speed: 500,
  autoplaySpeed: 1000
});
 


//  クイズ用プログラム
let q_text1 = document.getElementById("quiz-tx1");
q_text1.innerHTML = "次のうち腐らないものは？";

let q_text2 = document.getElementById("quiz-tx2");
q_text2.innerHTML = "カルボナーラとはどういう意味？";

let q_text3 = document.getElementById("quiz-tx3");
q_text3.innerHTML = "ラーメンの丼にある渦巻き模様は、何を意味している？";

let q_text4 = document.getElementById("quiz-tx4");
q_text4.innerHTML = "大根は白に見えるが本来異なる色である。その本来の色とは？";

let q_text5 = document.getElementById("quiz-tx5");
q_text5.innerHTML = "OCR都築の嫌いな食べ物はどれ？";


// 正解判定
function butotnClick() {

  let score = 0;

  let checkValue1 = q1.elements['answer'].value;
  if (checkValue1 == "c") {
    console.log("正解");
    score++;
  };

  let checkValue2 = q2.elements['answer'].value;
  if (checkValue2 == "b") {
    console.log("正解");
    score++;
  };

  let checkValue3 = q3.elements['answer'].value;
  if (checkValue3 == "a") {
    console.log("正解");
    score++;
  };

  let checkValue4 = q4.elements['answer'].value;
  if (checkValue4 == "b") {
    console.log("正解");
    score++;
  };

  let checkValue5 = q5.elements['answer'].value;
  if (checkValue5 == "c") {
    console.log("正解");
    score++;
  };

  if (score == 5) {
    let scoreArea = document.getElementById("score-area");
    scoreArea.innerHTML = "満点です！";
  } else if (score <= 4) {
    let scoreArea = document.getElementById("score-area");
    scoreArea.innerHTML = "惜しい！";
  } else if (score <= 3) {
    let scoreArea = document.getElementById("score-area");
    scoreArea.innerHTML = "あともうちょっと！";
  } else {
    let scoreArea = document.getElementById("score-area");
    scoreArea.innerHTML = "がんばりましょう、、、";
  }



};

let checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', butotnClick);

