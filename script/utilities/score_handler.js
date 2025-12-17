let scores = [];

function load_scores() {
    const saved_scores = localStorage.getItem('scores');
    if(saved_scores) {
        scores = JSON.parse(saved_scores);
    }
}

function add_score(score, difficulty, frames_elapsed) {
    const new_score = {
        score: score,
        difficulty: difficulty,
        time: Math.floor(frames_elapsed * animation_rate / 1000)
    }

    scores.push(new_score);

    // SORT BY SCORE > DIFFICULTY > TIME
    scores.sort((a, b) => {
        if(b.score !== a.score) {
            return b.score - a.score;
        }
        if(b.difficulty !== a.difficulty) {
            return b.difficulty - a.difficulty;
        }
        return a.time - b.time;
    });

    if(scores.length > 10) {
        scores.pop();
    }

    let placing = -1;
    for(let i = 0; i < scores.length; i++) {
        if(scores[i] === new_score) {
            placing = i + 1;
            break;
        }
    }

    localStorage.setItem('scores', JSON.stringify(scores));

    return placing === -1 ? 'NONE' : placing;
}

function remove_scores() {
    scores = [];
    localStorage.removeItem('scores');
}