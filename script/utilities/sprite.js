/*
*   OBTAIN SPRITES FROM SPRITESHEET
*
*   spritesheet: USED SPRITESHEET
*   coordinates: ARRAY OF COORDINATES TO CROP FROM
*   res: ARRAY TO WRITE TO
*   canvas: CANVAS TO ACCESS 'toDataUrl' FUNCTION
*   context: CONTEXT OF CANVAS
*/
function get_sprites(spritesheet, coordinates, res, canvas, context) {
    coordinates.forEach(sprite => {
        // SET CANVAS TO THE SIZE OF THE SPRITE
        canvas.width = sprite.width;
        canvas.height = sprite.height;

        // FILL THE CANVAS WITH THE SPRITE
        context.drawImage(
            spritesheet,
            sprite.x, sprite.y, sprite.width, sprite.height, // SOURCE
            0, 0, sprite.width, sprite.height                // TARGET
        );

        // CREATE THE SPRITE
        const sprite_img = new Image();

        sprite_img.src = canvas.toDataURL();

        // STORE THE IMAGE OBJECT IN THE RES ARRAY
        res.push(sprite_img);
    });
}


/* ################## GENERIC ################## */
let sprite_character = new Image();
sprite_character.src = "./media/img/char.png"

let sprite_ability_bar = new Image();
sprite_ability_bar.src = "./media/img/ability_bar.png"

let sprite_boss_bar = new Image();
sprite_boss_bar.src = "./media/img/boss_bar.png"


/* ################## SPRITESHEETS ################## */
const SPRITESHEET_BULLETS = new Image();
      SPRITESHEET_BULLETS.src = './media/img/spritesheet_bullets.png';

const SPRITESHEET_ENEMIES = new Image();
      SPRITESHEET_ENEMIES.src = './media/img/spritesheet_enemies.png';


/* ################## BULLETS ################## */
// 0: GRAY
// 1: RED
// 2: ORANGE
// 3: GREEN
// 4: CYAN
// 5: BLUE
// 6: PURPLE
// 7: MAGENTA
let sprite_enemy_round_bullets = [];
let sprite_enemy_large_round_bullets = [];
let sprite_enemy_outlined_round_bullets = [];
let sprite_enemy_sparkle_bullets = [];
let sprite_enemy_star_bullets = [];

let sprite_enemy_ellipsoid_bullets = [];
let sprite_enemy_large_ellipsoid_bullets = [];
let sprite_enemy_ellipsoid_crystal_bullets = [];

// 0: CYAN
// 1: PURPLE
let sprite_player_bullets = [];

const coord_enemy_round_bullets = [
    { x: 16,  y: 16, width: 16, height: 16 },
    { x: 48,  y: 16, width: 16, height: 16 },
    { x: 80,  y: 16, width: 16, height: 16 },
    { x: 112, y: 16, width: 16, height: 16 },
    { x: 160, y: 16, width: 16, height: 16 },
    { x: 176, y: 16, width: 16, height: 16 },
    { x: 192, y: 16, width: 16, height: 16 },
    { x: 208, y: 16, width: 16, height: 16 }
];

const coord_enemy_large_round_bullets = [
    { x: 609,  y: 1, width: 32, height: 30 },
    { x: 673,  y: 1, width: 32, height: 30 },
    { x: 705,  y: 1, width: 32, height: 30 },
    { x: 801, y: 1, width: 32, height: 30 },
    { x: 897, y: 1, width: 32, height: 30 },
    { x: 929, y: 1, width: 32, height: 30 },
    { x: 961, y: 1, width: 32, height: 30 },
    { x: 993, y: 1, width: 32, height: 30 }
];

const coord_enemy_outlined_round_bullets = [
    { x: 16,  y: 32, width: 16, height: 16 },
    { x: 48,  y: 32, width: 16, height: 16 },
    { x: 80,  y: 32, width: 16, height: 16 },
    { x: 112, y: 32, width: 16, height: 16 },
    { x: 160, y: 32, width: 16, height: 16 },
    { x: 176, y: 32, width: 16, height: 16 },
    { x: 192, y: 32, width: 16, height: 16 },
    { x: 208, y: 32, width: 16, height: 16 }
];

const coord_enemy_sparkle_bullets = [
    { x: 16,  y: 208, width: 16, height: 16 },
    { x: 48,  y: 208, width: 16, height: 16 },
    { x: 80,  y: 208, width: 16, height: 16 },
    { x: 112, y: 208, width: 16, height: 16 },
    { x: 160, y: 208, width: 16, height: 16 },
    { x: 176, y: 208, width: 16, height: 16 },
    { x: 192, y: 208, width: 16, height: 16 },
    { x: 208, y: 208, width: 16, height: 16 }
];

const coord_enemy_star_bullets = [
    { x: 17,  y: 161, width: 14, height: 14 },
    { x: 49,  y: 161, width: 14, height: 14 },
    { x: 81,  y: 161, width: 14, height: 14 },
    { x: 113, y: 161, width: 14, height: 14 },
    { x: 161, y: 161, width: 14, height: 14 },
    { x: 177, y: 161, width: 14, height: 14 },
    { x: 193, y: 161, width: 14, height: 14 },
    { x: 209, y: 161, width: 14, height: 14 }
];

const coord_enemy_ellipsoid_bullets = [
    { x: 19,  y: 48, width: 10, height: 16 },
    { x: 51,  y: 48, width: 10, height: 16 },
    { x: 83,  y: 48, width: 10, height: 16 },
    { x: 115, y: 48, width: 10, height: 16 },
    { x: 163, y: 48, width: 10, height: 16 },
    { x: 179, y: 48, width: 10, height: 16 },
    { x: 195, y: 48, width: 10, height: 16 },
    { x: 211, y: 48, width: 10, height: 16 }
]
const coord_enemy_large_ellipsoid_bullets = [
    { x: 17,  y: 273, width: 14, height: 30 },
    { x: 49,  y: 273, width: 14, height: 30 },
    { x: 65,  y: 273, width: 14, height: 30 },
    { x: 97,  y: 273, width: 14, height: 30 },
    { x: 161, y: 273, width: 14, height: 30 },
    { x: 177, y: 273, width: 14, height: 30 },
    { x: 193, y: 273, width: 14, height: 30 },
    { x: 209, y: 273, width: 14, height: 30 }
]

const coord_enemy_ellipsoid_crystal_bullets = [
    { x: 20,  y: 144, width: 8, height: 16 },
    { x: 52,  y: 144, width: 8, height: 16 },
    { x: 84,  y: 144, width: 8, height: 16 },
    { x: 116, y: 144, width: 8, height: 16 },
    { x: 164, y: 144, width: 8, height: 16 },
    { x: 180, y: 144, width: 8, height: 16 },
    { x: 196, y: 144, width: 8, height: 16 },
    { x: 212, y: 144, width: 8, height: 16 }
]

const coord_player_bullets = [
    { x: 160, y: 128, width: 16, height: 16 },
    { x: 208, y: 128, width: 16, height: 16 }
]

SPRITESHEET_BULLETS.onload = function() {
    const loader_canvas = document.createElement('canvas');
    const loader_context = loader_canvas.getContext('2d');

    get_sprites(SPRITESHEET_BULLETS, coord_enemy_round_bullets, sprite_enemy_round_bullets, loader_canvas, loader_context);
    get_sprites(SPRITESHEET_BULLETS, coord_enemy_large_round_bullets, sprite_enemy_large_round_bullets, loader_canvas, loader_context);
    get_sprites(SPRITESHEET_BULLETS, coord_enemy_outlined_round_bullets, sprite_enemy_outlined_round_bullets, loader_canvas, loader_context);
    get_sprites(SPRITESHEET_BULLETS, coord_enemy_sparkle_bullets, sprite_enemy_sparkle_bullets, loader_canvas, loader_context);
    get_sprites(SPRITESHEET_BULLETS, coord_enemy_star_bullets, sprite_enemy_star_bullets, loader_canvas, loader_context);

    get_sprites(SPRITESHEET_BULLETS, coord_enemy_ellipsoid_bullets, sprite_enemy_ellipsoid_bullets, loader_canvas, loader_context);
    get_sprites(SPRITESHEET_BULLETS, coord_enemy_large_ellipsoid_bullets, sprite_enemy_large_ellipsoid_bullets, loader_canvas, loader_context);
    get_sprites(SPRITESHEET_BULLETS, coord_enemy_ellipsoid_crystal_bullets, sprite_enemy_ellipsoid_crystal_bullets, loader_canvas, loader_context);

    get_sprites(SPRITESHEET_BULLETS, coord_player_bullets, sprite_player_bullets, loader_canvas, loader_context);
};



/* ################## ENEMIES ################## */
// 0: MINOR++ ANGELIC BLUE FAIRY
// 1: MINOR ANGELIC BLUE FAIRY
// 2: MINOR ANGELIC RED FAIRY
// 3: MINOR ANGELIC GREEN FAIRY
// 4: MINOR ANGELIC YELLOW FAIRY
// 5: MINOR EVIL BLUE FAIRY
// 6: MINOR EVIL RED FAIRY
// 7: MINOR EVIL YELLOW FAIRY
// 8: MINOR EVIL PURPLE FAIRY
let sprite_minor_enemies = [];

// 0: MAJOR ANGELIC BLUE FAIRY
// 1: MAJOR ANGELIC RED FAIRY
// 2: MAJOR ANGELIC PURPLE FAIRY
// 3: MAJOR+ ANGELIC FLOWERING FAIRY
let sprite_major_enemies = [];

// 0: GLOWY MINOR ANGELIC BLUE FAIRY
// 1: GLOWY MINOR ANGELIC RED FAIRY
// 2: GLOWY MINOR ANGELIC GREEN FAIRY
// 3: GLOWY MINOR ANGELIC YELLOW FAIRY
// 4: GLOWY MINOR+ ANGELIC BLUE FAIRY
// 5: GLOWY MINOR+ ANGELIC RED FAIRY
// 6: GLOWY MAJOR ANGELIC BLUE FAIRY
// 7: GLOWY MAJOR ANGELIC RED FAIRY
let sprite_glowy_enemies = [];

// 0: ANGEL BOSS
// 1: EVIL BOSS
let sprite_boss_enemies = [];


const coord_minor_enemies = [
    { x: 4, y: 1, width: 40, height: 28 },
    { x: 8, y: 39, width: 31, height: 27 },
    { x: 8, y: 71, width: 31, height: 27 },
    { x: 8, y: 103, width: 31, height: 27 },
    { x: 8, y: 135, width: 31, height: 27 },
    { x: 7, y: 297, width: 33, height: 29 },
    { x: 7, y: 329, width: 34, height: 29 },
    { x: 7, y: 361, width: 34, height: 29 },
    { x: 7, y: 393, width: 34, height: 29 }
]

const coord_major_enemies = [
    { x: 55, y: 1, width: 43, height: 41 },
    { x: 55, y: 48, width: 41, height: 41 },
    { x: 55, y: 96, width: 43, height: 40 },
    { x: 113, y: 0, width: 64, height: 53 },
]

const coord_glowy_enemies = [
    { x: 7, y: 165, width: 35, height: 32 },
    { x: 7, y: 197, width: 35, height: 31 },
    { x: 7, y: 229, width: 35, height: 31 },
    { x: 7, y: 261, width: 35, height: 31 },
    { x: 57, y: 142, width: 42, height: 33 },
    { x: 57, y: 178, width: 42, height: 33 },
    { x: 120, y: 53, width: 48, height: 44 },
    { x: 120, y: 100, width: 48, height: 44 }
]

const coord_boss_enemies = [
    { x: 74, y: 223, width: 66, height: 54 },
    { x: 74, y: 284, width: 66, height: 54 }
]

SPRITESHEET_ENEMIES.onload = function() {
    const loader_canvas = document.createElement('canvas');
    const loader_context = loader_canvas.getContext('2d');

    get_sprites(SPRITESHEET_ENEMIES, coord_minor_enemies, sprite_minor_enemies, loader_canvas, loader_context);
    get_sprites(SPRITESHEET_ENEMIES, coord_major_enemies, sprite_major_enemies, loader_canvas, loader_context);
    get_sprites(SPRITESHEET_ENEMIES, coord_glowy_enemies, sprite_glowy_enemies, loader_canvas, loader_context);
    get_sprites(SPRITESHEET_ENEMIES, coord_boss_enemies, sprite_boss_enemies, loader_canvas, loader_context);
};