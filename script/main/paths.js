// NO PATH DEFINED
function NO_PATH() {
    return function(enemy) {}
}

/*
*   DEFINES A SHAKY RANDOM MOTION
*
*   n: CONFINEMENT AREA
*   max_random: MAXIMUM AMOUNT OF RANDOM MOTION APPLIED TO ENEMY
*/
function SHAKY_MOTION(n = 12, max_random = 6) {
    return function(enemy) {
        if(enemy.shaky_center_x === undefined) {
            enemy.shaky_center_x = enemy.x + enemy.sprite.width / 2;
            enemy.shaky_center_y = enemy.y + enemy.sprite.height / 2;

            enemy.shaky_min_x = enemy.shaky_center_x - n / 2 - enemy.sprite.width / 2;
            enemy.shaky_max_x = enemy.shaky_center_x + n / 2 - enemy.sprite.width / 2;
            enemy.shaky_min_y = enemy.shaky_center_y - n / 2 - enemy.sprite.height / 2;
            enemy.shaky_max_y = enemy.shaky_center_y + n / 2 - enemy.sprite.height / 2;
        }

        // RANDOM OFFSET
        const rnd_x = (Math.random() - 0.5) * 2 * max_random;
        const rnd_y = (Math.random() - 0.5) * 2 * max_random;

        // MOVE
        enemy.x = Math.min(Math.max(enemy.x + rnd_x, enemy.shaky_min_x), enemy.shaky_max_x);
        enemy.y = Math.min(Math.max(enemy.y + rnd_y, enemy.shaky_min_y), enemy.shaky_max_y);
    };
}


/*
*   DEFINES A ONE WAY PATH AT CONSTANT SPEED
*
*   direction: DIRECTION OF THE ENEMY
*   speed: SPEED OF THE ENEMY
*/
function LINEAR_PATH(direction = 'R', speed = 4) {
    return function(enemy) {
        switch(direction) {
            case 'R':
                enemy.x += speed;
                break;
            case 'L':
                enemy.x -= speed;
                break;
            case 'D':
                enemy.y += speed;
        }
    }
}


/*
*   DEFINES AN EASE PATH
*
*   x: X COORDINATE (UNDEFINED DEFAULTS TO ENEMY.X)
*   y: Y COORDINATE (UNDEFINED DEFAULTS TO ENEMY.Y)
*   ease_type: DEFINES WHETHER THE PATH SHOULD BE EASE-IN (0, MAY NOT WORK PROPERLY) OR EASE-OUT (1)
*   speed: SPEED OF THE ENEMY
*   part_of_complex: DETERMINES WHETHER PATH IS PART OF A COMPLEX PATH
*/
function EASE_PATH(x = undefined, y = undefined, ease_type = 1, speed = 4, part_of_complex = false) {
    return function(enemy) {
        // DEFAULT TO ENEMY AXIS
        if(x === undefined) {
            x = enemy.x;
        }
        if(y === undefined) {
            y = enemy.y;
        }

        let dx = x - enemy.x;
        let dy = y - enemy.y;

        if(enemy.initial_distance === undefined) {
            enemy.initial_distance = Math.sqrt(dx * dx + dy * dy);
        }

        let remaining_distance = Math.sqrt(dx * dx + dy * dy);
        let adjusted_speed;

        if(ease_type === 0) { // EASE IN
            adjusted_speed = speed + (speed * ((enemy.initial_distance - remaining_distance) / enemy.initial_distance));
            if(adjusted_speed > enemy.initial_distance && !part_of_complex) {
                enemy.path = NO_PATH();
            }
            else {
                let angle = Math.atan2(dy, dx);
                enemy.x += Math.cos(angle) * adjusted_speed;
                enemy.y += Math.sin(angle) * adjusted_speed;
            }
        }
        else { // EASE OUT
            adjusted_speed = speed * (remaining_distance / enemy.initial_distance);
            if(adjusted_speed < 0.1 && !part_of_complex) {
                enemy.path = NO_PATH();
            }
            else {
                let angle = Math.atan2(dy, dx);
                enemy.x += Math.cos(angle) * adjusted_speed;
                enemy.y += Math.sin(angle) * adjusted_speed;
            }
        }
    };
}


/*
*   DEFINES A ONE WAY PATH AT RANDOMIZED SPEED
*
*   direction: DIRECTION OF THE ENEMY
*   max_speed: MAXIMUM SPEED
*   min_speed: MINIMUM SPEED
*   step_size: MAXIMUM STEP SIZE BETWEEN CURRENT AND NEXT SPEED VALUE
*/
function RANDSPEED_PATH(direction = 'R', default_speed = 3, min_speed = 3, max_speed = 4, step = 0.1) {
    return function(enemy) {
        if(enemy.current_speed === undefined) {
            enemy.current_speed = default_speed;
        }

        const current_step = (Math.random() - 0.5) * step;
        enemy.current_speed += current_step;

        if(current_step < 0) {
            enemy.current_speed = Math.max(enemy.current_speed, min_speed);
        }
        if(current_step > 0) {
            enemy.current_speed = Math.min(enemy.current_speed, max_speed);
        }

        switch(direction) {
            case 'R':
                enemy.x += enemy.current_speed;
                break;
            case 'L':
                enemy.x -= enemy.current_speed;
                break;
            case 'D':
                enemy.y += enemy.current_speed;
        }
    }
}

/*
*   DEFINES A ONE WAY JITTERY PATH
*
*   direction: DIRECTION OF THE ENEMY
*   speed: SPEED OF THE ENEMY
*   jitter_speed: AMOUNT OF JITTER APPLIED TO EITHER DIRECTION ALONG ONE AXIS
*   jitter_chance: CHANCE OF JITTER PER FRAME
*/
function JITTERY_PATH(direction = 'R', speed = 4, jitter_speed = speed, jitter_chance = 0.2) {
    return function(enemy) {
        switch(direction) {
            case 'R':
                enemy.x += speed;
                if(Math.random() < jitter_chance) {
                    if(Math.random() < 0.5) {
                        enemy.y += jitter_speed;
                    }
                    else {
                        enemy.y -= jitter_speed;
                    }
                }
                break;

            case 'L':
                enemy.x -= speed;
                if(Math.random() < jitter_chance) {
                    if(Math.random() < 0.5) {
                        enemy.y += jitter_speed;
                    }
                    else {
                        enemy.y -= jitter_speed;
                    }
                }
                break;

            case 'D':
                enemy.y += speed;
                if(Math.random() < jitter_chance) {
                    if(Math.random() < 0.5) {
                        enemy.x += jitter_speed;
                    }
                    else {
                        enemy.y -= jitter_speed;
                    }
                }
        }
    }
}

/*
*   DEFINES A BEZIER PATH
*
*   speed: SPEED OF THE ENEMY
*   repeat: DEFINES WHETHER THE PATH SHOULD BE REPEATED (BACK AND FORTH)
*   points: ARRAY OF POINTS THAT DEFINE THE CURVE
*/
function BEZIER_PATH(speed=0.005, repeat=false, points=[{ x: -20, y: 100 }, { x: 300, y: 250 }, { x: window_width + 55, y: 45 }]) {
    let t = 0;

    return function(enemy) {
        let points_copy = [...points];

        while(points_copy.length !== 1) {
            const interpolated_points = [];
            for(let i = 0; i < points_copy.length - 1; i++) {
                interpolated_points.push({
                    x: (1 - t) * points_copy[i].x + t * points_copy[i + 1].x,
                    y: (1 - t) * points_copy[i].y + t * points_copy[i + 1].y
                });
            }
            points_copy = interpolated_points;
        }

        enemy.x = points_copy[0].x;
        enemy.y = points_copy[0].y;

        t += speed;

        // REPEAT
        if(repeat && t >= 1) {
            points.reverse();
            t = 0;
        }
    };
}

/*
*   CONTROLS A LOOP OF RANDOMIZED 3-POINT BEZIER PATHS
*
*   CHARACTER MAY GET STUCK IN ONE POSITION (PLEASE FIX)
*
*   min_speed: MINIMUM SPEED
*   max_speed: MAXIMUM SPEED
*   x_min: MINIMUM X COORDINATE
*   x_max: MAXIMUM X COORDINATE
*   y_min: MINIMUM Y COORDINATE
*   y_max: MAXIMUM Y COORDINATE
*   epsilon: THRESHOLD THAT ALLOWS THE NEXT PATH TO TAKE OVER
*/
function RAND_BEZIER(min_speed = 0.002, max_speed = 0.005, x_min = 50, x_max = 550, y_min = 50, y_max = 550, epsilon = 1) {
    function CREATE_RAND_BEZIER_PATH(enemy) {
        let rnd_points = [];
        for(let i = 0; i < 3; i++) {
            rnd_points.push({
                x: Math.random() * (x_max - x_min) + x_min,
                y: Math.random() * (y_max - y_min) + y_min,
            })
        }

        const rnd_speed = Math.random() * (max_speed - min_speed) + min_speed;

        const points = [
            { x: enemy.rnd_bezier_path === undefined ? enemy.x : enemy.rnd_bezier_points[2].x, y: enemy.rnd_bezier_path === undefined ? enemy.y : enemy.rnd_bezier_points[2].y },
            { x: rnd_points[1].x, y: rnd_points[1].y },
            { x: rnd_points[2].x, y: rnd_points[2].y },
        ]
        enemy.rnd_bezier_points = points;

        enemy.rnd_bezier_path = new BEZIER_PATH(
            rnd_speed,
            false,
            points
        );
    }

    return function(enemy) {
        if(enemy.rnd_bezier_path === undefined) {
            CREATE_RAND_BEZIER_PATH(enemy);
        }
        else {
            const distance = Math.sqrt(Math.pow(enemy.x - enemy.rnd_bezier_points[2].x, 2) + Math.pow(enemy.y - enemy.rnd_bezier_points[2].y, 2));
            // PATH COMPLETED
            if(distance < epsilon) {
                CREATE_RAND_BEZIER_PATH(enemy);
            }
            // PATH GOES OUT OF BOUNDS, CREATE NEW
            else if(enemy.x < x_min || enemy.x > x_max || enemy.y < y_min || enemy.y > y_max) {
                enemy.rnd_bezier_path = undefined;
                CREATE_RAND_BEZIER_PATH(enemy);
            }
        }

        enemy.rnd_bezier_path(enemy);
    }
}

/*
*   DEFINES A COMPLEX PATH
*
*   ONCE A PATH IS COMPLETE, THE NEXT ONE WILL TAKE OVER
*   UNUSABLE WITH BEZIER_PATH, USE RAND_BEZIER_PATH INSTEAD
*
*   paths: ARRAY OF PATHS
*   end_points: ARRAY OF POINTS THAT DEFINE THE END POINTS OF EACH PATH (x, y, epsilon)
*   repeat: DEFINES THE PATH INDEX FROM WHICH REPEAT SHOULD OCCUR (FROM THE BEGINNING, -1 FOR NO REPEAT)
*   const_epsilon: USED WHEN EPSILON IS UNDEFINED IN AN end_points ELEMENT
*/
function COMPLEX_PATH(paths, end_points, repeat = -1, const_epsilon = 10) {
    const repeating_paths = paths.slice(repeat);

    return function(enemy) {
        if(enemy.current_path_index === undefined) {
            enemy.current_path_index = 0;
        }

        const epsilon = end_points[enemy.current_path_index].epsilon === undefined ? const_epsilon : end_points[enemy.current_path_index].epsilon;


        if(Math.abs(end_points[enemy.current_path_index].x - enemy.x) < epsilon && Math.abs(end_points[enemy.current_path_index].y - enemy.y) < epsilon) { // CHANGE PATH
            // OUT OF BOUNDS
            if(++enemy.current_path_index === paths.length) {

                if(repeat === -1) { // DEFAULT TO NO PATH IF NO REPEAT
                    enemy.path = NO_PATH();
                }
                else { // BACK TO REPEAT INDEX
                    enemy.current_path_index = repeat;
                    if(repeat !== 0) {
                        enemy.paths = COMPLEX_PATH(repeating_paths, end_points, 0, const_epsilon);
                    }
                }
            }
        }
        else { // STAY ON CURRENT PATH
            return paths[enemy.current_path_index](enemy);
        }
    }
}