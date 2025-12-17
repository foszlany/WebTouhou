let menu_btn_start = '<p class="main_menu menu_btn" id="main_btn_start">Game Start</p>';
let menu_btn_leaderboard = '<p class="main_menu menu_btn" id="main_btn_leaderboard">Leaderboard</p>';
let menu_btn_options = '<p class="main_menu menu_btn" id="main_btn_options">Options</p>';
let main_btn_about = '<p class="main_menu menu_btn" id="main_btn_about">About</p>';

const main_buttons = ['main_btn_start', 'main_btn_leaderboard', 'main_btn_options', 'main_btn_about'];

function init_menu() {
    // REMOVE PREVIOUS ELEMENTS
    switch(current_screen) {
        case 0: // TITLE
            death.play();
            page.off('keydown.scr0');
            $('.entry').remove();
            break;

        case 2: // LEADERBOARD
            cancel.play();
            page.off('keydown.scr2');
            $('.leaderboard').remove();
            break;

        case 3: // OPTIONS
            cancel.play();
            page.off('keydown.scr3');
            $('.options').remove();
            break;

        case 5: // DIFFICULTY SELECTION
            cancel.play();
            page.off('keydown.scr5');
            $('.selection').remove();
            window_game.removeClass('scrollable');
            break;

        case 8: // SCORE SCREEN
            select.play();
            window_game.removeClass('scrollable');
            page.off('keydown.scr8');
            $('.game').remove();
            $('.game_over').remove();
            break;

        case 9: // ABOUT
            cancel.play();
            page.off('keydown.scr9');
            $('.about').remove();
    }

    current_screen = 1;

    // INITIALIZE MAIN MENU
    window_game.css('background-image', 'url("./media/img/bg_main.jpg")');
    window_game.append(menu_btn_start, menu_btn_leaderboard, menu_btn_options, main_btn_about);

    selected_button_index = 0;
    $('#' + main_buttons[0]).addClass("menu_btn_selected");

    // MOUSE LISTENERS
    $('#main_btn_start').on('click', init_selection);
    $('#main_btn_leaderboard').on('click', init_leaderboard);
    $('#main_btn_options').on('click', init_options);
    $('#main_btn_about').on('click', init_about);

    // HOVER LISTENERS
    for(let i = 0; i < main_buttons.length; i++) {
        $(`#${main_buttons[i]}`).on('mouseenter', function() {
            select_menu_item(main_buttons, selected_button_index, i);
        });
    }

    // KEYBOARD LISTENERS
    page.on('keydown.scr1', function(event) {
        if(event.key === 'ArrowUp' || event.key.toLowerCase() === 'w') {
            select_menu_item(main_buttons, selected_button_index, selected_button_index - 1);
        }
        if(event.key === 'ArrowDown' || event.key.toLowerCase() === 's') {
            select_menu_item(main_buttons, selected_button_index, selected_button_index + 1);
        }
        if(event.key === 'Enter' || event.key === ' ') {
            switch(selected_button_index) {
                case 0:
                    init_selection();
                    break;

                case 1:
                    init_leaderboard();
                    break;

                case 2:
                    init_options();
                    break;

                case 3: init_about();
            }
        }
    });
}