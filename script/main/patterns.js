class atk_pattern {
    constructor(pattern, repeat, delay) {
        this.pattern = pattern;
        this.repeat = repeat;
        this.delay = delay;
    }

    fire(enemy) {
        this.pattern(enemy);
    }
}


/*
*    ANGLE CHEAT SHEET
*
*    UP: 3 * Math.PI / 2
*    LEFT: Math.PI
*    RIGHT: 0
*    DOWN: Math.PI / 2
*
*    45DEG UP-RIGHT: 5 * Math.PI / 4
*    45DEG UP-LEFT: 7 * Math.PI / 4
*    45DEG DOWN-RIGHT: 3 * Math.PI / 4
*    45DEG DOWN-LEFT: Math.PI / 4
*/

// CALCULATES ANGLE TOWARDS PLAYER (WHEN DIRECTION IS -1)
function get_player_direction(enemy, sprite) {
    let dx = character.x - (enemy.x + enemy.width / 2 - sprite.width / 2);
    let dy = character.y - (enemy.y + enemy.height / 2 - sprite.height / 2);

    return {dx: dx, dy: dy};
}


/*
*   UNDEFINED PATTERN
*
*   USE WITH REPEAT > 0
*   USEFUL WHEN INTRODUCING LARGER DELAYS BETWEEN PATTERNS
*/
function NO_PATTERN() {
    return function(enemy) {};
}

/*
*   SINGULAR ONE DIRECTIONAL ATTACK
*
*   sprite: SPRITE OF THE BULLET
*   direction: INITIAL DIRECTION OF THE BULLET, -1 IS SENT TOWARDS THE PLAYER
*   speed: INITIAL SPEED OF THE BULLET
*   size_multiplier: SPRITE SIZE MULTIPLIER
*   behavior: FUNCTION, DEFINES THE MOVING BEHAVIOR OF THE BULLET
*   deviation: DEFINES A RANDOM DEVIATION FROM DIRECTION
*/
function LINEAR_SHOOT(sprite = sprite_enemy_round_bullets[4], direction = Math.PI / 2, speed = 4, size_multiplier = 1, behavior = LINEAR_MOVEMENT(), deviation = 0) {
    return function(enemy) {
        let dx;
        let dy;

        if(direction === -1) { // PLAYER DIRECTION
            const vec = get_player_direction(enemy, sprite);
            dx = vec.dx;
            dy = vec.dy;

            // RANDOMIZE DIRECTION IF NECESSARY
            if(deviation !== 0) {
                const angle = (Math.random() - 0.5) * deviation;
                const cos_angle = Math.cos(angle);
                const sin_angle = Math.sin(angle);

                const randomized_dx = dx * cos_angle - dy * sin_angle;
                const randomized_dy = dx * sin_angle + dy * cos_angle;

                dx = randomized_dx;
                dy = randomized_dy;
            }
        }
        else { // DEFINED DIRECTION
            if(deviation !== 0) {
                direction += (Math.random() / 2) * deviation;
            }

            dx = Math.cos(direction);
            dy = Math.sin(direction);
        }

        // NORMALIZE
        const magnitude = Math.sqrt(dx * dx + dy * dy);
        dx /= magnitude;
        dy /= magnitude;

        enemy.bullets.push(new bullet(
            sprite,
            enemy.x + enemy.width / 2 - sprite.width / 2,
            enemy.y + enemy.height / 2 - sprite.height / 2,
            size_multiplier,
            dx,
            dy,
            speed,
            behavior,
            enemy
        ));
    }
}

/*
*   SPAWNS AN ARC OF BULLETS
*
*   sprite: SPRITE OF THE BULLET
*   direction: INITIAL DIRECTION OF THE BULLET
*   speed: INITIAL SPEED OF THE BULLET
*   size_multiplier: SPRITE SIZE MULTIPLIER
*   behavior: FUNCTION, DEFINES THE MOVING BEHAVIOR OF THE BULLET
*   n: AMOUNT OF BULLETS SPAWNED
*   bullet_distance: DISTANCE BETWEEN BULLETS
*   max_random_direction: DEFINES A MAXIMAL RANDOM DEVIATION FROM ORIGINAL DIRECTION
*/
function ARC_ATTACK(sprite = sprite_enemy_round_bullets[5], direction = Math.PI / 2, speed = 4, size_multiplier = 1, behavior = LINEAR_MOVEMENT(), n = 8, bullet_distance = Math.PI / 4, max_random_direction = 0) {
    return function(enemy) {
        // RANDOMIZE DIRECTION IF NECESSARY
        if(max_random_direction !== 0) {
            direction += Math.random() * (2 * max_random_direction) - max_random_direction;
        }

        // SPAWN ARC
        for(let i = 0; i < n; i++) {
            let dx = Math.cos(direction + i * bullet_distance);
            let dy = Math.sin(direction + i * bullet_distance);

            // NORMALIZE
            const magnitude = Math.sqrt(dx * dx + dy * dy);
            dx /= magnitude;
            dy /= magnitude;

            enemy.bullets.push(new bullet(
                sprite,
                enemy.x + enemy.width / 2 - sprite.width / 2,
                enemy.y + enemy.height / 2 - sprite.height / 2,
                size_multiplier,
                dx,
                dy,
                speed,
                behavior,
                enemy
            ));
        }
    }
}


/*
*   SPAWNS A WAVE OF BULLETS IN A SPIRAL, MUST USE WITH REPEAT > 0
*
*   sprite: SPRITE OF THE BULLET
*   direction: INITIAL DIRECTION OF THE BULLET
*   offset: ADDED DIRECTION AFTER EACH FRAME
*   speed: INITIAL SPEED OF THE BULLET
*   size_multiplier: SPRITE SIZE MULTIPLIER
*   behavior: FUNCTION, DEFINES THE MOVING BEHAVIOR OF THE BULLET
*   n: AMOUNT OF BULLETS SPAWNED
*   bullet_distance: DISTANCE BETWEEN BULLETS
*   max_random_direction: DEFINES A MAXIMAL RANDOM DEVIATION FROM ORIGINAL DIRECTION
*/
function SPIRAL_ATTACK(sprite = sprite_enemy_round_bullets[5], direction = Math.PI / 2, offset = Math.PI / 16, speed = 4, size_multiplier = 1, behavior = LINEAR_MOVEMENT(), n = 1, bullet_distance = Math.PI / 4, max_random_direction = 0) {
    let repeat_counter = 0;

    return function(enemy) {
        const arc = ARC_ATTACK(sprite, direction + repeat_counter * offset, speed, size_multiplier, behavior, n, bullet_distance, max_random_direction);
        repeat_counter++;

        arc(enemy);
    }
}


/*
*   SPAWNS A BULLET WITH A RANDOM DIRECTION
*
*   sprite: SPRITE OF THE BULLET (IF AN ARRAY IS GIVEN, IT WILL PICK A RANDOM SPRITE FOR EACH BULLET)
*   speed: INITIAL SPEED OF THE BULLET
*   size_multiplier: SPRITE SIZE MULTIPLIER
*   behavior: FUNCTION, DEFINES THE MOVING BEHAVIOR OF THE BULLET
*   n: AMOUNT OF BULLETS SPAWNED
*/
function RAND_ATTACK(sprite = sprite_enemy_round_bullets[6], speed = 4, size_multiplier = 1, behavior = LINEAR_MOVEMENT(), n = 3) {
    const sprite_copy = sprite; // not necessary

    return function(enemy) {
        for(let i = 0; i < n; i++) {
            // RANDOMIZE SPRITE IF NECESSARY
            if(sprite_copy instanceof Array) {
                const rnd_index = Math.round(Math.random() * 7)
                sprite = sprite_copy[rnd_index];
            }

            const shoot = LINEAR_SHOOT(sprite, Math.random() * 2 * Math.PI, speed, size_multiplier, behavior);
            shoot(enemy);
        }
    }
}



/* ############ SPECIAL PATHS ############ */

// CHANGES ENEMY PATH TO SHAKY
function CHANGE_TO_SHAKY_PATH() {
    return function(enemy) {
        enemy.path = SHAKY_MOTION(15, 15);
    }
}

// FINISH DESPERATION PHASE FOR BOSSES
function FINISH_DESPERATION() {
    return function(enemy) {
        kill_boss.play();
        character.score += enemy.score;
        enemies = [];

        init_game_over("Clear");
    }
}