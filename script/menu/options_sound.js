let options_sound_text_sfx = '<p class="options_sound menu_btn" id="options_sound_text_sfx">SFX Volume</p>';
let options_sound_setting_sfx = '<div class="options_sound" id="options_sound_setting_sfx">' +
                                            '<p>' +
                                                '<span class="options_sound_arrow" id="options_sound_sfx_vol_down">&#11207;</span>' +
                                                '<span id="options_sound_sfx_val">' + sfx_volume + '</span>' +
                                                '<span class="options_sound_arrow" id="options_sound_sfx_vol_up">&#11208;</span>' +
                                            '</p>'+
                                       '</div>';

let options_sound_text_music = '<p class="options_sound menu_btn" id="options_sound_text_music">Music Volume</p>';
let options_sound_setting_music = '<div class="options_sound" id="options_sound_setting_sfx">' +
                                            '<p>' +
                                                '<span class="options_sound_arrow" id="options_sound_music_vol_down">&#11207;</span>' +
                                                '<span id="options_sound_music_val">' + music_volume + '</span>' +
                                                '<span class="options_sound_arrow" id="options_sound_music_vol_up">&#11208;</span>' +
                                            '</p>'+
                                        '</div>';
let options_sound_btn_back = '<p class="options_sound menu_btn back_btn" id="options_sound_btn_back">Back</p>';

const options_sound_buttons = ['options_sound_text_sfx', 'options_sound_text_music', 'options_sound_btn_back'];

function init_options_sound() {
    select.play();

    // REMOVE PREVIOUS ELEMENTS
    $('.options').remove();
    page.off('keydown.scr3');

    // INITIALIZE SOUND OPTIONS
    window_game.append(options_sound_text_sfx, options_sound_setting_sfx, options_sound_text_music, options_sound_setting_music, options_sound_btn_back);
    $('#options_sound_sfx_val').text(sfx_volume);
    $('#options_sound_music_val').text(music_volume);

    selected_button_index = 0;
    $('#' + options_sound_buttons[selected_button_index]).addClass("menu_btn_selected");

    current_screen = 4;

    // MOUSE LISTENERS
    // SFX
    $('#options_sound_text_sfx').on('click', function () {
        sfx_volume = 4;
        set_sfx_volume();
    })
    $('#options_sound_sfx_vol_up').on('click', function () {
        if(sfx_volume + 1 <= 10) {
            sfx_volume++;
            set_sfx_volume();
        }
        else {
            invalid.play();
        }
    })
    $('#options_sound_sfx_vol_down').on('click', function () {
        if(sfx_volume - 1 >= 0) {
            sfx_volume--;
            set_sfx_volume();
        }
    })
    // MUSIC
    $('#options_sound_text_music').on('click', function () {
        music_volume = 4;
        set_music_volume();
    })
    $('#options_sound_music_vol_up').on('click', function () {
        if(music_volume + 1 <= 10) {
            music_volume++;
            set_music_volume();
        }
        else {
            invalid.play();
        }
    })
    $('#options_sound_music_vol_down').on('click', function () {
        if(music_volume - 1 >= 0) {
            music_volume--;
            set_music_volume();
        }
        else {
            invalid.play();
        }
    })
    // BACK
    $('#options_sound_btn_back').on('click', init_options);

    // HOVER LISTENERS
    for(let i = 0; i < options_sound_buttons.length; i++) {
        $(`#${options_sound_buttons[i]}`).on('mouseenter', function() {
            select_menu_item(options_sound_buttons, selected_button_index, i);
        });
    }

    // KEYBOARD LISTENERS
    page.on('keydown.scr4', function(event) {
        if(event.key === 'ArrowUp' || event.key.toLowerCase() === 'w') {
            select_menu_item(options_sound_buttons, selected_button_index, selected_button_index - 1);
        }
        if(event.key === 'ArrowDown' || event.key.toLowerCase() === 's') {
            select_menu_item(options_sound_buttons, selected_button_index, selected_button_index + 1);
        }
        if(selected_button_index === 0 && (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a')) {
            if(sfx_volume - 1 >= 0) {
                sfx_volume--;
                set_sfx_volume();
            }
            else {
                invalid.play();
            }
        }
        if(selected_button_index === 0 && (event.key === 'ArrowRight' || event.key.toLowerCase() === 'd')) {
            if(sfx_volume + 1 <= 10) {
                sfx_volume++;
                set_sfx_volume();
            }
            else {
                invalid.play();
            }
        }
        if(selected_button_index === 1 && (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a')) {
            if(music_volume - 1 >= 0) {
                music_volume--;
                set_music_volume();
            }
            else {
                invalid.play();
            }
        }
        if(selected_button_index === 1 && (event.key === 'ArrowRight' || event.key.toLowerCase() === 'd')) {
            if(music_volume + 1 <= 10) {
                music_volume++;
                set_music_volume();
            }
            else {
                invalid.play();
            }
        }
        if(event.key === 'Enter' || event.key === ' ') {
            switch(selected_button_index) {
                case 0:
                    sfx_volume = 4;
                    set_sfx_volume();
                    break;

                case 1:
                    music_volume = 4;
                    set_music_volume();
                    break;

                case 2:
                    init_options();
            }
        }
        if(event.key === 'Escape') {
            init_options();
        }
    });
}