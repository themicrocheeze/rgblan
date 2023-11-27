console.log("test");


const tRepone = nodecg.Replicant('tRepone');
const matchInfoREP = nodecg.Replicant('matchInfo');

const tReponeEL = document.getElementById("tonY");
const matchInfoEL = document.getElementById("matchInfo");

tRepone.on('change', (newVal) => {
	tReponeEL.innerHTML = newVal;
})

matchInfoREP.on('change', (newVal) => {
	matchInfoEL.innerHTML = newVal;
})