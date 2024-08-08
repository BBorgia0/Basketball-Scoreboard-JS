let awayScoreEl = document.getElementById("away-score")
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0
let awayScore = 0


function increaseHomeScoreOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function increaseAwayScoreOne() {
    awayScore += 1
    awayScoreEl.textContent = awayScore
}

function increaseAwayScoreTwo() {
    awayScore += 2
    awayScoreEl.textContent = awayScore
}

function increaseAwayScoreThree() {
    awayScore += 3
    awayScoreEl.textContent = awayScore
}

function resetScore() {
    homeScore = 0
    awayScore = 0
    homeScoreEl.textContent = 0
    awayScoreEl.textContent = 0
}