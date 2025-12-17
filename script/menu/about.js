let about_desc = '<p class="about" id="about_desc">Touhou is a game about dodging bullets with your character.</p>';
let about_bind1 = '<p class="about about_bind" id="about_bind1"><span class="about_bind_highlight">Move:</span> WASD, Arrow Keys or <span class="about_mouse">Mouse</span></p>';
let about_bind2 = '<p class="about about_bind" id="about_bind2"><span class="about_bind_highlight">Precision movement:</span> Shift</p>';
let about_bind3 = '<p class="about about_bind" id="about_bind3"><span class="about_bind_highlight">Shoot:</span> E, Spacebar or <span class="about_mouse">Mouse1</span></p>';
let about_bind4 = '<p class="about about_bind" id="about_bind4"><span class="about_bind_highlight">Toggle Ability:</span> Q</p>';
let about_bind4_hint = '<p class="about about_bind" id="about_bind4_hint">Use it to massively increase your damage output!</p>';
let about_closure = '<p class="about" id="about_closure">Made by Radojcic Kilien</p>';
let about_btn_back = '<p class="about menu_btn back_btn menu_btn_selected" id="about_btn_back">Back</p>';

function init_about() {
    select.play();

    // REMOVE PREVIOUS ELEMENTS
    page.off('keydown.scr1');
    $('.main_menu').remove();

    current_screen = 9;

    // INITIALIZE ABOUT
    window_game.css('background', 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../media/img/bg_main.jpg")');
    window_game.append(about_desc, about_bind1, about_bind2, about_bind3, about_bind4, about_bind4_hint, about_closure, about_btn_back);

    set_mouse_color('.about_mouse')

    // MOUSE LISTENERS
    $(`#about_btn_back`).on('click', function() {
        init_menu();
    });

    // KEYBOARD LISTENERS
    page.on('keydown.scr9', function(event) {
        if(event.key === 'Escape' || event.key === "Enter") {
            init_menu();
        }
    });
}