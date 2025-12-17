const sfx_elements = [
    select = new Audio('./media/audio/sfx/select.wav'),
    ok = new Audio('./media/audio/sfx/ok.wav'),
    cancel = new Audio('./media/audio/sfx/cancel.wav'),
    invalid = new Audio('./media/audio/sfx/invalid.wav'),
    pause = new Audio('./media/audio/sfx/pause.wav'),
    death = new Audio('./media/audio/sfx/death.wav'),

    ability_invalid = new Audio('./media/audio/sfx/no_ability.wav'),
    ability_ready = new Audio('./media/audio/sfx/ability_ready.wav'),
    ability_use = new Audio('./media/audio/sfx/ability.wav'),
    ability_exhausted = new Audio('./media/audio/sfx/ability_exhausted.wav'),

    kill_weak = new Audio('./media/audio/sfx/kill_weak.wav'),
    kill_moderate = new Audio('./media/audio/sfx/kill_moderate.wav'),
    kill_strong = new Audio('./media/audio/sfx/kill_strong.wav'),
    kill_boss = new Audio('./media/audio/sfx/kill_boss.wav'),

    phase = new Audio('./media/audio/sfx/phase.wav'),
]

const music_elements = [
    music1 = new Audio('./media/audio/music/music1.ogg'),
    music2 = new Audio('./media/audio/music/music2.ogg'),
    music3 = new Audio('./media/audio/music/music3.ogg')
]

function set_sfx_volume() {
    sfx_elements.forEach((sfx) => {
        sfx.volume = sfx_volume / 10;
    })
    select.play().catch((err) => {
        if(err.name === 'NotAllowedError') {
            console.log("SOUNDEVENT ERROR: NO INTERACTION");
        }
        else {
            console.log("SOUNDEVENT ERROR: UNKNOWN ERROR");
        }
    });

    $('#options_sound_sfx_val').text(sfx_volume);
}

function set_music_volume() {
    music_elements.forEach((music) => {
        music.volume = music_volume / 10;
    })
    select.play().catch((err) => {
        if(err.name === 'NotAllowedError') {
            console.log("SOUNDEVENT ERROR: NO INTERACTION");
        }
        else {
            console.log("SOUNDEVENT ERROR: UNKNOWN ERROR");
        }
    });
    $('#options_sound_music_val').text(music_volume);
}

function play_music() {
    // SHUFFLE
    if(played_music_index === 0 || played_music_index === music_elements.length) {
        for(let i = 0; i < music_elements.length - 1; i++) {
            let j = Math.floor(Math.random() * (music_elements.length - i)) + i;
            let temp = music_elements[i];
            music_elements[i] = music_elements[j];
            music_elements[j] = temp;
        }
    }

    if(played_music_index === music_elements.length) {
        played_music_index = 0;
    }

    music_elements[played_music_index].play();
}

function stop_music() {
    if(played_music_index >= 0 && played_music_index < music_elements.length) {
        music_elements[played_music_index].pause();
        music_elements[played_music_index++].currentTime = 0;
    }
}