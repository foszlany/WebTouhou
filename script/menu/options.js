let options_btn_mouse = '<p class="options menu_btn" id="options_btn_mouse">Toggle Mouse</p>';
let options_text_mouse_disclaimer = '<p class="options" id="options_text_mouse_disclaimer">Playing with mouse is heavily discouraged!</p>';
let options_text_move_window = '<p class="options menu_btn" id="options_text_move_window">Move window</p>';
let options_slider = '<div class="options menu_btn" id="slider_container">' +
    '<input class="options" id="slider" type="range" min="0" max="10" step="1" value="' + window_slider_val + '"/>' +
    '</div>';
let options_btn_sound = '<p class="options menu_btn" id="options_btn_sound">Sounds</p>';
let options_btn_back = '<p class="options menu_btn back_btn" id="options_btn_back">Back</p>';

const option_buttons = ['options_btn_mouse', 'options_text_move_window', 'options_btn_sound', 'options_btn_back'];

function init_options() {
    // REMOVE PREVIOUS ELEMENTS
    if(current_screen === 1) { // MAIN MENU
        select.play();
        window_game.css('background', 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../media/img/bg_main.jpg")');
        page.off('keydown.scr1');
        $('.main_menu').remove();
    }
    else if(current_screen === 4) { // SOUND
        cancel.play();
        page.off('keydown.scr4');
        $('.options_sound').remove();
    }

    current_screen = 3;

    // INITIALIZE OPTIONS
    window_game.append(options_btn_mouse, options_text_mouse_disclaimer, options_text_move_window, options_slider, options_btn_sound, options_btn_back);
    $('#slider').val(window_slider_val);
    set_mouse_color('#options_btn_mouse');

    selected_button_index = 0;
    $('#' + option_buttons[selected_button_index]).addClass("menu_btn_selected");

    // MOUSE LISTENERS
    $('#options_btn_mouse').on('click', function () {
        select.play();
        is_mouse_enabled = !is_mouse_enabled;
        set_mouse_color('#options_btn_mouse');
    });
    $('#options_text_move_window').on('click', function() {
        select.play();
        $('#slider').val(5);
        shift_window();
    });
    $('#slider').on('change', function() {
        select.play();
        shift_window();
    });
    $('#options_btn_sound').on('click', init_options_sound);
    $('#options_btn_back').on('click', init_menu);

    // HOVER LISTENERS
    for(let i = 0; i < option_buttons.length; i++) {
        $(`#${option_buttons[i]}`).on('mouseenter', function() {
            select_menu_item(option_buttons, selected_button_index, i);
        });
    }

    // KEYBOARD LISTENERS
    page.on('keydown.scr3', function(event) {
        if(event.key === 'ArrowUp' || event.key.toLowerCase() === 'w') {
            select_menu_item(option_buttons, selected_button_index, selected_button_index - 1);
        }
        if(event.key === 'ArrowDown' || event.key.toLowerCase() === 's') {
            select_menu_item(option_buttons, selected_button_index, selected_button_index + 1);
        }
        if(selected_button_index === 1 && (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a')) {
            let current_val = parseInt($('#slider').val());
            if(current_val > 0) {
                select.play();
                $('#slider').val(current_val - 1);
                shift_window();
            }
            else {
                invalid.play();
            }
        }
        if(selected_button_index === 1 && (event.key === 'ArrowRight' || event.key.toLowerCase() === 'd')) {
            let current_val = parseInt($('#slider').val());
            if(current_val < 10) {
                select.play();
                $('#slider').val(current_val + 1);
                shift_window();
            }
            else {
                invalid.play();
            }
        }
        if(event.key === 'Enter' || event.key === ' ') {
            switch(selected_button_index) {
                case 0:
                    is_mouse_enabled = !is_mouse_enabled;
                    set_mouse_color('#options_btn_mouse');
                    break;

                case 1:
                    select.play();
                    $('#slider').val(5);
                    shift_window();
                    break;

                case 2:
                    init_options_sound();
                    break;

                case 3:
                    init_menu();
            }
        }
        if(event.key === 'Escape') {
            init_menu();
        }
    });
}