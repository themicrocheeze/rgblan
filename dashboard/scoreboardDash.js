//TF2 SCOREBOARD
//DASHBOARD SCRIPTS
const bluTeamName = nodecg.Replicant('bluTeamName', {defaultValue: ""});
const redTeamName = nodecg.Replicant('redTeamName', {defaultValue: ""});
const bluTeamScore = nodecg.Replicant('bluTeamScore', {defaultValue: 0});
const redTeamScore = nodecg.Replicant('redTeamScore', {defaultValue: 0});

const gamePauseState = nodecg.Replicant('gamePauseState', {defaultValue: 0});

const tfSeriesText = nodecg.Replicant('tfSeriesText', {defaultValue: ""});
const tfSeriesText2 = nodecg.Replicant('tfSeriesText2', {defaultValue: ""});
const tfSeriesText3 = nodecg.Replicant('tfSeriesText3', {defaultValue: ""});


//Sets team names
function setbluTeamName(){
    bluTeamName.value = document.getElementById('bluTeamName').value;
}
function setredTeamName(){
    redTeamName.value = document.getElementById('redTeamName').value;
}

//Scoreboard controls
function aotr(){
    redTeamScore.value++;
}

function aotb(){
    bluTeamScore.value++;
}

function tofr(){
    redTeamScore.value--;
}

function tofb(){
    bluTeamScore.value--;
}

function gamePause(){
    gamePauseState.value = "100%";
}

function gameResume(){
    gamePauseState.value = "0%";
}

//series textboxes

function sSt1(){
    tfSeriesText.value = document.getElementById('tfSeriesText').value;
}

function sSt2(){
    tfSeriesText2.value = document.getElementById('tfSeriesText2').value;
}

function sSt3(){
    tfSeriesText3.value = document.getElementById('tfSeriesText3').value;
}