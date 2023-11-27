console.log("test");


const tRepone = nodecg.Replicant('tRepone');

const tReponeEL = document.getElementById("tony");

tRepone.on('change', (newVal) => {
	tReponeEL.innerHTML = newVal;
})