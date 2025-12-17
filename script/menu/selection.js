let difficulty_text

let selection_btn_easy = '<p class="selection selection_btn" id="selection_btn_easy">Easy</p>';
let selection_btn_normal = '<p class="selection selection_btn" id="selection_btn_normal">Normal</p>';
let selection_btn_hard = '<p class="selection selection_btn" id="selection_btn_hard">Hard</p>';
// let selection_btn_lunatic = '<p class="selection selection_btn" id="selection_btn_lunatic">Lunatic</p>';
let selection_card = '<div class="selection" id="selection_card">' +
                                '<p class="selection" id="selection_difficulty_desc"></p>' +
                                '<div class="selection" id="selection_footer">' +
                                    '<p class="selection selection_btn back_btn" id="selection_btn_back">Back</p>' +
                                    '<p class="selection selection_btn" id="selection_btn_start">Start</p>' +
                                '</div>' +
                            '</div>';

const selection_buttons = ['selection_btn_easy', 'selection_btn_normal', 'selection_btn_hard', /* 'selection_btn_lunatic', */ 'selection_btn_start', 'selection_btn_back'];

function init_selection() {
    select.play();

    // REMOVE PREVIOUS ELEMENTS
    $('.main_menu').remove();
    page.off('keydown.scr1');
    window_game.addClass('scrollable');

    current_screen = 5;

    $(document).ready(function() {
        difficulty_text = $('#selection_difficulty_desc');
        difficulty_change();
    });
    window_game.css('background-repeat', 'repeat');


    // INITIALIZE SELECTION
    window_game.append(selection_btn_easy, selection_btn_normal, selection_btn_hard, /* selection_btn_lunatic, */ selection_card);

    selected_button_index = 0;
    $('#' + selection_buttons[selected_button_index]).addClass("menu_btn_selected");

    // MOUSE LISTENERS
    $('#selection_btn_easy').on('click', function () {
        difficulty = 1;
        difficulty_change();
    });
    $('#selection_btn_normal').on('click', function () {
        difficulty = 2;
        difficulty_change();
    });
    $('#selection_btn_hard').on('click', function () {
        difficulty = 3;
        difficulty_change();
    });
    /*
    $('#selection_btn_lunatic').on('click', function () {
        difficulty = 4;
        difficulty_change();
    });
    */
    $('#selection_btn_back').on('click', init_menu);
    $('#selection_btn_start').on('click', function () {
        init_game();
    })

    // HOVER LISTENERS
    for(let i = 0; i < selection_buttons.length; i++) {
        $(`#${selection_buttons[i]}`).on('mouseenter', function() {
            select_menu_item(selection_buttons, selected_button_index, i);
        });
    }

    // KEYBOARD LISTENER
    page.on('keydown.scr5', function(event) {
        if(event.key === 'ArrowUp' || event.key.toLowerCase() === 'w') {
            if(selected_button_index === 4) {
                select_menu_item(selection_buttons, selected_button_index, selected_button_index - 2);
            }
            else {
                select_menu_item(selection_buttons, selected_button_index, selected_button_index - 1);
            }
        }
        if(event.key === 'ArrowDown' || event.key.toLowerCase() === 's') {
            select_menu_item(selection_buttons, selected_button_index, selected_button_index + 1);
        }
        if(event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a') {
            if(selected_button_index === 3) {
                select_menu_item(selection_buttons, selected_button_index, selected_button_index + 1);
            }
            else if(selected_button_index === 3) {
                invalid.play();
            }
        }
        if(event.key === 'ArrowRight' || event.key.toLowerCase() === 'd') {
            if(selected_button_index === 4) {
                select_menu_item(selection_buttons, selected_button_index, selected_button_index - 1);
            }
            else if(selected_button_index === 3) {
                invalid.play();
            }
        }
        if(event.key === 'Enter' || event.key === ' ') {
            switch(selected_button_index) {
                case 0:
                    difficulty = 1;
                    difficulty_change();
                    break;

                case 1:
                    difficulty = 2;
                    difficulty_change();
                    break;

                case 2:
                    difficulty = 3;
                    difficulty_change();
                    break;

                /*
                case 3:
                    difficulty = 4;
                    difficulty_change();
                    break;
                */

                case 3:
                    ok.play();
                    init_game();
                    break;

                case 4:
                    init_menu();
            }
        }
        if(event.key === 'Escape') {
            init_menu();
        }
    });
}