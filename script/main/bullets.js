class bullet {
    constructor(sprite, x, y, size_multiplier, dx, dy, speed, bullet_behavior, owner = undefined) {
        this.sprite = sprite;
        this.width = sprite.width * size_multiplier;
        this.height = sprite.height * size_multiplier;
        this.x = x;
        this.y = y;
        this.vx = dx * speed;
        this.vy = dy * speed;
        this.behavior = bullet_behavior;
        this.owner = owner;
    }

    move() {
        this.behavior(this);
    }
}

// NO BEHAVIOR DEFINED
function NO_BEHAVIOR() {
    return function(bullet) {}
}

// DEFINES LINEAR MOVEMENT
function LINEAR_MOVEMENT() {
    return function(bullet) {
        // MOVE
        bullet.x += bullet.vx;
        bullet.y += bullet.vy;
    }
}

/*
*   DEFINES ONE DIRECTIONAL ACCELERATED MOVEMENT
*
*   accel_rate: RATE OF ACCELERATION
*/
function ACCELERATED_LINEAR_MOVEMENT(accel_rate = 1.005) {
    return function(bullet) {
        // UPDATE VELOCITY
        bullet.vx *= accel_rate;
        bullet.vy *= accel_rate;

        // MOVE
        bullet.x += bullet.vx;
        bullet.y += bullet.vy;
    }
}

/*
*   DEFINES ARCHED MOVEMENT
*
*   arch_rate: ADDED ROTATION PER FRAME
*   accel_rate: RATE OF ACCELERATION
*/
function ARCHED_MOVEMENT(arch_rate = Math.PI / 100, accel_rate = 1.005) {
    return function(bullet) {
        // CURRENT DIRECTION
        let angle = Math.atan2(bullet.vy, bullet.vx);
        angle += arch_rate;

        // UPDATE VELOCITY
        let speed = Math.sqrt(bullet.vx * bullet.vx + bullet.vy * bullet.vy);
        bullet.vx = Math.cos(angle) * speed * accel_rate;
        bullet.vy = Math.sin(angle) * speed * accel_rate;

        // MOVE
        bullet.x += bullet.vx;
        bullet.y += bullet.vy;
    };
}

/*
*   DEFINES ARCHED MOVEMENT TOWARDS THE PLAYER
*
*   arch_rate: ADDED ROTATION PER FRAME
*   accuracy: ACCURACY OF THE BULLET (HOW CLOSE IT MAY GET TO THE PLAYER)
*   linear_threshold: Y DISTANCE BETWEEN THE PLAYER AND BULLET THAT DEFINES WHEN THE BULLET SHOULD SWITCH TO LINEAR MOVEMENT
*   accel_rate: RATE OF ACCELERATION
*   critical_accel_threshold: DEFINES CRITICAL AREA AROUND THE PLAYER WHERE BULLETS HAVE A DIFFERENT ACCELERATION RATE
*   critical_accel_rate: RATE OF ACCELERATION IN THE CRITICAL AREA
*   critical_accuracy: ACCURACY IN THE CRITICAL AREA
*/
function FOLLOWING_ARCHED_MOVEMENT(arch_rate = Math.PI / 100, accuracy = 0.5, linear_threshold = 15, accel_rate = 1.005, critical_accel_threshold = 0, critical_accel_rate = 0, critical_accuracy = 0) {
    // NORMALIZE ANGLE TO AVOID JUMPS
    function normalize_angle(angle) {
        while(angle > Math.PI) {
            angle -= 2 * Math.PI;
        }
        while(angle < -Math.PI) {
            angle += 2 * Math.PI;
        }
        return angle;
    }

    return function(bullet) {
        // CHARACTER INFO
        let vertical_distance = Math.abs((character.y + character.height / 2) - bullet.y);
        let horizontal_distance = Math.abs((character.x + character.width / 2) - bullet.x);
        let character_angle = Math.atan2((character.y + character.height / 2) - bullet.y, (character.x + character.width / 2) - bullet.x);

        // SWITCH TO LINEAR MOVEMENT
        if(vertical_distance < linear_threshold) {
            bullet.behavior = LINEAR_MOVEMENT();
            return;
        }

        // PROPERTIES
        let is_critical = horizontal_distance < critical_accel_threshold && vertical_distance < critical_accel_threshold;
        let speed = Math.sqrt(bullet.vx * bullet.vx + bullet.vy * bullet.vy);

        // CALCULATE ANGLE
        let current_bullet_angle = Math.atan2(bullet.vy, bullet.vx);
        let angle_diff = normalize_angle(character_angle - current_bullet_angle);
        let bullet_accuracy = is_critical ? critical_accuracy : accuracy;
        let bullet_angle = current_bullet_angle + angle_diff * bullet_accuracy + arch_rate;

        // CALCULATE VELOCITY
        let acceleration = is_critical ? critical_accel_rate : accel_rate;
        bullet.vx = Math.cos(bullet_angle) * speed * acceleration;
        bullet.vy = Math.sin(bullet_angle) * speed * acceleration;

        // MOVE BULLET
        bullet.x += bullet.vx;
        bullet.y += bullet.vy;
    };
}

/*
*   SPAWNS A BULLET THAT SPLITS OVERTIME
*
*   initial_movement: INITIAL MOVEMENT PATTERN
*   split_delay: DELAY UNTIL SPLIT
*   arc_attack: DEFINES THE SPLIT FUNCTION (OBJECT THAT HOLDS ALL ARGUMENTS FOR AN ARC_ATTACK FUNCTION)
*/
function SPLIT_ATTACK(initial_movement = LINEAR_MOVEMENT(), split_delay = 50, arc_attack = {sprite: sprite_enemy_round_bullets[5], direction: Math.PI / 2, speed: 4, size_multiplier: 1, behavior: LINEAR_MOVEMENT(), n: 8, bullet_distance: Math.PI / 4, max_random_direction: 0}) {
    function ARC_ATTACK_XY(enemy, x = 0, y = 0) {
        return function(enemy) {
            // CALCULATE RANDOMIZED DIRECTION
            if(arc_attack.max_random_direction !== 0) {
                arc_attack.direction += Math.random() * (2 * arc_attack.max_random_direction) - arc_attack.max_random_direction;
            }

            // ARC ATTACK
            for(let i = 0; i < arc_attack.n; i++) {
                let dx = Math.cos(arc_attack.direction + i * arc_attack.bullet_distance);
                let dy = Math.sin(arc_attack.direction + i * arc_attack.bullet_distance);

                // NORMALIZE
                const magnitude = Math.sqrt(dx * dx + dy * dy);
                dx /= magnitude;
                dy /= magnitude;

                enemy.bullets.push(new bullet(
                    arc_attack.sprite,
                    x,
                    y,
                    arc_attack.size_multiplier,
                    dx,
                    dy,
                    arc_attack.speed,
                    arc_attack.behavior,
                    enemy
                ));
            }
        }
    }

    return function(bullet) {
        if(bullet.frame_counter === undefined) {
            bullet.frame_counter = 0;
        }

        // SPLIT
        if(bullet.frame_counter === split_delay) {
            const split = new atk_pattern(
                ARC_ATTACK_XY(bullet.owner, bullet.x, bullet.y),
                0,
                1
            )
            split.fire(bullet.owner);

            bullet.y = -1000;
        }
        else {
            bullet.frame_counter++;
            return initial_movement(bullet);
        }
    }
}