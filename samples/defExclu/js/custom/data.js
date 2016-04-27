define( [ 'DREAM_ENGINE' ],
function( DE )
{
	return {
		"level": [ {row: 2, col: 10, enemy: "basic" },
               {row: 2, col: 9, enemy: "basic" },
               {row: 2, col: 5, enemy: "caster"},
               {row: 2, col: 1, enemy: "caster"},
               {row: 2, col: 3, enemy: "heavy" },
               {row: 2, col: 5, enemy: "heavy" },
               {row: 2, col: 4, enemy: "heavy" },
               {row: 2, col: 10, enemy: "basic" },
               {row: 2, col: 10, enemy: "caster"} ],
  	"basic":{ width: 50, height: 50, radius: 25 , life: 2, bounty: 1 },//basic
  	"heavy":{ width: 100, height: 100, radius: 55 , life: 8, bounty: 3 },//heavy
  	"caster":{ width: 75, height: 75, radius: 38 , life: 5, finalPos: 600, bounty: 2 },//distance

	}
} );
