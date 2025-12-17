let is_popup_active;

const table_begin =
    `<table class="leaderboard" id="leaderboard_table">
        <thead>
            <tr>
                <th>Score</th>
                <th>Difficulty</th>
                <th>Time</th>
            </tr>
        </thead>
        <tbody>`;

const table_end =
    `   </tbody>
    </table>`;

const leaderboard_btn_container =
    `<div class="leaderboard" id="leaderboard_btn_container">
        <p class="leaderboard menu_btn" id="leaderboard_btn_reset">Reset Leaderboard</p>
        <p class="leaderboard menu_btn back_btn" id="leaderboard_btn_back">Back</p>
    </div>`;

const leaderboard_buttons = ['leaderboard_btn_reset', 'leaderboard_btn_back'];

function init_leaderboard() {
    select.play();

    // REMOVE PREVIOUS ELEMENTS
    if(current_screen === 1) {
        $('.main_menu').remove();
        page.off('keydown.scr1');
    }
    else if(current_screen === 2) {
        page.off('keydown.scr2');
    }
    else if(current_screen === 8) {
        page.off('keydown.scr8');
        window_game.removeClass('scrollable');
        $('.game').remove();
        $('.game_over').remove();
    }

    let table_cells = '';
    for(let i = 0; i < 10; i++) {
        if(scores[i] !== undefined && scores[i] !== null) {
            table_cells += `
               <tr>
                       <td>${scores[i].score}</td>
                       <td>${difficulty_int_to_string(scores[i].difficulty)}</td>
                       <td>${scores[i].time}</td>
               </tr>`
        }
        else {
            table_cells += `
               <tr>
                       <td></td>
                       <td></td>
                       <td></td>
               </tr>`
        }
    }

    // INIT LEADERBOARD
    let table_full = table_begin + table_cells + table_end;

    window_game.append(table_full, leaderboard_btn_container);
    window_game.css('background', 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url("../media/img/bg_main.jpg")');

    current_screen = 2;

    is_popup_active = false;

    selected_button_index = 1;
    $('#' + leaderboard_buttons[selected_button_index]).addClass("menu_btn_selected");

    // MOUSE LISTENERS
    $('#leaderboard_btn_back').on('click', init_menu);
    $('#leaderboard_btn_reset').on('click', reset_score_popup);

    // HOVER LISTENERS
    for(let i = 0; i < leaderboard_buttons.length; i++) {
        $(`#${leaderboard_buttons[i]}`).on('mouseenter', function() {
            select_menu_item(leaderboard_buttons, selected_button_index, i);
        });
    }

    // KEYBOARD LISTENERS
    page.on('keydown.scr2', function(event) {
        if(!is_popup_active) {
            if(event.key === 'ArrowUp' || event.key.toLowerCase() === 'w') {
                select_menu_item(leaderboard_buttons, selected_button_index, selected_button_index - 1);
            }
            if(event.key === 'ArrowDown' || event.key.toLowerCase() === 's') {
                select_menu_item(leaderboard_buttons, selected_button_index, selected_button_index + 1);
            }
            if(event.key === 'Enter' || event.key === ' ') {
                switch(selected_button_index) {
                    case 0:
                        reset_score_popup();
                        break;

                    case 1:
                        init_menu();
                }
            }
        }
    });
}

// POPUP FOR CONFIRMING DELETION OF SCORES
function reset_score_popup() {
    let leaderboard_reset_popup =
        `<div class="leaderboard_popup" id="leaderboard_reset_overlay">
            <div class="leaderboard_popup" id="leaderboard_reset_popup">
                <p class="leaderboard_popup">Are you sure you want to destroy all leaderboard scores?</p>
                
                <p class="leaderboard_popup menu_btn" id="leaderboard_btn_confirm">Yes</p>
                <p class="leaderboard_popup menu_btn" id="leaderboard_btn_cancel">No</p>
            </div>
        </div>`;

    const popup_elements = ['leaderboard_btn_confirm', 'leaderboard_btn_cancel'];

    select.play();

    window_game.append(leaderboard_reset_popup);

    is_popup_active = true;

    selected_button_index = 1;
    $('#' + popup_elements[selected_button_index]).addClass("menu_btn_selected");

    // MOUSE LISTENERS
    $('#leaderboard_btn_confirm').on('click', function() {
        death.play();
        remove_score_popup();
        remove_scores();
        $('.leaderboard').remove();
        init_leaderboard();
    });
    $('#leaderboard_btn_cancel').on('click', remove_score_popup);

    // HOVER LISTENERS
    for(let i = 0; i < popup_elements.length; i++) {
        $(`#${popup_elements[i]}`).on('mouseenter', function() {
            select_menu_item(popup_elements, selected_button_index, i);
        });
    }

    // KEYBOARD LISTENERS
    page.on('keydown.popup', function(event) {
        if(event.key === 'ArrowUp' || event.key.toLowerCase() === 'w') {
            select_menu_item(popup_elements, selected_button_index, selected_button_index - 1);
        }
        if(event.key === 'ArrowDown' || event.key.toLowerCase() === 's') {
            select_menu_item(popup_elements, selected_button_index, selected_button_index + 1);
        }
        if(event.key === 'Enter' || event.key === ' ') {
            switch(selected_button_index) {
                case 0:
                    death.play();
                    remove_scores();
                    $('.leaderboard').remove();
                    init_leaderboard();
                    selected_button_index = 1;
                    break;

                case 1:
                    cancel.play();
                    selected_button_index = 0;
            }
            remove_score_popup();
        }
        if(event.key === 'Escape') {
            cancel.play();
            remove_score_popup();
        }
    });
}

// REMOVES POPUP
function remove_score_popup() {
    is_popup_active = false;
    page.off('keydown.popup');
    $('.leaderboard_popup').remove();
}