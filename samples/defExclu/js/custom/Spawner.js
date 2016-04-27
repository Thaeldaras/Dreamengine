define( [ 'DREAM_ENGINE', 'Enemy', 'data' ],
function( DE, Enemy, data )
{
	function Spawner (  )
  {
  	DE.GameObject.call( this );
  	this.ld = data[ "level" ];
  	this.wave = 0;
  	console.log(this.ld)

  	this.spawn = function()
  	{

	 		var row = this.ld[ this.wave ].row;
			var col = this.ld[ this.wave ].col;
			var enemyType = data[ this.ld[ this.wave ].enemy ];
			console.log(enemyType);
			
			var offsetX = (720 - (col * enemyType.width) ) / (col + 1);
	
  		//console.log( offsetX );
			
			for( var i = 0; i < row; i++)
			{
				for( var j = 0; j < col; j ++)
				{
					enemyType.x = offsetX + j * (enemyType.width + offsetX) + enemyType.width /2;
					enemyType.y = -( offsetX + i * (enemyType.height + offsetX) );
					var enemy = new Enemy( enemyType );
  				Game.camera.scene.add( enemy );
				}
			}
			this.wave ++;
  	
  	}
    
    this.addAutomatism( "spawn", "spawn" );


	
	} // fin de function Spawner

	Spawner.prototype = new DE.GameObject();
  Spawner.prototype.constructor = Spawner;
  Spawner.prototype.supr        = DE.GameObject.prototype;

	return Spawner;

} );
