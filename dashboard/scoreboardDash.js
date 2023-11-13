//Map Score
const team1scoreRep = nodecg.Replicant('team1score', {defaultValue: 0});
const team2scoreRep = nodecg.Replicant('team2score', {defaultValue: 0});

//flavor text
const underScoreTextRep = nodecg.Replicant('underScoreText', {defaultValue: "Hello"});

function setflavor(){
    underScoreTextRep.value = document.getElementById('underScoreflavor').value;
}


//Score Reseters for both maps and series
function resetScoreboard(){
    team1scoreRep.value = 0;
    team2scoreRep.value = 0;
}
//Functions for score controls
function scoreTeam1(){
	team1scoreRep.value++;
}

function minusScoreTeam1(){
    if (team1scoreRep.value > 0){
	team1scoreRep.value--;
    }
    else{
        return;
    }

}

function zeroteam1(){
    team1scoreRep.value = 0;
}

function zeroteam2(){
    team2scoreRep.value = 0;
}

function scoreTeam2(){
	team2scoreRep.value++;
}

function minusScoreTeam2(){
    if (team2scoreRep.value > 0){
        team2scoreRep.value--;
        }
        else{
            return;
        }
}
