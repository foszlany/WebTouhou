let enemy_spawns_easy;
let enemy_spawns_normal;
let enemy_spawns_hard;
let enemy_spawns_lunatic;


/* ######################### EASY ######################### */
function define_enemy_spawn_info_easy() {
    enemy_spawns_easy = [
        {
            frame: 10,
            enemy: new enemy(
                sprite_minor_enemies[1],
                -30,
                100,
                'weak',
                45,
                5,
                0.2,
                1,
                LINEAR_PATH('R', 2),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(),
                        0,
                        40
                    ),
                ]
            )
        },
        {
            frame: 10,
            enemy: new enemy(
                sprite_minor_enemies[1],
                window_width + 30,
                100,
                'weak',
                45,
                5,
                0.25,
                1,
                LINEAR_PATH('L', 2),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(),
                        0,
                        40
                    )
                ]
            )
        },

        {
            frame: 370,
            enemy: new enemy(
                sprite_minor_enemies[3],
                -30,
                0,
                'weak',
                60,
                5,
                0.25,
                1,
                BEZIER_PATH(
                    0.003,
                    false,
                    [
                        { x: -20, y: 200 },
                        { x: 300, y: 350 },
                        { x: window_width + 35, y: 45 }
                    ]
                ),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[2]),
                        0,
                        40
                    )
                ]
            )
        },
        {
            frame: 370,
            enemy: new enemy(
                sprite_minor_enemies[3],
                -30,
                0,
                'weak',
                60,
                5,
                0.25,
                1,
                BEZIER_PATH(
                    0.003,
                    false,
                    [
                        { x: window_width + 20, y: 45 },
                        { x: 300, y: 250 },
                        { x: -20, y: 200 }
                    ]
                ),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[2]),
                        0,
                        40
                    )
                ]
            )
        },

        {
            frame: 700,
            enemy: new enemy(
                sprite_minor_enemies[4],
                -30,
                0,
                'weak',
                50,
                5,
                0.25,
                1,
                BEZIER_PATH(
                    0.004,
                    false,
                    [
                        { x: window_width + 30, y: 350 },
                        { x: window_width - 150, y: 200 },
                        { x: window_width + 30, y: 100 },
                    ]
                ),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[3], -1),
                        0,
                        40
                    )
                ]
            )
        },
        {
            frame: 700,
            enemy: new enemy(
                sprite_minor_enemies[4],
                -30,
                0,
                'weak',
                50,
                5,
                0.25,
                1,
                BEZIER_PATH(
                    0.004,
                    false,
                    [
                        { x: -30, y: 350 },
                        { x: 150, y: 200 },
                        { x: -30, y: 100 },
                    ]
                ),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[3], -1),
                        0,
                        40
                    )
                ]
            )
        },

        /* MAJOR */
        {
            frame: 1000,
            enemy: new enemy(
                sprite_major_enemies[0],
                window_width / 2 - sprite_major_enemies[0].width / 2,
                -30,
                'strong',
                1350,
                50,
                1.25,
                10,
                EASE_PATH(undefined, 200),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        15
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_large_round_bullets[3], -1, 3),
                        1,
                        15
                    ),
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        15
                    ),
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_star_bullets[7], Math.PI / 2, 6, 1, LINEAR_MOVEMENT(), 8, Math.PI / 4),
                        0,
                        25
                    )
                ]
            )
        },
        /* MAJOR */

        {
            frame: 1050,
            enemy: new enemy(
                sprite_minor_enemies[1],
                -30,
                160,
                'weak',
                260,
                4,
                0.25,
                1,
                LINEAR_PATH('R', 3.2),
                [
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_round_bullets[1]),
                        0,
                        55
                    ),
                ]
            )
        },
        {
            frame: 1050,
            enemy: new enemy(
                sprite_minor_enemies[1],
                window_width + 30,
                100,
                'weak',
                260,
                4,
                0.25,
                1,
                LINEAR_PATH('L', 3.2),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[1], 3 * Math.PI / 4),
                        0,
                        55
                    ),
                ]
            )
        },

        {
            frame: 1270,
            enemy: new enemy(
                sprite_minor_enemies[3],
                -30,
                0,
                'weak',
                240,
                4,
                0.25,
                1,
                BEZIER_PATH(
                    0.003,
                    false,
                    [
                        { x: -20, y: 100 },
                        { x: 300, y: 300 },
                        { x: window_width + 20, y: 100 },
                    ]
                ),
                [
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_round_bullets[6], 3, 1, ACCELERATED_LINEAR_MOVEMENT()),
                        0,
                        45
                    )
                ]
            )
        },
        {
            frame: 1270,
            enemy: new enemy(
                sprite_minor_enemies[3],
                -30,
                0,
                'weak',
                240,
                4,
                0.25,
                1,
                BEZIER_PATH(
                    0.003,
                    false,
                    [
                        { x: window_width + 20, y: 100 },
                        { x: 300, y: 200 },
                        { x: -20, y: 100 }
                    ]
                ),
                [
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_round_bullets[6], 3, 1, ACCELERATED_LINEAR_MOVEMENT()),
                        0,
                        45
                    )
                ]
            )
        },
        {
            frame: 1270,
            enemy: new enemy(
                sprite_minor_enemies[3],
                -30,
                0,
                'weak',
                240,
                4,
                0.25,
                1,
                BEZIER_PATH(
                    0.003,
                    false,
                    [
                        { x: -20, y: 300 },
                        { x: 300, y: 100 },
                        { x: window_width + 20, y: 300},
                    ]
                ),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[6], Math.PI / 2, 4, 1, LINEAR_MOVEMENT()),
                        0,
                        45
                    )
                ]
            )
        },
        {
            frame: 1270,
            enemy: new enemy(
                sprite_minor_enemies[3],
                -30,
                0,
                'weak',
                240,
                4,
                0.25,
                1,
                BEZIER_PATH(
                    0.003,
                    false,
                    [
                        { x: window_width + 20, y: 300},
                        { x: 300, y: 200 },
                        { x: -20, y: 300 }
                    ]
                ),
                [
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_round_bullets[6], 3, 1, ACCELERATED_LINEAR_MOVEMENT()),
                        0,
                        45
                    )
                ]
            )
        },

        {
            frame: 1650,
            enemy: new enemy(
                sprite_glowy_enemies[0],
                -30,
                0,
                'moderate',
                1250,
                15,
                0.75,
                3,
                BEZIER_PATH(
                    0.003,
                    true,
                    [
                        { x: window_width + 20, y: 320},
                        { x: 300, y: 100 },
                        { x: -20, y: 300 },
                        { x: 300, y: 500 },
                        { x: window_width + 20, y: 320},
                    ]
                ),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_sparkle_bullets[5], -1, 3, 1, LINEAR_MOVEMENT()),
                        0,
                        40
                    )
                ]
            )
        },
        {
            frame: 1650,
            enemy: new enemy(
                sprite_glowy_enemies[1],
                -30,
                0,
                'moderate',
                1250,
                15,
                0.75,
                3,
                BEZIER_PATH(
                    0.003,
                    true,
                    [
                        { x: -20, y: 300 },
                        { x: 300, y: 100 },
                        { x: window_width + 20, y: 320},
                        { x: 300, y: 500 },
                        { x: -20, y: 300 },
                    ]
                ),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_sparkle_bullets[1], -1, 3, 1, ACCELERATED_LINEAR_MOVEMENT(1.04)),
                        0,
                        40
                    )
                ]
            )
        },

        {
            frame: 2400,
            enemy: new enemy(
                sprite_minor_enemies[0],
                window_width / 6 - sprite_minor_enemies[0].width / 2,
                -30,
                'weak',
                620,
                6,
                0.25,
                1,
                EASE_PATH(undefined, 260),
                [
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_sparkle_bullets[3]),
                        0,
                        40
                    )
                ]
            )
        },
        {
            frame: 2400,
            enemy: new enemy(
                sprite_minor_enemies[0],
                window_width / 6 * 3 - sprite_minor_enemies[0].width / 2,
                -30,
                'weak',
                620,
                6,
                0.25,
                1,
                EASE_PATH(undefined, 200),
                [
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_sparkle_bullets[3]),
                        0,
                        40
                    )
                ]
            )
        },
        {
            frame: 2400,
            enemy: new enemy(
                sprite_minor_enemies[0],
                window_width / 6 * 5 - sprite_minor_enemies[0].width / 2,
                -30,
                'weak',
                620,
                6,
                0.25,
                1,
                EASE_PATH(undefined, 200),
                [
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_sparkle_bullets[3]),
                        0,
                        40
                    )
                ]
            )
        },

        /* MAJOR */
        {
            frame: 3000,
            enemy: new enemy(
                sprite_glowy_enemies[7],
                window_width + 30,
                260,
                'strong',
                7300,
                100,
                1.5,
                20,
                EASE_PATH(300 - sprite_glowy_enemies[7].width / 2, undefined, 1, 7),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        0,
                        60
                    ),
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_large_round_bullets[2], Math.PI, 5, 1, ACCELERATED_LINEAR_MOVEMENT(), 16, Math.PI / 8),
                        2,
                        10
                    ),
                    new atk_pattern(
                        NO_PATTERN(),
                        0,
                        30
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_star_bullets[0], -1, 7, 2),
                        0,
                        10
                    ),
                    new atk_pattern(
                        NO_PATTERN(),
                        0,
                        30
                    ),
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_round_bullets[4], Math.PI * 2 + Math.PI / 4, 4, 1, LINEAR_MOVEMENT(), 5, Math.PI / 8),
                        1,
                        20
                    ),
                    new atk_pattern(
                        NO_PATTERN(),
                        0,
                        60
                    ),
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_round_bullets[6], 6, 0.8, LINEAR_MOVEMENT(), 7),
                        6,
                        10
                    ),
                ]
            )
        },
        /* MAJOR */

        {
            frame: 3050,
            enemy: new enemy(
                sprite_minor_enemies[5],
                window_width + 20,
                200,
                'weak',
                550,
                7,
                0.25,
                1,
                JITTERY_PATH('L', 2.5),
                [
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_sparkle_bullets[4]),
                        2,
                        35
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_outlined_round_bullets[2], -1, 6, 1.2),
                        0,
                        20
                    ),
                ]
            )
        },
        {
            frame: 3100,
            enemy: new enemy(
                sprite_minor_enemies[6],
                -20,
                250,
                'weak',
                550,
                7,
                0.25,
                1,
                JITTERY_PATH('R', 2.5),
                [
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_sparkle_bullets[4]),
                        2,
                        35
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_outlined_round_bullets[2], -1, 6, 1.2),
                        0,
                        20
                    ),
                ]
            )
        },
        {
            frame: 3150,
            enemy: new enemy(
                sprite_minor_enemies[5],
                window_width + 20,
                300,
                'weak',
                550,
                7,
                0.25,
                1,
                JITTERY_PATH('L', 2.5),
                [
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_sparkle_bullets[4]),
                        2,
                        35
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_outlined_round_bullets[2], -1, 6, 1.2),
                        0,
                        20
                    ),
                ]
            )
        },
        {
            frame: 3200,
            enemy: new enemy(
                sprite_minor_enemies[6],
                -20,
                350,
                'weak',
                550,
                7,
                0.25,
                1,
                JITTERY_PATH('R', 2.5),
                [
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_sparkle_bullets[4]),
                        2,
                        35
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_outlined_round_bullets[2], -1, 6, 1.2),
                        0,
                        20
                    ),
                ]
            )
        },

        {
            frame: 3700,
            enemy: new enemy(
                sprite_minor_enemies[5],
                -30,
                0,
                'weak',
                750,
                8,
                0.25,
                1,
                BEZIER_PATH(
                    0.004,
                    false,
                    [
                        { x: 200, y: -30 },
                        { x: 150, y: 370 },
                        { x: -50, y: 400 },
                    ]
                ),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[3], -1),
                        3,
                        7
                    ),
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        30
                    )
                ]
            )
        },
        {
            frame: 3700,
            enemy: new enemy(
                sprite_minor_enemies[6],
                -30,
                0,
                'weak',
                750,
                8,
                0.25,
                1,
                BEZIER_PATH(
                    0.004,
                    false,
                    [
                        { x: 400, y: -30 },
                        { x: 450, y: 370 },
                        { x: window_width + -50, y: 400 },
                    ]
                ),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[3], -1),
                        3,
                        7
                    ),
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        30
                    )
                ]
            )
        },
        {
            frame: 3700,
            enemy: new enemy(
                sprite_glowy_enemies[4],
                300 - sprite_glowy_enemies[4].width / 2,
                -30,
                'moderate',
                2600,
                15,
                0.75,
                2,
                EASE_PATH(undefined, 500),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[6], -1, 3, 1.2),
                        0,
                        22
                    ),
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_round_bullets[7], 1, 0.6),
                        0,
                        14
                    )
                ]
            )
        },

        {
            frame: 4700,
            enemy: new enemy(
                sprite_minor_enemies[8],
                -30,
                0,
                'weak',
                950,
                8,
                0.25,
                1,
                BEZIER_PATH(
                    0.0032,
                    false,
                    [
                        { x: 250, y: -30 },
                        { x: 400, y: 380 },
                        { x: window_width + 50, y: 500 },
                    ]
                ),
                [
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_round_bullets[1], Math.PI / 2, 5, 0.8),
                        0,
                        16
                    ),
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_round_bullets[2], Math.PI / 2 + Math.PI / 9, 5, 0.8),
                        0,
                        16
                    ),
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_round_bullets[3], Math.PI / 2 + Math.PI / 9 * 2, 5, 0.8),
                        0,
                        16
                    ),
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_round_bullets[4], Math.PI / 2 + Math.PI / 9 * 4, 5, 0.8),
                        0,
                        16
                    ),
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        30
                    )
                ]
            )
        },
        {
            frame: 4700,
            enemy: new enemy(
                sprite_minor_enemies[8],
                -30,
                0,
                'weak',
                950,
                8,
                0.25,
                1,
                BEZIER_PATH(
                    0.0032,
                    false,
                    [
                        { x: 350, y: -30 },
                        { x: 200, y: 380 },
                        { x: -50, y: 500 },
                    ]
                ),
                [
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_round_bullets[1], Math.PI / 2, 5, 0.8),
                        0,
                        16
                    ),
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_round_bullets[2], Math.PI / 2 + Math.PI / 9, 5, 0.8),
                        0,
                        16
                    ),
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_round_bullets[3], Math.PI / 2 + Math.PI / 9 * 2, 5, 0.8),
                        0,
                        16
                    ),
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_round_bullets[4], Math.PI / 2 + Math.PI / 9 * 4, 5, 0.8),
                        0,
                        16
                    ),
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        30
                    )
                ]
            )
        },

        {
            frame: 5200,
            enemy: new enemy(
                sprite_glowy_enemies[5],
                200 - sprite_glowy_enemies[5].width / 2,
                -30,
                'moderate',
                3200,
                22,
                0.75,
                3,
                EASE_PATH(undefined, 420),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        30
                    ),
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_star_bullets[7], Math.PI / 2, 5, 0.8, ACCELERATED_LINEAR_MOVEMENT(1.009), 8, Math.PI / 4, Math.PI / 8),
                        0,
                        7
                    ),
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_star_bullets[7], Math.PI / 2 + Math.PI / 10, 5, 0.8, ACCELERATED_LINEAR_MOVEMENT(1.008), 8, Math.PI / 4, Math.PI / 8),
                        0,
                        7
                    ),
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_star_bullets[7], Math.PI / 2 + Math.PI / 10 * 2, 5, 0.8, ACCELERATED_LINEAR_MOVEMENT(1.007), 8, Math.PI / 4, Math.PI / 8),
                        0,
                        7
                    ),
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_star_bullets[7], Math.PI / 2 + Math.PI / 10 * 3, 5, 0.8, ACCELERATED_LINEAR_MOVEMENT(1.006), 8, Math.PI / 4, Math.PI / 8),
                        0,
                        7
                    )
                ]
            )
        },
        {
            frame: 5200,
            enemy: new enemy(
                sprite_minor_enemies[7],
                -30,
                0,
                'weak',
                850,
                6,
                0.25,
                1,
                BEZIER_PATH(
                    0.002,
                    false,
                    [
                        { x: 350, y: -30 },
                        { x: 450, y: 380 },
                        { x: window_width + 50, y: 600 },
                    ]
                ),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[2], -1),
                        0,
                        50
                    ),
                ]
            )
        },

        /* MAJOR */
        {
            frame: 6400,
            enemy: new enemy(
                sprite_major_enemies[3],
                -30,
                340,
                'strong',
                10000,
                750,
                1,
                1,
                EASE_PATH(300 - sprite_major_enemies[3].width / 2, undefined, 1, 7),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        0,
                        30
                    ),
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_round_bullets[5], 1, 1.1, ACCELERATED_LINEAR_MOVEMENT(1.01), 5),
                        3,
                        6
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_large_round_bullets[7], -1, 5, 1, LINEAR_MOVEMENT()),
                        0,
                        12
                    ),
                ]
            )
        },
        /* MAJOR */

        {
            frame: 6500,
            enemy: new enemy(
                sprite_glowy_enemies[0],
                -30,
                0,
                'weak',
                1500,
                10,
                0.25,
                1,
                BEZIER_PATH(
                    0.0023,
                    false,
                    [
                        { x: -20, y: 100 },
                        { x: 200, y: 500 },
                        { x: window_width + 20, y: 300 },
                    ]
                ),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_sparkle_bullets[6], -1, 2, 1, FOLLOWING_ARCHED_MOVEMENT(Math.PI / 100, 0.25, 15, 1.004)),
                        2,
                        7
                    ),
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        30
                    )
                ]
            )
        },

        {
            frame: 6950,
            enemy: new enemy(
                sprite_glowy_enemies[1],
                -30,
                0,
                'weak',
                1500,
                10,
                0.25,
                1,
                BEZIER_PATH(
                    0.0029,
                    false,
                    [
                        { x: 440, y: -30 },
                        { x: 200, y: 440 },
                        { x: -20, y: 220 },
                    ]
                ),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_large_round_bullets[7], -1, 2, 1, FOLLOWING_ARCHED_MOVEMENT(Math.PI / 100, 0.12, 30, 1.010)),
                        0,
                        1
                    ),
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        30
                    )
                ]
            )
        },

        {
            frame: 7450,
            enemy: new enemy(
                sprite_glowy_enemies[4],
                300 - sprite_glowy_enemies[4].width / 2,
                0,
                'moderate',
                5500,
                30,
                0.5,
                3,
                COMPLEX_PATH(
                    [
                        EASE_PATH(300 - sprite_glowy_enemies[4].width / 2, 400, 1, 4, true),
                        EASE_PATH(100 - sprite_glowy_enemies[4].width / 2, 400, 1, 4, true),
                        EASE_PATH(500 - sprite_glowy_enemies[4].width / 2, 400, 1, 4, true),
                    ],
                    [
                        { x: 300 - sprite_glowy_enemies[4].width / 2, y: 400},
                        { x: 100 - sprite_glowy_enemies[4].width / 2, y: 400},
                        { x: 500 - sprite_glowy_enemies[4].width / 2, y: 400},
                    ],
                    1,
                    20
                ),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        10
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_large_round_bullets[7], -1, 2, 1, FOLLOWING_ARCHED_MOVEMENT(Math.PI / 100, 0.2, 40, 1.001)),
                        0,
                        10
                    ),
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        20
                    ),
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_star_bullets[1], Math.PI / 2, 1, 1, ACCELERATED_LINEAR_MOVEMENT(1.007), 16, Math.PI / 8, Math.PI / 8),
                        0,
                        4
                    ),
                ]
            )
        },

        {
            frame: 9000,
            enemy: new enemy(
                sprite_glowy_enemies[3],
                -30,
                0,
                'weak',
                1300,
                10,
                0.25,
                1,
                BEZIER_PATH(
                    0.002,
                    false,
                    [
                        { x: window_width + 20, y: 500 },
                        { x: 300, y: 520 },
                        { x: -20, y: 300 }
                    ]
                ),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_large_round_bullets[3], -1),
                        0,
                        5
                    ),
                    new atk_pattern(
                        NO_PATTERN(),
                        0,
                        60
                    )
                ]
            )
        },
        {
            frame: 9000,
            enemy: new enemy(
                sprite_glowy_enemies[3],
                -30,
                0,
                'weak',
                1300,
                10,
                0.25,
                1,
                BEZIER_PATH(
                    0.002,
                    false,
                    [
                        { x: -20, y: 300 },
                        { x: 300, y: 120 },
                        { x: window_width + 20, y: 500 },
                    ]
                ),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[1], -1, 0.2, 1, ACCELERATED_LINEAR_MOVEMENT(1.05)),
                        0,
                        5
                    ),
                    new atk_pattern(
                        NO_PATTERN(),
                        0,
                        34
                    )
                ]
            )
        },

        {
            frame: 11000,
            enemy: new enemy(
                sprite_glowy_enemies[4],
                300 - sprite_glowy_enemies[4].width / 2,
                0,
                'weak',
                1000,
                12,
                0.25,
                2,
                LINEAR_PATH('D', 7),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[1], Math.PI),
                        0,
                        5
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[5], 0),
                        0,
                        5
                    )
                ]
            )
        },


        /* BOSS */
        {
            frame: 99999,
            enemy: new boss(
                new enemy(
                    sprite_boss_enemies[0],
                    300 - sprite_boss_enemies[0].width / 2,
                    -30,
                    'boss',
                    60000,
                    750,
                    0,
                    0
                ),
                [
                    { // PHASE 1
                        health_limit: 33000,
                        path: EASE_PATH(undefined, 340, 1, 7),
                        atk_patterns:
                        [
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                60
                            ),
                            new atk_pattern(
                                ARC_ATTACK(sprite_enemy_round_bullets[1], Math.PI / 2, 1.9, 0.9, LINEAR_MOVEMENT(), 16, Math.PI / 4, Math.PI / 4),
                                5,
                                5
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                15
                            ),
                            new atk_pattern(
                                LINEAR_SHOOT(sprite_enemy_large_ellipsoid_bullets[2], Math.PI / 2, 6),
                                2,
                                6
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                15
                            ),
                            new atk_pattern(
                                RAND_ATTACK(sprite_enemy_sparkle_bullets[3]),
                                6,
                                2
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                15
                            ),
                            new atk_pattern(
                                LINEAR_SHOOT(sprite_enemy_large_ellipsoid_bullets[4], Math.PI / 2, 6),
                                2,
                                6
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                15
                            ),
                            new atk_pattern(
                                ARC_ATTACK(sprite_enemy_round_bullets[5], Math.PI / 2, 7, 0.8, LINEAR_MOVEMENT(), 8, Math.PI / 4, Math.PI / 1.5),
                                10,
                                7
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                15
                            ),
                            new atk_pattern(
                                LINEAR_SHOOT(sprite_enemy_star_bullets[6], -1, 9, 1.5, FOLLOWING_ARCHED_MOVEMENT(Math.PI / 30)),
                                2,
                                30
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                5
                            ),
                            new atk_pattern(
                                LINEAR_SHOOT(sprite_enemy_large_round_bullets[7], -1, 9, 1.5, ARCHED_MOVEMENT(Math.PI / 30)),
                                9,
                                4
                            ),
                        ]
                    },
                    { // PHASE 2
                        health_limit: 12000,
                        path: COMPLEX_PATH
                        (
                            [
                                EASE_PATH(undefined, 305, 0, 0.2, true),
                                EASE_PATH(undefined, 295, 0, 0.2, true),
                            ],
                            [
                                { x: 300 - sprite_boss_enemies[0].width / 2, y: 305, epsilon: 0.1},
                                { x: 300 - sprite_boss_enemies[0].width / 2, y: 295, epsilon: 0.1},
                            ],
                            0,
                            0.1
                        ),
                        atk_patterns:
                        [
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                30
                            ),
                            new atk_pattern(
                                ARC_ATTACK(sprite_enemy_sparkle_bullets[1], Math.PI / 2 - Math.PI / 4, 2, 1, LINEAR_MOVEMENT(), 8),
                                4,
                                5,
                            ),
                            new atk_pattern(
                                ARC_ATTACK(sprite_enemy_sparkle_bullets[2], Math.PI / 2 - Math.PI / 8, 2, 1, LINEAR_MOVEMENT(), 8),
                                4,
                                5,
                            ),
                            new atk_pattern(
                                ARC_ATTACK(sprite_enemy_sparkle_bullets[1], Math.PI / 2 - Math.PI / 4, 2, 1, LINEAR_MOVEMENT(), 8),
                                4,
                                5,
                            ),
                            new atk_pattern(
                                ARC_ATTACK(sprite_enemy_sparkle_bullets[2], Math.PI / 2 - Math.PI / 8, 2, 1, LINEAR_MOVEMENT(), 8),
                                4,
                                5,
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                25
                            ),
                            new atk_pattern(
                                LINEAR_SHOOT(sprite_enemy_star_bullets[5], -1, 10, 1.3, LINEAR_MOVEMENT()),
                                10,
                                15
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                20
                            ),
                            new atk_pattern(
                                SPIRAL_ATTACK(sprite_enemy_round_bullets[7], Math.PI / 2, Math.PI / 16, 4, 1, LINEAR_MOVEMENT(), 8),
                                25,
                                2,
                            ),
                            new atk_pattern(
                                ARC_ATTACK(sprite_enemy_star_bullets[0], Math.PI / 2 - Math.PI / 4, 10, 1.3, LINEAR_MOVEMENT(), 3, Math.PI / 4, Math.PI / 10),
                                3,
                                10,
                            ),
                            new atk_pattern(
                                LINEAR_SHOOT(sprite_enemy_large_round_bullets[3], -1, 3, 1.3, FOLLOWING_ARCHED_MOVEMENT()),
                                0,
                                1,
                            ),
                        ]
                    },
                    { // PHASE 3
                        health_limit: 1,
                        path: COMPLEX_PATH
                        (
                            [
                                EASE_PATH(300 - sprite_boss_enemies[0].width / 2, 120, 0, 2, true),
                                JITTERY_PATH('L', 1.6, 1),
                                JITTERY_PATH('R', 1.6, 1)
                            ],
                            [
                                { x: 300 - sprite_boss_enemies[0].width / 2, y: 120, epsilon: 5 },
                                { x: 120, y: 120, epsilon: 30 },
                                { x: window_width - 120, y: 120, epsilon: 30 },
                            ],
                            1,
                            30
                        ),
                        atk_patterns:
                        [
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                45
                            ),
                            new atk_pattern(
                                ARC_ATTACK(sprite_enemy_round_bullets[1], Math.PI / 2, 5.6, 1, LINEAR_MOVEMENT(), 5, Math.PI / 16),
                                0,
                                10
                            ),
                            new atk_pattern(
                                ARC_ATTACK(sprite_enemy_round_bullets[1], Math.PI / 2 - Math.PI / 4, 5.6, 1, LINEAR_MOVEMENT(), 5, Math.PI / 16),
                                0,
                                10
                            ),
                            new atk_pattern(
                                ARC_ATTACK(sprite_enemy_round_bullets[1], 0, 5.6, 1, LINEAR_MOVEMENT(), 5, Math.PI / 16),
                                0,
                                10
                            ),
                            new atk_pattern(
                                ARC_ATTACK(sprite_enemy_round_bullets[1], 0, 5.6, 1, LINEAR_MOVEMENT(), 5, Math.PI / 16),
                                0,
                                10
                            ),
                            new atk_pattern(
                                ARC_ATTACK(sprite_enemy_round_bullets[1], Math.PI / 2 - Math.PI / 4, 5.6, 1, LINEAR_MOVEMENT(), 5, Math.PI / 16),
                                0,
                                10
                            ),
                            new atk_pattern(
                                ARC_ATTACK(sprite_enemy_round_bullets[1], Math.PI / 2, 5.6, 1, LINEAR_MOVEMENT(), 5, Math.PI / 16),
                                0,
                                10
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                30
                            ),
                            new atk_pattern(
                                SPIRAL_ATTACK(sprite_enemy_sparkle_bullets[4], Math.PI / 2, Math.PI / 4, 4, 1, ARCHED_MOVEMENT(Math.PI / 300), 3, Math.PI / 16),
                                10,
                                6,
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                30
                            ),
                            new atk_pattern(
                                ARC_ATTACK(sprite_enemy_round_bullets[7], Math.PI / 2, 1.02, 0.8, ACCELERATED_LINEAR_MOVEMENT(1.022), 32, Math.PI / 16),
                                10,
                                6,
                            ),
                        ]
                    },
                    { // DESPERATION
                        health_limit: 0,
                        path: EASE_PATH(300 - sprite_boss_enemies[0].width / 2, 250, 1, 6, false),
                        atk_patterns:
                        [
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                30
                            ),
                            new atk_pattern(
                                ARC_ATTACK(sprite_enemy_large_round_bullets[1], Math.PI / 2, 3, 1.4, ACCELERATED_LINEAR_MOVEMENT(1.04), 16, Math.PI / 8),
                                9,
                                4
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                10
                            ),
                            new atk_pattern(
                                LINEAR_SHOOT(sprite_enemy_round_bullets[2], -1, 4),
                                2,
                                2
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                5
                            ),
                            new atk_pattern(
                                ARC_ATTACK(sprite_enemy_large_round_bullets[2], Math.PI / 2 + Math.PI / 32, 3, 1.4, ACCELERATED_LINEAR_MOVEMENT(1.04), 16, Math.PI / 8),
                                9,
                                4
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                10
                            ),
                            new atk_pattern(
                                LINEAR_SHOOT(sprite_enemy_round_bullets[2], -1, 4),
                                2,
                                2
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                2,
                                2
                            ),
                            new atk_pattern(
                                ARC_ATTACK(sprite_enemy_large_round_bullets[3], Math.PI / 2 + Math.PI / 16, 3, 1.4, ACCELERATED_LINEAR_MOVEMENT(1.04), 16, Math.PI / 8),
                                9,
                                4
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                40
                            ),
                            new atk_pattern(
                                ARC_ATTACK(sprite_enemy_round_bullets[7], Math.PI / 2, 3, 0.9, ARCHED_MOVEMENT(Math.PI / 200), 16, Math.PI / 8),
                                50,
                                1
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                7
                            ),
                            new atk_pattern(
                                ARC_ATTACK(sprite_enemy_round_bullets[6], Math.PI / 3, 3, 0.9, ARCHED_MOVEMENT(Math.PI / 200), 16, Math.PI / 8),
                                50,
                                1
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                7
                            ),
                            new atk_pattern(
                                ARC_ATTACK(sprite_enemy_round_bullets[5], Math.PI / 4, 3, 0.9, ARCHED_MOVEMENT(Math.PI / 200), 16, Math.PI / 8),
                                50,
                                1
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                7
                            ),
                            new atk_pattern(
                                ARC_ATTACK(sprite_enemy_round_bullets[4], Math.PI / 5, 3, 0.9, ARCHED_MOVEMENT(Math.PI / 200), 16, Math.PI / 8),
                                50,
                                1
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                120
                            ),
                            new atk_pattern(
                                RAND_ATTACK(sprite_enemy_star_bullets, 6, 1, LINEAR_MOVEMENT()),
                                150,
                                3
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                30
                            ),
                            new atk_pattern(
                                CHANGE_TO_SHAKY_PATH(),
                                0,
                                1
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                140
                            ),
                            new atk_pattern(
                                FINISH_DESPERATION(),
                                0,
                                1
                            ),
                        ]
                    }
                ]
            )
        }
        /* BOSS */
    ];
}



/* ######################### NORMAL ######################### */
function define_enemy_spawn_info_normal() {
    enemy_spawns_normal = [
        {
            frame: 20,
            enemy: new enemy(
                sprite_minor_enemies[1],
                -30,
                0,
                'weak',
                90,
                7,
                0.25,
                1,
                BEZIER_PATH(
                    0.0023,
                    false,
                    [
                        { x: -20, y: 100 },
                        { x: 400, y: 430 },
                        { x: window_width + 20, y: 300 },
                    ]
                ),
                [
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_round_bullets[4], Math.PI / 2 - Math.PI / 4, 4, 1, LINEAR_MOVEMENT(), 3),
                        0,
                        30
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[3], -1, 4.5, 1, LINEAR_MOVEMENT(), Math.PI / 4),
                        0,
                        40
                    ),
                ]
            )
        },
        {
            frame: 60,
            enemy: new enemy(
                sprite_minor_enemies[1],
                -30,
                0,
                'weak',
                90,
                7,
                0.25,
                1,
                BEZIER_PATH(
                    0.0023,
                    false,
                    [
                        { x: -20, y: 100 },
                        { x: 400, y: 450 },
                        { x: window_width + 20, y: 300 },
                    ]
                ),
                [
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_round_bullets[4], Math.PI / 2 - Math.PI / 4, 4.2, 1, LINEAR_MOVEMENT(), 3),
                        0,
                        30
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[3], -1, 4.5, 1, LINEAR_MOVEMENT(), Math.PI / 4),
                        0,
                        40
                    ),
                ]
            )
        },
        {
            frame: 100,
            enemy: new enemy(
                sprite_minor_enemies[1],
                -30,
                0,
                'weak',
                90,
                7,
                0.25,
                1,
                BEZIER_PATH(
                    0.0023,
                    false,
                    [
                        { x: -20, y: 100 },
                        { x: 400, y: 470 },
                        { x: window_width + 20, y: 300 },
                    ]
                ),
                [
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_round_bullets[4], Math.PI / 2 - Math.PI / 4, 4.4, 1, LINEAR_MOVEMENT(), 3),
                        0,
                        30
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[3], -1, 4.5, 1, LINEAR_MOVEMENT(), Math.PI / 4),
                        0,
                        40
                    ),
                ]
            )
        },
        {
            frame: 140,
            enemy: new enemy(
                sprite_minor_enemies[1],
                -30,
                0,
                'weak',
                90,
                7,
                0.25,
                1,
                BEZIER_PATH(
                    0.0023,
                    false,
                    [
                        { x: -20, y: 100 },
                        { x: 400, y: 490 },
                        { x: window_width + 20, y: 300 },
                    ]
                ),
                [
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_round_bullets[4], Math.PI / 2 - Math.PI / 4, 4.6, 1, LINEAR_MOVEMENT(), 3),
                        0,
                        30
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[3], -1, 4.5, 1, LINEAR_MOVEMENT(), Math.PI / 4),
                        0,
                        40
                    ),
                ]
            )
        },

        {
            frame: 360,
            enemy: new enemy(
                sprite_minor_enemies[2],
                -30,
                0,
                'weak',
                180,
                8,
                0.25,
                1,
                BEZIER_PATH(
                    0.0023,
                    false,
                    [
                        { x: window_width + 20, y: 200 },
                        { x: 300, y: 300 },
                        { x: -20, y: 100 },
                    ]
                ),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        20
                    ),
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_star_bullets[6], 6, 1, LINEAR_MOVEMENT(), 1),
                        10,
                        1
                    )
                ]
            )
        },
        {
            frame: 420,
            enemy: new enemy(
                sprite_minor_enemies[2],
                -30,
                0,
                'weak',
                180,
                8,
                0.25,
                1,
                BEZIER_PATH(
                    0.0023,
                    false,
                    [
                        { x: -20, y: 400 },
                        { x: 300, y: 200 },
                        { x: window_width + 20, y: 300 },
                    ]
                ),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        20
                    ),
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_star_bullets[6], 6, 1, LINEAR_MOVEMENT(), 1),
                        10,
                        1
                    ),
                ]
            )
        },

        {
            frame: 680,
            enemy: new enemy(
                sprite_minor_enemies[4],
                -30,
                0,
                'weak',
                400,
                9,
                0.25,
                1,
                BEZIER_PATH(
                    0.0027,
                    false,
                    [
                        { x: 300, y: -20 },
                        { x: 450, y: 200 },
                        { x: window_width + 20, y: 340 },
                    ]
                ),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        16
                    ),
                    new atk_pattern(
                        SPIRAL_ATTACK(sprite_enemy_large_round_bullets[3], Math.PI / 2, Math.PI / 4, 4, 1, ACCELERATED_LINEAR_MOVEMENT(1.005), 3),
                        2,
                        3
                    ),
                ]
            )
        },
        {
            frame: 680,
            enemy: new enemy(
                sprite_minor_enemies[1],
                120,
                -30,
                'weak',
                260,
                6,
                0.25,
                1,
                BEZIER_PATH(
                    0.0022,
                    false,
                    [
                        { x: 0, y: -20 },
                        { x: 450, y: 200 },
                        { x: window_width + 20, y: 340 },
                    ]
                ),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_sparkle_bullets[3], -1, 6, 0.88),
                        1,
                        40
                    ),
                ]
            )
        },

        {
            frame: 1050,
            enemy: new enemy(
                sprite_glowy_enemies[2],
                -30,
                0,
                'moderate',
                810,
                23,
                0.5,
                2,
                BEZIER_PATH(
                    0.0016,
                    false,
                    [
                        { x: 0, y: -20 },
                        { x: 200, y: 400 },
                        { x: window_width + 20, y: 280 },
                    ]
                ),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        35
                    ),
                    new atk_pattern(
                        SPIRAL_ATTACK(sprite_enemy_round_bullets[5], Math.PI / 2, Math.PI / 32, 1.2, 0.9, ACCELERATED_LINEAR_MOVEMENT(1.016), 8),
                        4,
                        1
                    ),
                ]
            )
        },

        /* MAJOR */
        {
            frame: 2000,
            enemy: new enemy(
                sprite_major_enemies[0],
                300 - sprite_major_enemies[0].width,
                -30,
                'strong',
                2600,
                46,
                1,
                8,
                COMPLEX_PATH(
                    [
                        EASE_PATH(300 - sprite_boss_enemies[0].width / 2, 240, 0, 3, true),
                        JITTERY_PATH('L', 1.6, 1),
                        JITTERY_PATH('R', 1.6, 1)
                    ],
                    [
                        { x: 300 - sprite_boss_enemies[0].width / 2, y: 240, epsilon: 5 },
                        { x: 120, y: 240},
                        { x: window_width - 120, y: 240},
                    ],
                    1,
                    30
                ),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        50
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_outlined_round_bullets[7], -1, 13, 1, LINEAR_MOVEMENT()),
                        14,
                        6
                    ),
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        25
                    ),
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_round_bullets[6], Math.PI / 2, 6.2, 1, ACCELERATED_LINEAR_MOVEMENT(1.005), 32, Math.PI / 16),
                        2,
                        10
                    ),
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        25
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_ellipsoid_crystal_bullets[5], Math.PI / 2, 14, 1.2),
                        9,
                        5
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_large_round_bullets[4], -1, 5, 1, FOLLOWING_ARCHED_MOVEMENT(Math.PI / 32)),
                        0,
                        10
                    ),
                ]
            )
        },
        /* MAJOR */

        {
            frame: 2050,
            enemy: new enemy(
                sprite_minor_enemies[8],
                -30,
                0,
                'weak',
                730,
                8,
                0.25,
                1,
                BEZIER_PATH(
                    0.0028,
                    false,
                    [
                        { x: -20, y: 600 },
                        { x: 220, y: 260 },
                        { x: window_width + 20, y: 420 },
                    ]
                ),
                [
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_sparkle_bullets[3], Math.PI, 4, 1, ARCHED_MOVEMENT(Math.PI / 200)),
                        1,
                        40
                    ),
                ]
            )
        },
        {
            frame: 2050,
            enemy: new enemy(
                sprite_minor_enemies[8],
                -30,
                0,
                'weak',
                730,
                8,
                0.25,
                1,
                BEZIER_PATH(
                    0.0028,
                    false,
                    [
                        { x: window_width + 20, y: 420 },
                        { x: 480, y: 120 },
                        { x: -20, y: 400 },
                    ]
                ),
                [
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_sparkle_bullets[3], Math.PI, 4, 1, ARCHED_MOVEMENT(Math.PI / 200)),
                        1,
                        40
                    ),
                ]
            )
        },

        {
            frame: 2500,
            enemy: new enemy(
                sprite_glowy_enemies[3],
                -30,
                0,
                'moderate',
                1100,
                29,
                0.5,
                2,
                BEZIER_PATH(
                    0.0014,
                    false,
                    [
                        { x: -20, y: 0 },
                        { x: 550, y: 220 },
                        { x: window_width + 20, y: 700 },
                    ]
                ),
                [
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_large_round_bullets[0], 4, 1, ARCHED_MOVEMENT(Math.PI / 120, 1.002)),
                        1,
                        20
                    ),
                ]
            )
        },
        {
            frame: 2500,
            enemy: new enemy(
                sprite_minor_enemies[8],
                window_width + 30,
                80,
                'weak',
                740,
                7,
                0.25,
                1,
                RANDSPEED_PATH('L', 2,1.5, 3, 0.5),
                [
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_star_bullets[1], 2.8, 1, ACCELERATED_LINEAR_MOVEMENT(1.009)),
                        1,
                        60
                    ),
                ]
            )
        },
        {
            frame: 2500,
            enemy: new enemy(
                sprite_minor_enemies[8],
                window_width + 30,
                180,
                'weak',
                740,
                7,
                0.25,
                1,
                RANDSPEED_PATH('L', 2,1.5, 3, 0.5),
                [
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_star_bullets[1], 2.8, 1, ACCELERATED_LINEAR_MOVEMENT(1.009)),
                        1,
                        60
                    ),
                ]
            )
        },
        {
            frame: 2700,
            enemy: new enemy(
                sprite_minor_enemies[8],
                -30,
                480,
                'weak',
                680,
                7,
                0.25,
                1,
                RANDSPEED_PATH('R', 2,1.5, 3, 0.5),
                [
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_star_bullets[1], 2.8, 1, ACCELERATED_LINEAR_MOVEMENT(1.009)),
                        1,
                        60
                    ),
                ]
            )
        },
        {
            frame: 2700,
            enemy: new enemy(
                sprite_minor_enemies[8],
                -30,
                380,
                'weak',
                680,
                7,
                0.25,
                1,
                RANDSPEED_PATH('R', 2,1.5, 3, 0.5),
                [
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_star_bullets[1], 2.8, 1, ACCELERATED_LINEAR_MOVEMENT(1.009)),
                        1,
                        60
                    ),
                ]
            )
        },

        {
            frame: 3200,
            enemy: new enemy(
                sprite_minor_enemies[4],
                -30,
                300,
                'weak',
                870,
                11,
                0.25,
                1,
                RANDSPEED_PATH('R', 1.25,1, 2, 0.25),
                [
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_sparkle_bullets[1]),
                        3,
                        12
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_ellipsoid_bullets[6], Math.PI / 2, 12),
                        6,
                        4
                    )
                ]
            )
        },
        {
            frame: 3200,
            enemy: new enemy(
                sprite_minor_enemies[5],
                -30,
                0,
                'weak',
                960,
                8,
                0.25,
                1,
                BEZIER_PATH(
                    0.0016,
                    false,
                    [
                        { x: window_width + 20, y: 160 },
                        { x: 340, y: 360 },
                        { x: 100, y: -30 },
                    ]
                ),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_star_bullets[4], -1, 5, 1.25, ACCELERATED_LINEAR_MOVEMENT(1.006)),
                        1,
                        60
                    ),
                ]
            )
        },

        {
            frame: 3900,
            enemy: new enemy(
                sprite_glowy_enemies[2],
                -30,
                0,
                'moderate',
                1600,
                37,
                0.5,
                2,
                BEZIER_PATH(
                    0.0013,
                    false,
                    [
                        {x: -20, y: 660},
                        {x: 450, y: 360},
                        {x: -20, y: 20},
                    ]
                ),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        20
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_star_bullets[4], -1, 5, 1.25, ACCELERATED_LINEAR_MOVEMENT(1.006), Math.PI / 4),
                        9,
                        2
                    )
                ]
            )
        },

        /* MAJOR */
        {
            frame: 4750,
            enemy: new enemy(
                sprite_major_enemies[1],
                300 - sprite_major_enemies[1].width / 2,
                -30,
                'strong',
                9200,
                88,
                1.25,
                14,
                EASE_PATH(undefined, 300, 1, 4),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        22
                    ),
                    new atk_pattern(
                        RAND_ATTACK(
                            sprite_enemy_outlined_round_bullets[4],
                            2.6,
                            1.2,
                            SPLIT_ATTACK(
                                LINEAR_MOVEMENT(),
                                32,
                                {
                                    sprite: sprite_enemy_round_bullets[5],
                                    direction: Math.PI / 2,
                                    speed: 2,
                                    size_multiplier: 1,
                                    behavior: ACCELERATED_LINEAR_MOVEMENT(1.04),
                                    n: 8,
                                    bullet_distance: Math.PI / 4,
                                    max_random_direction: 0
                                }
                            ),
                        ), 2, 60
                    ),
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        50
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_star_bullets[6], -1, 4.3, 1.2, LINEAR_MOVEMENT(), Math.PI / 8),
                        9,
                        1
                    ),
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        40
                    ),
                    new atk_pattern(
                        RAND_ATTACK(
                            sprite_enemy_outlined_round_bullets[7],
                            2.6,
                            1.2,
                            SPLIT_ATTACK(
                                LINEAR_MOVEMENT(),
                                30,
                                {
                                    sprite: sprite_enemy_round_bullets[6],
                                    direction: Math.PI / 2,
                                    speed: 2,
                                    size_multiplier: 1,
                                    behavior: ACCELERATED_LINEAR_MOVEMENT(1.01),
                                    n: 20,
                                    bullet_distance: Math.PI / 10,
                                    max_random_direction: 0
                                }
                            ),
                        ), 2, 1
                    ),
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        60
                    ),
                ]
            )
        },
        /* MAJOR */

        {
            frame: 4800,
            enemy: new enemy(
                sprite_minor_enemies[8],
                -30,
                0,
                'weak',
                1100,
                12,
                0.25,
                1,
                BEZIER_PATH(
                    0.0022,
                    false,
                    [
                        { x: window_width + 20, y: 550 },
                        { x: 320, y: 760 },
                        { x: -20, y: 100 },
                    ]
                ),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_ellipsoid_bullets[2], -Math.PI / 2),
                        0,
                        7
                    ),
                ]
            )
        },
        {
            frame: 4800,
            enemy: new enemy(
                sprite_minor_enemies[8],
                -30,
                0,
                'weak',
                1100,
                10,
                0.25,
                1,
                BEZIER_PATH(
                    0.0022,
                    false,
                    [
                        { x: -20, y: 50 },
                        { x: 360, y: 760 },
                        { x: window_width + 20, y: 500 },
                    ]
                ),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_ellipsoid_bullets[2], Math.PI / 2),
                        0,
                        7
                    ),
                ]
            )
        },
        {
            frame: 4800,
            enemy: new enemy(
                sprite_glowy_enemies[3],
                -30,
                0,
                'moderate',
                1900,
                46,
                0.5,
                3,
                BEZIER_PATH(
                    0.0022,
                    false,
                    [
                        { x: 290, y: -20 },
                        { x: 120, y: 260 },
                        { x: window_width + 20, y: 400 },
                    ]
                ),
                [
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_large_round_bullets[5], Math.PI / 2 - Math.PI / 4, 6, 0.85, LINEAR_MOVEMENT(), 12, Math.PI / 6),
                        0,
                        26
                    ),
                ]
            )
        },

        {
            frame: 5350,
            enemy: new enemy(
                sprite_minor_enemies[6],
                -30,
                0,
                'weak',
                1200,
                13,
                0.25,
                1,
                BEZIER_PATH(
                    0.0030,
                    false,
                    [
                        { x: -20, y: 400 },
                        { x: 120, y: 220 },
                        { x: window_width + 20, y: 800 },
                    ]
                ),
                [
                    new atk_pattern(
                        SPIRAL_ATTACK(sprite_enemy_round_bullets[5], Math.PI / 2, Math.PI / 16, speed = 4, 1, LINEAR_MOVEMENT(), 1, Math.PI / 4, 0),
                        0,
                        7
                    ),
                ]
            )
        },
        {
            frame: 5400,
            enemy: new enemy(
                sprite_minor_enemies[6],
                -30,
                0,
                'weak',
                1200,
                13,
                0.25,
                1,
                BEZIER_PATH(
                    0.0030,
                    false,
                    [
                        { x: window_width + 20, y: 770 },
                        { x: 120, y: 270 },
                        { x: -20, y: 420 },
                    ]
                ),
                [
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_round_bullets[0]),
                        0,
                        30
                    ),
                ]
            )
        },

        {
            frame: 5750,
            enemy: new enemy(
                sprite_minor_enemies[4],
                300 - sprite_minor_enemies[4].width / 2,
                -20,
                'moderate',
                3000,
                51,
                0.75,
                4,
                EASE_PATH(undefined, 300, 1, 3),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_star_bullets[4], -1, 5, 1.25, ACCELERATED_LINEAR_MOVEMENT(1.006), Math.PI / 4),
                        9,
                        2
                    ),
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        30
                    )
                ]
            )
        },
        {
            frame: 5750,
            enemy: new enemy(
                sprite_minor_enemies[4],
                70,
                -20,
                'weak',
                1200,
                11,
                0.25,
                1,
                LINEAR_PATH('D', 4.2),
                [
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_round_bullets[5], Math.PI / 2, 3, 0.8, ARCHED_MOVEMENT(Math.PI / 20)),
                        0,
                        5
                    ),
                ]
            )
        },
        {
            frame: 5750,
            enemy: new enemy(
                sprite_minor_enemies[4],
                510,
                -20,
                'weak',
                1200,
                11,
                0.25,
                1,
                LINEAR_PATH('D', 4.2),
                [
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_round_bullets[5], Math.PI / 2, 3, 1, ARCHED_MOVEMENT(Math.PI / 20)),
                        0,
                        5
                    ),
                ]
            )
        },

        {
            frame: 6600,
            enemy: new enemy(
                sprite_glowy_enemies[0],
                -20,
                250,
                'weak',
                1200,
                13,
                0.25,
                1,
                LINEAR_PATH('R', 2.2),
                [
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_star_bullets[5], Math.PI / 2, 3, 1.2, ARCHED_MOVEMENT(Math.PI / 220)),
                        0,
                        50
                    ),
                ]
            )
        },
        {
            frame: 6620,
            enemy: new enemy(
                sprite_glowy_enemies[0],
                -20,
                300,
                'weak',
                1200,
                13,
                0.25,
                1,
                LINEAR_PATH('R', 2.2),
                [
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_star_bullets[5], Math.PI / 2, 3, 1, ARCHED_MOVEMENT(Math.PI / 220)),
                        0,
                        50
                    ),
                ]
            )
        },
        {
            frame: 6640,
            enemy: new enemy(
                sprite_glowy_enemies[0],
                -20,
                350,
                'weak',
                1200,
                13,
                0.25,
                1,
                LINEAR_PATH('R', 2.2),
                [
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_star_bullets[5], Math.PI / 2, 3, 1, ARCHED_MOVEMENT(Math.PI / 220)),
                        0,
                        50
                    ),
                ]
            )
        },

        {
            frame: 7000,
            enemy: new enemy(
                sprite_glowy_enemies[4],
                -30,
                0,
                'moderate',
                3550,
                56,
                0.75,
                4,
                BEZIER_PATH(
                    0.0021,
                    false,
                    [
                        { x: window_width + 20, y: 330 },
                        { x: 120, y: 560 },
                        { x: -20, y: 400 },
                    ]
                ),
                [
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_large_round_bullets, 6, 1, ARCHED_MOVEMENT(Math.PI / 160)),
                        0,
                        12
                    ),
                ]
            )
        },

        /* MAJOR */
        {
            frame: 7600,
            enemy: new enemy(
                sprite_glowy_enemies[5],
                300 - sprite_glowy_enemies[1].width / 2,
                -30,
                'strong',
                12500,
                180,
                1.5,
                20,
                COMPLEX_PATH(
                    [
                        EASE_PATH(300 - sprite_glowy_enemies[1].width / 2, 300, 1, 7),
                        RAND_BEZIER(),
                    ],
                    [
                        { x: 300 - sprite_glowy_enemies[1].width / 2, y: 300 },
                        { x: -1, y: -1 }
                    ],
                    1,
                    20
                ),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        40
                    ),
                    new atk_pattern(
                        SPIRAL_ATTACK(sprite_enemy_round_bullets[7], Math.PI / 2, Math.PI / 16, 4, 1, LINEAR_MOVEMENT(), 8),
                        7,
                        9,
                    ),
                    new atk_pattern(
                        SPIRAL_ATTACK(sprite_enemy_round_bullets[6], Math.PI / 2, Math.PI / 16, 4, 1, LINEAR_MOVEMENT(), 8),
                        7,
                        8,
                    ),
                    new atk_pattern(
                        SPIRAL_ATTACK(sprite_enemy_round_bullets[5], Math.PI / 2, Math.PI / 16, 4, 1, LINEAR_MOVEMENT(), 8),
                        7,
                        7,
                    ),
                    new atk_pattern(
                        SPIRAL_ATTACK(sprite_enemy_round_bullets[4], Math.PI / 2, Math.PI / 16, 4, 1, LINEAR_MOVEMENT(), 8),
                        7,
                        6,
                    ),
                    new atk_pattern(
                        SPIRAL_ATTACK(sprite_enemy_round_bullets[3], Math.PI / 2, Math.PI / 16, 4, 1, LINEAR_MOVEMENT(), 8),
                        7,
                        5,
                    ),
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        20
                    ),
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_sparkle_bullets[2], 2, 1, ARCHED_MOVEMENT(Math.PI / 200, 1.025), 2),
                        9,
                        1,
                    )
                ]
            )
        },
        /* MAJOR */

        {
            frame: 7650,
            enemy: new enemy(
                sprite_glowy_enemies[2],
                -20,
                160,
                'weak',
                1300,
                16,
                0.5,
                1,
                RANDSPEED_PATH('R', 1.6, 1.4, 2.2, 0.1),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        30
                    ),
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_outlined_round_bullets[5], 4, 1.2, SPLIT_ATTACK(ARCHED_MOVEMENT(Math.PI / 160), 40), 1),
                        2,
                        8
                    )
                ]
            )
        },
        {
            frame: 7700,
            enemy: new enemy(
                sprite_glowy_enemies[2],
                window_width + 20,
                260,
                'weak',
                1300,
                16,
                0.5,
                1,
                RANDSPEED_PATH('L', 2.2, 2, 3, 0.1),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        30
                    ),
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_outlined_round_bullets[5], 4, 1.2, SPLIT_ATTACK(ARCHED_MOVEMENT(Math.PI / 160), 40), 1),
                        2,
                        8
                    )
                ]
            )
        },

        {
            frame: 8250,
            enemy: new enemy(
                sprite_glowy_enemies[5],
                -20,
                40,
                'moderate',
                3700,
                64,
                1,
                6,
                EASE_PATH(300, 300 - sprite_glowy_enemies[5].width, 1, 6),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_star_bullets[4], -1, 5, 1.25),
                        4,
                        8
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_ellipsoid_crystal_bullets[7], Math.PI / 2, 7, 2),
                        4,
                        8
                    ),
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_round_bullets[4], Math.PI / 2 - Math.PI / 4, 4, 2),
                        0,
                        10
                    ),
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        20
                    ),
                ]
            )
        },

        {
            frame: 8800,
            enemy: new enemy(
                sprite_glowy_enemies[3],
                -30,
                0,
                'weak',
                1500,
                16,
                0.5,
                1,
                BEZIER_PATH(
                    0.003,
                    false,
                    [
                        { x: -20, y: 200 },
                        { x: 220, y: 370 },
                        { x: window_width + 35, y: 45 }
                    ]
                ),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        10
                    ),
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_outlined_round_bullets[5], 4, 1.2, FOLLOWING_ARCHED_MOVEMENT(Math.PI / 120), 1),
                        1,
                        40
                    )
                ]
            )
        },
        {
            frame: 8950,
            enemy: new enemy(
                sprite_glowy_enemies[2],
                -30,
                0,
                'weak',
                1700,
                19,
                0.5,
                1,
                BEZIER_PATH(
                    0.0034,
                    false,
                    [
                        { x: 520, y: -30 },
                        { x: 420, y: 570 },
                        { x: -30, y: 45 }
                    ]
                ),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        10
                    ),
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_large_round_bullets[0], Math.PI / 4, 5, 0.9, LINEAR_MOVEMENT(), 14, Math.PI / 7),
                        4,
                        40
                    )
                ]
            )
        },

        {
            frame: 9200,
            enemy: new enemy(
                sprite_glowy_enemies[1],
                -30,
                0,
                'weak',
                2000,
                21,
                0.5,
                2,
                BEZIER_PATH(
                    0.0034,
                    false,
                    [
                        { x: window_width + 20, y: 600 },
                        { x: 210, y: 310 },
                        { x: -20, y: 600 }
                    ]
                ),
                [
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_sparkle_bullets[4], Math.PI / 4, 7, 0.9, LINEAR_MOVEMENT(), 10, Math.PI / 5, Math.PI / 10),
                        0,
                        20
                    )
                ]
            )
        },

        {
            frame: 9600,
            enemy: new enemy(
                sprite_glowy_enemies[4],
                300 - sprite_glowy_enemies[4].width / 2,
                0,
                'weak',
                1200,
                20,
                0.25,
                2,
                LINEAR_PATH('D', 7),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[1], Math.PI),
                        0,
                        4
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[5], 0),
                        0,
                        4
                    )
                ]
            )
        },

        /* BOSS */
        {
            frame: 99999,
            enemy: new boss(
                new enemy(
                    sprite_boss_enemies[0],
                    300 - sprite_boss_enemies[0].width / 2,
                    -30,
                    'boss',
                    88000,
                    1250,
                    0,
                    0
                ),
                [
                    { // PHASE 1
                        health_limit: 50000,
                        path: EASE_PATH(undefined, 340, 1, 7),
                        atk_patterns:
                        [
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                20
                            ),
                            new atk_pattern(
                                ARC_ATTACK(sprite_enemy_sparkle_bullets[2], Math.PI / 2 - Math.PI / 4, 6, 0.6, LINEAR_MOVEMENT(), 32, Math.PI / 16),
                                1,
                                30
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                7
                            ),
                            new atk_pattern(
                                ARC_ATTACK(sprite_enemy_large_round_bullets[2], Math.PI / 2 - Math.PI / 16, 9, 1, ACCELERATED_LINEAR_MOVEMENT(1.009), 16, Math.PI / 8),
                                3,
                                10
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                20
                            ),
                            new atk_pattern(
                                RAND_ATTACK(sprite_enemy_round_bullets[2], 2, 1, LINEAR_MOVEMENT(), 12),
                                20,
                                2
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                20
                            ),
                            new atk_pattern(
                                LINEAR_SHOOT(sprite_enemy_large_round_bullets[2], -1, 6, 3),
                                2,
                                40
                            ),
                        ]
                    },
                    { // PHASE 2
                        health_limit: 20000,
                        path: COMPLEX_PATH
                        (
                            [
                                EASE_PATH(300 - sprite_boss_enemies[0].width / 2, 240, 0, 2, true),
                                JITTERY_PATH('L', 1.8, 1),
                                JITTERY_PATH('R', 1.8, 1)
                            ],
                            [
                                { x: 300 - sprite_boss_enemies[0].width / 2, y: 240, epsilon: 5 },
                                { x: 120, y: 240, epsilon: 30 },
                                { x: window_width - 120, y: 240, epsilon: 30 },
                            ],
                            1,
                            30
                        ),
                        atk_patterns:
                        [
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                30
                            ),
                            new atk_pattern(
                                ARC_ATTACK(sprite_enemy_large_round_bullets[7], Math.PI / 2, 1.02, 0.8, ACCELERATED_LINEAR_MOVEMENT(1.022), 32, Math.PI / 16),
                                20,
                                5,
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                14
                            ),
                            new atk_pattern(
                                SPIRAL_ATTACK(sprite_enemy_large_round_bullets[4], Math.PI / 2, Math.PI / 8, 0.8, 1, ACCELERATED_LINEAR_MOVEMENT(1.02), 16, Math.PI / 8),
                                5,
                                2,
                            ),
                            new atk_pattern(
                                SPIRAL_ATTACK(sprite_enemy_large_round_bullets[5], Math.PI / 2 - Math.PI / 6, Math.PI / 8, 0.8, 0.9, ACCELERATED_LINEAR_MOVEMENT(1.02), 16, Math.PI / 8),
                                5,
                                2,
                            ),
                            new atk_pattern(
                                SPIRAL_ATTACK(sprite_enemy_large_round_bullets[4], Math.PI / 2, Math.PI / 8, 0.8, 1, ACCELERATED_LINEAR_MOVEMENT(1.02), 16, Math.PI / 8),
                                5,
                                2,
                            ),
                            new atk_pattern(
                                SPIRAL_ATTACK(sprite_enemy_large_round_bullets[5], Math.PI / 2 - Math.PI / 6, Math.PI / 8, 0.8, 0.9, ACCELERATED_LINEAR_MOVEMENT(1.02), 16, Math.PI / 8),
                                5,
                                2,
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                14
                            ),
                            new atk_pattern(
                                SPIRAL_ATTACK(sprite_enemy_sparkle_bullets[3], Math.PI / 2, Math.PI / 6, 0.1, 0.9, ACCELERATED_LINEAR_MOVEMENT(1.05), 6, Math.PI / 3),
                                16,
                                7
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                46
                            ),
                            new atk_pattern(
                                LINEAR_SHOOT(sprite_enemy_ellipsoid_crystal_bullets[1], Math.PI / 2, 7, 1.4, ACCELERATED_LINEAR_MOVEMENT(1.05)),
                                12,
                                12
                            ),
                        ]
                    },
                    { // PHASE 3
                        health_limit: 1,
                        path: RAND_BEZIER(),
                        atk_patterns:
                        [
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                45
                            ),
                            new atk_pattern(
                                SPIRAL_ATTACK(sprite_enemy_large_round_bullets[4], Math.PI / 2, Math.PI / 13, 0.4, 0.9, ACCELERATED_LINEAR_MOVEMENT(1.045), 8, Math.PI / 4),
                                16,
                                14
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                60
                            ),
                            new atk_pattern(
                                LINEAR_SHOOT(sprite_enemy_large_ellipsoid_bullets[6], Math.PI / 2, 8, 1.4, ACCELERATED_LINEAR_MOVEMENT(1.045)),
                                3,
                                8
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                33
                            ),
                            new atk_pattern(
                                ARC_ATTACK(
                                    sprite_enemy_outlined_round_bullets[6],
                                    Math.PI / 2,
                                    4,
                                    1.4,
                                    SPLIT_ATTACK(
                                        ARCHED_MOVEMENT(Math.PI / 120, 1.007),
                                        40,
                                        {
                                            sprite: sprite_enemy_round_bullets[0],
                                            direction: Math.PI / 2,
                                            speed: 2.4,
                                            size_multiplier: 1,
                                            behavior: ARCHED_MOVEMENT(Math.PI / 300),
                                            n: 8,
                                            bullet_distance: Math.PI / 4,
                                            max_random_direction: 0
                                        }
                                    )),
                                3,
                                8
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                70
                            ),
                            new atk_pattern(
                                RAND_ATTACK(sprite_enemy_sparkle_bullets, 1.01, 1.1, ARCHED_MOVEMENT(Math.PI / 120, 1.016), 16),
                                1,
                                30
                            ),
                            new atk_pattern(
                                RAND_ATTACK(sprite_enemy_sparkle_bullets, 1.01, 1.1, ARCHED_MOVEMENT(-(Math.PI / 120), 1.016), 16),
                                1,
                                30
                            ),
                            new atk_pattern(
                                RAND_ATTACK(sprite_enemy_sparkle_bullets, 1.01, 1.1, ARCHED_MOVEMENT(Math.PI / 120, 1.016), 16),
                                1,
                                30
                            ),
                            new atk_pattern(
                                RAND_ATTACK(sprite_enemy_sparkle_bullets, 1.01, 1.1, ARCHED_MOVEMENT(-(Math.PI / 120), 1.016), 16),
                                1,
                                30
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                10
                            ),
                        ]
                    },
                    { // DESPERATION
                        health_limit: 0,
                        path: EASE_PATH(300 - sprite_boss_enemies[0].width / 2, 250, 1, 6, false),
                        atk_patterns:
                        [
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                80
                            ),
                            new atk_pattern(
                                SPIRAL_ATTACK(sprite_enemy_star_bullets[4], Math.PI / 4, Math.PI / 20, 1.2, 1, ARCHED_MOVEMENT(Math.PI / 250, 1.01), 2, Math.PI, 0),
                                160,
                                1
                            ),
                            new atk_pattern(
                                LINEAR_SHOOT(sprite_enemy_large_round_bullets[1], -1, 8, 1.2),
                                0,
                                20
                            ),
                            new atk_pattern(
                                SPIRAL_ATTACK(sprite_enemy_star_bullets[5], Math.PI / 4, -(Math.PI / 20), 1.2, 1, LINEAR_MOVEMENT(), 4, Math.PI / 2, 0),
                                40,
                                1
                            ),
                            new atk_pattern(
                                SPIRAL_ATTACK(sprite_enemy_star_bullets[5], Math.PI / 4 - Math.PI / 40, -(Math.PI / 20), 1.2, 1, LINEAR_MOVEMENT(), 4, Math.PI / 2, 0),
                                40,
                                1
                            ),
                            new atk_pattern(
                                SPIRAL_ATTACK(sprite_enemy_star_bullets[5], Math.PI / 4, -(Math.PI / 20), 1.2, 1, LINEAR_MOVEMENT(), 4, Math.PI / 2, 0),
                                40,
                                1
                            ),
                            new atk_pattern(
                                SPIRAL_ATTACK(sprite_enemy_star_bullets[5], Math.PI / 4 - Math.PI / 40, -(Math.PI / 20), 1.2, 1, LINEAR_MOVEMENT(), 4, Math.PI / 2, 0),
                                40,
                                1
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                60
                            ),
                            new atk_pattern(
                                SPIRAL_ATTACK(
                                    sprite_enemy_outlined_round_bullets[6],
                                    Math.PI / 2,
                                    Math.PI / 16,
                                    4,
                                    1.4,
                                    SPLIT_ATTACK(
                                        LINEAR_MOVEMENT(),
                                        32,
                                        {
                                            sprite: sprite_enemy_round_bullets[7],
                                            direction: Math.PI / 2,
                                            speed: 2.2,
                                            size_multiplier: 0.9,
                                            behavior: ARCHED_MOVEMENT(Math.PI / 300),
                                            n: 8,
                                            bullet_distance: Math.PI / 4,
                                            max_random_direction: 0
                                        }
                                    ),
                                ), 16, 3
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                170
                            ),
                            new atk_pattern(
                                RAND_ATTACK(
                                    sprite_enemy_outlined_round_bullets[7],
                                    6,
                                    1,
                                    SPLIT_ATTACK(
                                        ARCHED_MOVEMENT(Math.PI / 260),
                                        30,
                                        {
                                            sprite: sprite_enemy_round_bullets[0],
                                            direction: Math.PI / 2,
                                            speed: 4,
                                            size_multiplier: 0.8,
                                            behavior: LINEAR_MOVEMENT(),
                                            n: 8,
                                            bullet_distance: Math.PI / 4,
                                            max_random_direction: Math.PI / 8
                                        }
                                    ),
                                ),
                                4,
                                24
                            ),
                            new atk_pattern(
                                ARC_ATTACK(sprite_enemy_large_round_bullets[1], Math.PI / 2 + Math.PI / 16, 3, 1.4, ACCELERATED_LINEAR_MOVEMENT(1.04), 16, Math.PI / 2),
                                9,
                                4
                            ),
                            new atk_pattern(
                                RAND_ATTACK(
                                    sprite_enemy_outlined_round_bullets[6],
                                    6,
                                    1,
                                    SPLIT_ATTACK(
                                        ARCHED_MOVEMENT(Math.PI / 240),
                                        27,
                                        {
                                            sprite: sprite_enemy_round_bullets[0],
                                            direction: Math.PI / 2,
                                            speed: 4,
                                            size_multiplier: 0.8,
                                            behavior: LINEAR_MOVEMENT(),
                                            n: 8,
                                            bullet_distance: Math.PI / 4,
                                            max_random_direction: Math.PI / 8
                                        }
                                    ),
                                ),
                                4,
                                24
                            ),
                            new atk_pattern(
                                ARC_ATTACK(sprite_enemy_large_round_bullets[1], Math.PI / 2 + Math.PI / 16 - Math.PI / 4, 3, 1.4, ACCELERATED_LINEAR_MOVEMENT(1.04), 16, Math.PI / 2),
                                9,
                                4
                            ),
                            new atk_pattern(
                                RAND_ATTACK(
                                    sprite_enemy_outlined_round_bullets[5],
                                    6,
                                    1,
                                    SPLIT_ATTACK(
                                        ARCHED_MOVEMENT(Math.PI / 220),
                                        24,
                                        {
                                            sprite: sprite_enemy_round_bullets[0],
                                            direction: Math.PI / 2,
                                            speed: 4,
                                            size_multiplier: 0.8,
                                            behavior: LINEAR_MOVEMENT(),
                                            n: 8,
                                            bullet_distance: Math.PI / 4,
                                            max_random_direction: Math.PI / 8
                                        }
                                    ),
                                ),
                                4,
                                24
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                130
                            ),
                            new atk_pattern(
                                RAND_ATTACK(sprite_enemy_star_bullets, 8, 1.07, LINEAR_MOVEMENT()),
                                300,
                                2
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                30
                            ),
                            new atk_pattern(
                                CHANGE_TO_SHAKY_PATH(),
                                0,
                                1
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                100
                            ),
                            new atk_pattern(
                                FINISH_DESPERATION(),
                                0,
                                1
                            ),
                        ]
                    }
                ]
            )
        }
        /* BOSS */
    ];
}



/* ######################### HARD ######################### */
function define_enemy_spawn_info_hard() {
    enemy_spawns_hard = [
        {
            frame: 20,
            enemy: new enemy(
                sprite_minor_enemies[1],
                -30,
                0,
                'weak',
                100,
                10,
                0.25,
                1,
                BEZIER_PATH(
                    0.0030,
                    false,
                    [
                        { x: -20, y: 300 },
                        { x: 200, y: 430 },
                        { x: window_width + 20, y: 100 },
                    ]
                ),
                [
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_round_bullets[3], Math.PI / 2 - Math.PI / 4, 6, 1, LINEAR_MOVEMENT(), 8, Math.PI / 8),
                        0,
                        29
                    ),
                ]
            )
        },
        {
            frame: 20,
            enemy: new enemy(
                sprite_minor_enemies[1],
                -30,
                0,
                'weak',
                100,
                10,
                0.25,
                1,
                BEZIER_PATH(
                    0.0030,
                    false,
                    [
                        { x: window_width + 20, y: 300 },
                        { x: 400, y: 430 },
                        { x: -20, y: 100 },
                    ]
                ),
                [
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_round_bullets[3], -(Math.PI / 2 - 2 * Math.PI / 4), 6, 1, LINEAR_MOVEMENT(), 8, Math.PI / 8),
                        0,
                        29
                    ),
                ]
            )
        },

        {
            frame: 260,
            enemy: new enemy(
                sprite_minor_enemies[2],
                -30,
                0,
                'weak',
                120,
                10,
                0.25,
                1,
                BEZIER_PATH(
                    0.0026,
                    false,
                    [
                        { x: 330, y: -20 },
                        { x: 200, y: 530 },
                        { x: -20, y: 60 },
                    ]
                ),
                [
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_round_bullets[1], 8, 1, LINEAR_MOVEMENT(), 6),
                        0,
                        19
                    )
                ]
            )
        },
        {
            frame: 320,
            enemy: new enemy(
                sprite_minor_enemies[2],
                -30,
                0,
                'weak',
                120,
                10,
                0.25,
                1,
                BEZIER_PATH(
                    0.0026,
                    false,
                    [
                        { x: 260, y: -20 },
                        { x: 400, y: 330 },
                        { x: window_width + 20, y: 120 },
                    ]
                ),
                [
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_round_bullets[1], 8, 1, LINEAR_MOVEMENT(), 6),
                        0,
                        19
                    )
                ]
            )
        },

        {
            frame: 600,
            enemy: new enemy(
                sprite_minor_enemies[8],
                -30,
                0,
                'weak',
                120,
                12,
                0.25,
                2,
                BEZIER_PATH(
                    0.003,
                    false,
                    [
                        { x: -20, y: -20 },
                        { x: 330, y: 330 },
                        { x: window_width + 20, y: 660 },
                    ]
                ),
                [
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_star_bullets[6]),
                        0,
                        4
                    ),
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_star_bullets[4], 7),
                        0,
                        5
                    )
                ]
            )
        },

        {
            frame: 1100,
            enemy: new enemy(
                sprite_glowy_enemies[0],
                300 - sprite_glowy_enemies[0].width / 2,
                -20,
                'moderate',
                700,
                29,
                0.5,
                2,
                EASE_PATH(undefined, 200, 1, 5),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_large_round_bullets[2], -1, 4, 1.1),
                        0,
                        35,
                    )
                ]
            )
        },
        {
            frame: 1100,
            enemy: new enemy(
                sprite_minor_enemies[3],
                -20,
                300,
                'weak',
                177,
                10,
                0.25,
                1,
                JITTERY_PATH('R', 3, 1, 0.7),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_ellipsoid_crystal_bullets[5], Math.PI / 2, 7, 1.2),
                        0,
                        10,
                    )
                ]
            )
        },
        {
            frame: 1100,
            enemy: new enemy(
                sprite_minor_enemies[3],
                window_width + 20,
                350,
                'weak',
                177,
                10,
                0.25,
                1,
                JITTERY_PATH('L', 3, 1, 0.7),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_ellipsoid_crystal_bullets[5], Math.PI / 2, 7, 1.2),
                        0,
                        10,
                    )
                ]
            )
        },
        {
            frame: 1400,
            enemy: new enemy(
                sprite_minor_enemies[3],
                -20,
                300,
                'weak',
                177,
                10,
                0.25,
                1,
                JITTERY_PATH('R', 3, 1, 0.7),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_ellipsoid_crystal_bullets[5], Math.PI / 2, 7, 1.2),
                        0,
                        10,
                    )
                ]
            )
        },
        {
            frame: 1400,
            enemy: new enemy(
                sprite_minor_enemies[3],
                window_width + 20,
                350,
                'weak',
                177,
                10,
                0.25,
                1,
                JITTERY_PATH('L', 3, 1, 0.7),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_ellipsoid_crystal_bullets[5], Math.PI / 2, 7, 1.2),
                        0,
                        10,
                    )
                ]
            )
        },

        {
            frame: 1900,
            enemy: new enemy(
                sprite_minor_enemies[3],
                -30,
                0,
                'weak',
                311,
                12,
                0.25,
                1,
                BEZIER_PATH(
                    0.003,
                    false,
                    [
                        { x: -20, y: 400 },
                        { x: 440, y: 280 },
                        { x: window_width + 20, y: 320 },
                    ]
                ),
                [
                    new atk_pattern(
                        SPIRAL_ATTACK(sprite_enemy_star_bullets[4], Math.PI / 2, Math.PI / 8, 4, 1, LINEAR_MOVEMENT(), 12, Math.PI / 24),
                        0,
                        7,
                    )
                ]
            )
        },
        {
            frame: 1900,
            enemy: new enemy(
                sprite_minor_enemies[3],
                -30,
                0,
                'weak',
                311,
                12,
                0.25,
                1,
                BEZIER_PATH(
                    0.003,
                    false,
                    [
                        { x: 330, y: -20 },
                        { x: 220, y: 210 },
                        { x: -20, y: 320 },
                    ]
                ),
                [
                    new atk_pattern(
                        SPIRAL_ATTACK(sprite_enemy_star_bullets[4], Math.PI / 2, Math.PI / 8, 4, 1, LINEAR_MOVEMENT(), 12, Math.PI / 24),
                        0,
                        7,
                    )
                ]
            )
        },

        {
            frame: 2350,
            enemy: new enemy(
                sprite_minor_enemies[2],
                150,
                -20,
                'weak',
                355,
                12,
                0.25,
                1,
                LINEAR_PATH("D", 2.6),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[1], 0, 5, 1.2),
                        2,
                        7,
                    ),
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_large_round_bullets[1], 0, 4, 1),
                        0,
                        12,
                    ),
                ]
            )
        },
        {
            frame: 2350,
            enemy: new enemy(
                sprite_minor_enemies[2],
                450,
                -20,
                'weak',
                355,
                12,
                0.25,
                1,
                LINEAR_PATH("D", 2.6),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[1], Math.PI, 5, 1.2),
                        2,
                        7,
                    ),
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_large_round_bullets[1], 0, 4, 1),
                        0,
                        12,
                    ),
                ]
            )
        },

        {
            frame: 2750,
            enemy: new enemy(
                sprite_minor_enemies[1],
                -30,
                0,
                'weak',
                480,
                12,
                0.25,
                1,
                BEZIER_PATH(
                    0.0034,
                    false,
                    [
                        { x: 400, y: -20 },
                        { x: 520, y: 500 },
                        { x: window_width + 20, y: 320 },
                    ]
                ),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[5], Math.PI / 2, 10, 1.1),
                        0,
                        3,
                    ),
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_large_round_bullets[4], 5, 2, ACCELERATED_LINEAR_MOVEMENT(1.006)),
                        0,
                        21,
                    ),
                ]
            )
        },
        {
            frame: 2950,
            enemy: new enemy(
                sprite_minor_enemies[1],
                -30,
                0,
                'weak',
                480,
                12,
                0.25,
                1,
                BEZIER_PATH(
                    0.0034,
                    false,
                    [
                        { x: 200, y: -20 },
                        { x: 120, y:100 },
                        { x: -20, y: 320 },
                    ]
                ),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[5], Math.PI / 2, 10, 1.1),
                        0,
                        3,
                    ),
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_large_round_bullets[4], 5, 2, ACCELERATED_LINEAR_MOVEMENT(1.006)),
                        0,
                        21,
                    ),
                ]
            )
        },

        {
            frame: 3400,
            enemy: new enemy(
                sprite_minor_enemies[0],
                -30,
                0,
                'moderate',
                1100,
                36,
                0.5,
                2,
                BEZIER_PATH(
                    0.0027,
                    false,
                    [
                        { x: 600, y: -20 },
                        { x: 400, y: 560 },
                        { x: -20, y: 420 },
                    ]
                ),
                [
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_sparkle_bullets[5], 4, 1, ARCHED_MOVEMENT(Math.PI / 120, 1.006), 10),
                        0,
                        14,
                    ),
                ]
            )
        },

        /* MAJOR */
        {
            frame: 3900,
            enemy: new enemy(
                sprite_major_enemies[2],
                300 - sprite_major_enemies[2].width / 2,
                -20,
                'strong',
                3600,
                62,
                1,
                8,
                EASE_PATH(undefined, 330, 1, 5),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        12,
                    ),
                    new atk_pattern(
                        SPIRAL_ATTACK(sprite_enemy_large_round_bullets[1], Math.PI / 2, Math.PI / 36, 4, 1, LINEAR_MOVEMENT(), 18, Math.PI / 9),
                        0,
                        2,
                    ),
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_large_round_bullets[2], 5, 2, ACCELERATED_LINEAR_MOVEMENT(1.006), 6),
                        0,
                        3,
                    ),
                ]
            )
        },
        /* MAJOR */

        {
            frame: 4000,
            enemy: new enemy(
                sprite_minor_enemies[5],
                -30,
                0,
                'weak',
                550,
                15,
                0.25,
                1,
                BEZIER_PATH(
                    0.0026,
                    false,
                    [
                        { x: -20, y: 400 },
                        { x: 300, y: 450 },
                        { x: window_width + 20, y: 300 },
                    ]
                ),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        0,
                        22,
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[4], -1, 7, 1.05, LINEAR_MOVEMENT(), Math.PI / 8),
                        4,
                        1,
                    )
                ]
            )
        },
        {
            frame: 4000,
            enemy: new enemy(
                sprite_minor_enemies[6],
                -30,
                0,
                'weak',
                550,
                15,
                0.25,
                1,
                BEZIER_PATH(
                    0.0026,
                    false,
                    [
                        { x: window_width + 20, y: 400 },
                        { x: 370, y: 330 },
                        { x: -20, y: 200 },
                    ]
                ),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        0,
                        44,
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[1], -1, 7, 1.05, LINEAR_MOVEMENT(), Math.PI / 8),
                        4,
                        1,
                    )
                ]
            )
        },
        {
            frame: 4000,
            enemy: new enemy(
                sprite_minor_enemies[6],
                -30,
                0,
                'weak',
                550,
                15,
                0.25,
                1,
                BEZIER_PATH(
                    0.0026,
                    false,
                    [
                        { x: 280, y: -20 },
                        { x: 440, y: 460 },
                        { x: window_width + 20, y: 600 },
                    ]
                ),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        0,
                        32,
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[2], -1, 7, 1.05, LINEAR_MOVEMENT(), Math.PI / 8),
                        4,
                        1,
                    )
                ]
            )
        },

        {
            frame: 4470,
            enemy: new enemy(
                sprite_minor_enemies[8],
                -30,
                0,
                'weak',
                620,
                15,
                0.25,
                1,
                BEZIER_PATH(
                    0.0026,
                    false,
                    [
                        { x: 560, y: -20 },
                        { x: 220, y: 180 },
                        { x: window_width + 20, y: 600 },
                    ]
                ),
                [
                    new atk_pattern(
                        SPIRAL_ATTACK(sprite_enemy_round_bullets[6], Math.PI / 2, Math.PI / 4, 7, 1.05, LINEAR_MOVEMENT(), 6, Math.PI / 6),
                        0,
                        7,
                    )
                ]
            )
        },
        {
            frame: 4600,
            enemy: new enemy(
                sprite_minor_enemies[8],
                -30,
                0,
                'weak',
                620,
                15,
                0.25,
                1,
                BEZIER_PATH(
                    0.0026,
                    false,
                    [
                        { x: -20, y: 600 },
                        { x: 460, y: 180 },
                        { x: -20, y: -20 },
                    ]
                ),
                [
                    new atk_pattern(
                        SPIRAL_ATTACK(sprite_enemy_round_bullets[6], Math.PI / 2, Math.PI / 4, 7, 1.05, LINEAR_MOVEMENT(), 6, Math.PI / 6),
                        0,
                        7,
                    )
                ]
            )
        },

        {
            frame: 5050,
            enemy: new enemy(
                sprite_glowy_enemies[4],
                200,
                -20,
                'moderate',
                2100,
                41,
                0.5,
                2,
                COMPLEX_PATH
                (
                    [
                        EASE_PATH(undefined, 260, 0, 2, true),
                        JITTERY_PATH('L', 2.4, 1),
                        JITTERY_PATH('R', 2.4, 1)
                    ],
                    [
                        { x: 200, y: 260, epsilon: 5 },
                        { x: 100, y: 260, epsilon: 30 },
                        { x: 400, y: 260, epsilon: 30 },
                    ],
                    1
                ),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        60,
                        1,
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[4], -1, 6, 1, ACCELERATED_LINEAR_MOVEMENT(1.006), Math.PI / 4),
                        5,
                        1,
                    )
                ]
            )
        },
        {
            frame: 5050,
            enemy: new enemy(
                sprite_glowy_enemies[5],
                400,
                -20,
                'moderate',
                2100,
                41,
                0.5,
                2,
                COMPLEX_PATH
                (
                    [
                        EASE_PATH(undefined, 360, 0, 3, true),
                        JITTERY_PATH('R', 2.4, 1),
                        JITTERY_PATH('L', 2.4, 1),
                    ],
                    [
                        { x: 400, y: 360, epsilon: 5 },
                        { x: 500, y: 360, epsilon: 30 },
                        { x: 100, y: 360, epsilon: 30 },
                    ],
                    1
                ),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        60,
                    ),
                    new atk_pattern(
                        SPIRAL_ATTACK(sprite_enemy_round_bullets[1], 0, Math.PI / 16, 7, 1.05, LINEAR_MOVEMENT(), 2, Math.PI / 64),
                        64,
                        1,
                    )
                ]
            )
        },

        {
            frame: 6000,
            enemy: new enemy(
                sprite_minor_enemies[6],
                -30,
                0,
                'weak',
                680,
                17,
                0.25,
                1,
                BEZIER_PATH(
                    0.0031,
                    false,
                    [
                        { x: window_width + 20, y: 400 },
                        { x: 220, y: 100 },
                        { x: -20, y: 300 },
                    ]
                ),
                [
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_star_bullets[1], 6, 1.6, ARCHED_MOVEMENT(-(Math.PI / 240), 1.0025), 3),
                        0,
                        11,
                    )
                ]
            )
        },
        {
            frame: 6100,
            enemy: new enemy(
                sprite_minor_enemies[5],
                -30,
                0,
                'weak',
                680,
                17,
                0.25,
                1,
                BEZIER_PATH(
                    0.0031,
                    false,
                    [
                        { x: -20, y: 100 },
                        { x: 440, y: 320 },
                        { x: window_width + 20, y: 220 },
                    ]
                ),
                [
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_star_bullets[4], 6, 1.6, ARCHED_MOVEMENT(-(Math.PI / 240), 1.0025), 3),
                        0,
                        11,
                    )
                ]
            )
        },

        {
            frame: 6600,
            enemy: new enemy(
                sprite_minor_enemies[7],
                -30,
                0,
                'weak',
                780,
                15,
                0.25,
                1,
                BEZIER_PATH(
                    0.0022,
                    false,
                    [
                        {x: 300, y: -20},
                        {x: 250, y: 120},
                        {x: -20, y: 360},
                    ]
                ),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[3], Math.PI / 2, 8, 1.2, ARCHED_MOVEMENT(Math.PI / 360), Math.PI / 4),
                        0,
                        2,
                    )
                ]
            ),
        },
        {
            frame: 6600,
            enemy: new enemy(
                sprite_minor_enemies[7],
                -30,
                0,
                'weak',
                780,
                15,
                0.25,
                1,
                BEZIER_PATH(
                    0.0022,
                    false,
                    [
                        { x: 400, y: -20 },
                        { x: 250, y: 190 },
                        { x: window_width + 20, y: 390 },
                    ]
                ),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[4], Math.PI / 2, 8, 1.2, ARCHED_MOVEMENT(Math.PI / 360), Math.PI / 4),
                        0,
                        2,
                    )
                ]
            )
        },
        {
            frame: 6600,
            enemy: new enemy(
                sprite_minor_enemies[7],
                -30,
                0,
                'weak',
                780,
                15,
                0.25,
                1,
                BEZIER_PATH(
                    0.0022,
                    false,
                    [
                        { x: 260, y: -10 },
                        { x: 520, y: 120 },
                        { x: -20, y: 220 },
                    ]
                ),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[5], Math.PI / 2, 8, 1.2, ARCHED_MOVEMENT(Math.PI / 360), Math.PI / 4),
                        0,
                        2,
                    )
                ]
            )
        },

        /* MAJOR */
        {
            frame: 7200,
            enemy: new enemy(
                sprite_major_enemies[3],
                300 - sprite_major_enemies[3].width / 2,
                -20,
                'strong',
                13000,
                81,
                1.25,
                10,
                COMPLEX_PATH(
                    [
                        EASE_PATH(300 - sprite_glowy_enemies[1].width / 2, 300, 1, 7),
                        RAND_BEZIER(),
                    ],
                    [
                        { x: 300 - sprite_glowy_enemies[1].width / 2, y: 300 },
                        { x: -1, y: -1 }
                    ],
                    1,
                    20
                ),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        64,
                    ),
                    new atk_pattern(
                        ARC_ATTACK(
                        sprite_enemy_outlined_round_bullets[7],
                            Math.PI / 2,
                            6,
                            1.3,
                            SPLIT_ATTACK(
                                ARCHED_MOVEMENT(Math.PI / 120),
                                40,
                                {
                                    sprite: sprite_enemy_round_bullets[6],
                                    direction: Math.PI / 2,
                                    speed: 1.2,
                                    size_multiplier: 1,
                                    behavior: ARCHED_MOVEMENT(Math.PI / 320, 1),
                                    n: 8,
                                    bullet_distance: Math.PI / 4,
                                    max_random_direction: 0
                                }
                            ),
                            8,
                            Math.PI / 4
                        ),
                        0,
                        1,
                    ),
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        38,
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_star_bullets[2], -1, 7, 1.4),
                        6,
                        18,
                    ),
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        38,
                    ),
                    new atk_pattern(
                        ARC_ATTACK(
                            sprite_enemy_outlined_round_bullets[7],
                            Math.PI / 2,
                            6,
                            1.3,
                            SPLIT_ATTACK(
                                ARCHED_MOVEMENT(Math.PI / 120),
                                40,
                                {
                                    sprite: sprite_enemy_large_round_bullets[2],
                                    direction: Math.PI / 2,
                                    speed: 3.4,
                                    size_multiplier: 1.6,
                                    behavior: ARCHED_MOVEMENT(Math.PI / 180, 1.005),
                                    n: 4,
                                    bullet_distance: Math.PI / 2,
                                    max_random_direction: 0
                                }
                            ),
                            8,
                            Math.PI / 4
                        ),
                        0,
                        1,
                    ),
                ]
            )
        },
        /* MAJOR */

        {
            frame: 7250,
            enemy: new enemy(
                sprite_glowy_enemies[1],
                -20,
                100,
                'weak',
                911,
                22,
                0.25,
                1,
                JITTERY_PATH('R', 2.4, 1, 0.7),
                [
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_round_bullets[1], Math.PI / 2, 8, 1.2, LINEAR_MOVEMENT(), 16, Math.PI / 8),
                        0,
                        48
                    )
                ]
            )
        },
        {
            frame: 7250,
            enemy: new enemy(
                sprite_glowy_enemies[2],
                window_width + 20,
                200,
                'weak',
                911,
                22,
                0.25,
                1,
                JITTERY_PATH('L', 2.4, 1, 0.7),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_ellipsoid_crystal_bullets[3], Math.PI / 2, 7, 1.2),
                        0,
                        14
                    )
                ]
            )
        },
        {
            frame: 7250,
            enemy: new enemy(
                sprite_glowy_enemies[2],
                -20,
                300,
                'weak',
                911,
                22,
                0.25,
                1,
                JITTERY_PATH('R', 2.4, 1, 0.7),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_ellipsoid_crystal_bullets[3], Math.PI / 2, 7, 1.2),
                        0,
                        14
                    )
                ]
            )
        },
        {
            frame: 7250,
            enemy: new enemy(
                sprite_glowy_enemies[1],
                window_width + 20,
                400,
                'weak',
                911,
                23,
                0.25,
                1,
                JITTERY_PATH('L', 2.4, 1, 0.7),
                [
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_round_bullets[1], Math.PI / 2, 8, 1.2, LINEAR_MOVEMENT(), 16, Math.PI / 8),
                        0,
                        48
                    )
                ]
            )
        },

        {
            frame: 7600,
            enemy: new enemy(
                sprite_glowy_enemies[5],
                300 + sprite_glowy_enemies[5].width / 2,
                -20,
                'moderate',
                2900,
                55,
                0.5,
                3,
                EASE_PATH(undefined, 400, 1, 5),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        0,
                        28
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_large_round_bullets[0], -1, 8, 1.2, LINEAR_MOVEMENT(),Math.PI / 12),
                        4,
                        10
                    ),
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_star_bullets[7], 8, 1.2, LINEAR_MOVEMENT(), 33),
                        0,
                        40
                    )
                ]
            )
        },
        {
            frame: 7600,
            enemy: new enemy(
                sprite_glowy_enemies[0],
                -30,
                0,
                'weak',
                999,
                21,
                0.25,
                1,
                BEZIER_PATH(
                    0.0035,
                    false,
                    [
                        { x: -20, y: 222 },
                        { x: 290, y: 560 },
                        { x: window_width + 20, y: 292 },
                    ]
                ),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_large_ellipsoid_bullets[5], Math.PI / 2, 7, 1.5, ACCELERATED_LINEAR_MOVEMENT(1.006)),
                        0,
                        15,
                    )
                ]
            )
        },

        {
            frame: 8500,
            enemy: new enemy(
                sprite_glowy_enemies[2],
                -30,
                0,
                'weak',
                1200,
                23,
                0.25,
                1,
                BEZIER_PATH(
                    0.003,
                    false,
                    [
                        { x: 222, y: -30 },
                        { x: 411, y: 300 },
                        { x: window_width + 20, y: 600 },
                    ]
                ),
                [
                    new atk_pattern(
                        SPIRAL_ATTACK(sprite_enemy_star_bullets[3], Math.PI / 2, Math.PI / 32, 3, 0.7, ACCELERATED_LINEAR_MOVEMENT(1.001)),
                        0,
                        1,
                    )
                ]
            )
        },
        {
            frame: 8500,
            enemy: new enemy(
                sprite_glowy_enemies[2],
                -30,
                0,
                'weak',
                1200,
                22,
                0.25,
                1,
                BEZIER_PATH(
                    0.003,
                    false,
                    [
                        { x: 444, y: -30 },
                        { x: 266, y: 340 },
                        { x: -20, y: 660 },
                    ]
                ),
                [
                    new atk_pattern(
                        SPIRAL_ATTACK(sprite_enemy_star_bullets[3], Math.PI / 2, Math.PI / 32, 3, 0.7, ACCELERATED_LINEAR_MOVEMENT(1.001)),
                        0,
                        1,
                    )
                ]
            )
        },

        {
            frame: 9100,
            enemy: new enemy(
                sprite_glowy_enemies[3],
                -30,
                0,
                'weak',
                1555,
                24,
                0.25,
                2,
                BEZIER_PATH(
                    0.003,
                    false,
                    [
                        { x: -20, y: 500 },
                        { x: 400, y: 100 },
                        { x: window_width + 20, y: 660 },
                    ]
                ),
                [
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_star_bullets[2], 6, 1.1, ARCHED_MOVEMENT(Math.PI / 400), 2),
                        6,
                        5,
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[2], -1, 4, 1.3, ARCHED_MOVEMENT(-(Math.PI / 420)), Math.PI / 8),
                        4,
                        5,
                    )
                ]
            )
        },

        {
            frame: 9450,
            enemy: new enemy(
                sprite_glowy_enemies[0],
                -30,
                0,
                'weak',
                1200,
                24,
                0.25,
                1,
                BEZIER_PATH(
                    0.004,
                    false,
                    [
                        { x: 200, y: -20 },
                        { x: 100, y: 400 },
                        { x: -20, y: 660 },
                    ]
                ),
                [
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_round_bullets[5], 5, 1.1, ARCHED_MOVEMENT(Math.PI / 500), 1),
                        30,
                        1,
                    ),
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        20,
                    ),
                ]
            )
        },
        {
            frame: 9450,
            enemy: new enemy(
                sprite_glowy_enemies[3],
                -30,
                0,
                'weak',
                1200,
                24,
                0.25,
                1,
                BEZIER_PATH(
                    0.004,
                    false,
                    [
                        { x: 400, y: -20 },
                        { x: 500, y: 400 },
                        { x: window_width + 20, y: 660 },
                    ]
                ),
                [
                    new atk_pattern(
                        RAND_ATTACK(sprite_enemy_round_bullets[2], 7, 1.1, LINEAR_MOVEMENT(), 1),
                        20,
                        2,
                    ),
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        10,
                    ),
                ]
            )
        },

        /* MAJOR */
        {
            frame: 9800,
            enemy: new enemy(
                sprite_glowy_enemies[4],
                300 - sprite_glowy_enemies[4].width / 2,
                -20,
                'strong',
                25000,
                120,
                1.5,
                15,
                EASE_PATH(300 - sprite_glowy_enemies[4].width / 2, 300, 1, 7),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        30,
                    ),
                    new atk_pattern(
                        SPIRAL_ATTACK(sprite_enemy_large_round_bullets[5], Math.PI / 2, Math.PI / 32, 1, 0.6, ARCHED_MOVEMENT(-(Math.PI / 400), 1.0125), 8, Math.PI / 4),
                        12,
                        1
                    ),
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        30,
                    ),
                    new atk_pattern(
                        SPIRAL_ATTACK(sprite_enemy_large_round_bullets[4], Math.PI / 2, Math.PI / 2, 1, 0.7, ARCHED_MOVEMENT(Math.PI / 400, 1.0125), 8, Math.PI / 32),
                        11,
                        1
                    ),
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        30,
                    ),
                    new atk_pattern(
                        SPIRAL_ATTACK(sprite_enemy_large_round_bullets[5], Math.PI / 2, Math.PI / 8, 1, 0.9, ARCHED_MOVEMENT(-(Math.PI / 400), 1.0125), 32, Math.PI / 16),
                        4,
                        1
                    ),
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        30,
                    ),
                    new atk_pattern(
                        SPIRAL_ATTACK(sprite_enemy_large_round_bullets[4], Math.PI, Math.PI / 3, 1, 0.7, ARCHED_MOVEMENT(-(Math.PI / 400), 1.0125), 8, Math.PI / 32),
                        11,
                        1
                    ),
                ]
            )
        },
        /* MAJOR */

        {
            frame: 9850,
            enemy: new enemy(
                sprite_glowy_enemies[0],
                -30,
                0,
                'weak',
                1800,
                31,
                0.25,
                2,
                BEZIER_PATH(
                    0.0019,
                    false,
                    [
                        { x: -20, y: 30 },
                        { x: 270, y: 340 },
                        { x: window_width + 20, y: 500 },
                    ]
                ),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[4], Math.PI, 5, 1.2, ARCHED_MOVEMENT(-(Math.PI / 220)), -Math.PI / 14),
                        0,
                        6,
                    )
                ]
            )
        },
        {
            frame: 9850,
            enemy: new enemy(
                sprite_glowy_enemies[0],
                -30,
                0,
                'weak',
                1420,
                29,
                0.25,
                2,
                BEZIER_PATH(
                    0.0023,
                    false,
                    [
                        { x: -20, y: 500 },
                        { x: 360, y: 400 },
                        { x: window_width + 20, y: 600 },
                    ]
                ),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        33,
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[5], -1, 6, 1.2, ARCHED_MOVEMENT(Math.PI / 360), Math.PI / 2),
                        7,
                        1,
                    )
                ]
            )
        },

        {
            frame: 10500,
            enemy: new enemy(
                sprite_glowy_enemies[1],
                -30,
                0,
                'moderate',
                4200,
                66,
                0.75,
                4,
                BEZIER_PATH(
                    0.0021,
                    false,
                    [
                        { x: window_width + 20, y: 300 },
                        { x: 360, y: 500 },
                        { x: 120, y: -30 },
                    ]
                ),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        26,
                    ),
                    new atk_pattern(
                        RAND_ATTACK(
                            sprite_enemy_outlined_round_bullets[1],
                            6,
                            1.2,
                            SPLIT_ATTACK(
                                ARCHED_MOVEMENT(Math.PI / 33),
                                10,
                                {
                                    sprite: sprite_enemy_round_bullets[1],
                                    direction: Math.PI / 2,
                                    speed: 6,
                                    size_multiplier: 1,
                                    behavior: ARCHED_MOVEMENT(Math.PI / 250),
                                    n: 16,
                                    bullet_distance: Math.PI / 8,
                                    max_random_direction: 0
                                }
                            ),
                        ), 4, 26
                    ),
                ]
            )
        },

        {
            frame: 11300,
            enemy: new enemy(
                sprite_glowy_enemies[0],
                -30,
                0,
                'weak',
                1650,
                33,
                0.25,
                2,
                BEZIER_PATH(
                    0.0026,
                    false,
                    [
                        { x: 600, y: -20 },
                        { x: 220, y: 240 },
                        { x: -20, y: 400 },
                    ]
                ),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        10,
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[5], -1, 6, 1.2, FOLLOWING_ARCHED_MOVEMENT(Math.PI / 12), Math.PI / 2),
                        0,
                        25,
                    ),
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_sparkle_bullets[5], 0, 5, 1.1, ACCELERATED_LINEAR_MOVEMENT(1.005), 64, Math.PI / 32),
                        7,
                        3,
                    )
                ]
            )
        },
        {
            frame: 11350,
            enemy: new enemy(
                sprite_glowy_enemies[2],
                -30,
                0,
                'weak',
                1650,
                33,
                0.25,
                2,
                BEZIER_PATH(
                    0.0022,
                    false,
                    [
                        { x: -20, y: 420 },
                        { x: 300, y: 340 },
                        { x: 660, y: -20 },
                    ]
                ),
                [
                    new atk_pattern(
                        NO_PATTERN(),
                        1,
                        27,
                    ),
                    new atk_pattern(
                        ARC_ATTACK(sprite_enemy_sparkle_bullets[3], 0, 5, 1.1, ACCELERATED_LINEAR_MOVEMENT(1.005), 32),
                        3,
                        3,
                    )
                ]
            )
        },

        {
            frame: 12100,
            enemy: new enemy(
                sprite_glowy_enemies[4],
                300 - sprite_glowy_enemies[4].width / 2,
                0,
                'weak',
                2000,
                32,
                0.25,
                2,
                LINEAR_PATH('D', 7),
                [
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[1], Math.PI, 5, 1.1),
                        0,
                        3
                    ),
                    new atk_pattern(
                        LINEAR_SHOOT(sprite_enemy_round_bullets[5], 0, 5, 1.1),
                        0,
                        3
                    )
                ]
            )
        },

        /* BOSS */
        {
            frame: 99999,
            enemy: new boss(
                new enemy(
                    sprite_boss_enemies[1],
                    300 - sprite_boss_enemies[1].width / 2,
                    -30,
                    'boss',
                    100000,
                    2000,
                    0,
                    0
                ),
                [
                    { // PHASE 1
                        health_limit: 55000,
                        path: EASE_PATH(undefined, 340, 1, 7),
                        atk_patterns:
                        [
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                45
                            ),
                            new atk_pattern(
                                RAND_ATTACK(sprite_enemy_round_bullets[6], 5, 1.2, ARCHED_MOVEMENT(Math.PI / 600, 1), 6),
                                15,
                                1
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                15
                            ),
                            new atk_pattern(
                                LINEAR_SHOOT(sprite_enemy_large_round_bullets[4], -1, 7, 1, FOLLOWING_ARCHED_MOVEMENT(Math.PI / 300, 0.5, 70, 1.002, 1.007)),
                                0,
                                10
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                15
                            ),
                            new atk_pattern(
                                SPIRAL_ATTACK(sprite_enemy_star_bullets[7], Math.PI / 2, Math.PI / 16, 2, 1.2, ARCHED_MOVEMENT(-(Math.PI / 150), 1.002), 16, Math.PI / 8),
                                0,
                                2
                            ),
                        ]
                    },
                    { // PHASE 2
                        health_limit: 22500,
                        path: RAND_BEZIER(),
                        atk_patterns:
                        [
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                30
                            ),
                            new atk_pattern(
                                RAND_ATTACK(
                                    sprite_enemy_outlined_round_bullets[1],
                                    2.6,
                                    1.2,
                                    SPLIT_ATTACK(
                                        LINEAR_MOVEMENT(),
                                        40,
                                        {
                                            sprite: sprite_enemy_round_bullets[2],
                                            direction: Math.PI / 2,
                                            speed: 3,
                                            size_multiplier: 1,
                                            behavior: SPLIT_ATTACK(
                                                LINEAR_MOVEMENT(),
                                                30,
                                                {
                                                    sprite: sprite_enemy_round_bullets[0],
                                                    direction: Math.PI / 2,
                                                    speed: 2,
                                                    size_multiplier: 1,
                                                    behavior: LINEAR_MOVEMENT(),
                                                    n: 4,
                                                    bullet_distance: Math.PI / 2,
                                                    max_random_direction: 0
                                                }
                                            ),
                                            n: 6,
                                            bullet_distance: Math.PI / 3,
                                            max_random_direction: 0
                                        }
                                    ),
                                    6
                                ), 0, 60
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                50
                            ),
                            new atk_pattern(
                                LINEAR_SHOOT(sprite_enemy_large_round_bullets[5], -1, 4.6, 1.2, LINEAR_MOVEMENT(), Math.PI / 6),
                                3,
                                20
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                15
                            ),
                            new atk_pattern(
                                SPIRAL_ATTACK(sprite_enemy_large_round_bullets[1], 0, Math.PI / 32, 3, 1, ACCELERATED_LINEAR_MOVEMENT(1.02), 8, Math.PI / 4),
                                5,
                                7
                            ),
                            new atk_pattern(
                                NO_PATTERN(),
                                1,
                                15
                            ),
                            new atk_pattern(
                                SPIRAL_ATTACK(sprite_enemy_round_bullets[1], 0, Math.PI / 32, 4, 1, ARCHED_MOVEMENT(Math.PI / 160), 16, Math.PI / 8),
                                3,
                                7
                            )
                        ]
                    },
                    { // PHASE 3
                        health_limit: 1,
                        path: COMPLEX_PATH
                        (
                            [
                                EASE_PATH(300 - sprite_boss_enemies[0].width / 2, 240, 0, 2, true),
                                JITTERY_PATH('L', 1.8, 1),
                                JITTERY_PATH('R', 1.8, 1)
                            ],
                            [
                                { x: 300 - sprite_boss_enemies[0].width / 2, y: 240, epsilon: 5 },
                                { x: 120, y: 240, epsilon: 30 },
                                { x: window_width - 120, y: 240, epsilon: 30 },
                            ],
                            1,
                            30
                        ),
                        atk_patterns:
                            [
                                new atk_pattern(
                                    NO_PATTERN(),
                                    1,
                                    30
                                ),
                                new atk_pattern(
                                    SPIRAL_ATTACK(sprite_enemy_large_round_bullets[1], 0, Math.PI / 64, 3, 1, ACCELERATED_LINEAR_MOVEMENT(1.06), 16, Math.PI / 8),
                                    6,
                                    5
                                ),
                                new atk_pattern(
                                    NO_PATTERN(),
                                    1,
                                    20
                                ),
                                new atk_pattern(
                                    SPIRAL_ATTACK(sprite_enemy_large_round_bullets[1], 0, -(Math.PI / 64), 3, 1, ACCELERATED_LINEAR_MOVEMENT(1.04), 16, Math.PI / 8),
                                    4,
                                    2
                                ),
                                new atk_pattern(
                                    NO_PATTERN(),
                                    1,
                                    5
                                ),
                                new atk_pattern(
                                    SPIRAL_ATTACK(sprite_enemy_large_round_bullets[1], 0, Math.PI / 64, 3, 1, ACCELERATED_LINEAR_MOVEMENT(1.04), 16, Math.PI / 8),
                                    4,
                                    2
                                ),
                                new atk_pattern(
                                    NO_PATTERN(),
                                    1,
                                    20
                                ),
                                new atk_pattern(
                                    SPIRAL_ATTACK(sprite_enemy_large_round_bullets[1], 0, -(Math.PI / 128), 3, 1, ACCELERATED_LINEAR_MOVEMENT(1.02), 32, Math.PI / 16),
                                    8,
                                    10
                                ),
                                new atk_pattern(
                                    NO_PATTERN(),
                                    1,
                                    36
                                ),
                                new atk_pattern(
                                    SPIRAL_ATTACK(sprite_enemy_large_round_bullets[1], 0, Math.PI / 128, 3, 1, ACCELERATED_LINEAR_MOVEMENT(1.02), 32, Math.PI / 16),
                                    2,
                                    10
                                ),
                                new atk_pattern(
                                    SPIRAL_ATTACK(sprite_enemy_large_round_bullets[1], 0, -(Math.PI / 128), 3, 1, ACCELERATED_LINEAR_MOVEMENT(1.02), 32, Math.PI / 16),
                                    1,
                                    10
                                ),
                                new atk_pattern(
                                    SPIRAL_ATTACK(sprite_enemy_large_round_bullets[1], 0, Math.PI / 128, 3, 1, ACCELERATED_LINEAR_MOVEMENT(1.02), 32, Math.PI / 16),
                                    1,
                                    10
                                ),
                                new atk_pattern(
                                    SPIRAL_ATTACK(sprite_enemy_large_round_bullets[1], 0, -(Math.PI / 128), 3, 1, ACCELERATED_LINEAR_MOVEMENT(1.02), 32, Math.PI / 16),
                                    0,
                                    10
                                ),
                                new atk_pattern(
                                    SPIRAL_ATTACK(sprite_enemy_large_round_bullets[1], 0, Math.PI / 128, 3, 1, ACCELERATED_LINEAR_MOVEMENT(1.02), 32, Math.PI / 16),
                                    1,
                                    10
                                ),
                                new atk_pattern(
                                    NO_PATTERN(),
                                    1,
                                    15
                                )
                            ]
                    },
                    { // DESPERATION
                        health_limit: 0,
                        path: EASE_PATH(300 - sprite_boss_enemies[0].width / 2, 250, 1, 6, false),
                        atk_patterns:
                            [
                                new atk_pattern(
                                    NO_PATTERN(),
                                    1,
                                    80
                                ),
                                new atk_pattern(
                                    SPIRAL_ATTACK(sprite_enemy_large_round_bullets[2], 0, Math.PI / 256, 0.6, 2.7, ACCELERATED_LINEAR_MOVEMENT(1.04), 32, Math.PI / 16),
                                    28,
                                    5
                                ),
                                new atk_pattern(
                                    NO_PATTERN(),
                                    1,
                                    100
                                ),
                                new atk_pattern(
                                    ARC_ATTACK(sprite_enemy_round_bullets[7], Math.PI / 4, 5.6, 1.3, ARCHED_MOVEMENT(Math.PI / 200), 34, Math.PI / 17),
                                    50,
                                    1
                                ),
                                new atk_pattern(
                                    NO_PATTERN(),
                                    1,
                                    3
                                ),
                                new atk_pattern(
                                    ARC_ATTACK(sprite_enemy_round_bullets[6], Math.PI / 5, 5.4, 1.3, ARCHED_MOVEMENT(-(Math.PI / 200)), 38, Math.PI / 19),
                                    50,
                                    1
                                ),
                                new atk_pattern(
                                    NO_PATTERN(),
                                    1,
                                    3
                                ),
                                new atk_pattern(
                                    ARC_ATTACK(sprite_enemy_round_bullets[5], Math.PI / 6, 5.2, 1.3, ARCHED_MOVEMENT(Math.PI / 220), 42, Math.PI / 21),
                                    50,
                                    1
                                ),
                                new atk_pattern(
                                    NO_PATTERN(),
                                    1,
                                    3
                                ),
                                new atk_pattern(
                                    ARC_ATTACK(sprite_enemy_round_bullets[4], Math.PI / 7, 5, 1.3, ARCHED_MOVEMENT(-(Math.PI / 240)), 46, Math.PI / 23),
                                    50,
                                    1
                                ),
                                new atk_pattern(
                                    NO_PATTERN(),
                                    1,
                                    3
                                ),
                                new atk_pattern(
                                    ARC_ATTACK(sprite_enemy_round_bullets[3], Math.PI / 8, 4.8, 1.3, ARCHED_MOVEMENT(Math.PI / 260), 50, Math.PI / 25),
                                    50,
                                    1
                                ),
                                new atk_pattern(
                                    NO_PATTERN(),
                                    1,
                                    3
                                ),
                                new atk_pattern(
                                    ARC_ATTACK(sprite_enemy_round_bullets[2], Math.PI / 9, 4.6, 1.3, ARCHED_MOVEMENT(-(Math.PI / 280)), 54, Math.PI / 27),
                                    50,
                                    1
                                ),
                                new atk_pattern(
                                    NO_PATTERN(),
                                    1,
                                    3
                                ),
                                new atk_pattern(
                                    ARC_ATTACK(sprite_enemy_round_bullets[1], Math.PI / 10, 4.4, 1.3, ARCHED_MOVEMENT(Math.PI / 300), 58, Math.PI / 29),
                                    50,
                                    1
                                ),
                                new atk_pattern(
                                    NO_PATTERN(),
                                    1,
                                    100
                                ),
                                new atk_pattern(
                                    RAND_ATTACK(
                                        sprite_enemy_outlined_round_bullets[5],
                                        6,
                                        1,
                                        SPLIT_ATTACK(
                                            LINEAR_MOVEMENT(),
                                            30,
                                            {
                                                sprite: sprite_enemy_round_bullets[4],
                                                direction: -1,
                                                speed: 1.6,
                                                size_multiplier: 0.9,
                                                behavior: ARCHED_MOVEMENT(Math.PI / 280),
                                                n: 16,
                                                bullet_distance: Math.PI / 8,
                                                max_random_direction: 0
                                            }
                                        ),
                                    ), 4, 8
                                ),
                                new atk_pattern(
                                    RAND_ATTACK(
                                        sprite_enemy_outlined_round_bullets[5],
                                        6,
                                        1,
                                        SPLIT_ATTACK(
                                            LINEAR_MOVEMENT(),
                                            30,
                                            {
                                                sprite: sprite_enemy_round_bullets[4],
                                                direction: -1,
                                                speed: 1.6,
                                                size_multiplier: 0.9,
                                                behavior: ARCHED_MOVEMENT(-(Math.PI / 280)),
                                                n: 16,
                                                bullet_distance: Math.PI / 8,
                                                max_random_direction: 0
                                            }
                                        ),
                                    ), 4, 8
                                ),

                                new atk_pattern(
                                    NO_PATTERN(),
                                    1,
                                    230
                                ),
                                new atk_pattern(
                                    RAND_ATTACK(sprite_enemy_star_bullets, 9, 1.14, ACCELERATED_LINEAR_MOVEMENT(1.009)),
                                    400,
                                    2
                                ),
                                new atk_pattern(
                                    NO_PATTERN(),
                                    1,
                                    30
                                ),
                                new atk_pattern(
                                    CHANGE_TO_SHAKY_PATH(),
                                    0,
                                    1
                                ),
                                new atk_pattern(
                                    NO_PATTERN(),
                                    1,
                                    100
                                ),
                                new atk_pattern(
                                    FINISH_DESPERATION(),
                                    0,
                                    1
                                ),
                            ]
                    }
                ]
            )
        }
        /* BOSS */
    ];
}



/* ######################### LUNATIC ######################### */
function define_enemy_spawn_info_lunatic() {
    enemy_spawns_lunatic = [
        {
            frame: 20,
            enemy: new enemy(
                sprite_major_enemies[2],
                -30,
                100,
                'weak',
                20,
                5555555,
                1,
                100,
                COMPLEX_PATH(
                    [
                        EASE_PATH(300, 100, 1, 4),
                        EASE_PATH(600, 200, 1, 4),
                        EASE_PATH(300, 100, 1, 4),
                    ],
                    [
                        { x: 300, y: 100},
                        { x: 600, y: 200},
                        { x: 300, y: 100},
                    ],
                    -1,
                    50
                )
            )
        }
    ];
}