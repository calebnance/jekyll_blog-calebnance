window.onload = function() {
  // global vars
  var map, layer, cursors, sprite;

  // config
  var config = {
    preload: preload,
    create: create,
    render: render,
    update: update,
    resize: resize
  };

  // create game
  var game = new Phaser.Game(400, 400, Phaser.CANVAS, 'tutorial-6', config);

  // preload() happens here
  function preload() {
    console.log('call::preload()');
    // preload tilemap
    game.load.tilemap('tutorial-2-tilemap', '/assets/img/phaser/tilemap/2-tilemap-tutorial.json', null, Phaser.Tilemap.TILED_JSON);
    // preload tile asset for tilemap
    game.load.image('tiles', '/assets/img/phaser/tilemap/tileset-blocks-1.png');
    // load in a new sprite
    game.load.image('goku-single', '/assets/img/phaser/sprite/sprite-goku-single.png');
  }

  // create() happens here
  function create() {
    console.log('call::create()');
    // set background color
    game.stage.backgroundColor = '#787878';
    // load up tilemap
    map = game.add.tilemap('tutorial-2-tilemap');
    // link loaded tileset image to map
    map.addTilesetImage('tutorial-2-tilemap_image', 'tiles');
    // create layer for said tileset and map now!
    layer = map.createLayer('tutorial-2_layer');
    // set bounds to tilemap size
    game.world.setBounds(0, 0, 800, 800);
    // set keyboard input listeners
    cursors = game.input.keyboard.createCursorKeys();
    // paint the sprite to the canvas (centered)
    sprite = game.add.sprite(game.camera.width / 2, game.camera.height / 2, 'goku-single');
    // set the anchor for sprite to middle of the view
    sprite.anchor.setTo(0.5);
    // tell camera to follow sprite now
    game.camera.follow(sprite);

    // enable game physics to sprite
    game.physics.enable(sprite, Phaser.Physics.ARCADE);
    // set sprite to hit boundaries of our world bounds
    sprite.body.collideWorldBounds = true;
  }

  function render() {
    // console.log('call::render()');
  }

  function update() {
    // console.log('call::update()');
    // speed of movement
    var movementRate = 3;
    // only move one direction at a time
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      sprite.x -= movementRate;
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      sprite.x += movementRate;
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      sprite.y -= movementRate;
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
      sprite.y += movementRate;
    }
  }

  function resize() {
    console.log('call::resize()');
  }
};
