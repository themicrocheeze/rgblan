//REPLICANTS
const bluTeamNameREP = nodecg.Replicant('bluTeamName');
const redTeamNameREP = nodecg.Replicant('redTeamName');
const bluTeamScoreREP = nodecg.Replicant('bluTeamScore');
const redTeamScoreREP = nodecg.Replicant('redTeamScore');

//HTML ELEMENTS
const bluTeamNameEL = document.getElementById("bluTeamName");
const redTeamNameEL = document.getElementById("redTeamName");
const bluTeamScoreEL = document.getElementById('bluTeamScore');
const redTeamScoreEL = document.getElementById('redTeamScore');


//UPDATE FUNCTIONS

bluTeamNameREP.on('change', (newVal) => {
	bluTeamNameEL.innerHTML = newVal;
})

redTeamNameREP.on('change', (newVal) => {
	redTeamNameEL.innerHTML = newVal;
})

bluTeamScoreREP.on('change', (newVal) =>{
    bluTeamScoreEL.innerHTML = newVal;
})

redTeamScoreREP.on('change', (newVal) =>{
    redTeamScoreEL.innerHTML = newVal;
})