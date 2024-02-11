//REPLICANTS
const bluTeamNameREP = nodecg.Replicant('bluTeamName');
const redTeamNameREP = nodecg.Replicant('redTeamName');
const bluTeamScoreREP = nodecg.Replicant('bluTeamScore');
const redTeamScoreREP = nodecg.Replicant('redTeamScore');
const gamePauseStateREP = nodecg.Replicant('gamePauseState');

const tfSeriesTextREP = nodecg.Replicant('tfSeriesText');
const tfSeriesText2REP = nodecg.Replicant('tfSeriesText2');
const tfSeriesText3REP = nodecg.Replicant('tfSeriesText3');


//HTML ELEMENTS
const bluTeamNameEL = document.getElementById("bluTeamName");
const redTeamNameEL = document.getElementById("redTeamName");
const bluTeamScoreEL = document.getElementById('bluTeamScore');
const redTeamScoreEL = document.getElementById('redTeamScore');
const gamePauseStateEL = document.getElementById('gamePauseState');

const tfSeriesTextEL = document.getElementById('tfSeriesText');
const tfSeriesText2EL = document.getElementById('tfSeriesText2');
const tfSeriesText3EL = document.getElementById('tfSeriesText3');


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

redTeamScoreREP.on('change', (newVal) => {
    redTeamScoreEL.innerHTML = newVal;
})

gamePauseStateREP.on('change', (newVal) => {


    gamePauseStateEL.style.opacity = newVal;

})

tfSeriesTextREP.on('change', (newVal) => {
    tfSeriesTextEL.innerHTML = newVal;

})

tfSeriesText2REP.on('change', (newVal) => {
    tfSeriesText2EL.innerHTML = newVal;

})

tfSeriesText3REP.on('change', (newVal) => {
    tfSeriesText3EL.innerHTML = newVal;

})