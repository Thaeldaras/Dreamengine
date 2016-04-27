/**
* Author
 @Inateno / http://inateno.com / http://dreamirl.com

* ContributorsList
 @Inateno

***
 sample Game - kill the bubble
 there is no "end" and no menus, it's a very lite "how to" for basics
 and you can create complete game with this :)
**/
define( [ 'DREAM_ENGINE', 'Player', 'Enemy', 'Spawner' ],
function( DE, Player, Enemy, Spawner )
{
  var Game = {};
  
  Game.render  = null;
  Game.scene  = null;
  var screenW = 720, screenH = 1280;
  
  // init
  Game.init = function()
  {
    console.log( "init Engine" );
    DE.CONFIG.DEBUG = 1; // debug on
    DE.CONFIG.DEBUG_LEVEL = 5; // all debug
    
    // create render
    Game.render = new DE.Render( "render", { width: screenW, height: screenH , fullScreen: "ratioStretch", backgroundColor: "0x000000" } );
    Game.render.init();
    
    // launch the engine
    DE.start();
  }
  
  // start
  Game.start = function()
  {

    //maybe in a screen/gamesScreen.js
    Game.camera = new DE.Camera( screenW, screenH, 0, 0, { backgroundColor: "grey" } );
    
    Game.camera.gui = new DE.Gui();
    Game.camera.scene = new DE.Scene();
    Game.render.add( Game.camera );
    
    var sc = Game.camera.scene;

    sc.bullets = [];
    sc.enemys = [];
    
    var player = new Player( { w: screenW, h: screenH } );
    var spawner = new Spawner();

    
    Game.camera.onMouseMove = function( mouse )
    {
      player.pointer.position.x = mouse.x;
      player.pointer.position.y = mouse.y;
    }
    Game.camera.onMouseDown = function()
    {
      player.startShoot();
    }
    Game.camera.onMouseUp = function()
    {
      player.stopShoot();
    } 
    

    sc.add( player );
    //stop screen/gamesScreen.js
    
    // always let a little delay between the real load and the visual load, better feeling
    setTimeout( function(){ DE.States.down( "isLoading" ); }, 200 );
  };
  
  window.Game = Game; // debug only
  window.DREAM_E = DE;
  return Game;
} );