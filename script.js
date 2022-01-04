let sign = 'X';
let inGame = true;
const namesIds = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

const putSign = (div) => {
    if (inGame) {
        if (div.innerHTML != '') {
            alert('Não pode por aí');
        } else {
            div.innerHTML = sign;
            updates();
            sign = sign == 'X' ? '0' : 'X';
        }
    }
} 

const updates = () => {
    if (checkIfWon()) {
        document.getElementById('situation').innerHTML = `Jogador ${sign} venceu!`;
        inGame = false;

        let winnerPoints = document.querySelector('#points' + sign);
        winnerPoints.innerHTML = Number(winnerPoints.innerHTML) + 1;
    } else if (tie()) {
        document.getElementById('situation').innerHTML = `Empate!`;
        inGame = false;
    }
}

const resetPoints = () => {
    document.getElementById('pointsX').innerHTML = 0;
    document.getElementById('points0').innerHTML = 0;
}

const nextRound = () => { 
    for (let nameId of namesIds) {
        document.getElementById(nameId).innerHTML = '';
    }
    inGame = true;
}

const checkIfWon = () => {
    let oneSign = document.getElementById('one').innerHTML;
    let twoSign = document.getElementById('two').innerHTML;
    let threeSign = document.getElementById('three').innerHTML;
    let fourSign = document.getElementById('four').innerHTML;
    let fiveSign = document.getElementById('five').innerHTML;
    let sixSign = document.getElementById('six').innerHTML;
    let sevenSign = document.getElementById('seven').innerHTML;
    let eightSign = document.getElementById('eight').innerHTML;
    let nineSign = document.getElementById('nine').innerHTML;

    if (oneSign == sign) { // linha 1 e coluna 1
        if ((oneSign == twoSign && twoSign == threeSign) || (oneSign == fourSign && fourSign == sevenSign)) { 
            return true;
        }
    } 
    if (fiveSign == sign) { // tranversais e centrais
        if ((oneSign == fiveSign && fiveSign == nineSign) || (threeSign == fiveSign && fiveSign == sevenSign) || (twoSign == fiveSign && fiveSign == eightSign) || (fourSign == fiveSign && fiveSign == sixSign)) {
            return true;
        }
    }
    if (nineSign == sign) { // 3 linha e 3 coluna
        if ((sevenSign == eightSign && eightSign == nineSign) || (threeSign == sixSign && sixSign == nineSign)) {
            return true;
        }
    }
    return false;
}

const tie = () => {
    let signs = [];
    for (let nameId of namesIds){
        signs.push(document.getElementById(nameId).innerHTML);
    }
    if (signs.filter(sign => sign == '').length == 0) {
        return true;
    }
}
