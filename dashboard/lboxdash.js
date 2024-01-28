
const tRepone = nodecg.Replicant('tRepone', {defaultValue: "123"});
const matchInfoREP = nodecg.Replicant('matchInfo', {defaultValue: "Team A vs. Team B"});
const orgInfoREP = nodecg.Replicant('orgInfo', {defaultValue: "RGBLAN"});
const roundInfoREP = nodecg.Replicant('roundInfo', {defaultValue: "Round 1"});

//Hs1 Reps

const Hs1Ht = nodecg.Replicant('Hs1Ht', {defaultValue: "Headers"});
const Hs1Bt = nodecg.Replicant('Hs1Bt', {defaultValue: "Body"});


//Vs1 Reps
const Vs1HtRep = nodecg.Replicant('Vs1Ht');

//Vs1 Rep functions
function reptRepone(){
    tRepone.value = document.getElementById("tone").value;
}



function setMatchInfo(){
    matchInfoREP.value = document.getElementById("matchInfo").value;
}

function setOrgInfo(){
    orgInfoREP.value = document.getElementById("orgInfo").value;
}

function setRoundInfo(){
    roundInfoREP.value = document.getElementById("roundInfo").value;
}


//Hs1 Rep functions
function setHs1Ht(){
    Hs1Ht.value = document.getElementById("hs1Ht").value;
}

function setHs1Bt(){
    Hs1Bt.value = document.getElementById("hs1Bt").value;
}

//Vs1 Rep Functions
function setVs1Ht(){
    Vs1Ht.value = document.getElementById("vs1Ht").value;
}