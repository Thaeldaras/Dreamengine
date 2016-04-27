define( ['DREAM_ENGINE' ],
function( DE )
{
  function Enemy ( param )
  {
  	DE.GameObject.call( this, {
      "x": param.x , "y": param.y , zindex: 2, "tag": "enemy"
      ,renderer: new DE.RectRenderer( { fillColor: param.color || "0xFFF", width: param.width ||50, height: param.height ||50 } )
      ,collider: new DE.CircleCollider( param.radius || 25 )
    } );

  	this.speed = param.speed || 2 ;
  	this.life = param.life || 2 ;
  	this.finalPos = param.finalPos || 1130 ;
  	this.damage = param.damage || 1 ;
  	this.attackRate = param.attackRate || 1 ;
  	this.bounty = param.bounty || 1 ;
    
    this.isDead = function()
    {
    	if( this.life <=  0 || this.position.y > 1280 ) 
    	{
    		this.askToKill();
    		//this.scene.player.wallet += this.bounty;
    		return true;
    	}
    }

    this.logic = function()
    {
      if( this.isDead() ) return;
      //this.lookAt( player.position );
      for (var i = 0; i < this.scene.bullets.length; i++) 
        {
          if( DE.CollisionSystem.circleCollision( this.collider, this.scene.bullets[ i ].collider ) )
          {
            console.log("collision");
            this.life -= this.scene.bullets[ i ].damage;
            //this.scene.bullets[ i ].askToKill();
          }
        }

      this.translateY( this.speed );
    }
    
    this.addAutomatism( "logic", "logic" );


  Game.camera.scene.enemys.push( this );
  //Game.camera.scene.add( this );
	
	} // fin de function player

	Enemy.prototype = new DE.GameObject();
  Enemy.prototype.constructor = Enemy;
  Enemy.prototype.supr        = DE.GameObject.prototype;

	return Enemy;

} );