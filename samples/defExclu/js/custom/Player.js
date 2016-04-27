define( ['DREAM_ENGINE' ],
function( DE )
{
  function Player ( screen )
  {

    DE.GameObject.call( this, {
      "x": screen.w /2 , "y": screen.h - 50 , zindex: 2, "tag": "player"
      ,renderer: new DE.RectRenderer( { fillColor: "0xFFF", width: screen.w, height: 100 } )
    } );

    this.damageUpgrade = 0;
    this.score = 0;
    this.wallet = 0;
    this.pointer = new DE.GameObject();
    this.fireRate = 500;

   //this.gear = new Gear ( this ); //turret Slot
   //this.gear.giveWeapon( this );
   //this.add( this.gear );

    this.walletGui = new DE.GameObject( {
      "x" : 100,
      "y" : 100,
      renderer: new DE.TextRenderer ( { text: this.wallet } )
    } );
    Game.camera.gui.add( this.walletGui );


    this.shoot = function () 
    {
      console.log(this.position)
      var bullet = new DE.GameObject( {
      "x": this.x, "y": this.position.y, zindex: 3
      ,"renderer": new DE.RectRenderer( { fillColor: "0xFF0000", width: 15, height: 30 } )
      ,"collider": new DE.CircleCollider( 15 )
      } );

      bullet.damage = this.damageUpgrade + 1 ;
      bullet.lookAt( this.pointer.position );
      bullet.addAutomatism( "move", "translateY", { value1: 10 } );
  
      Game.camera.scene.bullets.push( bullet );
      Game.camera.scene.add( bullet );
    }
    this.startShoot = function()
    {
      this.shoot();
      this.addAutomatism( "shoot", "shoot" ,{ interval : this.fireRate } );
    }
    this.stopShoot = function()
    {
      this.removeAutomatism( "shoot" );
    }


	
	} // fin de function player

	Player.prototype = new DE.GameObject();
  Player.prototype.constructor = Player;
  Player.prototype.supr        = DE.GameObject.prototype;

	return Player;

} );

