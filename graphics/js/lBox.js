console.log("test");

//sets the replicants
const tRepone = nodecg.Replicant('tRepone');
const matchInfoREP = nodecg.Replicant('matchInfo');
const roundInfoREP = nodecg.Replicant('roundInfo');
const orgInfoREP = nodecg.Replicant('orgInfo');
const Hs1HtREP = nodecg.Replicant('Hs1Ht');
const Hs1BtREP = nodecg.Replicant('Hs1Bt');

const Vs1HtRep = nodecg.Replicant('Vs1Ht');



//sets the elements to use
const tReponeEL = document.getElementById("tonY");
const matchInfoEL = document.getElementById("matchInfo");
const roundInfoEL = document.getElementById("roundInfo");
const orgInfoEL = document.getElementById("orgInfo");
const Hs1HtEL = document.getElementById("hs1HeaderText");
const Hs1BtEL = document.getElementById("hs1BodyText");
const Vs1HtEL = document.getElementById("Vs1H1");

//These functions update the set element whenever there is a change in the set replicant.
tRepone.on('change', (newVal) => {
	tReponeEL.innerHTML = newVal;
})

matchInfoREP.on('change', (newVal) => {
	matchInfoEL.innerHTML = newVal;
})

roundInfoREP.on('change', (newVal) => {
	roundInfoEL.innerHTML = newVal;
})

orgInfoREP.on('change', (newVal) => {
	orgInfoEL.innerHTML = newVal;
})

Hs1HtREP.on('change', (newVal) => {
	Hs1HtEL.innerHTML = newVal;
})

Hs1BtREP.on('change', (newVal) => {
	Hs1BtEL.innerHTML = newVal;
})