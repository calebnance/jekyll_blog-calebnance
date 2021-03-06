window.onload = function() {
  // global vars
  var map, layer, cursors;

  // config
  var config = {
    preload: preload,
    create: create,
    render: render,
    update: update,
    resize: resize
  };

  // create game
  var game = new Phaser.Game(400, 400, Phaser.CANVAS, 'tutorial-3', config);

  // preload() happens here
  function preload() {
    console.log('call::preload()');
    // preload tilemap
    game.load.tilemap('tutorial-2-tilemap', '/assets/img/phaser/tilemap/2-tilemap-tutorial.json', null, Phaser.Tilemap.TILED_JSON);
    // preload tile asset for tilemap
    game.load.image('tiles', '/assets/img/phaser/tilemap/tileset-blocks-1.png');
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
      game.camera.x -= movementRate;
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      game.camera.x += movementRate;
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      game.camera.y -= movementRate;
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
      game.camera.y += movementRate;
    }
  }

  function resize() {
    console.log('call::resize()');
  }
};
