//TF2 SCOREBOARD
//DASHBOARD SCRIPTS
const bluTeamName = nodecg.Replicant('bluTeamName', {defaultValue: ""});
const redTeamName = nodecg.Replicant('redTeamName', {defaultValue: ""});
const bluTeamScore = nodecg.Replicant('bluTeamScore', {defaultValue: 0});
const redTeamScore = nodecg.Replicant('redTeamScore', {defaultValue: 0});

function setbluTeamName(){
    bluTeamName.value = document.getElementById('bluTeamName').value;
}
function setredTeamName(){
    redTeamName.value = document.getElementById('redTeamName').value;
}


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