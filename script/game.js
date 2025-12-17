let ctx;

let canvas_width;
let canvas_height;

let draw_interval;
const animation_rate = 20;
let enemy_frame_counter;
let true_frame_counter;

let pressed_keys = {};

let character;
const player_bullet_speed = 32;
const normal_step_size = 6;
const slow_step_size = 3;

// IFRAMES PER DIFFICULTY: 60 / 54 / 44 / 30
const iframes = 62 - (difficulty ** 2) * 2;

// ABILITY CAP PER DIFFICULTY: 50 / 75 / 100 / 125
const ability_cap = 50 + ((difficulty - 1) * 25);
const ability_damage_multiplier = 1.2;
let ability_ready_sfx_played;
let ability_shine;

let played_music_index;

let enemies;
let enemies_spawned;
let enemy_spawn_info;
let is_major_enemy_alive;

let game_canvas = '<canvas class="game" id="game_canvas"></canvas>';


function init_game() {
    ok.play();

    // REMOVE PREVIOUS ELEMENTS
    if(current_screen === 5) {
        $('.selection').remove();
        page.off('keydown.scr5');
    }

    current_screen = 6;

    // INITIALIZE GAME
    $(document).ready(function () {
        window_game.append(game_canvas);

        game_canvas = document.getElementById('game_canvas');
        game_canvas.width = 600;
        game_canvas.height = 900;

        canvas_width = game_canvas.width;
        canvas_height = game_canvas.height;

        ctx = game_canvas.getContext('2d');
        ctx.font = "28px DFPPOP";

        ability_ready_sfx_played = false;
        ability_shine = 3;

        true_frame_counter = 0;
        enemy_frame_counter = 0;

        enemies = [];
        enemies_spawned = 0;
        is_major_enemy_alive = false;

        played_music_index = 0;

        switch(difficulty) {
            case 1:
                define_enemy_spawn_info_easy();
                enemy_spawn_info = enemy_spawns_easy;
                break;

            case 2:
                define_enemy_spawn_info_normal();
                enemy_spawn_info = enemy_spawns_normal;
                break;

            case 3:
                define_enemy_spawn_info_hard();
                enemy_spawn_info = enemy_spawns_hard;
                break;

            case 4:
                define_enemy_spawn_info_lunatic();
                enemy_spawn_info = enemy_spawns_lunatic;
                break;
        }

        play_music();

        // CHARACTER DEFINITION
        character = {
            sprite: sprite_character,
            width: sprite_character.width,
            height: sprite_character.height,
            x: 300 - Math.ceil(sprite_character.width / 2),
            y: 700,
            score: 0,
            health: 5,
            iframe_counter: iframes + 1,
            damage: 1,
            step_size: normal_step_size,
            is_shooting: false,
            is_ability_active: false,
            ability_level: 1,
            bullets: []
        }

        // MOUSE LISTENERS
        if(is_mouse_enabled) {
            page.on('mousemove.scr6', function (event) {
                const barrier = game_canvas.getBoundingClientRect();

                const mouse_x_pos = event.clientX - barrier.left;
                const mouse_y_pos = event.clientY - barrier.top;

                // CONFINE PLAYER WITHIN CANVAS WHILE AVOIDING TELEPORTATION
                // USER CAN STILL TELEPORT IF THEY GO OUTSIDE THE WINDOW!
                character.x = Math.max(
                    0,
                    Math.min(mouse_x_pos - Math.ceil(character.width / 2), barrier.width - character.width) - 3
                );

                character.y = Math.max(
                    0,
                    Math.min(mouse_y_pos - Math.ceil(character.height / 2), barrier.height - character.height) - 3
                );
            });

            page.on('mousedown.scr6', function(event) {
                // MOUSE1
                if(event.button === 0) {
                    character.is_shooting = true;
                }
            });

            page.on('mouseup.scr6', function(event) {
                // MOUSE1
                if(event.button === 0) {
                    character.is_shooting = false;
                }
            });
        }


        // KEYBOARD LISTENERS
        // KEY PRESSED
        page.on('keydown.scr6', function (event) {
            pressed_keys[event.key.toLowerCase()] = true;

            if(pressed_keys['e'] === true) {
                character.is_shooting = true;
            }

            if(pressed_keys['q'] === true) {
                if(character.ability_level >= ability_cap) {
                    if(!character.is_ability_active) {
                        ability_use.play();
                        character.ability_level = ability_cap;
                        character.damage *= ability_damage_multiplier;
                        character.is_ability_active = true;
                    }
                }
                else if(!character.is_ability_active) {
                    ability_invalid.play();
                }
            }
        });

        // KEY RELEASE
        page.on('keyup.scr6', function (event) {
            pressed_keys[event.key.toLowerCase()] = false;

            if(pressed_keys['e'] === false) {
                character.is_shooting = false
            }
        });

        // AUDIO LISTENER
        music_elements.forEach(music => {
            music.addEventListener('ended', () => {
                played_music_index++;
                play_music();
            });
        })

        draw_interval = setInterval(() => window.requestAnimationFrame(draw), animation_rate);
    });
}


// EACH FRAME
function draw() {
    if(enemy_spawn_info.length === enemies_spawned && enemies.length === 0) {
        init_game_over("Clear");
    }

    // console.log(enemy_frame_counter);

    is_major_enemy_alive = false;
    true_frame_counter++;

    // FAST FORWARD WHEN ALL ENEMIES ARE DEAD
    if(enemies.length === 0 && enemies_spawned !== 0 && enemy_spawn_info.length !== enemies_spawned) {
        enemy_frame_counter = enemy_spawn_info[enemies_spawned].frame;
    }

    // HANDLE IFRAMES
    if(character.iframe_counter <= iframes) {
        character.iframe_counter++;
    }

    ctx.clearRect(0, 0, game_canvas.width, game_canvas.height);

    move_character();

    draw_character();
    draw_enemies();
    draw_hud();

    if(!is_major_enemy_alive) {
        enemy_frame_counter++;

        // PASSIVE ABILITY GAIN (1.5s)
        if(true_frame_counter % 75 === 0) {
            character.ability_level++;
        }
    }
    // PASSIVE ABILITY GAIN (3s)
    else if(true_frame_counter % 150 === 0) {
        character.ability_level++;
    }
}

function move_character() {
    character.step_size = pressed_keys['shift'] ? slow_step_size : normal_step_size;

    // MOVEMENT
    let delta_x = 0;
    let delta_y = 0;

    if(pressed_keys['arrowleft'] || pressed_keys['a']) {
        delta_x = -1;
    }
    if(pressed_keys['arrowright'] || pressed_keys['d']) {
        delta_x = 1;
    }
    if((pressed_keys['arrowleft'] || pressed_keys['a']) && (pressed_keys['arrowright'] || pressed_keys['d'])) {
        delta_x = 0;
    }

    if(pressed_keys['arrowup'] || pressed_keys['w']) {
        delta_y = -1;
    }
    if(pressed_keys['arrowdown'] || pressed_keys['s']) {
        delta_y = 1;
    }
    if((pressed_keys['arrowup'] || pressed_keys['w']) && (pressed_keys['arrowdown'] || pressed_keys['s'])) {
        delta_y = 0;
    }

    // NORMALIZE MOVEMENT
    const magnitude = Math.sqrt(delta_x * delta_x + delta_y * delta_y);
    if(magnitude !== 0) {
        delta_x /= magnitude;
        delta_y /= magnitude;
    }

    const new_pos_x = character.x + delta_x * character.step_size;
    const new_pos_y = character.y + delta_y * character.step_size;

    if(new_pos_x >= 0 && new_pos_x + character.width <= window_width) {
        character.x = new_pos_x;
    }
    if(new_pos_y >= 0 && new_pos_y + character.height <= window_height) {
        character.y = new_pos_y;
    }
}

function draw_character() {
    // DRAW CHARACTER
    if(pressed_keys['shift']) {
        ctx.globalAlpha = 0.6;
    }
    if(character.iframe_counter <= iframes) {
        ctx.globalAlpha = 0.25;
    }
    ctx.drawImage(character.sprite, character.x, character.y, character.width, character.height);
    ctx.globalAlpha = 1.0;

    ctx.drawImage(sprite_enemy_round_bullets[1], character.x + Math.ceil(character.width / 2 - 8), character.y + Math.ceil(character.height / 2 - 8));

    // SHOOTING
    if(character.is_shooting) {
        const player_bullet_sprite = character.is_ability_active ? sprite_player_bullets[1] : sprite_player_bullets[0];

        character.bullets.push(
            {
                sprite: player_bullet_sprite,
                width: player_bullet_sprite.width,
                height: player_bullet_sprite.height,
                x: character.x - Math.ceil(character.width / 2) + 4,
                y: character.y + Math.ceil(character.height / 3)
            },
            {
                sprite: player_bullet_sprite,
                width: player_bullet_sprite.width,
                height: player_bullet_sprite.height,
                x: character.x + Math.ceil(character.width / 2) * 2 - 4,
                y: character.y + Math.ceil(character.height / 3)
            }
        );

        if(character.is_ability_active) {
            character.bullets.push(
                {
                    sprite: player_bullet_sprite,
                    width: player_bullet_sprite.width,
                    height: player_bullet_sprite.height,
                    x: character.x - Math.ceil(character.width / 2) * 2.4 + 4,
                    y: character.y + Math.ceil(character.height / 3) * 3
                },
                {
                    sprite: player_bullet_sprite,
                    width: player_bullet_sprite.width,
                    height: player_bullet_sprite.height,
                    x: character.x + Math.ceil(character.width / 2) * 3.4 - 4,
                    y: character.y + Math.ceil(character.height / 3) * 3
                }
            );
        }
    }

    character.bullets.forEach(bullet => {
        // REMOVE OUT OF BOUND BULLETS
        if(bullet.y < -4) {
            character.bullets.splice(character.bullets.indexOf(bullet), 1);
        }
        else {
            // DRAW BULLETS
            bullet.y -= player_bullet_speed
            ctx.drawImage(bullet.sprite, bullet.x, bullet.y);
        }
    })
}

function draw_enemies() {
    // SPAWN ENEMIES
    for(let i = enemies_spawned; i < enemy_spawn_info.length && enemy_frame_counter <= enemy_spawn_info[i].frame; i++) { // test if 2nd cond needed
        if(enemy_frame_counter === enemy_spawn_info[i].frame) {
            enemies.push(enemy_spawn_info[i].enemy);
            enemies_spawned++;

            // SET INITIAL ATTRIBUTES FOR BOSS
            if(enemy_spawn_info[i].enemy instanceof boss) {
                enemies[0].atk_patterns = enemies[enemies.length - 1].phases[0].atk_patterns;
                enemies[0].path = enemies[0].phases[0].path;
            }
        }
    }

    // DRAW ENEMIES
    enemies.forEach(enemy => {
        if(enemy.type === 'strong' || enemy.type === 'boss') {
            is_major_enemy_alive = true;
        }

        // REMOVE OUT OF BOUND ENEMIES
        if((enemy.x < -50 || enemy.x > 650 || enemy.y > 850) && enemy.bullets.length === 0) {
            enemies.splice(enemies.indexOf(enemy), 1);
        }
        // REMOVE KILLED ENEMIES
        else if(enemy.health <= 0 && (enemy instanceof boss ? (enemy.phases.length !== 1) : true)) {
            enemies.splice(enemies.indexOf(enemy), 1);

            switch(enemy.type) {
                case 'weak':
                    kill_weak.play();
                    break;

                case 'moderate':
                    kill_moderate.play();
                    break;

                case 'strong':
                    kill_strong.play();
                    break;

                case 'boss':
                    kill_boss.play();
                    break;
            }

            character.score += enemy.score;
            character.damage += enemy.power_drop;
            if(!character.is_ability_active) {
                character.ability_level += enemy.ability_drop;
            }
            if(character.ability_level >= ability_cap && !ability_ready_sfx_played) {
                ability_ready.play();
                ability_ready_sfx_played = true;
            }
        }
        else {
            const player_hbox = { // 4x4
                x: character.x + (character.width / 2) - 2,
                y: character.y + (character.height / 2) - 2,
                width: 4,
                height: 4
            };

            // DRAW ENEMY SPRITE
            enemy.move();
            ctx.drawImage(enemy.sprite, enemy.x, enemy.y);

            // DETECT COLLISIONS
            enemies.forEach(enemy => {
                const enemy_hbox = { // 0.9
                    x: enemy.x + (enemy.width - enemy.width * 0.9) / 2,
                    y: enemy.y + (enemy.height - enemy.height * 0.9) / 2,
                    width: enemy.width * 0.9,
                    height: enemy.height * 0.9
                };

                // PLAYER COLLISION WITH ENEMY
                if(
                    enemy_hbox.x < player_hbox.x + player_hbox.width    &&
                    enemy_hbox.x + enemy_hbox.width > player_hbox.x     &&
                    enemy_hbox.y < player_hbox.y + player_hbox.height   &&
                    enemy_hbox.y + enemy_hbox.height > player_hbox.y
                ) {
                    hit(enemy);
                }

                // ENEMY COLLISION WITH PLAYER BULLETS
                character.bullets.forEach(bullet => {
                    const bullet_hbox = { // 0.75
                        x: bullet.x + (bullet.width - bullet.width * 0.75) / 2,
                        y: bullet.y + (bullet.height - bullet.height * 0.75) / 2,
                        width: bullet.width * 0.75,
                        height: bullet.height * 0.75
                    };

                    if(
                        bullet_hbox.x < enemy_hbox.x + enemy_hbox.width &&
                        bullet_hbox.x + bullet_hbox.width > enemy_hbox.x &&
                        bullet_hbox.y < enemy_hbox.y + enemy_hbox.height &&
                        bullet_hbox.y + bullet_hbox.height > enemy_hbox.y
                    ) {
                        enemy.health -= character.damage;
                        character.bullets.splice(character.bullets.indexOf(bullet), 1);
                    }
                })
            });

            // SWAP BOSS PHASES
            if(enemy instanceof boss) {
                if(enemy.health <= enemy.phases[0].health_limit && enemy.phases.length !== 1) {
                    phase.play();
                    enemy.phases = enemy.phases.splice(1);
                    enemy.bullets = [];
                    enemy.path = enemy.phases[0].path;
                    enemy.atk_patterns = enemy.phases[0].atk_patterns;
                    enemy.repeat_counter = 0;
                    enemy.pattern_counter = 0;

                    if(enemy.current_path_index !== undefined) {
                        enemy.current_path_index = 0;
                    }

                    character.ability_level += Math.ceil(ability_cap * 0.1);

                    // ACTIVATE DESPERATION PHASE
                    if(enemy.phases.length === 1) {
                        enemy.health = 1;
                    }
                }
            }

            // DRAW BULLETS
            enemy.bullets.forEach(bullet => {
                // REMOVE OUT OF BOUND BULLETS
                if((bullet.x < -45 || bullet.x > 645) || (bullet.y < -45 || bullet.y > 945)) {
                    enemy.bullets.splice(enemy.bullets.indexOf(bullet), 1);
                }

                const bullet_hbox = { // 0.75
                    x: bullet.x + (bullet.width - bullet.width * 0.75) / 2,
                    y: bullet.y + (bullet.height - bullet.height * 0.75) / 2,
                    width: bullet.width * 0.75,
                    height: bullet.height * 0.75
                };

                // COLLISION DETECTION WITH PLAYER
                if(
                    (bullet_hbox.x < player_hbox.x + player_hbox.width  &&
                    bullet_hbox.x + bullet_hbox.width > player_hbox.x   &&
                    bullet_hbox.y < player_hbox.y + player_hbox.height  &&
                    bullet_hbox.y + bullet_hbox.height > player_hbox.y)
                ) {
                    hit(bullet.owner);
                }
                // DRAW
                else {
                    bullet.behavior(bullet);
                    ctx.drawImage(bullet.sprite, bullet.x, bullet.y, bullet.width, bullet.height);
                }
            })

            // ATTACK
            const pattern = enemy.atk_patterns[enemy.pattern_counter];
            if(true_frame_counter % pattern.delay === 0 && !(enemy.x < 0 || enemy.x > 600)) {
                pattern.fire(enemy);

                // MULTIPLE PATTERNS
                if(enemy.atk_patterns.length > 1 && ++(enemy.repeat_counter) > pattern.repeat) {
                    enemy.repeat_counter = 0;

                    // OVERFLOW
                    if(enemy.atk_patterns.length - 1 === enemy.pattern_counter) {
                        enemy.pattern_counter = 0;
                    }
                    // NEXT PATTERN
                    else {
                        enemy.pattern_counter++;
                    }
                }
            }
        }
    })
}

function draw_hud() {
    ctx.fillStyle = 'white';

    // SCORE
    let score_x = canvas_width - ctx.measureText(character.score).width - 9;
    ctx.fillText(character.score, score_x, 30);
    ctx.fillText(character.health + (character.health === 5 ? "💖" : (character.health > 1 ? "❤️" : "💔")), canvas_width - 62, 60);

    // ABILITY BAR PROGRESS
    let used_ability_rnd_offset_x;
    let used_ability_rnd_offset_y;
    if(character.is_ability_active) {
        // SHAKING EFFECT
        used_ability_rnd_offset_x = Math.floor(Math.random() * 10 - 4);
        used_ability_rnd_offset_y = Math.floor(Math.random() * 10 - 4);

        if(character.ability_level === 1) {
            ability_exhausted.play();
            ability_ready_sfx_played = false;
            character.is_ability_active = false;
            character.damage /= ability_damage_multiplier;
        }
        else if(true_frame_counter % 6 === 0) {
            character.ability_level--;
        }
    }
    else {
        used_ability_rnd_offset_x = 0;
        used_ability_rnd_offset_y = 0;
    }

    const bar_width = sprite_ability_bar.width;
    const bar_height = sprite_ability_bar.height;

    ctx.beginPath();

    const filling_height = (Math.min(character.ability_level, ability_cap) / ability_cap) * bar_height;
    const filling_y = 70 + (bar_height - filling_height) + used_ability_rnd_offset_y;

    ctx.roundRect(canvas_width - 26 + used_ability_rnd_offset_x, filling_y, bar_width, filling_height, 5);

    let gradient = ctx.createLinearGradient(canvas_width - 26 + used_ability_rnd_offset_x, 70 + bar_height + used_ability_rnd_offset_y, canvas_width - 26 + bar_width, 70);
    gradient.addColorStop(0, '#a50000');
    gradient.addColorStop(0.25, '#c80000');
    gradient.addColorStop(0.50, '#d83e00');
    gradient.addColorStop(0.75, '#f67c00');
    gradient.addColorStop(1, '#ffe000');

    if(character.ability_level >= ability_cap) {
        if(ability_shine >= 100) {
            ability_shine = 2.7;
        }
        else {
            gradient.addColorStop(ability_shine / 100, 'white');
            ability_shine += 2.7;
        }
    }

    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.stroke();


    // ABILITY BAR SPRITE
    ctx.drawImage(sprite_ability_bar, canvas_width - 26 + used_ability_rnd_offset_x, 70 + used_ability_rnd_offset_y);


    // BOSS BAR SPRITE
    if(enemies[0] instanceof boss && enemies[0].phases.length !== 1) {
        const bar_width = sprite_boss_bar.width - 6;
        const bar_height = sprite_boss_bar.height - 8;

        // HEALTH PROGRESS
        const filling = enemies[0].health / enemies[0].max_health;

        ctx.beginPath();

        let gradient = ctx.createLinearGradient(300 - bar_width / 2 + 3, 24, 300 - bar_width / 2 + 3, 24 + bar_height);
        gradient.addColorStop(0, '#ff0000');
        gradient.addColorStop(1, '#d60000');

        ctx.fillStyle = gradient;
        ctx.fillRect(300 - bar_width / 2 + 3, 24, filling * bar_width, bar_height);
        ctx.fill();
        ctx.stroke();

        // BOSS BAR
        ctx.drawImage(sprite_boss_bar, 300 - bar_width / 2, 20);
    }
}

function init_game_over(game_over_text) {
    clearInterval(draw_interval);
    pressed_keys = {};

    let difficulty_text = difficulty_int_to_string(difficulty);

    character.score += Math.max(Math.round((difficulty ** 0.25) * (character.health - 1) * 60), 0);

    const placing = add_score(character.score, difficulty, true_frame_counter);

    let game_over_text_css_id;
    if(game_over_text === 'Game Over') {
        game_over_text_css_id = 'game_over_text_gameover'
    }
    else if(game_over_text === 'Clear') {
        game_over_text_css_id = 'game_over_text_clear'
    }

    let leaderboard_reset_popup =
        `<div class="game_over" id="game_over_overlay">
            <div class="game_over" id="game_over_popup">
                <p class="game_over" id="${game_over_text_css_id}">${game_over_text}</p>
                <p class="game_over" id="game_over_placing">You placed <span class="game_over_highlight">#${placing}</span> on the leaderboard</p>
                <p class="game_over"><span class="game_over_highlight">Score:</span> ${character.score}</p>
                <p class="game_over"><span class="game_over_highlight">Difficulty:</span> ${difficulty_text}</p>
                
                <p class="game_over menu_btn" id="game_over_btn_leaderboard">Open Leaderboard</p>
                
                <div class="game_over" id="game_over_footer">
                    <p class="game_over menu_btn" id="game_over_btn_menu">Menu</p>
                    <p class="game_over menu_btn" id="game_over_btn_restart">Restart</p>
                </div>
            </div>
        </div>`;

    const game_over_popup_elements = ['game_over_btn_leaderboard', 'game_over_btn_menu', 'game_over_btn_restart'];

    // REMOVE PREVIOUS ELEMENTS
    page.off('keydown.scr6');
    page.off('keyup.scr6');
    page.off('mousemove.scr6');
    page.off('mouseup.scr6');
    page.off('mousedown.scr6');
    page.off('ended.scr6');

    stop_music();

    // INIT WINDOW
    current_screen = 8;
    window_game.append(leaderboard_reset_popup);

    selected_button_index = 0;
    $('#' + game_over_popup_elements[selected_button_index]).addClass("menu_btn_selected");

    // MOUSE LISTENERS
    $('#game_over_btn_leaderboard').on('click', init_leaderboard);
    $('#game_over_btn_menu').on('click', init_menu);
    $('#game_over_btn_restart').on('click', function() {
        page.off('keydown.scr8');
        $('.game_over').remove();
        init_game();
    });

    // HOVER LISTENERS
    for(let i = 0; i < game_over_popup_elements.length; i++) {
        $(`#${game_over_popup_elements[i]}`).on('mouseenter', function() {
            select_menu_item(game_over_popup_elements, selected_button_index, i);
        });
    }

    // KEYBOARD LISTENERS
    page.on('keydown.scr8', function(event) {
        if(event.key === 'ArrowUp' || event.key.toLowerCase() === 'w') {
            if(selected_button_index !== 0) {
                select_menu_item(game_over_popup_elements, selected_button_index, 0);
            }
            else {
                invalid.play();
            }
        }
        if(event.key === 'ArrowDown' || event.key.toLowerCase() === 's') {
            if(selected_button_index === 0) {
                select_menu_item(game_over_popup_elements, selected_button_index, 1);
            }
            else {
                invalid.play();
            }
        }
        if(event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a') {
            if(selected_button_index === 2) {
                select_menu_item(game_over_popup_elements, selected_button_index, 1);
            }
            else {
                invalid.play();
            }
        }
        if(event.key === 'ArrowRight' || event.key.toLowerCase() === 'd') {
            if(selected_button_index === 1) {
                select_menu_item(game_over_popup_elements, selected_button_index, 2);
            }
            else {
                invalid.play();
            }
        }
        if(event.key === ' ' || event.key === 'Enter') {
            switch(selected_button_index) {
                case 0:
                    init_leaderboard();
                    break;

                case 1:
                    init_menu();
                    break;

                case 2:
                    page.off('keydown.scr8');
                    $('.game_over').remove();
                    init_game();
            }
        }
    });
}

function hit(enemy) {
    if(character.iframe_counter > iframes) {
        death.play();
        if(--character.health === 0) {
            init_game_over("Game Over");
        }

        character.iframe_counter = 0;

        // DESPERATION
        if(character.health === 1) {
            character.ability_level += 30 - difficulty * 5;
            character.damage += 3 - difficulty * 0.5;
        }
        else {
            character.ability_level += (4 - difficulty);
            character.damage += (1 - difficulty * 0.25);
        }

        if(enemy.type === 'weak') {
            enemies.splice(enemies.indexOf(enemy), 1);
        }
    }
}