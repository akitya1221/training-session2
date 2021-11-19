let score = 0;

function showScore() {
    let totalScore = document.getElementById('score-message');
    
    if(score === 5) {
        totalScore.innerHTML = score + "パーフェクト！";
        } else if(score === 4) {
            totalScore.innerHTML = score + "点：4";
        } else if(score === 3) {
            totalScore.innerHTML = score + "点：3";
        } else if(score === 2) {
            totalScore.innerHTML = score + "点：2";
        } else if(score === 1) {
            totalScore.innerHTML = score + "点：1";
        } else {
            totalScore.innerHTML = score + "点：残念";
    }   
}