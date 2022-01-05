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
    let signs = [];
    for (let nameId of namesIds) {
        signs.push(document.getElementById(nameId).innerHTML);
    }
    //console.log(signs);
    if (signs[0] == sign) { // linha 1 e coluna 1
        if ((signs[0] == signs[1] && signs[1] == signs[2]) 
         || (signs[0] == signs[3] && signs[3] == signs[6])) { 
            return true;
        }
    } 
    if (signs[4] == sign) { // tranversais e centrais
        if ((signs[0] == signs[4] && signs[4] == signs[8]) 
         || (signs[2] == signs[4] && signs[4] == signs[6])
         || (signs[1] == signs[4] && signs[4] == signs[7])
         || (signs[3] == signs[4] && signs[4] == signs[5])) {
            return true;
        }
    }
    if (signs[8] == sign) { // 3 linha e 3 coluna
        if ((signs[6] == signs[7] && signs[7] == signs[8]) 
         || (signs[2] == signs[5] && signs[5] == signs[8])) {
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
