let Player1 = function(options){
	options = options || [];

	this.hitAttack = function(sack){
		let hit = Math.floor(Math.random() * 6) + 100 ;
		return this.health = this.health - hit;
	};

	Player1.prototype.health = 2000;

};

export default Player1;