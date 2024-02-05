console.log("test");

//sets the replicants
const tRepone = nodecg.Replicant('tRepone');
const matchInfoREP = nodecg.Replicant('matchInfo');
const roundInfoREP = nodecg.Replicant('roundInfo');
const orgInfoREP = nodecg.Replicant('orgInfo');
const Hs1HtREP = nodecg.Replicant('Hs1Ht');
const Hs1BtREP = nodecg.Replicant('Hs1Bt');

const Vs1HtRep = nodecg.Replicant('Vs1Ht');

const vhead1Rep = nodecg.Replicant('vhead1');
const vhead2Rep = nodecg.Replicant('vhead2');
const vhead3Rep = nodecg.Replicant('vhead3');

const vbody1Rep = nodecg.Replicant('vbody1');
const vbody2Rep = nodecg.Replicant('vbody2');
const vbody3Rep = nodecg.Replicant('vbody3');


//sets the elements to use
const tReponeEL = document.getElementById("tonY");
const matchInfoEL = document.getElementById("matchInfo");
const roundInfoEL = document.getElementById("roundInfo");
const orgInfoEL = document.getElementById("orgInfo");
const Hs1HtEL = document.getElementById("hs1HeaderText");
const Hs1BtEL = document.getElementById("hs1BodyText");
const Vs1HtEL = document.getElementById("Vs1H1");
const vhead1EL = document.getElementById('vhead1');
const vhead2EL = document.getElementById('vhead2');
const vhead3EL = document.getElementById('vhead3');
const vbody1EL = document.getElementById('vbody1');
const vbody2EL = document.getElementById('vbody2');
const vbody3EL = document.getElementById('vbody3');


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

vhead1Rep.on('change', (newVal) => {
	vhead1EL.innerHTML = newVal;
})

vhead2Rep.on('change', (newVal) => {
	vhead2EL.innerHTML = newVal;
})

vhead3Rep.on('change', (newVal) => {
	vhead3EL.innerHTML = newVal;
})

vbody1Rep.on('change', (newVal) => {
	vbody1EL.innerHTML = newVal;
})

vbody2Rep.on('change', (newVal) => {
	vbody2EL.innerHTML = newVal;
})

vbody3Rep.on('change', (newVal) => {
	vbody3EL.innerHTML = newVal;
})