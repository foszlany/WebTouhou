class enemy {
    constructor(sprite, x, y, type, health, score, power_drop, ability_drop, path = NO_PATH(), atk_patterns = [new atk_pattern(NO_PATTERN, 1, 200)]) {
        this.sprite = sprite;
        this.width = sprite.width;
        this.height = sprite.height;
        this.x = x;
        this.y = y;
        this.type = type;
        this.health = health;
        this.score = score;
        this.power_drop = power_drop;
        this.ability_drop = ability_drop;
        this.path = path;

        this.atk_patterns = atk_patterns;

        this.pattern_counter = 0;
        this.repeat_counter = 0;

        this.bullets = [];
    }

    move() {
        this.path(this);
    }
}

class boss extends enemy {
    constructor(enemy_template, phases) {
        super(
            enemy_template.sprite,
            enemy_template.x,
            enemy_template.y,
            enemy_template.type,
            enemy_template.health,
            enemy_template.score,
            enemy_template.power_drop,
            enemy_template.ability_drop,
            enemy_template.path,
        );
        this.max_health = enemy_template.health;
        this.phases = phases;
        this.desperation_frame_count = 0; // is this even used?
    }
}