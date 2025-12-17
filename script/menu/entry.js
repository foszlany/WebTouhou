let page = $(document);

let window_game;
let window_width, window_height;

let music_volume = 5;
let sfx_volume = 4;

// 0: TITLE SCREEN
// 1: MAIN MENU
// 2: LEADERBOARD
// 3: OPTIONS
// 4: SOUNDS
// 5: DIFFICULTY SELECTION
// 6: IN-GAME
// 7: ** UNUSED **
// 8: SCORE SCREEN
// 9: ABOUT
let current_screen = 0;

// TURNS ON MOUSE IN-GAME
let is_mouse_enabled = false;

// CURRENT BUTTON ACCORDING TO KEYBOARD
let selected_button_index;

// WINDOW POS
let window_slider_val = 5;

// DIFFICULTY
// 1: EASY
// 2: NORMAL
// 3: HARD
// 4: LUNATIC
let difficulty = 2;

// SPLASH
let entry_title = '<p class="entry" id="entry_title">Bootleg Touhou</p>';
let entry_img = '<img class="entry" id="entry_img" alt="Splash" src="./media/img/splash.png">';
let entry_hint = '<p class="entry" id="entry_hint">Click anywhere to begin</p>';

$(document).ready(function () {
    // GET WINDOW DATA
    window_game = $('#game_window');
    window_width = parseInt(window_game.css('width'));
    window_height = parseInt(window_game.css('height'));

    // WINDOW SCALE LISTENER
    $(window).on('resize', shift_window);

    // INIT GAME
    set_sfx_volume();
    set_music_volume();
    load_scores();

    init_entry();
});

function init_entry() {
    // INITIALIZE TITLE SCREEN
    window_game.css('background', 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url("./media/img/bg_main.jpg")');
    window_game.append(entry_title, entry_img, entry_hint);

    $(document).one('click', init_menu);
    $(document).one('keydown.scr0',init_menu);
}