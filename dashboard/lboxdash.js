
const tRepone = nodecg.Replicant('tRepone', {defaultValue: "123"});
const matchInfoREP = nodecg.Replicant('matchInfo', {defaultValue: "Team A vs. Team B"});

function reptRepone(){
    tRepone.value = document.getElementById("tone").value;
}



function setMatchInfo(){
    matchInfoREP.value = document.getElementById("matchInfo").value;
}