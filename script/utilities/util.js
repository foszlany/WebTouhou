/*
*   HANDLES KEYBOARD INPUTS FOR MENUS
*
*   items: ARRAY OF MENU ELEMENTS
*   from: CHANGE SELECTION FROM
*   to: CHANGE SELECTION TO
*/
function select_menu_item(items, from, to) {
    if(0 <= to && to < items.length) {
        select.play().catch((err) => {
            if(err.name === 'NotAllowedError') {
                console.log("SOUNDEVENT ERROR: NO INTERACTION");
            }
            else {
                console.log("SOUNDEVENT ERROR: UNKNOWN ERROR");
            }
        });

        $('#' + items[from]).removeClass("menu_btn_selected");
        $('#' + items[to]).addClass("menu_btn_selected");

        selected_button_index = to;
    }
    else {
        invalid.play();
    }
}

// SHIFT GAME WHENEVER WINDOW IS RESIZED OR WHEN SET
function shift_window() {
    window_slider_val = $('#slider').val();
    let body_width = window_game.parent().width() - 70;
    let shift_val = ((window_slider_val / 10) * 2 - 1) * (body_width - window_game.width()) / 2;
    window_game.css('transform', `translateX(${shift_val}px)`);
}

// SET MOUSE BTN COLOR
function set_mouse_color(selector) {
    if(is_mouse_enabled) {
        $(selector).css('color', '#00FF00');
    }
    else {
        $(selector).css('color', '#FF0000');
    }
}

// SET DIFFICULTY TEXT IN SELECTION
function difficulty_change() {
    $(document).ready(function() {
        select.play();

        switch(difficulty) {
            case 1:
                difficulty_text.text("For users new to the keyboard");
                window_game.css('background', 'url("./media/img/bg_easy.jpg")');
                break;
            case 2:
                difficulty_text.text("The standard experience meant for casuals");
                window_game.css('background', 'url("./media/img/bg_normal.jpg")');
                break;
            case 3:
                difficulty_text.text("Intended for experienced players");
                window_game.css('background', 'url("./media/img/bg_hard.jpg")');
                break;
            case 4:
                difficulty_text.text("For the Worthy");
                window_game.css('background', 'url("./media/img/bg_lunatic.jpg")');
        }
    });
}

// RETURNS DIFFICULTY AS A STRING
function difficulty_int_to_string(difficulty) {
    switch(difficulty) {
        case 1:
            return 'Easy';

        case 2:
            return 'Normal';

        case 3:
            return 'Hard';

        case 4:
            return 'Lunatic';

        default:
            return "INVALID"
    }
}