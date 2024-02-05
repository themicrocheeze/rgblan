
const tRepone = nodecg.Replicant('tRepone', {defaultValue: "123"});
const matchInfoREP = nodecg.Replicant('matchInfo', {defaultValue: "Team A vs. Team B"});
const orgInfoREP = nodecg.Replicant('orgInfo', {defaultValue: "RGBLAN"});
const roundInfoREP = nodecg.Replicant('roundInfo', {defaultValue: "Round 1"});

//Hs1 Reps

const Hs1Ht = nodecg.Replicant('Hs1Ht', {defaultValue: "Headers"});
const Hs1Bt = nodecg.Replicant('Hs1Bt', {defaultValue: "Body"});


//NEW VERTICAL SPACE
const vhead1 = nodecg.Replicant('vhead1', {defaultValue: "Just Watched"});
const vhead2 = nodecg.Replicant('vhead2', {defaultValue: "NOW WATCHING"});
const vhead3 = nodecg.Replicant('vhead3', {defaultValue: "Up next"});

const vbody1 = nodecg.Replicant('vbody1', {defaultValue: "Bottom Text"});
const vbody2 = nodecg.Replicant('vbody2', {defaultValue: "Bottom Text"});
const vbody3 = nodecg.Replicant('vbody3', {defaultValue: "Bottom Text"});


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

//NEW VERTICAL SPACE FUNCTIONS
function setvhead1(){
    vhead1.value = document.getElementById('vhead1').value;
}

function setvhead2(){
    vhead2.value = document.getElementById('vhead2').value;
}

function setvhead3(){
    vhead3.value = document.getElementById('vhead3').value;
}

function setvbody1(){
    vbody1.value = document.getElementById('vbody1').value;
}

function setvbody2(){
    vbody2.value = document.getElementById('vbody2').value;
}

function setvbody3(){
    vbody3.value = document.getElementById('vbody3').value;
}