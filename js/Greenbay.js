let Player2 = function(options){
	options = options || [];

	this.hitAttack = function(sack){
		let hit = sack || 100;
		return this.health = this.health - hit;
	};
	
	Player2.prototype.health = 2000;
};

export default Player2;
