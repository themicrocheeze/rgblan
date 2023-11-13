
//Imports the replicant variables declared in lthirddash.js
const castingOrgRep = nodecg.Replicant('castingOrg');
const seriesInfoRep = nodecg.Replicant('seriesInfo');
const eInfoRep = nodecg.Replicant('eInfo');

const caster1InfoRep = nodecg.Replicant('caster1info');
const caster2InfoRep = nodecg.Replicant('caster2info');
const producerInfoRep = nodecg.Replicant('producerInfo');

const matchupinfoRep = nodecg.Replicant('matchupinfo');

//const team1InfoRep = nodecg.Replicant('team1Info');
//const team2InfoRep = nodecg.Replicant('team2Info');

//Declares the Element ID's as variables



const castingOrgEl = document.getElementById('orgNameVar');
const seriesInfoEl = document.getElementById('mapListVar');
const eInfoEl = document.getElementById('matchInfo');

const caster1InfoEl = document.getElementById('casterNameVar1');
const caster2InfoEl = document.getElementById('casterNameVar2');
const producerInfoEl = document.getElementById('producerNameVar');




const matchupinfoEL = document.getElementById('matchUPVAR');

//Update functions
castingOrgRep.on('change', (newVal) => {
	castingOrgEl.innerHTML = newVal;
})

eInfoRep.on('change', (newVal) => {
    eInfoEl.innerHTML = newVal;
})

seriesInfoRep.on('change', (newVal) => {
    seriesInfoEl.innerHTML = newVal;
})

caster1InfoRep.on('change', (newVal) => {
    caster1InfoEl.innerHTML = newVal;
})

caster2InfoRep.on('change', (newVal) => {
    caster2InfoEl.innerHTML = newVal;
})

producerInfoRep.on('change', (newVal) => {
    producerInfoEl.innerHTML = newVal;
})

matchupinfoRep.on('change', (newVal) =>{
    matchupinfoEL.innerHTML = newVal;
})
