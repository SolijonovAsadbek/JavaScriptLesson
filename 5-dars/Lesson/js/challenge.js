/////////////////  Challange1 /////////////////

function calcAvg(res1, res2, res3){
    let result = ((res1 + res2 + res3)/3).toFixed(2);
    return result;
}

function win(t1, t2){
    let result = t1 > t2 ? `Team1 ${t1} achko bilan yutdi.` : `Team2 ${t2} achko bilan yutdi.`;
    return result;
}

let team1 = calcAvg(12, 34, 40);
let team2 = calcAvg(14, 44, 40);

win = win(team1, team2)

console.log(`Team1: ${team1} achko`)
console.log(`Team2: ${team2} achko`)
console.log(win)

/////////////////  Challange1 /////////////////



/////////////////  Challange2 /////////////////



/////////////////  Challange2 /////////////////